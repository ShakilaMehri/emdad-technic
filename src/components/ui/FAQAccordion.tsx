"use client";

import { useState } from "react";

interface FAQAccordionProps {
  id?: string;
  question: string;
  answer: string;
}

export default function FAQAccordion({
  id,
  question,
  answer,
}: FAQAccordionProps) {
  const [isOpen, setIsOpen] = useState(false);

  const fallbackId = (question || "faq")
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "") || "faq";
  const itemId = id || fallbackId;
  const contentId = `faq-content-${itemId}`;
  const buttonId = `faq-button-${itemId}`;

  return (
    <div className="faq-item">
      <button
        id={buttonId}
        className="faq-button"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-controls={contentId}
      >
        <span className="faq-question">{question}</span>
        
        <div className={`faq-icon ${isOpen ? "faq-icon-open" : ""}`}>
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 4v16m8-8H4"
            />
          </svg>
        </div>
      </button>

      {isOpen && (
        <div
          id={contentId}
          className="faq-answer"
          role="region"
          aria-labelledby={buttonId}
        >
          <p className="text-text-secondary leading-relaxed">{answer}</p>
        </div>
      )}
    </div>
  );
}
