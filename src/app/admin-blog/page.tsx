// src/app/admin-blog/page.tsx
'use client';

import React, { useState, useEffect, useMemo } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  Lock, Unlock, Plus, Edit3, Trash2, ExternalLink, Search, 
  CheckCircle2, AlertCircle, Eye, RefreshCw, Upload,
  BookOpen, Calendar, Clock, User, ArrowLeft,
  FileText, Link2, Copy, Check, LogOut, CheckCircle,
  HelpCircle, Globe, Smartphone, Monitor, BarChart3,
  Sliders, ShieldCheck, Sparkles, ChevronDown, ChevronUp,
  Image as ImageIcon, Link as LinkIcon
} from 'lucide-react';
import { Post, RelatedLink } from '@/data/blog';

const PRESET_CATEGORIES = ['Engineering', 'AI & Technology', 'Hiring', 'Web Development', 'Cloud', 'Product'];

const PRESET_IMAGES = [
  { label: 'Staff Augmentation', url: '/images/blog/staff-aug-guide.jpg' },
  { label: 'MERN vs MEAN', url: '/images/blog/mern-vs-mean.jpg' },
  { label: 'Core Web Vitals', url: '/images/blog/core-web-vitals.jpg' },
  { label: 'AI Development', url: '/images/blog/gen-ai-company.jpg' },
  { label: 'RAG & Architecture', url: '/images/blog/rag-vs-finetuning.jpg' },
  { label: 'AI Roadmap', url: '/images/blog/ai-roadmap.jpg' },
];

const INITIAL_FORM: {
  title: string;
  slug: string;
  category: string;
  author: string;
  reviewedBy: string;
  readTime: string;
  image: string;
  excerpt: string;
  content: string;
  relatedLinks: RelatedLink[];
  focusKeyword: string;
  seoTitle: string;
  metaDescription: string;
} = {
  title: '',
  slug: '',
  category: 'Engineering',
  author: 'Witqualis Team',
  reviewedBy: 'Reviewed by Witqualis Technical Team',
  readTime: '5 min read',
  image: '/images/blog/staff-aug-guide.jpg',
  excerpt: '',
  content: '',
  relatedLinks: [
    { label: 'Web Development Services', href: '/services/web-development/' },
    { label: 'Contact Us', href: '/contact-us/' }
  ],
  focusKeyword: '',
  seoTitle: '',
  metaDescription: ''
};

interface SeoCheckItem {
  id: string;
  title: string;
  status: 'good' | 'improvement' | 'problem';
  message: string;
  category: 'seo' | 'readability';
}

export default function AdminBlogPage() {
  const [pin, setPin] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [authError, setAuthError] = useState('');
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(false);
  const [saving, setSaving] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFilterCategory, setSelectedFilterCategory] = useState('All');
  const [activeTab, setActiveTab] = useState<'list' | 'editor'>('list');
  const [editorSubTab, setEditorSubTab] = useState<'content' | 'seo' | 'analysis'>('content');
  const [editingSlug, setEditingSlug] = useState<string | null>(null);
  const [formData, setFormData] = useState(INITIAL_FORM);
  const [previewMode, setPreviewMode] = useState(false);
  const [previewDevice, setPreviewDevice] = useState<'desktop' | 'mobile'>('desktop');
  const [statusMessage, setStatusMessage] = useState<{ type: 'success' | 'error'; text: string; link?: string } | null>(null);
  const [deleteConfirmSlug, setDeleteConfirmSlug] = useState<string | null>(null);
  const [uploadingImage, setUploadingImage] = useState(false);
  const [uploadingContentImage, setUploadingContentImage] = useState(false);
  const [showUrlInput, setShowUrlInput] = useState(false);
  const [customImageUrl, setCustomImageUrl] = useState('');
  const [showInsertImageModal, setShowInsertImageModal] = useState(false);
  const [insertImageUrl, setInsertImageUrl] = useState('');
  const [insertImageCaption, setInsertImageCaption] = useState('');
  const [copiedSlug, setCopiedSlug] = useState<string | null>(null);

  // Check saved PIN in sessionStorage on mount
  useEffect(() => {
    const savedPin = sessionStorage.getItem('witqualis_admin_pin');
    if (savedPin) {
      setPin(savedPin);
      validatePin(savedPin);
    }
  }, []);

  const validatePin = async (candidatePin: string) => {
    setLoading(true);
    setAuthError('');
    try {
      const res = await fetch('/api/admin/blog', {
        headers: { 'x-admin-pin': candidatePin }
      });
      if (res.ok) {
        const data = await res.json();
        setPosts(data.posts || []);
        setIsAuthenticated(true);
        sessionStorage.setItem('witqualis_admin_pin', candidatePin);
      } else {
        setAuthError('Incorrect passcode. Access denied.');
        setIsAuthenticated(false);
      }
    } catch (err) {
      setAuthError('Connection error. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleLoginSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!pin) {
      setAuthError('Please enter the admin passcode');
      return;
    }
    validatePin(pin);
  };

  const handleLogout = () => {
    sessionStorage.removeItem('witqualis_admin_pin');
    setIsAuthenticated(false);
    setPin('');
  };

  const fetchPosts = async () => {
    try {
      const res = await fetch('/api/admin/blog', {
        headers: { 'x-admin-pin': pin }
      });
      if (res.ok) {
        const data = await res.json();
        setPosts(data.posts || []);
      }
    } catch (err) {
      console.error('Failed to reload posts', err);
    }
  };

  const generateSlugFromTitle = (title: string) => {
    return title
      .toLowerCase()
      .trim()
      .replace(/[^\w\s-]/g, '')
      .replace(/[\s_-]+/g, '-')
      .replace(/^-+|-+$/g, '');
  };

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newTitle = e.target.value;
    if (!editingSlug) {
      setFormData(prev => ({
        ...prev,
        title: newTitle,
        slug: generateSlugFromTitle(newTitle),
        seoTitle: prev.seoTitle ? prev.seoTitle : `${newTitle} | WitQualis`
      }));
    } else {
      setFormData(prev => ({ ...prev, title: newTitle }));
    }
  };

  const handleExcerptChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newExcerpt = e.target.value;
    setFormData(prev => ({
      ...prev,
      excerpt: newExcerpt,
      metaDescription: prev.metaDescription ? prev.metaDescription : newExcerpt
    }));
  };

  const startCreateNew = () => {
    setEditingSlug(null);
    setFormData(INITIAL_FORM);
    setActiveTab('editor');
    setEditorSubTab('content');
    setPreviewMode(false);
    setStatusMessage(null);
  };

  const startEditPost = (post: Post) => {
    setEditingSlug(post.slug);
    setFormData({
      title: post.title,
      slug: post.slug,
      category: post.category,
      author: post.author,
      reviewedBy: post.reviewedBy,
      readTime: post.readTime,
      image: post.image,
      excerpt: post.excerpt,
      content: Array.isArray(post.content) ? post.content.join('\n\n') : String(post.content || ''),
      relatedLinks: post.relatedLinks || [],
      focusKeyword: post.focusKeyword || '',
      seoTitle: post.seoTitle || `${post.title} | WitQualis`,
      metaDescription: post.metaDescription || post.excerpt
    });
    setActiveTab('editor');
    setEditorSubTab('content');
    setPreviewMode(false);
    setStatusMessage(null);
  };

  const getEffectivePin = () => {
    return pin || (typeof window !== 'undefined' ? sessionStorage.getItem('witqualis_admin_pin') || 'witqualis2026' : 'witqualis2026');
  };

  const uploadFileToServer = async (file: File): Promise<string> => {
    const form = new FormData();
    form.append('file', file);
    const currentPin = getEffectivePin();
    form.append('pin', currentPin);

    const res = await fetch('/api/admin/upload', {
      method: 'POST',
      headers: { 'x-admin-pin': currentPin },
      body: form
    });

    const data = await res.json();
    if (res.ok && data.url) {
      return data.url;
    } else {
      throw new Error(data.error || 'Failed to upload image. Passcode might be expired or file is invalid.');
    }
  };

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setUploadingImage(true);
    try {
      const url = await uploadFileToServer(file);
      setFormData(prev => ({ ...prev, image: url }));
      setCustomImageUrl(url);
      setStatusMessage({ type: 'success', text: 'Cover image uploaded and set successfully!' });
    } catch (err: any) {
      setStatusMessage({ type: 'error', text: err?.message || 'Failed to upload cover image' });
    } finally {
      setUploadingImage(false);
      e.target.value = '';
    }
  };

  const handleContentImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setUploadingContentImage(true);
    try {
      const url = await uploadFileToServer(file);
      const cleanLabel = file.name.replace(/\.[^/.]+$/, '').replace(/[-_]/g, ' ');
      const mdSnippet = `\n\n![${cleanLabel}](${url})\n\n`;
      setFormData(prev => ({
        ...prev,
        content: prev.content ? prev.content.trim() + mdSnippet : mdSnippet.trim()
      }));
      setStatusMessage({ type: 'success', text: 'Photo uploaded and inserted into article content!' });
    } catch (err: any) {
      setStatusMessage({ type: 'error', text: err?.message || 'Failed to upload article photo' });
    } finally {
      setUploadingContentImage(false);
      e.target.value = '';
    }
  };

  const handleInsertImageUrlToContent = () => {
    if (!insertImageUrl.trim()) return;
    const caption = insertImageCaption.trim() || 'Blog Image';
    const mdSnippet = `\n\n![${caption}](${insertImageUrl.trim()})\n\n`;
    setFormData(prev => ({
      ...prev,
      content: prev.content ? prev.content.trim() + mdSnippet : mdSnippet.trim()
    }));
    setInsertImageUrl('');
    setInsertImageCaption('');
    setShowInsertImageModal(false);
    setStatusMessage({ type: 'success', text: 'Image inserted into article!' });
  };

  // --- LIVE YOAST-STYLE SEO & CONTENT ANALYSIS ENGINE ---
  const seoAnalysis = useMemo(() => {
    const checks: SeoCheckItem[] = [];
    const keyword = formData.focusKeyword.trim().toLowerCase();
    const effectiveTitle = (formData.seoTitle || formData.title || '').trim();
    const effectiveDesc = (formData.metaDescription || formData.excerpt || '').trim();
    const contentText = formData.content.trim();
    const slugText = formData.slug.trim().toLowerCase();

    // Word calculations
    const words = contentText ? contentText.split(/\s+/).filter(Boolean) : [];
    const wordCount = words.length;
    const paragraphs = contentText ? contentText.split('\n\n').filter(p => p.trim().length > 0) : [];
    const firstParagraph = paragraphs[0]?.toLowerCase() || '';

    // 1. Focus Keyphrase Presence
    if (!keyword) {
      checks.push({
        id: 'keyphrase_missing',
        title: 'Focus Keyphrase',
        status: 'problem',
        message: 'No focus keyphrase was set. Set a focus keyphrase in the SEO tab to evaluate keyword ranking factors.',
        category: 'seo'
      });
    } else {
      checks.push({
        id: 'keyphrase_set',
        title: 'Focus Keyphrase',
        status: 'good',
        message: `Focus keyphrase is set to "${keyword}".`,
        category: 'seo'
      });

      // 2. Keyphrase in SEO Title
      if (effectiveTitle.toLowerCase().includes(keyword)) {
        checks.push({
          id: 'keyphrase_in_title',
          title: 'Keyphrase in SEO Title',
          status: 'good',
          message: 'Your focus keyphrase appears in the SEO Title. Great!',
          category: 'seo'
        });
      } else {
        checks.push({
          id: 'keyphrase_in_title',
          title: 'Keyphrase in SEO Title',
          status: 'problem',
          message: `Your focus keyphrase "${keyword}" does not appear in the SEO title. Add it near the beginning.`,
          category: 'seo'
        });
      }

      // 3. Keyphrase in Slug
      const keywordSlugified = keyword.replace(/[\s_]+/g, '-');
      if (slugText.includes(keywordSlugified) || slugText.includes(keyword)) {
        checks.push({
          id: 'keyphrase_in_slug',
          title: 'Keyphrase in URL Slug',
          status: 'good',
          message: 'Keyphrase found in the URL slug.',
          category: 'seo'
        });
      } else {
        checks.push({
          id: 'keyphrase_in_slug',
          title: 'Keyphrase in URL Slug',
          status: 'problem',
          message: `The slug does not contain your focus keyphrase. Suggested: /blog/${keywordSlugified}/`,
          category: 'seo'
        });
      }

      // 4. Keyphrase in Meta Description
      if (effectiveDesc.toLowerCase().includes(keyword)) {
        checks.push({
          id: 'keyphrase_in_desc',
          title: 'Keyphrase in Meta Description',
          status: 'good',
          message: 'Focus keyphrase appears in the meta description.',
          category: 'seo'
        });
      } else {
        checks.push({
          id: 'keyphrase_in_desc',
          title: 'Keyphrase in Meta Description',
          status: 'problem',
          message: 'The meta description does not contain the focus keyphrase. Include it naturally.',
          category: 'seo'
        });
      }

      // 5. Keyphrase in Introduction (First paragraph)
      if (firstParagraph.includes(keyword)) {
        checks.push({
          id: 'keyphrase_in_intro',
          title: 'Keyphrase in Introduction',
          status: 'good',
          message: 'Your focus keyphrase appears in the first paragraph. Well done!',
          category: 'seo'
        });
      } else {
        checks.push({
          id: 'keyphrase_in_intro',
          title: 'Keyphrase in Introduction',
          status: 'problem',
          message: 'Your keyphrase was not found in the opening paragraph. Introduce your topic right away in the first paragraph.',
          category: 'seo'
        });
      }

      // 6. Keyphrase Density
      let matches = 0;
      if (wordCount > 0) {
        const regex = new RegExp(`\\b${keyword.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\b`, 'gi');
        matches = (contentText.match(regex) || []).length;
        const density = ((matches / wordCount) * 100).toFixed(1);

        if (matches === 0) {
          checks.push({
            id: 'keyphrase_density',
            title: 'Keyphrase Density',
            status: 'problem',
            message: `Keyphrase density is 0%. The focus keyphrase was not found in your article text.`,
            category: 'seo'
          });
        } else if (parseFloat(density) > 3.5) {
          checks.push({
            id: 'keyphrase_density',
            title: 'Keyphrase Density',
            status: 'problem',
            message: `Keyphrase density is ${density}%, which is high (${matches} times). Avoid keyword stuffing.`,
            category: 'seo'
          });
        } else {
          checks.push({
            id: 'keyphrase_density',
            title: 'Keyphrase Density',
            status: 'good',
            message: `Keyphrase density is ${density}% (found ${matches} times). Optimal for search ranking!`,
            category: 'seo'
          });
        }
      }
    }

    // 7. SEO Title Length Check
    const titleLen = effectiveTitle.length;
    if (titleLen === 0) {
      checks.push({
        id: 'title_length',
        title: 'SEO Title Length',
        status: 'problem',
        message: 'No title provided. Add an engaging SEO title.',
        category: 'seo'
      });
    } else if (titleLen < 30) {
      checks.push({
        id: 'title_length',
        title: 'SEO Title Length',
        status: 'improvement',
        message: `SEO title is short (${titleLen} chars). Recommended: 35–60 characters.`,
        category: 'seo'
      });
    } else if (titleLen > 65) {
      checks.push({
        id: 'title_length',
        title: 'SEO Title Length',
        status: 'problem',
        message: `SEO title is too long (${titleLen} chars). It may be cut off in Google search results (> 60 chars).`,
        category: 'seo'
      });
    } else {
      checks.push({
        id: 'title_length',
        title: 'SEO Title Length',
        status: 'good',
        message: `SEO title width is optimal (${titleLen} chars). Looks great on Google!`,
        category: 'seo'
      });
    }

    // 8. Meta Description Length Check
    const descLen = effectiveDesc.length;
    if (descLen === 0) {
      checks.push({
        id: 'desc_length',
        title: 'Meta Description Length',
        status: 'problem',
        message: 'No meta description specified. Search engines will pick default text from the page.',
        category: 'seo'
      });
    } else if (descLen < 80) {
      checks.push({
        id: 'desc_length',
        title: 'Meta Description Length',
        status: 'improvement',
        message: `Meta description is short (${descLen} chars). Expand it to between 120 and 160 characters.`,
        category: 'seo'
      });
    } else if (descLen > 165) {
      checks.push({
        id: 'desc_length',
        title: 'Meta Description Length',
        status: 'problem',
        message: `Meta description is too long (${descLen} chars). Keep under 160 characters to prevent truncation.`,
        category: 'seo'
      });
    } else {
      checks.push({
        id: 'desc_length',
        title: 'Meta Description Length',
        status: 'good',
        message: `Meta description length is ideal (${descLen} characters).`,
        category: 'seo'
      });
    }

    // 9. Text Length / Word Count Check
    if (wordCount === 0) {
      checks.push({
        id: 'text_length',
        title: 'Text Length (Word Count)',
        status: 'problem',
        message: 'Article has 0 words. Write some content to enable analysis.',
        category: 'readability'
      });
    } else if (wordCount < 300) {
      checks.push({
        id: 'text_length',
        title: 'Text Length (Word Count)',
        status: 'problem',
        message: `The text contains ${wordCount} words. This is below the minimum recommended 300 words for blog ranking.`,
        category: 'readability'
      });
    } else if (wordCount < 500) {
      checks.push({
        id: 'text_length',
        title: 'Text Length (Word Count)',
        status: 'improvement',
        message: `The text contains ${wordCount} words. Good start! Aim for 500+ words for competitive topics.`,
        category: 'readability'
      });
    } else {
      checks.push({
        id: 'text_length',
        title: 'Text Length (Word Count)',
        status: 'good',
        message: `The text contains ${wordCount} words. Great in-depth content!`,
        category: 'readability'
      });
    }

    // 10. Featured Image & Alt Check
    if (!formData.image) {
      checks.push({
        id: 'featured_image',
        title: 'Featured Image',
        status: 'problem',
        message: 'No featured cover image selected. Visual media improves user engagement.',
        category: 'seo'
      });
    } else {
      checks.push({
        id: 'featured_image',
        title: 'Featured Image',
        status: 'good',
        message: 'Featured image is set.',
        category: 'seo'
      });
    }

    // 11. Internal Links Check
    if (!formData.relatedLinks || formData.relatedLinks.length === 0) {
      checks.push({
        id: 'internal_links',
        title: 'Internal Links',
        status: 'problem',
        message: 'No internal links added. Add related links to guide readers and boost domain authority.',
        category: 'seo'
      });
    } else {
      checks.push({
        id: 'internal_links',
        title: 'Internal Links',
        status: 'good',
        message: `You have ${formData.relatedLinks.length} internal links. Excellent!`,
        category: 'seo'
      });
    }

    // 12. Paragraph Distribution Check
    if (paragraphs.length <= 1 && wordCount > 100) {
      checks.push({
        id: 'paragraph_distribution',
        title: 'Paragraph Distribution',
        status: 'improvement',
        message: 'Your content is currently in a single large paragraph. Split it with blank lines for better readability.',
        category: 'readability'
      });
    } else if (paragraphs.length > 1) {
      checks.push({
        id: 'paragraph_distribution',
        title: 'Paragraph Distribution',
        status: 'good',
        message: `Good paragraph structure (${paragraphs.length} paragraphs). Easy to read!`,
        category: 'readability'
      });
    }

    // Count summaries
    const problems = checks.filter(c => c.status === 'problem');
    const improvements = checks.filter(c => c.status === 'improvement');
    const good = checks.filter(c => c.status === 'good');

    const totalPoints = checks.length;
    const earnedPoints = good.length * 1 + improvements.length * 0.5;
    const scorePercentage = totalPoints > 0 ? Math.round((earnedPoints / totalPoints) * 100) : 0;

    let overallRating: 'good' | 'ok' | 'poor' = 'poor';
    if (scorePercentage >= 75) overallRating = 'good';
    else if (scorePercentage >= 45) overallRating = 'ok';

    return {
      checks,
      problems,
      improvements,
      good,
      scorePercentage,
      overallRating,
      wordCount,
      paragraphsCount: paragraphs.length
    };
  }, [formData]);

  const handleSavePost = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.title.trim()) {
      setStatusMessage({ type: 'error', text: 'Blog Title is required' });
      return;
    }

    setSaving(true);
    setStatusMessage(null);

    try {
      const payload = {
        title: formData.title,
        slug: formData.slug || generateSlugFromTitle(formData.title),
        category: formData.category,
        author: formData.author,
        reviewedBy: formData.reviewedBy,
        readTime: formData.readTime,
        image: formData.image,
        excerpt: formData.excerpt,
        content: formData.content.split('\n\n').map(p => p.trim()).filter(Boolean),
        relatedLinks: formData.relatedLinks,
        focusKeyword: formData.focusKeyword,
        seoTitle: formData.seoTitle,
        metaDescription: formData.metaDescription
      };

      const res = await fetch('/api/admin/blog', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-admin-pin': pin
        },
        body: JSON.stringify({ pin, post: payload })
      });

      const result = await res.json();
      if (res.ok && result.success) {
        await fetchPosts();
        setStatusMessage({
          type: 'success',
          text: editingSlug ? 'Blog post updated successfully!' : 'New blog post published successfully!',
          link: `/blog/${payload.slug}/`
        });
        setEditingSlug(payload.slug);
      } else {
        setStatusMessage({ type: 'error', text: result.error || 'Failed to save post' });
      }
    } catch (err: any) {
      setStatusMessage({ type: 'error', text: err?.message || 'Server error while saving' });
    } finally {
      setSaving(false);
    }
  };

  const handleDeletePost = async (slug: string) => {
    try {
      const res = await fetch(`/api/admin/blog?slug=${encodeURIComponent(slug)}`, {
        method: 'DELETE',
        headers: { 'x-admin-pin': pin }
      });

      if (res.ok) {
        setPosts(prev => prev.filter(p => p.slug !== slug));
        setDeleteConfirmSlug(null);
        if (editingSlug === slug) {
          startCreateNew();
        }
        setStatusMessage({ type: 'success', text: `Post "${slug}" was deleted.` });
      } else {
        const data = await res.json();
        setStatusMessage({ type: 'error', text: data.error || 'Could not delete post' });
      }
    } catch (err) {
      setStatusMessage({ type: 'error', text: 'Error deleting post' });
    }
  };

  const copySlugUrl = (slug: string) => {
    const fullUrl = `${window.location.origin}/blog/${slug}/`;
    navigator.clipboard.writeText(fullUrl);
    setCopiedSlug(slug);
    setTimeout(() => setCopiedSlug(null), 2000);
  };

  // Filtered posts for manager
  const filteredPosts = posts.filter(post => {
    const matchesSearch = 
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.slug.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesCategory = 
      selectedFilterCategory === 'All' || 
      post.category.toLowerCase() === selectedFilterCategory.toLowerCase();

    return matchesSearch && matchesCategory;
  });

  // 1. SIMPLE CLEAN WHITE LOGIN SCREEN
  if (!isAuthenticated) {
    return (
      <main className="min-h-screen w-full bg-slate-50 text-slate-900 flex items-center justify-center p-6">
        <div className="w-full max-w-md bg-white border border-slate-200 rounded-2xl p-8 shadow-lg">
          
          <div className="text-center mb-8">
            <div className="w-12 h-12 rounded-xl bg-red-50 border border-red-100 flex items-center justify-center text-red-600 mx-auto mb-3">
              <Lock className="w-6 h-6" />
            </div>
            <h1 className="text-2xl font-bold text-slate-900 tracking-tight">
              WitQualis Blog Admin
            </h1>
            <p className="text-sm text-slate-500 mt-1">
              Sign in to manage and publish blog posts
            </p>
          </div>

          <form onSubmit={handleLoginSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1.5">
                Admin Passcode
              </label>
              <input
                type="password"
                value={pin}
                onChange={(e) => setPin(e.target.value)}
                placeholder="Enter passcode (e.g. witqualis2026)"
                className="w-full px-4 py-3 rounded-xl bg-white border border-slate-300 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:border-red-600 transition-all"
                autoFocus
              />
            </div>

            {authError && (
              <div className="flex items-center gap-2 p-3 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs">
                <AlertCircle className="w-4 h-4 shrink-0" />
                <span>{authError}</span>
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 rounded-xl bg-red-600 hover:bg-red-700 text-white text-sm font-semibold shadow-sm flex items-center justify-center gap-2 transition-all disabled:opacity-50 cursor-pointer"
            >
              {loading ? (
                <RefreshCw className="w-4 h-4 animate-spin" />
              ) : (
                <>
                  <Unlock className="w-4 h-4" />
                  <span>Login to Blog Admin</span>
                </>
              )}
            </button>
          </form>

          <div className="mt-6 pt-5 border-t border-slate-100 text-center">
            <Link
              href="/blog"
              className="text-xs text-slate-500 hover:text-red-600 inline-flex items-center gap-1 transition-colors"
            >
              <span>&larr; Back to Website</span>
            </Link>
          </div>
        </div>
      </main>
    );
  }

  // 2. CLEAN WHITE ADMIN DASHBOARD WITH YOAST-STYLE SEO
  return (
    <main className="min-h-screen w-full bg-slate-50 text-slate-900 font-sans">
      
      {/* Top Navbar */}
      <header className="sticky top-0 z-40 bg-white border-b border-slate-200 px-6 py-3.5 shadow-xs">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-red-600 text-white flex items-center justify-center font-bold text-sm shadow-sm">
              W
            </div>
            <div>
              <h1 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                <span>WitQualis Blog Manager</span>
                <span className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">
                  SEO Suite Enabled
                </span>
              </h1>
            </div>
          </div>

          <div className="flex items-center gap-3">
            {/* Live SEO indicator in header if in editor */}
            {activeTab === 'editor' && (
              <div 
                onClick={() => setEditorSubTab('analysis')}
                className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-100 border border-slate-200 text-xs cursor-pointer hover:bg-slate-200 transition-colors"
                title="Click to view SEO analysis"
              >
                <span className={`w-2.5 h-2.5 rounded-full ${
                  seoAnalysis.overallRating === 'good' ? 'bg-emerald-500' :
                  seoAnalysis.overallRating === 'ok' ? 'bg-amber-500' : 'bg-red-500'
                }`} />
                <span className="font-semibold text-slate-700">SEO Score: {seoAnalysis.scorePercentage}%</span>
                <span className="text-slate-400">({seoAnalysis.good.length} Passed)</span>
              </div>
            )}

            <Link
              href="/blog"
              target="_blank"
              className="px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-xs font-medium text-slate-700 border border-slate-200 flex items-center gap-1.5 transition-all"
            >
              <span>View Blog</span>
              <ExternalLink className="w-3.5 h-3.5 text-slate-500" />
            </Link>

            <button
              onClick={startCreateNew}
              className="px-3.5 py-1.5 rounded-lg bg-red-600 hover:bg-red-700 text-white text-xs font-semibold shadow-sm flex items-center gap-1.5 transition-all cursor-pointer"
            >
              <Plus className="w-3.5 h-3.5" />
              <span>New Post</span>
            </button>

            <button
              onClick={handleLogout}
              className="p-1.5 rounded-lg bg-slate-100 hover:bg-red-50 hover:text-red-600 text-slate-500 text-xs transition-colors cursor-pointer"
              title="Logout"
            >
              <LogOut className="w-4 h-4" />
            </button>
          </div>

        </div>
      </header>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-6 py-6">

        {/* Global Toast Alert */}
        {statusMessage && (
          <div
            className={`mb-6 p-4 rounded-xl border flex items-center justify-between gap-4 shadow-sm ${
              statusMessage.type === 'success'
                ? 'bg-emerald-50 border-emerald-200 text-emerald-800'
                : 'bg-red-50 border-red-200 text-red-800'
            }`}
          >
            <div className="flex items-center gap-3">
              {statusMessage.type === 'success' ? (
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
              ) : (
                <AlertCircle className="w-5 h-5 text-red-600 shrink-0" />
              )}
              <span className="text-sm font-medium">{statusMessage.text}</span>
            </div>

            {statusMessage.link && (
              <Link
                href={statusMessage.link}
                target="_blank"
                className="px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-medium flex items-center gap-1.5 shrink-0 transition-colors"
              >
                <span>View Live Post</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </Link>
            )}
          </div>
        )}

        {/* Navigation Tabs */}
        <div className="flex items-center justify-between border-b border-slate-200 pb-3 mb-6">
          <div className="flex items-center gap-2">
            <button
              onClick={() => setActiveTab('list')}
              className={`px-4 py-2 rounded-lg text-xs font-semibold transition-all flex items-center gap-1.5 cursor-pointer ${
                activeTab === 'list'
                  ? 'bg-slate-900 text-white shadow-xs'
                  : 'bg-white text-slate-600 hover:text-slate-900 border border-slate-200'
              }`}
            >
              <BookOpen className="w-3.5 h-3.5" />
              <span>All Posts ({posts.length})</span>
            </button>

            <button
              onClick={() => setActiveTab('editor')}
              className={`px-4 py-2 rounded-lg text-xs font-semibold transition-all flex items-center gap-1.5 cursor-pointer ${
                activeTab === 'editor'
                  ? 'bg-slate-900 text-white shadow-xs'
                  : 'bg-white text-slate-600 hover:text-slate-900 border border-slate-200'
              }`}
            >
              <Edit3 className="w-3.5 h-3.5" />
              <span>{editingSlug ? 'Edit Post' : 'Create New Post'}</span>
            </button>
          </div>
        </div>

        {/* TAB 1: ALL POSTS LIST VIEW */}
        {activeTab === 'list' && (
          <div className="space-y-6">
            
            {/* Search & Filter */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 bg-white p-4 rounded-xl border border-slate-200 shadow-xs">
              <div className="relative flex-1">
                <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Search by title, keywords, slug..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 rounded-lg bg-slate-50 border border-slate-200 text-slate-900 text-xs focus:bg-white focus:outline-none focus:border-red-500"
                />
              </div>

              <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0">
                {['All', ...PRESET_CATEGORIES].map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setSelectedFilterCategory(cat)}
                    className={`px-3 py-1.5 rounded-lg text-xs whitespace-nowrap transition-colors cursor-pointer ${
                      selectedFilterCategory === cat
                        ? 'bg-red-600 text-white font-semibold'
                        : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            {/* Posts List */}
            <div className="grid grid-cols-1 gap-4">
              {filteredPosts.map((post) => (
                <div
                  key={post.slug}
                  className="p-5 rounded-2xl bg-white border border-slate-200 hover:border-slate-300 shadow-xs transition-all flex flex-col md:flex-row items-start md:items-center justify-between gap-5"
                >
                  {/* Thumbnail & Title */}
                  <div className="flex items-start gap-4 flex-1">
                    <div className="relative w-24 h-20 rounded-xl overflow-hidden bg-slate-100 shrink-0 border border-slate-200">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover"
                      />
                    </div>

                    <div className="space-y-1 flex-1">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-red-50 text-red-700 border border-red-100">
                          {post.category}
                        </span>
                        <span className="text-xs text-slate-500 flex items-center gap-1">
                          <Calendar className="w-3.5 h-3.5 text-slate-400" />
                          {post.date}
                        </span>
                        <span className="text-xs text-slate-400">
                          • {post.readTime}
                        </span>
                        {post.focusKeyword && (
                          <span className="text-[10px] bg-slate-100 text-slate-600 px-2 py-0.5 rounded border border-slate-200">
                            Keyphrase: <strong>{post.focusKeyword}</strong>
                          </span>
                        )}
                      </div>

                      <h3 className="text-base font-bold text-slate-900 leading-snug">
                        {post.title}
                      </h3>

                      <div className="flex items-center gap-2 pt-0.5">
                        <span className="text-xs text-slate-500 bg-slate-50 px-2 py-0.5 rounded border border-slate-200">
                          /blog/{post.slug}/
                        </span>
                        <button
                          onClick={() => copySlugUrl(post.slug)}
                          className="text-xs text-slate-400 hover:text-slate-700 flex items-center gap-1 cursor-pointer"
                          title="Copy Link"
                        >
                          {copiedSlug === post.slug ? (
                            <Check className="w-3.5 h-3.5 text-emerald-600" />
                          ) : (
                            <Copy className="w-3.5 h-3.5" />
                          )}
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Actions Bar */}
                  <div className="flex items-center gap-2 shrink-0 w-full md:w-auto justify-end pt-3 md:pt-0 border-t md:border-t-0 border-slate-100">
                    <Link
                      href={`/blog/${post.slug}/`}
                      target="_blank"
                      className="px-3 py-2 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-medium flex items-center gap-1.5 transition-colors"
                      title="View live post"
                    >
                      <Eye className="w-3.5 h-3.5" />
                      <span>View</span>
                    </Link>

                    <button
                      onClick={() => startEditPost(post)}
                      className="px-3 py-2 rounded-lg bg-blue-50 hover:bg-blue-100 text-blue-700 text-xs font-medium flex items-center gap-1.5 transition-colors cursor-pointer"
                      title="Edit post"
                    >
                      <Edit3 className="w-3.5 h-3.5" />
                      <span>Edit</span>
                    </button>

                    {deleteConfirmSlug === post.slug ? (
                      <div className="flex items-center gap-1 bg-red-50 p-1 rounded-lg border border-red-200">
                        <button
                          onClick={() => handleDeletePost(post.slug)}
                          className="px-2.5 py-1.5 rounded bg-red-600 hover:bg-red-700 text-white text-xs font-semibold cursor-pointer"
                        >
                          Confirm
                        </button>
                        <button
                          onClick={() => setDeleteConfirmSlug(null)}
                          className="px-2 py-1.5 text-slate-600 text-xs hover:text-slate-900 cursor-pointer"
                        >
                          Cancel
                        </button>
                      </div>
                    ) : (
                      <button
                        onClick={() => setDeleteConfirmSlug(post.slug)}
                        className="p-2 rounded-lg bg-slate-100 hover:bg-red-50 hover:text-red-600 text-slate-500 text-xs transition-colors cursor-pointer"
                        title="Delete post"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    )}
                  </div>
                </div>
              ))}

              {filteredPosts.length === 0 && (
                <div className="text-center py-16 bg-white rounded-2xl border border-slate-200">
                  <BookOpen className="w-10 h-10 text-slate-300 mx-auto mb-3" />
                  <p className="text-sm text-slate-500">No blog posts found matching your search.</p>
                </div>
              )}
            </div>
          </div>
        )}

        {/* TAB 2: POST EDITOR (WITH YOAST SEO & CONTENT SUITE) */}
        {activeTab === 'editor' && (
          <form onSubmit={handleSavePost} className="space-y-6">
            
            {/* Top Action Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-5 rounded-2xl bg-white border border-slate-200 shadow-xs">
              <div>
                <h2 className="text-lg font-bold text-slate-900">
                  {editingSlug ? 'Edit Blog Post' : 'Create New Blog Post'}
                </h2>
                <p className="text-xs text-slate-500 mt-0.5">
                  Compose content, configure SEO settings, and check real-time ranking factors
                </p>
              </div>

              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => setPreviewMode(!previewMode)}
                  className={`px-3.5 py-2 rounded-lg text-xs font-semibold transition-all flex items-center gap-1.5 cursor-pointer ${
                    previewMode
                      ? 'bg-slate-900 text-white'
                      : 'bg-slate-100 text-slate-700 hover:bg-slate-200 border border-slate-200'
                  }`}
                >
                  <Eye className="w-3.5 h-3.5" />
                  <span>{previewMode ? 'Back to Form' : 'Live Article Preview'}</span>
                </button>

                <button
                  type="submit"
                  disabled={saving}
                  className="px-5 py-2 rounded-lg bg-red-600 hover:bg-red-700 text-white text-xs font-semibold shadow-sm flex items-center gap-2 transition-all disabled:opacity-50 cursor-pointer"
                >
                  {saving ? (
                    <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                  ) : (
                    <>
                      <CheckCircle2 className="w-4 h-4" />
                      <span>{editingSlug ? 'Save Changes' : 'Publish Post'}</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Sub-Tabs: Content / SEO & Snippet / Yoast Analysis */}
            {!previewMode && (
              <div className="flex items-center gap-2 border-b border-slate-200 pb-2">
                <button
                  type="button"
                  onClick={() => setEditorSubTab('content')}
                  className={`px-4 py-2 rounded-lg text-xs font-semibold transition-all flex items-center gap-2 cursor-pointer ${
                    editorSubTab === 'content'
                      ? 'bg-slate-900 text-white shadow-xs'
                      : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
                  }`}
                >
                  <FileText className="w-3.5 h-3.5" />
                  <span>1. Content & Media</span>
                </button>

                <button
                  type="button"
                  onClick={() => setEditorSubTab('seo')}
                  className={`px-4 py-2 rounded-lg text-xs font-semibold transition-all flex items-center gap-2 cursor-pointer ${
                    editorSubTab === 'seo'
                      ? 'bg-slate-900 text-white shadow-xs'
                      : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
                  }`}
                >
                  <Globe className="w-3.5 h-3.5" />
                  <span>2. SEO & Google Preview</span>
                  {formData.focusKeyword && (
                    <span className="w-2 h-2 rounded-full bg-emerald-500" />
                  )}
                </button>

                <button
                  type="button"
                  onClick={() => setEditorSubTab('analysis')}
                  className={`px-4 py-2 rounded-lg text-xs font-semibold transition-all flex items-center gap-2 cursor-pointer ${
                    editorSubTab === 'analysis'
                      ? 'bg-slate-900 text-white shadow-xs'
                      : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
                  }`}
                >
                  <BarChart3 className="w-3.5 h-3.5" />
                  <span>3. Yoast SEO Checklist</span>
                  <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${
                    seoAnalysis.overallRating === 'good' ? 'bg-emerald-100 text-emerald-800' :
                    seoAnalysis.overallRating === 'ok' ? 'bg-amber-100 text-amber-800' : 'bg-red-100 text-red-800'
                  }`}>
                    {seoAnalysis.good.length} Passed
                  </span>
                </button>
              </div>
            )}

            {/* PREVIEW VIEW */}
            {previewMode ? (
              <div className="p-8 rounded-2xl bg-white text-slate-900 border border-slate-200 shadow-sm space-y-6">
                <div className="border-b border-slate-200 pb-5">
                  <span className="px-3 py-1 rounded-full bg-red-50 text-red-700 border border-red-200 text-xs font-semibold">
                    {formData.category || 'Category'}
                  </span>
                  <h1 className="text-3xl font-bold text-slate-950 mt-3 mb-3">
                    {formData.title || 'Untitled Post'}
                  </h1>
                  <p className="text-base text-slate-600 italic border-l-4 border-red-600 pl-4 py-1 bg-red-50/40 rounded-r-lg">
                    {formData.excerpt || 'Excerpt / Summary preview...'}
                  </p>
                  <div className="flex items-center gap-4 text-xs text-slate-500 mt-4">
                    <span>By {formData.author}</span>
                    <span>•</span>
                    <span>{formData.readTime}</span>
                  </div>
                </div>

                <div className="relative w-full aspect-[16/9] rounded-xl overflow-hidden bg-slate-100 border border-slate-200">
                  <Image
                    src={formData.image}
                    alt={formData.title || 'Cover'}
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="space-y-4 text-slate-700 text-base leading-relaxed">
                  {formData.content ? (
                    formData.content.split('\n\n').map((para, i) => {
                      const trimmed = para.trim();
                      const mdImgMatch = trimmed.match(/^!\[(.*?)\]\((.*?)\)$/);
                      if (mdImgMatch) {
                        const altText = mdImgMatch[1] || 'Blog Photo';
                        const imgSrc = mdImgMatch[2].trim();
                        return (
                          <figure key={i} className="my-6 rounded-2xl overflow-hidden border border-slate-200 bg-slate-900 shadow-md">
                            <div className="relative w-full aspect-[16/9]">
                              <Image src={imgSrc} alt={altText} fill className="object-cover" />
                            </div>
                            {altText && (
                              <figcaption className="p-2.5 text-center text-xs text-slate-400 bg-slate-900 border-t border-slate-800">
                                {altText}
                              </figcaption>
                            )}
                          </figure>
                        );
                      }
                      if (trimmed.startsWith('## ')) {
                        return (
                          <h2 key={i} className="text-xl sm:text-2xl font-black uppercase text-slate-950 font-display mt-6 mb-2">
                            {trimmed.replace(/^##\s+/, '')}
                          </h2>
                        );
                      }
                      if (trimmed.startsWith('### ')) {
                        return (
                          <h3 key={i} className="text-lg sm:text-xl font-bold uppercase text-slate-900 font-display mt-4 mb-2">
                            {trimmed.replace(/^###\s+/, '')}
                          </h3>
                        );
                      }
                      return (
                        <p key={i} className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 leading-relaxed">
                          {para}
                        </p>
                      );
                    })
                  ) : (
                    <p className="text-slate-400 italic">No content written yet.</p>
                  )}
                </div>
              </div>
            ) : (
              /* TAB CONTENTS */
              <div>

                {/* SUB-TAB 1: CONTENT & MEDIA */}
                {editorSubTab === 'content' && (
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                    
                    {/* Left: Main Content */}
                    <div className="lg:col-span-8 space-y-6">
                      
                      {/* Title & Slug */}
                      <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-4">
                        <div>
                          <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1.5">
                            Blog Title *
                          </label>
                          <input
                            type="text"
                            value={formData.title}
                            onChange={handleTitleChange}
                            placeholder="e.g. 10 Best Practices for Modern Web Development"
                            className="w-full px-4 py-3 rounded-xl bg-white border border-slate-300 text-slate-900 text-base font-semibold focus:outline-none focus:border-red-600 focus:ring-2 focus:ring-red-500/10"
                            required
                          />
                        </div>

                        <div>
                          <label className="block text-xs font-medium text-slate-500 mb-1">
                            URL Slug (Page Link)
                          </label>
                          <div className="flex items-center gap-2">
                            <span className="text-xs text-slate-400 font-mono">/blog/</span>
                            <input
                              type="text"
                              value={formData.slug}
                              onChange={(e) => setFormData(prev => ({ ...prev, slug: e.target.value }))}
                              placeholder="url-slug"
                              className="flex-1 px-3 py-2 rounded-lg bg-slate-50 border border-slate-300 text-xs font-mono text-slate-800 focus:bg-white focus:outline-none focus:border-red-600"
                            />
                          </div>
                        </div>
                      </div>

                      {/* Excerpt */}
                      <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs">
                        <div className="flex items-center justify-between mb-1.5">
                          <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700">
                            Short Summary (Excerpt)
                          </label>
                          <span className={`text-[11px] font-medium ${
                            formData.excerpt.length >= 120 && formData.excerpt.length <= 160 ? 'text-emerald-600' : 'text-slate-400'
                          }`}>
                            {formData.excerpt.length} chars (120-160 recommended)
                          </span>
                        </div>
                        <textarea
                          rows={3}
                          value={formData.excerpt}
                          onChange={handleExcerptChange}
                          placeholder="Short description for card and Google search snippet..."
                          className="w-full p-3.5 rounded-xl bg-white border border-slate-300 text-slate-800 text-xs leading-relaxed focus:outline-none focus:border-red-600 focus:ring-2 focus:ring-red-500/10"
                        />
                      </div>

                      {/* Content Editor */}
                      <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-3">
                        <div className="flex flex-wrap items-center justify-between gap-2">
                          <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700">
                            Blog Content (Paragraphs & Images)
                          </label>
                          <span className="text-[11px] text-slate-500">
                            Word Count: <strong className={seoAnalysis.wordCount >= 300 ? 'text-emerald-600' : 'text-amber-600'}>{seoAnalysis.wordCount}</strong> words
                          </span>
                        </div>

                        {/* Article Quick Formatting & Media Toolbar */}
                        <div className="flex flex-wrap items-center gap-2 p-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs">
                          <span className="text-[11px] font-semibold text-slate-500 uppercase mr-1">Insert:</span>

                          {/* Upload Photo from PC into Content */}
                          <label className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white hover:bg-slate-100 text-slate-800 border border-slate-300 font-medium cursor-pointer shadow-2xs transition-colors">
                            {uploadingContentImage ? (
                              <RefreshCw className="w-3.5 h-3.5 text-red-600 animate-spin" />
                            ) : (
                              <Upload className="w-3.5 h-3.5 text-red-600" />
                            )}
                            <span>{uploadingContentImage ? 'Uploading...' : 'Upload Photo'}</span>
                            <input
                              type="file"
                              accept="image/*"
                              onChange={handleContentImageUpload}
                              className="hidden"
                              disabled={uploadingContentImage}
                            />
                          </label>

                          {/* Insert Image URL button */}
                          <button
                            type="button"
                            onClick={() => setShowInsertImageModal(prev => !prev)}
                            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white hover:bg-slate-100 text-slate-800 border border-slate-300 font-medium cursor-pointer shadow-2xs transition-colors"
                          >
                            <ImageIcon className="w-3.5 h-3.5 text-red-600" />
                            <span>Photo Link / URL</span>
                          </button>

                          {/* Heading button */}
                          <button
                            type="button"
                            onClick={() => {
                              const headingSnippet = '\n\n## New Section Heading\n\n';
                              setFormData(prev => ({ ...prev, content: (prev.content ? prev.content.trim() + headingSnippet : headingSnippet).trim() }));
                            }}
                            className="px-2.5 py-1.5 rounded-lg bg-white hover:bg-slate-100 text-slate-700 border border-slate-300 font-mono font-bold cursor-pointer"
                            title="Add H2 Heading"
                          >
                            H2
                          </button>

                          {/* Subheading button */}
                          <button
                            type="button"
                            onClick={() => {
                              const headingSnippet = '\n\n### Section Sub-heading\n\n';
                              setFormData(prev => ({ ...prev, content: (prev.content ? prev.content.trim() + headingSnippet : headingSnippet).trim() }));
                            }}
                            className="px-2.5 py-1.5 rounded-lg bg-white hover:bg-slate-100 text-slate-700 border border-slate-300 font-mono font-bold cursor-pointer"
                            title="Add H3 Sub-heading"
                          >
                            H3
                          </button>

                          {/* Bullet List button */}
                          <button
                            type="button"
                            onClick={() => {
                              const listSnippet = '\n\n- Key takeaway point 1\n- Key takeaway point 2\n\n';
                              setFormData(prev => ({ ...prev, content: (prev.content ? prev.content.trim() + listSnippet : listSnippet).trim() }));
                            }}
                            className="px-2.5 py-1.5 rounded-lg bg-white hover:bg-slate-100 text-slate-700 border border-slate-300 font-medium cursor-pointer"
                            title="Add Bullet List"
                          >
                            • List
                          </button>
                        </div>

                        {/* Image URL Insertion Dropdown / Modal */}
                        {showInsertImageModal && (
                          <div className="p-4 rounded-xl bg-red-50/70 border border-red-200 space-y-3">
                            <div className="flex items-center justify-between">
                              <span className="text-xs font-bold text-red-900">Insert Photo via URL</span>
                              <button 
                                type="button" 
                                onClick={() => setShowInsertImageModal(false)}
                                className="text-xs text-slate-500 hover:text-slate-800"
                              >
                                ✕ Close
                              </button>
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                              <input
                                type="text"
                                value={insertImageUrl}
                                onChange={(e) => setInsertImageUrl(e.target.value)}
                                placeholder="Image URL (e.g. https://... or /images/...)"
                                className="px-3 py-2 rounded-lg bg-white border border-slate-300 text-xs text-slate-800"
                              />
                              <input
                                type="text"
                                value={insertImageCaption}
                                onChange={(e) => setInsertImageCaption(e.target.value)}
                                placeholder="Photo Caption / Description (optional)"
                                className="px-3 py-2 rounded-lg bg-white border border-slate-300 text-xs text-slate-800"
                              />
                            </div>
                            <button
                              type="button"
                              onClick={handleInsertImageUrlToContent}
                              disabled={!insertImageUrl.trim()}
                              className="px-4 py-2 rounded-lg bg-red-600 hover:bg-red-700 disabled:opacity-50 text-white text-xs font-semibold cursor-pointer transition-colors"
                            >
                              Insert Into Article
                            </button>
                          </div>
                        )}

                        <textarea
                          rows={14}
                          value={formData.content}
                          onChange={(e) => setFormData(prev => ({ ...prev, content: e.target.value }))}
                          placeholder="Write your article content here...&#10;&#10;Separate each paragraph by pressing Enter twice.&#10;&#10;To add photos inside content, use the 'Upload Photo' button above or write:&#10;![Photo Description](/images/blog/your-image.jpg)"
                          className="w-full p-4 rounded-xl bg-white border border-slate-300 text-slate-800 text-sm leading-relaxed focus:outline-none focus:border-red-600 focus:ring-2 focus:ring-red-500/10"
                        />
                      </div>

                      {/* Related Links */}
                      <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-4">
                        <div className="flex items-center justify-between">
                          <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700">
                            Related Links (Internal Links)
                          </label>
                          <button
                            type="button"
                            onClick={() => {
                              setFormData(prev => ({
                                ...prev,
                                relatedLinks: [...prev.relatedLinks, { label: 'Our Services', href: '/services/' }]
                              }));
                            }}
                            className="text-xs font-semibold text-red-600 hover:text-red-700 flex items-center gap-1 cursor-pointer"
                          >
                            <Plus className="w-3.5 h-3.5" />
                            <span>+ Add Link</span>
                          </button>
                        </div>

                        <div className="space-y-2.5">
                          {formData.relatedLinks.map((link, idx) => (
                            <div key={idx} className="flex items-center gap-2">
                              <input
                                type="text"
                                value={link.label}
                                onChange={(e) => {
                                  const updated = [...formData.relatedLinks];
                                  updated[idx].label = e.target.value;
                                  setFormData(prev => ({ ...prev, relatedLinks: updated }));
                                }}
                                placeholder="Link Title (e.g. Web Development Services)"
                                className="flex-1 px-3 py-2 rounded-lg bg-white border border-slate-300 text-xs text-slate-800"
                              />
                              <input
                                type="text"
                                value={link.href}
                                onChange={(e) => {
                                  const updated = [...formData.relatedLinks];
                                  updated[idx].href = e.target.value;
                                  setFormData(prev => ({ ...prev, relatedLinks: updated }));
                                }}
                                placeholder="URL (e.g. /services/)"
                                className="flex-1 px-3 py-2 rounded-lg bg-white border border-slate-300 text-xs text-slate-600"
                              />
                              <button
                                type="button"
                                onClick={() => {
                                  setFormData(prev => ({
                                    ...prev,
                                    relatedLinks: prev.relatedLinks.filter((_, i) => i !== idx)
                                  }));
                                }}
                                className="p-2 text-slate-400 hover:text-red-600 cursor-pointer"
                              >
                                <Trash2 className="w-4 h-4" />
                              </button>
                            </div>
                          ))}
                        </div>
                      </div>

                    </div>

                    {/* Right: Category, Image & Details */}
                    <div className="lg:col-span-4 space-y-6">
                      
                      {/* SEO Score Quick Widget */}
                      <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-3">
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-semibold uppercase tracking-wider text-slate-700">Yoast SEO Score</span>
                          <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${
                            seoAnalysis.overallRating === 'good' ? 'bg-emerald-100 text-emerald-800' :
                            seoAnalysis.overallRating === 'ok' ? 'bg-amber-100 text-amber-800' : 'bg-red-100 text-red-800'
                          }`}>
                            {seoAnalysis.scorePercentage}%
                          </span>
                        </div>
                        <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                          <div 
                            className={`h-full transition-all duration-500 ${
                              seoAnalysis.overallRating === 'good' ? 'bg-emerald-500' :
                              seoAnalysis.overallRating === 'ok' ? 'bg-amber-500' : 'bg-red-500'
                            }`}
                            style={{ width: `${seoAnalysis.scorePercentage}%` }}
                          />
                        </div>
                        <div className="flex items-center justify-between text-[11px] text-slate-500 pt-1">
                          <span className="flex items-center gap-1">
                            <span className="w-2 h-2 rounded-full bg-emerald-500" /> {seoAnalysis.good.length} Good
                          </span>
                          <span className="flex items-center gap-1">
                            <span className="w-2 h-2 rounded-full bg-amber-500" /> {seoAnalysis.improvements.length} OK
                          </span>
                          <span className="flex items-center gap-1">
                            <span className="w-2 h-2 rounded-full bg-red-500" /> {seoAnalysis.problems.length} Need Work
                          </span>
                        </div>
                        <button
                          type="button"
                          onClick={() => setEditorSubTab('analysis')}
                          className="w-full mt-2 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold transition-colors cursor-pointer"
                        >
                          View Full SEO Analysis &rarr;
                        </button>
                      </div>

                      {/* Category */}
                      <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-3">
                        <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700">
                          Category
                        </label>
                        <div className="flex flex-wrap gap-1.5 mb-2">
                          {PRESET_CATEGORIES.map((c) => (
                            <button
                              key={c}
                              type="button"
                              onClick={() => setFormData(prev => ({ ...prev, category: c }))}
                              className={`px-3 py-1 rounded-lg text-xs transition-colors cursor-pointer ${
                                formData.category === c
                                  ? 'bg-red-600 text-white font-semibold'
                                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                              }`}
                            >
                              {c}
                            </button>
                          ))}
                        </div>
                        <input
                          type="text"
                          value={formData.category}
                          onChange={(e) => setFormData(prev => ({ ...prev, category: e.target.value }))}
                          placeholder="Or enter custom category..."
                          className="w-full px-3.5 py-2.5 rounded-lg bg-white border border-slate-300 text-xs text-slate-800"
                        />
                      </div>

                      {/* Cover Image */}
                      <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-4">
                        <div className="flex items-center justify-between">
                          <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700">
                            Cover Image
                          </label>
                          <span className="text-[10px] font-mono text-slate-400">16:9 Recommended</span>
                        </div>

                        {/* Preview */}
                        <div className="relative w-full aspect-[16/9] rounded-xl overflow-hidden bg-slate-100 border border-slate-200">
                          {formData.image ? (
                            <Image
                              src={formData.image}
                              alt="Cover Preview"
                              fill
                              className="object-cover"
                            />
                          ) : (
                            <div className="w-full h-full flex flex-col items-center justify-center text-slate-400 text-xs">
                              <ImageIcon className="w-8 h-8 mb-1 opacity-50" />
                              <span>No cover photo selected</span>
                            </div>
                          )}
                        </div>

                        {/* Upload from PC */}
                        <label className="w-full py-3 px-4 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 border border-slate-300 text-xs font-medium flex items-center justify-center gap-2 cursor-pointer transition-colors shadow-2xs">
                          {uploadingImage ? (
                            <RefreshCw className="w-4 h-4 text-red-600 animate-spin" />
                          ) : (
                            <Upload className="w-4 h-4 text-red-600" />
                          )}
                          <span>{uploadingImage ? 'Uploading Image...' : '📁 Upload Photo from Computer'}</span>
                          <input
                            type="file"
                            accept="image/*"
                            onChange={handleImageUpload}
                            className="hidden"
                            disabled={uploadingImage}
                          />
                        </label>

                        {/* Direct URL Input Toggle */}
                        <div className="space-y-1.5">
                          <button
                            type="button"
                            onClick={() => setShowUrlInput(prev => !prev)}
                            className="text-xs font-medium text-red-600 hover:text-red-700 flex items-center gap-1 cursor-pointer"
                          >
                            <LinkIcon className="w-3.5 h-3.5" />
                            <span>{showUrlInput ? 'Hide URL input' : 'Or paste direct image URL / link'}</span>
                          </button>

                          {showUrlInput && (
                            <div className="flex gap-2 pt-1">
                              <input
                                type="text"
                                value={customImageUrl || formData.image}
                                onChange={(e) => {
                                  setCustomImageUrl(e.target.value);
                                  setFormData(prev => ({ ...prev, image: e.target.value }));
                                }}
                                placeholder="https://... or /images/blog/photo.jpg"
                                className="flex-1 px-3 py-2 rounded-lg bg-white border border-slate-300 text-xs text-slate-800 focus:outline-none focus:border-red-600"
                              />
                            </div>
                          )}
                        </div>

                        {/* Preset Covers */}
                        <div>
                          <span className="text-xs text-slate-500 block mb-2 font-medium">Or choose ready image:</span>
                          <div className="grid grid-cols-3 gap-2">
                            {PRESET_IMAGES.map((preset, i) => (
                              <button
                                key={i}
                                type="button"
                                onClick={() => {
                                  setFormData(prev => ({ ...prev, image: preset.url }));
                                  setCustomImageUrl(preset.url);
                                }}
                                className={`relative aspect-[16/9] rounded-lg overflow-hidden border-2 transition-all cursor-pointer ${
                                  formData.image === preset.url ? 'border-red-600 scale-95 shadow-sm' : 'border-slate-200 opacity-70 hover:opacity-100'
                                }`}
                              >
                                <Image src={preset.url} alt={preset.label} fill className="object-cover" />
                              </button>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Metadata */}
                      <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-3.5">
                        <div>
                          <label className="block text-xs font-medium text-slate-600 mb-1">
                            Author Name
                          </label>
                          <input
                            type="text"
                            value={formData.author}
                            onChange={(e) => setFormData(prev => ({ ...prev, author: e.target.value }))}
                            className="w-full px-3 py-2 rounded-lg bg-white border border-slate-300 text-xs text-slate-800"
                          />
                        </div>

                        <div>
                          <label className="block text-xs font-medium text-slate-600 mb-1">
                            Reviewed By
                          </label>
                          <input
                            type="text"
                            value={formData.reviewedBy}
                            onChange={(e) => setFormData(prev => ({ ...prev, reviewedBy: e.target.value }))}
                            className="w-full px-3 py-2 rounded-lg bg-white border border-slate-300 text-xs text-slate-800"
                          />
                        </div>

                        <div>
                          <label className="block text-xs font-medium text-slate-600 mb-1">
                            Read Time
                          </label>
                          <input
                            type="text"
                            value={formData.readTime}
                            onChange={(e) => setFormData(prev => ({ ...prev, readTime: e.target.value }))}
                            placeholder="e.g. 5 min read"
                            className="w-full px-3 py-2 rounded-lg bg-white border border-slate-300 text-xs text-slate-800"
                          />
                        </div>
                      </div>

                    </div>

                  </div>
                )}

                {/* SUB-TAB 2: SEO SETTINGS & GOOGLE SNIPPET PREVIEW */}
                {editorSubTab === 'seo' && (
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                    
                    {/* Left: SEO Inputs */}
                    <div className="lg:col-span-7 space-y-6">
                      
                      {/* Focus Keyphrase */}
                      <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-2">
                        <div className="flex items-center justify-between">
                          <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700">
                            Focus Keyphrase
                          </label>
                          <span className="text-[11px] text-slate-400">
                            e.g. staff augmentation, web development
                          </span>
                        </div>
                        <input
                          type="text"
                          value={formData.focusKeyword}
                          onChange={(e) => setFormData(prev => ({ ...prev, focusKeyword: e.target.value }))}
                          placeholder="Enter your target keyword or phrase..."
                          className="w-full px-4 py-3 rounded-xl bg-white border border-slate-300 text-slate-900 text-sm font-medium focus:outline-none focus:border-red-600 focus:ring-2 focus:ring-red-500/10"
                        />
                        <p className="text-[11px] text-slate-500 pt-1">
                          This is the primary keyword or search phrase you want this post to rank for on Google.
                        </p>
                      </div>

                      {/* SEO Title */}
                      <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-2">
                        <div className="flex items-center justify-between">
                          <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700">
                            SEO Title (Google Title)
                          </label>
                          <span className={`text-[11px] font-medium ${
                            (formData.seoTitle || formData.title).length >= 35 && (formData.seoTitle || formData.title).length <= 60 
                              ? 'text-emerald-600' : 'text-slate-400'
                          }`}>
                            {(formData.seoTitle || formData.title).length} / 60 chars
                          </span>
                        </div>
                        <input
                          type="text"
                          value={formData.seoTitle}
                          onChange={(e) => setFormData(prev => ({ ...prev, seoTitle: e.target.value }))}
                          placeholder={formData.title ? `${formData.title} | WitQualis` : 'SEO Title...'}
                          className="w-full px-4 py-2.5 rounded-xl bg-white border border-slate-300 text-slate-900 text-sm focus:outline-none focus:border-red-600"
                        />
                        {/* Title length progress bar */}
                        <div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden">
                          <div 
                            className={`h-full ${
                              (formData.seoTitle || formData.title).length > 60 ? 'bg-red-500' :
                              (formData.seoTitle || formData.title).length >= 35 ? 'bg-emerald-500' : 'bg-amber-500'
                            }`}
                            style={{ width: `${Math.min(100, ((formData.seoTitle || formData.title).length / 60) * 100)}%` }}
                          />
                        </div>
                      </div>

                      {/* Meta Description */}
                      <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-2">
                        <div className="flex items-center justify-between">
                          <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700">
                            Meta Description (Google Description)
                          </label>
                          <span className={`text-[11px] font-medium ${
                            (formData.metaDescription || formData.excerpt).length >= 120 && (formData.metaDescription || formData.excerpt).length <= 160
                              ? 'text-emerald-600' : 'text-slate-400'
                          }`}>
                            {(formData.metaDescription || formData.excerpt).length} / 160 chars
                          </span>
                        </div>
                        <textarea
                          rows={4}
                          value={formData.metaDescription}
                          onChange={(e) => setFormData(prev => ({ ...prev, metaDescription: e.target.value }))}
                          placeholder={formData.excerpt || 'Google search snippet description...'}
                          className="w-full p-3.5 rounded-xl bg-white border border-slate-300 text-slate-800 text-xs leading-relaxed focus:outline-none focus:border-red-600"
                        />
                        {/* Description length progress bar */}
                        <div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden">
                          <div 
                            className={`h-full ${
                              (formData.metaDescription || formData.excerpt).length > 160 ? 'bg-red-500' :
                              (formData.metaDescription || formData.excerpt).length >= 120 ? 'bg-emerald-500' : 'bg-amber-500'
                            }`}
                            style={{ width: `${Math.min(100, ((formData.metaDescription || formData.excerpt).length / 160) * 100)}%` }}
                          />
                        </div>
                      </div>

                    </div>

                    {/* Right: Google Search Preview Box */}
                    <div className="lg:col-span-5 space-y-6">
                      
                      <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-4">
                        <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                          <span className="text-xs font-semibold uppercase tracking-wider text-slate-700 flex items-center gap-1.5">
                            <Globe className="w-4 h-4 text-slate-500" />
                            <span>Google Search Snippet Preview</span>
                          </span>

                          <div className="flex items-center gap-1 bg-slate-100 p-0.5 rounded-lg border border-slate-200">
                            <button
                              type="button"
                              onClick={() => setPreviewDevice('desktop')}
                              className={`p-1 rounded ${previewDevice === 'desktop' ? 'bg-white shadow-xs text-slate-900' : 'text-slate-500'}`}
                              title="Desktop Preview"
                            >
                              <Monitor className="w-3.5 h-3.5" />
                            </button>
                            <button
                              type="button"
                              onClick={() => setPreviewDevice('mobile')}
                              className={`p-1 rounded ${previewDevice === 'mobile' ? 'bg-white shadow-xs text-slate-900' : 'text-slate-500'}`}
                              title="Mobile Preview"
                            >
                              <Smartphone className="w-3.5 h-3.5" />
                            </button>
                          </div>
                        </div>

                        {/* Google Card Simulation */}
                        <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 space-y-1.5">
                          {/* Breadcrumb URL */}
                          <div className="flex items-center gap-1.5 text-xs text-slate-600">
                            <div className="w-4 h-4 rounded-full bg-red-600 text-white flex items-center justify-center text-[9px] font-bold">
                              W
                            </div>
                            <span className="font-medium text-slate-800">witqualis.com</span>
                            <span className="text-slate-400">&rsaquo;</span>
                            <span className="text-slate-500 text-[11px] truncate">blog &rsaquo; {formData.slug || 'slug'}</span>
                          </div>

                          {/* Blue Clickable Title */}
                          <h4 className="text-base text-[#1a0dab] font-medium leading-snug hover:underline cursor-pointer">
                            {formData.seoTitle || formData.title || 'Untitled Post | WitQualis'}
                          </h4>

                          {/* Snippet Description */}
                          <p className="text-xs text-[#4d5156] leading-relaxed line-clamp-3 font-sans">
                            {formData.metaDescription || formData.excerpt || 'Add a meta description to see how your article will appear in Google search results...'}
                          </p>
                        </div>

                        <div className="text-[11px] text-slate-500 space-y-1 pt-1">
                          <p>✓ This is how your post will look in Google search results.</p>
                          <p>✓ Keeping the keyphrase in title and description boosts search rankings.</p>
                        </div>
                      </div>

                    </div>

                  </div>
                )}

                {/* SUB-TAB 3: YOAST SEO ANALYSIS & CHECKLIST */}
                {editorSubTab === 'analysis' && (
                  <div className="space-y-6">
                    
                    {/* Overall Score Banner */}
                    <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                      <div className="flex items-center gap-4">
                        <div className={`w-16 h-16 rounded-2xl flex items-center justify-center text-white font-bold text-xl shadow-sm ${
                          seoAnalysis.overallRating === 'good' ? 'bg-emerald-600' :
                          seoAnalysis.overallRating === 'ok' ? 'bg-amber-500' : 'bg-red-600'
                        }`}>
                          {seoAnalysis.scorePercentage}%
                        </div>

                        <div>
                          <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
                            <span>Yoast SEO Content Score</span>
                            <span className={`text-xs px-2.5 py-0.5 rounded-full font-semibold ${
                              seoAnalysis.overallRating === 'good' ? 'bg-emerald-50 text-emerald-800 border border-emerald-200' :
                              seoAnalysis.overallRating === 'ok' ? 'bg-amber-50 text-amber-800 border border-amber-200' : 'bg-red-50 text-red-800 border border-red-200'
                            }`}>
                              {seoAnalysis.overallRating === 'good' ? '🟢 Good Result' :
                               seoAnalysis.overallRating === 'ok' ? '🟠 Needs Improvement' : '🔴 Needs Work'}
                            </span>
                          </h3>
                          <p className="text-xs text-slate-500 mt-1">
                            Focus Keyphrase: <strong className="text-slate-800">{formData.focusKeyword || '(Not set)'}</strong> • Total Words: <strong>{seoAnalysis.wordCount}</strong>
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center gap-3 w-full md:w-auto justify-between md:justify-end">
                        <div className="text-center px-4 py-2 bg-slate-50 rounded-xl border border-slate-200">
                          <span className="text-base font-bold text-red-600 block">{seoAnalysis.problems.length}</span>
                          <span className="text-[10px] text-slate-500 font-medium">Problems</span>
                        </div>
                        <div className="text-center px-4 py-2 bg-slate-50 rounded-xl border border-slate-200">
                          <span className="text-base font-bold text-amber-600 block">{seoAnalysis.improvements.length}</span>
                          <span className="text-[10px] text-slate-500 font-medium">Improvements</span>
                        </div>
                        <div className="text-center px-4 py-2 bg-slate-50 rounded-xl border border-slate-200">
                          <span className="text-base font-bold text-emerald-600 block">{seoAnalysis.good.length}</span>
                          <span className="text-[10px] text-slate-500 font-medium">Good</span>
                        </div>
                      </div>
                    </div>

                    {/* 1. PROBLEMS (RED DOTS) */}
                    {seoAnalysis.problems.length > 0 && (
                      <div className="p-6 rounded-2xl bg-white border border-red-200 shadow-xs space-y-4">
                        <div className="flex items-center gap-2 border-b border-red-100 pb-3">
                          <span className="w-3 h-3 rounded-full bg-red-600 shrink-0" />
                          <h4 className="text-sm font-bold text-red-900">
                            Problems ({seoAnalysis.problems.length})
                          </h4>
                          <span className="text-xs text-red-600 ml-auto font-medium">Needs Attention</span>
                        </div>

                        <div className="space-y-3">
                          {seoAnalysis.problems.map((item) => (
                            <div key={item.id} className="flex items-start gap-3 p-3 rounded-xl bg-red-50/60 border border-red-100">
                              <span className="w-2.5 h-2.5 rounded-full bg-red-600 shrink-0 mt-1" />
                              <div>
                                <h5 className="text-xs font-bold text-red-950">{item.title}</h5>
                                <p className="text-xs text-red-800 mt-0.5 leading-relaxed">{item.message}</p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* 2. IMPROVEMENTS (ORANGE DOTS) */}
                    {seoAnalysis.improvements.length > 0 && (
                      <div className="p-6 rounded-2xl bg-white border border-amber-200 shadow-xs space-y-4">
                        <div className="flex items-center gap-2 border-b border-amber-100 pb-3">
                          <span className="w-3 h-3 rounded-full bg-amber-500 shrink-0" />
                          <h4 className="text-sm font-bold text-amber-900">
                            Improvements ({seoAnalysis.improvements.length})
                          </h4>
                          <span className="text-xs text-amber-700 ml-auto font-medium">Recommendations</span>
                        </div>

                        <div className="space-y-3">
                          {seoAnalysis.improvements.map((item) => (
                            <div key={item.id} className="flex items-start gap-3 p-3 rounded-xl bg-amber-50/60 border border-amber-100">
                              <span className="w-2.5 h-2.5 rounded-full bg-amber-500 shrink-0 mt-1" />
                              <div>
                                <h5 className="text-xs font-bold text-amber-950">{item.title}</h5>
                                <p className="text-xs text-amber-800 mt-0.5 leading-relaxed">{item.message}</p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* 3. GOOD RESULTS (GREEN DOTS - YOAST STYLE) */}
                    <div className="p-6 rounded-2xl bg-white border border-emerald-200 shadow-xs space-y-4">
                      <div className="flex items-center gap-2 border-b border-emerald-100 pb-3">
                        <span className="w-3 h-3 rounded-full bg-emerald-600 shrink-0" />
                        <h4 className="text-sm font-bold text-emerald-900">
                          Good Results ({seoAnalysis.good.length})
                        </h4>
                        <span className="text-xs text-emerald-700 ml-auto font-medium">Passed Checks ✓</span>
                      </div>

                      {seoAnalysis.good.length > 0 ? (
                        <div className="space-y-3">
                          {seoAnalysis.good.map((item) => (
                            <div key={item.id} className="flex items-start gap-3 p-3 rounded-xl bg-emerald-50/50 border border-emerald-100">
                              <span className="w-2.5 h-2.5 rounded-full bg-emerald-600 shrink-0 mt-1" />
                              <div>
                                <h5 className="text-xs font-bold text-emerald-950">{item.title}</h5>
                                <p className="text-xs text-emerald-800 mt-0.5 leading-relaxed">{item.message}</p>
                              </div>
                            </div>
                          ))}
                        </div>
                      ) : (
                        <p className="text-xs text-slate-500 italic">Fill out the form to start passing SEO criteria.</p>
                      )}
                    </div>

                  </div>
                )}

              </div>
            )}

          </form>
        )}

      </div>
    </main>
  );
}
