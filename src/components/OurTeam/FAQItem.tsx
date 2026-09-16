// src/components/OurTeam/FAQItem.tsx
'use client';

import React from 'react';

export interface FAQItemType {
  question: string;
  answer: string;
}

interface FAQItemProps {
  item: FAQItemType;
  index: number;
  openIndex: number | null;
  onToggle: (index: number) => void;
}

export default function FAQItem({ item, index, openIndex, onToggle }: FAQItemProps) {
  const isOpen = openIndex === index;

  return (
    <div className={`wq-faq-item ${isOpen ? 'is-open' : ''}`}>
      <button
        type="button"
        className="wq-faq-question"
        onClick={() => onToggle(index)}
        aria-expanded={isOpen}
      >
        <span>{item.question}</span>
        <span className="wq-faq-icon">{isOpen ? '−' : '+'}</span>
      </button>
      {isOpen && (
        <div className="wq-faq-answer">
          <p>{item.answer}</p>
        </div>
      )}
    </div>
  );
}