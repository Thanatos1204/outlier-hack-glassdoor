// File: components/InterviewsSection.tsx
"use client";

import { useState } from 'react';

export default function InterviewsSection() {
  const [expanded, setExpanded] = useState(false);
  
  return (
    <div className="mt-6 bg-white border border-gray-200 rounded-lg p-6">
      <h2 className="text-xl font-bold text-gray-900 mb-4">Interviews at Maxgen Technologies</h2>
      
      <div className="flex items-baseline mb-6">
        <span className="text-5xl font-bold text-gray-900 mr-2">2.7</span>
        <div className="flex items-center">
          <span className="text-gray-700">/5 difficulty</span>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        {/* Interview Experience Chart */}
        <div>
          <h3 className="text-lg font-medium text-gray-900 mb-4">Interview experience</h3>
          <div className="h-8 bg-gray-200 rounded-md overflow-hidden flex mb-2">
            <div className="bg-green-500 h-full w-[55%] flex items-center justify-center text-white text-sm font-medium">
              55% Positive
            </div>
            <div className="h-full w-[13%] bg-gray-300"></div>
            <div className="bg-red-500 h-full w-[32%] flex items-center justify-center text-white text-sm font-medium">
              Negative 32%
            </div>
          </div>
        </div>
        
        {/* How Others Got Interview */}
        <div>
          <h3 className="text-lg font-medium text-gray-900 mb-4">How others got an interview</h3>
          <div className="space-y-3">
            <div className="flex items-center">
              <span className="w-8 text-right mr-2 text-gray-700 font-medium">67%</span>
              <span className="w-24 text-gray-700 mr-2">Applied online</span>
              <div className="flex-1 h-4 bg-gray-200 rounded overflow-hidden">
                <div className="bg-gray-700 h-full w-[67%]"></div>
              </div>
            </div>
            <div className="flex items-center">
              <span className="w-8 text-right mr-2 text-gray-700 font-medium">13%</span>
              <span className="w-24 text-gray-700 mr-2">Employee referral</span>
              <div className="flex-1 h-4 bg-gray-200 rounded overflow-hidden">
                <div className="bg-gray-700 h-full w-[13%]"></div>
              </div>
            </div>
            <div className="flex items-center">
              <span className="w-8 text-right mr-2 text-gray-700 font-medium">9%</span>
              <span className="w-24 text-gray-700 mr-2">In person</span>
              <div className="flex-1 h-4 bg-gray-200 rounded overflow-hidden">
                <div className="bg-gray-700 h-full w-[9%]"></div>
              </div>
            </div>
          </div>
          <button className="mt-4 text-green-600 font-medium flex items-center">
            Show all
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </div>
      </div>
      
      {/* Python Developer Interview */}
      <div className="border-t border-gray-200 pt-6">
        <h3 className="text-lg font-medium text-gray-900 mb-3">Python Developer Interview</h3>
        <div className="flex items-center mb-2">
          <div className="mr-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
          </div>
          <span className="text-gray-700">Anonymous interview candidate</span>
        </div>
        
        <div className="flex items-center mb-4">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          <span className="text-gray-700">Ahmedabad</span>
        </div>
        
        <div className="flex flex-wrap gap-4 mb-6">
          <div className="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-600 mr-1" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
            <span className="text-gray-700">Declined offer</span>
          </div>
          <div className="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-600 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span className="text-gray-700">Positive experience</span>
          </div>
          <div className="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-600 mr-1" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
            </svg>
            <span className="text-gray-700">Average interview</span>
          </div>
        </div>
        
        <div className="mb-4">
          <h4 className="font-medium text-gray-900 mb-2">Application</h4>
          <p className="text-gray-700">I interviewed at Maxgen Technologies (Ahmedabad)</p>
        </div>
        
        <div className="mb-4">
          <h4 className="font-medium text-gray-900 mb-2">Interview</h4>
          <p className="text-gray-700">
            I went for an interview where the HR asked me theoretical questions about Python. I was able to answer some but not all of them. After that, the HR offered me their paid internship program, which is a 6-month internship with a "100% placement guarantee." She told me that if I wanted to join, I would need to pay...
          </p>
          <button 
            className="text-green-600 text-sm font-medium mt-1"
            onClick={() => setExpanded(!expanded)}
          >
            read more
          </button>
        </div>
        
        {expanded && (
          <div className="mb-4">
            <h4 className="font-medium text-gray-900 mb-2">Interview questions [1]</h4>
            <div className="mb-2">
              <p className="text-gray-700">Question 1</p>
              <p className="text-gray-900 font-medium">what is PEP 8 in python?</p>
            </div>
            <a href="#" className="text-green-600 font-medium flex items-center">
              1 Answer
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        )}
      </div>
    </div>
  );
}