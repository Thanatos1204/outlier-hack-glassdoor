// File: components/FAQSection.tsx
"use client";

import { useState } from 'react';
import Link from 'next/link';

export default function FAQSection() {
  const [expandedQuestion, setExpandedQuestion] = useState<number | null>(null);
  
  const faqCategories = [
    'Benefits',
    'Career Development',
    'Compensation',
    'Coworkers',
    'Culture',
    'Management',
    'Work Life Balance',
    'Workplace'
  ];
  
  const faqQuestions = [
    {
      id: 1,
      question: 'What is the salary like at Maxgen Technologies?',
      date: '9 Nov 2022',
      answer: '...Very bad pay compared to other companies and no growth....',
      expanded: false
    },
    {
      id: 2,
      question: 'How do employees rate Maxgen Technologies?',
      expanded: false
    },
    {
      id: 3,
      question: 'How can I get a job at Maxgen Technologies?',
      expanded: false
    },
    {
      id: 4,
      question: 'Do people recommend working at Maxgen Technologies?',
      expanded: false
    },
    {
      id: 5,
      question: 'How do job seekers rate their interview experience at Maxgen Technologies?',
      expanded: false
    }
  ];
  
  const toggleQuestion = (id: number) => {
    setExpandedQuestion(expandedQuestion === id ? null : id);
  };
  
  return (
    <div className="mt-6 bg-white border border-gray-200 rounded-lg p-6">
      <h2 className="text-xl font-bold text-gray-900 mb-4">Maxgen Technologies FAQ</h2>
      <p className="text-gray-700 mb-6">
        All answers shown come directly from <Link href="#" className="text-green-600 hover:underline">Maxgen Technologies Reviews</Link> and are not edited or altered.
      </p>
      
      <div className="mb-6">
        <h3 className="text-gray-900 font-medium mb-4">See questions about</h3>
        <div className="flex flex-wrap gap-3">
          {faqCategories.map((category, index) => (
            <Link
              key={index}
              href="#"
              className="px-3 py-1 bg-white border border-green-600 text-green-600 rounded-full hover:bg-green-50"
            >
              {category}
            </Link>
          ))}
        </div>
      </div>
      
      <div className="border-t border-gray-200 pt-6">
        <div>
          <div className="flex justify-between items-center mb-2">
            <h3 className="text-gray-900 font-medium">What is the salary like at Maxgen Technologies?</h3>
            <span className="text-gray-500 text-sm">9 Nov 2022</span>
          </div>
          <p className="text-gray-700 mb-2">...Very bad pay compared to other companies and no growth....</p>
          <Link href="#" className="text-green-600 font-medium hover:underline">
            Read more
          </Link>
        </div>
        
        <div className="mt-6 text-right">
          <Link href="#" className="text-green-600 font-medium flex items-center justify-end">
            See all 18 FAQ
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
      
      <div className="mt-8 border-t border-gray-200 pt-6">
        <h2 className="text-xl font-bold text-gray-900 mb-4">People also ask about Maxgen Technologies</h2>
        
        <div className="space-y-1">
          {faqQuestions.slice(1).map((question) => (
            <div key={question.id} className="border-b border-gray-200">
              <button
                className="w-full py-4 flex items-center justify-between text-left"
                onClick={() => toggleQuestion(question.id)}
              >
                <span className="text-gray-900 font-medium">{question.question}</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={`h-5 w-5 text-gray-500 transition-transform ${expandedQuestion === question.id ? 'transform rotate-180' : ''}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {expandedQuestion === question.id && (
                <div className="pb-4 text-gray-700">
                  <p>This is the answer to the question about {question.question.toLowerCase()}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}