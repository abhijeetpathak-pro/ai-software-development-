// FAQ.tsx
import React, { 
  useState, 
  useRef, 
  useEffect, 
  useMemo, 
  useCallback, 
  useTransition,
  useDeferredValue,
  lazy,
  Suspense,
  FC,
  ChangeEvent,
  memo
} from 'react';
import './FAQ.css';

// ============== TYPES ==============
interface FAQItem {
  id: number;
  question: string;
  answer: string;
  category: string;
  keywords: string[];
  icon: string;
}

interface FAQProps {
  title?: string;
  subtitle?: string;
  ctaText?: string;
  onContactClick?: () => void;
  initialCategory?: string;
  theme?: 'dark' | 'light';
}

interface FAQState {
  activeIndex: number | null;
  searchTerm: string;
  selectedCategory: string;
}

// ============== FAQ COMPONENT ==============
const FAQ: FC<FAQProps> = memo(({ 
  title = 'Frequently Asked Questions',
  subtitle = 'Find answers to common questions about our data consultancy, training, and support services',
  ctaText = 'Contact Us',
  onContactClick,
  initialCategory = 'All',
  theme = 'dark'
}) => {
  // ============== STATE ==============
  const [state, setState] = useState<FAQState>({
    activeIndex: null,
    searchTerm: '',
    selectedCategory: initialCategory
  });
  
  const [isPending, startTransition] = useTransition();
  const contentRefs = useRef<Map<number, HTMLDivElement>>(new Map());

  // ============== DATA ==============
  const faqs: FAQItem[] = useMemo(() => [
    {
      id: 1,
      question: 'What types of data consultancy services do you offer?',
      answer: 'We offer a full range of data consultancy services including data strategy development, data governance frameworks, business intelligence solutions, predictive analytics, data visualization, ETL pipeline optimization, and custom data architecture design. Our team helps organizations leverage their data assets for strategic decision-making and competitive advantage.',
      category: 'Services',
      keywords: ['data consultancy', 'data strategy', 'business intelligence', 'predictive analytics', 'data governance'],
      icon: '📊'
    },
    {
      id: 2,
      question: 'How does your training program work for businesses?',
      answer: 'Our training programs are customized to your business needs and include hands-on workshops, online learning modules, certification programs, and ongoing support. We cover topics like data literacy, advanced analytics, machine learning basics, data storytelling, and practical implementation strategies. Training is delivered by industry experts with real-world experience.',
      category: 'Training',
      keywords: ['training program', 'workshops', 'certification', 'data literacy', 'analytics training'],
      icon: '🎓'
    },
    {
      id: 3,
      question: 'What industries do you specialize in for data consultation?',
      answer: 'We specialize across multiple industries including healthcare, finance, retail, e-commerce, manufacturing, technology, education, and government sectors. Each industry has unique data challenges and opportunities, and our consultants bring deep domain expertise to deliver tailored solutions that drive measurable business outcomes.',
      category: 'Industries',
      keywords: ['healthcare data', 'finance analytics', 'retail insights', 'manufacturing optimization', 'industry expertise'],
      icon: '🏭'
    },
    {
      id: 4,
      question: 'How long does a typical data consultancy project take?',
      answer: 'Project timelines vary based on scope and complexity. A typical data strategy project takes 4-8 weeks, while implementation and training programs can range from 3-6 months. We follow an agile methodology with regular milestones and deliverables. We also offer quick-start packages for businesses needing immediate insights.',
      category: 'Process',
      keywords: ['project timeline', 'implementation', 'agile methodology', 'quick-start', 'deliverables'],
      icon: '⏱️'
    },
    {
      id: 5,
      question: 'What makes your data consultancy different from others?',
      answer: 'Our unique approach combines technical excellence with business strategy. We don\'t just deliver data solutions; we ensure they drive real business value. Our consultants have both technical expertise and industry experience, enabling us to translate complex data insights into actionable business strategies. We focus on long-term partnerships and continuous improvement.',
      category: 'Why Us',
      keywords: ['unique approach', 'business value', 'technical expertise', 'partnership', 'continuous improvement'],
      icon: '⭐'
    },
    {
      id: 6,
      question: 'Do you offer ongoing support after project completion?',
      answer: 'Yes, we provide comprehensive post-project support including maintenance, monitoring, optimization, and advisory services. We offer flexible support packages ranging from on-demand consulting to dedicated account management. Our goal is to ensure your data initiatives continue delivering value long after the initial project is complete.',
      category: 'Support',
      keywords: ['ongoing support', 'maintenance', 'optimization', 'advisory services', 'account management'],
      icon: '🛠️'
    },
    {
      id: 7,
      question: 'How do you ensure data security and privacy compliance?',
      answer: 'We follow industry best practices and comply with global data protection regulations including GDPR, CCPA, HIPAA, and other relevant standards. Our security framework includes encryption, access controls, regular audits, and employee training. We also help our clients establish robust data governance policies to maintain compliance.',
      category: 'Security',
      keywords: ['data security', 'privacy compliance', 'GDPR', 'CCPA', 'HIPAA', 'data governance'],
      icon: '🔒'
    },
    {
      id: 8,
      question: 'What is the cost structure for your consultancy services?',
      answer: 'We offer flexible pricing models including fixed-price projects, time-and-materials, retainer-based engagements, and outcome-based partnerships. Costs depend on project scope, duration, and complexity. We provide detailed proposals with transparent pricing and no hidden fees. Free initial consultations are available to discuss your specific needs.',
      category: 'Pricing',
      keywords: ['pricing models', 'cost structure', 'fixed-price', 'retainer', 'transparent pricing'],
      icon: '💰'
    }
  ], []);

  // ============== DERIVED STATE ==============
  const categories: string[] = useMemo(() => 
    ['All', ...new Set(faqs.map((faq: FAQItem) => faq.category))],
    [faqs]
  );

  // Deferred search for better performance
  const deferredSearchTerm = useDeferredValue(state.searchTerm);

  // Filtered FAQs with useMemo for performance
  const filteredFAQs: FAQItem[] = useMemo(() => {
    return faqs.filter((faq) => {
      const matchesSearch = deferredSearchTerm.trim() === '' || 
        faq.question.toLowerCase().includes(deferredSearchTerm.toLowerCase()) ||
        faq.answer.toLowerCase().includes(deferredSearchTerm.toLowerCase()) ||
        faq.category.toLowerCase().includes(deferredSearchTerm.toLowerCase()) ||
        faq.keywords.some((keyword: string) => 
          keyword.toLowerCase().includes(deferredSearchTerm.toLowerCase())
        );
      
      const matchesCategory = state.selectedCategory === 'All' || 
        faq.category === state.selectedCategory;
      
      return matchesSearch && matchesCategory;
    });
  }, [faqs, deferredSearchTerm, state.selectedCategory]);

  // ============== HANDLERS ==============
  const toggleFAQ = useCallback((index: number): void => {
    setState(prev => ({
      ...prev,
      activeIndex: prev.activeIndex === index ? null : index
    }));
  }, []);

  const handleSearchChange = useCallback((e: ChangeEvent<HTMLInputElement>): void => {
    startTransition(() => {
      setState(prev => ({
        ...prev,
        searchTerm: e.target.value,
        activeIndex: null
      }));
    });
  }, []);

  const clearSearch = useCallback((): void => {
    startTransition(() => {
      setState(prev => ({
        ...prev,
        searchTerm: '',
        activeIndex: null
      }));
    });
  }, []);

  const handleCategorySelect = useCallback((category: string): void => {
    setState(prev => ({
      ...prev,
      selectedCategory: category,
      activeIndex: null
    }));
  }, []);

  const handleKeywordClick = useCallback((keyword: string): void => {
    setState(prev => ({
      ...prev,
      searchTerm: keyword,
      activeIndex: null
    }));
  }, []);

  const clearAllFilters = useCallback((): void => {
    setState({
      activeIndex: null,
      searchTerm: '',
      selectedCategory: 'All'
    });
  }, []);

  // ============== EFFECTS ==============
  // Auto-close FAQ on filter change
  useEffect(() => {
    setState(prev => ({ ...prev, activeIndex: null }));
  }, [state.searchTerm, state.selectedCategory]);

  // ============== RENDER ==============
  return (
    <section className={`faq-wrapper ${theme}`}>
      {/* Animated Background */}
      <div className="faq-bg-particles">
        <div className="faq-particle fp1"></div>
        <div className="faq-particle fp2"></div>
        <div className="faq-particle fp3"></div>
        <div className="faq-particle fp4"></div>
        <div className="faq-particle fp5"></div>
      </div>

      <div className="faq-container">
        {/* Header Section */}
        <div className="faq-header">
          <div className="faq-badge">
            <span className="faq-badge-icon">❓</span>
            <span>FAQ</span>
          </div>
          <h2 className="faq-title">
            <span className="faq-gradient-text">Frequently Asked</span>
            <span className="faq-highlight-text"> Questions</span>
          </h2>
          <p className="faq-subtitle">
            {subtitle}
          </p>

          {/* Search Bar */}
          <div className="faq-search-container">
            <div className="faq-search-box">
              <span className="faq-search-icon">🔍</span>
              <input
                type="text"
                className="faq-search-input"
                placeholder="Search questions, topics, or keywords..."
                value={state.searchTerm}
                onChange={handleSearchChange}
                aria-label="Search FAQs"
              />
              {state.searchTerm && (
                <button 
                  className="faq-clear-search"
                  onClick={clearSearch}
                  aria-label="Clear search"
                >
                  ✕
                </button>
              )}
              {isPending && <span className="faq-search-loading">...</span>}
            </div>
          </div>

          {/* Category Filters */}
          <div className="faq-categories">
            {categories.map((category: string, index: number) => (
              <button
                key={index}
                className={`faq-category-btn ${state.selectedCategory === category ? 'active' : ''}`}
                onClick={() => handleCategorySelect(category)}
                aria-pressed={state.selectedCategory === category}
              >
                {category === 'All' ? '📋 All' : category}
              </button>
            ))}
          </div>

          {/* Results Count */}
          <div className="faq-results-count">
            {filteredFAQs.length} {filteredFAQs.length === 1 ? 'question' : 'questions'} found
          </div>
        </div>

        {/* FAQ List */}
        <div className="faq-list">
          {filteredFAQs.length > 0 ? (
            filteredFAQs.map((faq: FAQItem, index: number) => (
              <div 
                key={faq.id} 
                className={`faq-item ${state.activeIndex === index ? 'active' : ''}`}
                style={{ animationDelay: `${index * 0.1}s` }}
                role="listitem"
              >
                <button
                  className="faq-question"
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={state.activeIndex === index}
                  aria-controls={`faq-answer-${faq.id}`}
                >
                  <div className="faq-question-content">
                    <span className="faq-icon">{faq.icon}</span>
                    <span className="faq-question-text">{faq.question}</span>
                  </div>
                  <div className="faq-question-right">
                    <span className="faq-category-tag">{faq.category}</span>
                    <span className={`faq-toggle-icon ${state.activeIndex === index ? 'rotated' : ''}`}>
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <polyline points="6 9 12 15 18 9" />
                      </svg>
                    </span>
                  </div>
                </button>
                
                <div 
                  id={`faq-answer-${faq.id}`}
                  className="faq-answer-wrapper"
                  ref={(el: HTMLDivElement | null) => {
                    if (el) contentRefs.current.set(index, el);
                  }}
                  style={{
                    maxHeight: state.activeIndex === index ? 
                      `${contentRefs.current.get(index)?.scrollHeight || 500}px` : '0px'
                  }}
                  role="region"
                  aria-labelledby={`faq-question-${faq.id}`}
                >
                  <div className="faq-answer">
                    <p>{faq.answer}</p>
                    <div className="faq-keywords">
                      <span className="faq-keywords-label">Related Topics:</span>
                      {faq.keywords.map((keyword: string, i: number) => (
                        <span 
                          key={i} 
                          className="faq-keyword"
                          onClick={() => handleKeywordClick(keyword)}
                          role="button"
                          tabIndex={0}
                        >
                          #{keyword}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="faq-no-results">
              <span className="faq-no-results-icon">🔍</span>
              <h3>No questions found</h3>
              <p>Try adjusting your search terms or browse our categories above</p>
              <button onClick={clearAllFilters}>
                Clear Filters
              </button>
            </div>
          )}
        </div>

        {/* Footer CTA */}
        <div className="faq-cta">
          <div className="faq-cta-content">
            <h3>Still have questions?</h3>
            <p>Our team is here to help you with any specific queries about our services</p>
          </div>
          <button className="faq-cta-btn" onClick={onContactClick}>
            <span>{ctaText}</span>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
});

FAQ.displayName = 'FAQ';

export default FAQ;