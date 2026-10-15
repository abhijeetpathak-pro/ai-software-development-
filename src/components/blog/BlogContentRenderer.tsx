// src/components/blog/BlogContentRenderer.tsx
'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Copy, Check, Terminal, ExternalLink } from 'lucide-react';

interface BlogContentRendererProps {
  content: string[] | string;
  className?: string;
  postTitle?: string;
}

type ContentBlock =
  | { type: 'h1'; text: string }
  | { type: 'h2'; text: string }
  | { type: 'h3'; text: string }
  | { type: 'h4'; text: string }
  | { type: 'paragraph'; text: string }
  | { type: 'ul'; items: string[] }
  | { type: 'ol'; items: string[] }
  | { type: 'blockquote'; text: string }
  | { type: 'codeblock'; language: string; code: string }
  | { type: 'image'; src: string; alt: string; caption?: string }
  | { type: 'hr' };

/**
 * Parses inline markdown and basic HTML formatting (bold, italic, inline code, links, strikethrough).
 */
export function renderInlineFormattedText(text: string): React.ReactNode {
  if (!text) return null;

  // Replace common HTML tags with markdown-like tokens for unified parsing
  let normalized = text
    .replace(/<strong\b[^>]*>(.*?)<\/strong>/gi, '**$1**')
    .replace(/<b\b[^>]*>(.*?)<\/b>/gi, '**$1**')
    .replace(/<em\b[^>]*>(.*?)<\/em>/gi, '*$1*')
    .replace(/<i\b[^>]*>(.*?)<\/i>/gi, '*$1*')
    .replace(/<code\b[^>]*>(.*?)<\/code>/gi, '`$1`')
    .replace(/<del\b[^>]*>(.*?)<\/del>/gi, '~~$1~~')
    .replace(/<s\b[^>]*>(.*?)<\/s>/gi, '~~$1~~')
    .replace(/<a\b[^>]*href=["'](.*?)["'][^>]*>(.*?)<\/a>/gi, '[$2]($1)');

  // Tokenize by inline elements:
  // 1. `code`
  // 2. **bold** or __bold__
  // 3. *italic* or _italic_
  // 4. ~~strike~~
  // 5. [text](url)
  const regex = /(`[^`]+`|\*\*[^*]+\*\*|__[^\_]+__|(?<!\*)\*[^*]+\*(?!\*)|(?<!\_)_[^_]+_(?!\_)|~~[^~]+~~|\[[^\]]+\]\([^)]+\))/g;

  const parts = normalized.split(regex);

  return parts.map((part, idx) => {
    if (!part) return null;

    // Inline code
    if (part.startsWith('`') && part.endsWith('`') && part.length >= 2) {
      return (
        <code
          key={idx}
          className="px-1.5 py-0.5 mx-0.5 rounded-md bg-slate-100 text-red-600 font-mono text-xs sm:text-[0.875rem] font-semibold border border-slate-200"
        >
          {part.slice(1, -1)}
        </code>
      );
    }

    // Bold (**text** or __text__)
    if (
      (part.startsWith('**') && part.endsWith('**') && part.length >= 4) ||
      (part.startsWith('__') && part.endsWith('__') && part.length >= 4)
    ) {
      const inner = part.slice(2, -2);
      return (
        <strong key={idx} className="font-bold text-slate-950 font-sans">
          {inner}
        </strong>
      );
    }

    // Italic (*text* or _text_)
    if (
      (part.startsWith('*') && part.endsWith('*') && part.length >= 2 && !part.startsWith('**')) ||
      (part.startsWith('_') && part.endsWith('_') && part.length >= 2 && !part.startsWith('__'))
    ) {
      const inner = part.slice(1, -1);
      return (
        <em key={idx} className="italic text-slate-800">
          {inner}
        </em>
      );
    }

    // Strikethrough
    if (part.startsWith('~~') && part.endsWith('~~') && part.length >= 4) {
      return (
        <del key={idx} className="line-through text-slate-400">
          {part.slice(2, -2)}
        </del>
      );
    }

    // Link [text](url)
    const linkMatch = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
    if (linkMatch) {
      const linkText = linkMatch[1];
      const linkHref = linkMatch[2];
      const isExternal = linkHref.startsWith('http://') || linkHref.startsWith('https://');
      return (
        <a
          key={idx}
          href={linkHref}
          target={isExternal ? '_blank' : undefined}
          rel={isExternal ? 'noopener noreferrer' : undefined}
          className="text-red-600 hover:text-red-700 font-medium underline decoration-red-300 hover:decoration-red-600 underline-offset-2 transition-colors inline-flex items-baseline gap-0.5"
        >
          <span>{linkText}</span>
          {isExternal && <ExternalLink className="w-3 h-3 inline-block shrink-0 opacity-70" />}
        </a>
      );
    }

    // Plain text: strip out any leftover stray HTML tags for safety
    const cleanText = part.replace(/<\/?[a-z][a-z0-9]*[^<>]*>/gi, '');
    return <React.Fragment key={idx}>{cleanText}</React.Fragment>;
  });
}

/**
 * Splits raw content into structured blocks (Headings, Paragraphs, Lists, Blockquotes, Images, Code blocks).
 */
export function parseRawContentToBlocks(raw: string[] | string): ContentBlock[] {
  let fullText = '';
  if (Array.isArray(raw)) {
    fullText = raw.join('\n\n');
  } else if (typeof raw === 'string') {
    fullText = raw;
  }

  if (!fullText.trim()) return [];

  const lines = fullText.split(/\r?\n/);
  const blocks: ContentBlock[] = [];

  let i = 0;
  while (i < lines.length) {
    const line = lines[i];
    const trimmed = line.trim();

    // Skip empty lines
    if (!trimmed) {
      i++;
      continue;
    }

    // 1. Code Block: ```lang
    if (trimmed.startsWith('```')) {
      const language = trimmed.replace(/^```/, '').trim() || 'plaintext';
      const codeLines: string[] = [];
      i++;
      while (i < lines.length && !lines[i].trim().startsWith('```')) {
        codeLines.push(lines[i]);
        i++;
      }
      if (i < lines.length && lines[i].trim().startsWith('```')) {
        i++; // skip closing ```
      }
      blocks.push({
        type: 'codeblock',
        language,
        code: codeLines.join('\n')
      });
      continue;
    }

    // 2. Horizontal Rule: --- or *** or <hr>
    if (/^(\-{3,}|\*{3,}|_{3,}|<hr\s*\/?>)$/.test(trimmed)) {
      blocks.push({ type: 'hr' });
      i++;
      continue;
    }

    // 3. Markdown Image: ![Alt](url)
    const mdImgMatch = trimmed.match(/^!\[(.*?)\]\((.*?)\)$/);
    if (mdImgMatch) {
      blocks.push({
        type: 'image',
        alt: mdImgMatch[1] || 'Blog illustration',
        src: mdImgMatch[2].trim(),
        caption: mdImgMatch[1] || undefined
      });
      i++;
      continue;
    }

    // 4. HTML Image: <img src="..." alt="..." />
    const htmlImgMatch = trimmed.match(/<img\b[^>]*src=["'](.*?)["'][^>]*alt=["'](.*?)["'][^>]*>/i) ||
                         trimmed.match(/<img\b[^>]*src=["'](.*?)["'][^>]*>/i);
    if (htmlImgMatch) {
      blocks.push({
        type: 'image',
        src: htmlImgMatch[1],
        alt: htmlImgMatch[2] || 'Blog illustration',
        caption: htmlImgMatch[2] || undefined
      });
      i++;
      continue;
    }

    // 5. Standalone Image URL line
    if (
      (trimmed.startsWith('/') || trimmed.startsWith('http://') || trimmed.startsWith('https://')) &&
      /\.(jpg|jpeg|png|webp|gif|svg|avif)(\?.*)?$/i.test(trimmed)
    ) {
      blocks.push({
        type: 'image',
        src: trimmed,
        alt: 'Blog illustration'
      });
      i++;
      continue;
    }

    // 6. Headings (Markdown & HTML)
    // H1: # Heading or <h1>Heading</h1>
    const h1Match = trimmed.match(/^#\s+(.+)$/) || trimmed.match(/^<h1>(.*?)<\/h1>$/i);
    if (h1Match) {
      blocks.push({ type: 'h1', text: h1Match[1].trim() });
      i++;
      continue;
    }

    // H2: ## Heading or <h2>Heading</h2>
    const h2Match = trimmed.match(/^##\s+(.+)$/) || trimmed.match(/^<h2>(.*?)<\/h2>$/i);
    if (h2Match) {
      blocks.push({ type: 'h2', text: h2Match[1].trim() });
      i++;
      continue;
    }

    // H3: ### Heading or <h3>Heading</h3>
    const h3Match = trimmed.match(/^###\s+(.+)$/) || trimmed.match(/^<h3>(.*?)<\/h3>$/i);
    if (h3Match) {
      blocks.push({ type: 'h3', text: h3Match[1].trim() });
      i++;
      continue;
    }

    // H4: #### Heading or <h4>Heading</h4>
    const h4Match = trimmed.match(/^####\s+(.+)$/) || trimmed.match(/^<h4>(.*?)<\/h4>$/i);
    if (h4Match) {
      blocks.push({ type: 'h4', text: h4Match[1].trim() });
      i++;
      continue;
    }

    // 7. Blockquote: > quote or <blockquote>...</blockquote>
    if (trimmed.startsWith('>') || trimmed.startsWith('<blockquote>')) {
      const quoteLines: string[] = [];
      while (i < lines.length) {
        const cur = lines[i].trim();
        if (!cur) break;
        if (cur.startsWith('>')) {
          quoteLines.push(cur.replace(/^>\s*/, ''));
          i++;
        } else if (cur.startsWith('<blockquote>') || cur.endsWith('</blockquote>')) {
          quoteLines.push(cur.replace(/<\/?blockquote>/gi, '').trim());
          i++;
        } else {
          break;
        }
      }
      blocks.push({
        type: 'blockquote',
        text: quoteLines.join(' ').trim()
      });
      continue;
    }

    // 8. Bullet List: - item, * item, • item, or <li>item</li>
    const isBulletLine = (str: string) => /^(\-|\*|•)\s+(.+)$/.test(str) || /^<li>(.*?)<\/li>$/i.test(str);
    if (isBulletLine(trimmed)) {
      const items: string[] = [];
      while (i < lines.length) {
        const cur = lines[i].trim();
        if (!cur) break;
        const bMatch = cur.match(/^(\-|\*|•)\s+(.+)$/);
        const liMatch = cur.match(/^<li>(.*?)<\/li>$/i);
        if (bMatch) {
          items.push(bMatch[2].trim());
          i++;
        } else if (liMatch) {
          items.push(liMatch[1].trim());
          i++;
        } else {
          break;
        }
      }
      blocks.push({ type: 'ul', items });
      continue;
    }

    // 9. Numbered List: 1. item, 2. item, etc.
    const isNumberedLine = (str: string) => /^\d+[\.\)]\s+(.+)$/.test(str);
    if (isNumberedLine(trimmed)) {
      const items: string[] = [];
      while (i < lines.length) {
        const cur = lines[i].trim();
        if (!cur) break;
        const nMatch = cur.match(/^\d+[\.\)]\s+(.+)$/);
        if (nMatch) {
          items.push(nMatch[1].trim());
          i++;
        } else {
          break;
        }
      }
      blocks.push({ type: 'ol', items });
      continue;
    }

    // 10. Standard Paragraph: gather lines until empty line or next heading/list/image
    const paraLines: string[] = [];
    while (i < lines.length) {
      const cur = lines[i].trim();
      if (!cur) break;
      if (
        cur.startsWith('#') ||
        cur.startsWith('```') ||
        cur.startsWith('>') ||
        isBulletLine(cur) ||
        isNumberedLine(cur) ||
        cur.startsWith('![') ||
        /^(\-{3,}|\*{3,}|_{3,})$/.test(cur)
      ) {
        break;
      }
      // Strip outer <p>...</p> tags if pasted from HTML
      const cleaned = cur.replace(/^<p\b[^>]*>/i, '').replace(/<\/p>$/i, '');
      paraLines.push(cleaned);
      i++;
    }

    if (paraLines.length > 0) {
      blocks.push({
        type: 'paragraph',
        text: paraLines.join(' ').trim()
      });
    }
  }

  return blocks;
}

/**
 * Single CodeBlock with language pill and copy-to-clipboard button.
 */
function CodeBlockComponent({ language, code }: { language: string; code: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    if (typeof navigator !== 'undefined') {
      navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="my-7 rounded-2xl overflow-hidden border border-slate-800 bg-slate-950 text-slate-100 shadow-xl">
      <div className="flex items-center justify-between px-4 py-2 bg-slate-900 border-b border-slate-800 text-xs font-mono text-slate-400">
        <span className="flex items-center gap-1.5 uppercase font-semibold text-slate-300">
          <Terminal className="w-3.5 h-3.5 text-red-500" />
          {language}
        </span>
        <button
          type="button"
          onClick={handleCopy}
          className="flex items-center gap-1 px-2.5 py-1 rounded bg-slate-800 hover:bg-slate-700 text-slate-200 transition-colors cursor-pointer"
        >
          {copied ? (
            <>
              <Check className="w-3.5 h-3.5 text-emerald-400" />
              <span className="text-emerald-400 font-sans">Copied!</span>
            </>
          ) : (
            <>
              <Copy className="w-3.5 h-3.5" />
              <span className="font-sans">Copy</span>
            </>
          )}
        </button>
      </div>
      <pre className="p-5 overflow-x-auto text-xs sm:text-sm font-mono leading-relaxed text-slate-200">
        <code>{code}</code>
      </pre>
    </div>
  );
}

/**
 * Master BlogContentRenderer component.
 * Transforms raw markdown/HTML into an exquisite editorial reading layout.
 */
export default function BlogContentRenderer({
  content,
  className = '',
  postTitle
}: BlogContentRendererProps) {
  const blocks = parseRawContentToBlocks(content);

  if (blocks.length === 0) {
    return (
      <div className="py-8 text-center text-slate-400 italic">
        No content written yet.
      </div>
    );
  }

  return (
    <div className={`blog-content-body max-w-none text-slate-800 leading-relaxed font-sans ${className}`}>
      {blocks.map((block, idx) => {
        switch (block.type) {
          case 'h1':
            return (
              <h1
                key={idx}
                className="text-2xl sm:text-4xl font-black text-slate-950 font-display tracking-tight mt-12 mb-5 pb-3 border-b border-slate-200 uppercase leading-tight"
              >
                {renderInlineFormattedText(block.text)}
              </h1>
            );

          case 'h2':
            return (
              <h2
                key={idx}
                className="text-xl sm:text-2xl md:text-3xl font-black text-slate-950 font-display tracking-tight mt-12 mb-4 pt-4 border-t border-slate-100 flex items-start gap-3 leading-snug uppercase"
              >
                <span className="w-1.5 h-7 bg-red-600 rounded-full inline-block shrink-0 mt-1" />
                <span>{renderInlineFormattedText(block.text)}</span>
              </h2>
            );

          case 'h3':
            return (
              <h3
                key={idx}
                className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 font-display tracking-tight mt-8 mb-3 leading-snug uppercase"
              >
                {renderInlineFormattedText(block.text)}
              </h3>
            );

          case 'h4':
            return (
              <h4
                key={idx}
                className="text-base sm:text-lg font-bold text-slate-900 tracking-tight mt-6 mb-2"
              >
                {renderInlineFormattedText(block.text)}
              </h4>
            );

          case 'paragraph':
            return (
              <p
                key={idx}
                className="text-slate-700 sm:text-slate-800 text-base sm:text-[1.125rem] leading-[1.85] font-normal mb-6"
              >
                {renderInlineFormattedText(block.text)}
              </p>
            );

          case 'ul':
            return (
              <ul key={idx} className="my-6 space-y-3 pl-1 list-none">
                {block.items.map((item, itemIdx) => (
                  <li
                    key={itemIdx}
                    className="flex items-start gap-3 text-slate-700 sm:text-slate-800 text-base sm:text-[1.05rem] leading-relaxed"
                  >
                    <span className="w-2 h-2 rounded-full bg-red-600 mt-2.5 shrink-0" />
                    <span className="flex-1">{renderInlineFormattedText(item)}</span>
                  </li>
                ))}
              </ul>
            );

          case 'ol':
            return (
              <ol key={idx} className="my-6 space-y-3.5 pl-1 list-none">
                {block.items.map((item, itemIdx) => (
                  <li
                    key={itemIdx}
                    className="flex items-start gap-3.5 text-slate-700 sm:text-slate-800 text-base sm:text-[1.05rem] leading-relaxed"
                  >
                    <span className="w-6 h-6 rounded-lg bg-red-50 text-red-700 border border-red-200 font-mono text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                      {itemIdx + 1}
                    </span>
                    <span className="flex-1">{renderInlineFormattedText(item)}</span>
                  </li>
                ))}
              </ol>
            );

          case 'blockquote':
            return (
              <blockquote
                key={idx}
                className="my-7 p-6 rounded-2xl bg-gradient-to-r from-red-50/70 via-slate-50/80 to-white border-l-4 border-red-600 border-t border-r border-b border-slate-200/80 italic text-slate-800 font-medium text-base sm:text-lg leading-relaxed shadow-2xs"
              >
                <div className="flex items-start gap-3">
                  <span className="text-3xl text-red-500 font-serif leading-none select-none">“</span>
                  <div className="flex-1">{renderInlineFormattedText(block.text)}</div>
                </div>
              </blockquote>
            );

          case 'codeblock':
            return (
              <CodeBlockComponent
                key={idx}
                language={block.language}
                code={block.code}
              />
            );

          case 'image':
            return (
              <figure
                key={idx}
                className="my-9 rounded-3xl overflow-hidden border border-slate-200 bg-slate-950 shadow-xl"
              >
                <div className="relative w-full aspect-[16/9] min-h-[260px]">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={block.src}
                    alt={block.alt || postTitle || 'Article illustration'}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                {block.caption && (
                  <figcaption className="p-3 text-center text-xs font-mono text-slate-400 bg-slate-900 border-t border-slate-800">
                    {block.caption}
                  </figcaption>
                )}
              </figure>
            );

          case 'hr':
            return <hr key={idx} className="my-10 border-t border-slate-200" />;

          default:
            return null;
        }
      })}
    </div>
  );
}
