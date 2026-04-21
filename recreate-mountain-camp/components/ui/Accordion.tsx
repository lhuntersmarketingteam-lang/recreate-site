'use client';

import { useId, useRef, useState, type KeyboardEvent } from 'react';

export interface AccordionItemData {
  question: string;
  answer: string;
}

interface AccordionProps {
  items: AccordionItemData[];
}

export function Accordion({ items }: AccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const buttonsRef = useRef<Array<HTMLButtonElement | null>>([]);
  const baseId = useId();

  const toggle = (i: number) => {
    setOpenIndex((current) => (current === i ? null : i));
  };

  const onKeyDown = (e: KeyboardEvent<HTMLButtonElement>, i: number) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      const next = (i + 1) % items.length;
      buttonsRef.current[next]?.focus();
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      const prev = (i - 1 + items.length) % items.length;
      buttonsRef.current[prev]?.focus();
    } else if (e.key === 'Home') {
      e.preventDefault();
      buttonsRef.current[0]?.focus();
    } else if (e.key === 'End') {
      e.preventDefault();
      buttonsRef.current[items.length - 1]?.focus();
    }
  };

  return (
    <div className="faq__list" role="list">
      {items.map((item, i) => {
        const open = openIndex === i;
        const qId = `${baseId}-q-${i}`;
        const aId = `${baseId}-a-${i}`;
        return (
          <div key={i} className={`faq__item${open ? ' open' : ''}`} role="listitem">
            <button
              id={qId}
              ref={(el) => {
                buttonsRef.current[i] = el;
              }}
              className="faq__question"
              aria-expanded={open}
              aria-controls={aId}
              onClick={() => toggle(i)}
              onKeyDown={(e) => onKeyDown(e, i)}
              type="button"
            >
              <span>{item.question}</span>
              <span className="faq__icon" aria-hidden="true" />
            </button>
            <div
              id={aId}
              role="region"
              aria-labelledby={qId}
              aria-hidden={!open}
              className="faq__answer"
            >
              <div className="faq__answer-inner">{item.answer}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
