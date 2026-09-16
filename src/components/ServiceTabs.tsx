'use client';

import Link from 'next/link';
import { useState } from 'react';

type Tab = {
  key: string;
  label: string;
  title: string;
  body: string;
  points: string[];
  href: string;
};

const tabs: Tab[] = [
  {
    key: 'web',
    label: 'Web Development',
    title: 'Web applications built for the load you\u2019ll actually have',
    body: 'React, Node, Laravel, and .NET builds \u2014 architected for the traffic you\u2019re expecting in a year, not just the demo you need next week.',
    points: ['Custom web applications', 'API development & integration', 'E-commerce platforms'],
    href: '/services/web-development/'
  },
  {
    key: 'app',
    label: 'App Development',
    title: 'Apps that feel native because they are',
    body: 'Native iOS and Android, or React Native and Flutter when you need both stores from one codebase.',
    points: ['Native iOS & Android', 'Cross-platform (React Native / Flutter)', 'App Store & Play Store launch support'],
    href: '/services/app-development/'
  },
  {
    key: 'ai',
    label: 'AI Development',
    title: 'AI features that survive contact with real users',
    body: 'From feasibility audits to production-grade LLM integrations, RAG pipelines, and monitored model deployment.',
    points: ['LLM integration & RAG pipelines', 'Custom model development', 'AI consulting & roadmaps'],
    href: '/solutions/ai-development/'
  },
  {
    key: 'design',
    label: 'Design',
    title: 'Interfaces your dev team can build without guessing',
    body: 'UX research, design systems, and prototypes with a clean handoff \u2014 no ambiguous mockups.',
    points: ['UX research & wireframing', 'Design systems', 'Interactive prototypes'],
    href: '/services/design/'
  }
];

export default function ServiceTabs() {
  const [active, setActive] = useState(tabs[0].key);
  const tab = tabs.find((t) => t.key === active)!;

  return (
    <div>
      <div className="flex flex-wrap gap-2 rounded-full border border-ink/10 bg-white p-1.5">
        {tabs.map((t) => (
          <button
            key={t.key}
            onClick={() => setActive(t.key)}
            className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
              active === t.key ? 'bg-ink text-white' : 'text-ink/60 hover:text-teal-dark'
            }`}
          >
            {t.label}
          </button>
        ))}
      </div>

      <div className="mt-8 grid gap-8 rounded-2xl border border-ink/10 bg-white p-8 lg:grid-cols-2">
        <div>
          <h3 className="font-display text-2xl font-bold">{tab.title}</h3>
          <p className="mt-3 text-sm text-ink/60">{tab.body}</p>
          <Link href={tab.href} className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-teal-dark">
            Explore {tab.label} &rarr;
          </Link>
        </div>
        <ul className="space-y-3">
          {tab.points.map((p) => (
            <li key={p} className="flex gap-3 rounded-xl bg-paper p-4 text-sm text-ink/70">
              <span className="mt-1 h-2 w-2 flex-none rounded-full bg-teal" />
              {p}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
