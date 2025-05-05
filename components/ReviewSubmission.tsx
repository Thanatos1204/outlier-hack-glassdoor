// File: components/ReviewSubmission.tsx
"use client";

import { useState } from 'react';

export default function ReviewSubmission() {
  const [rating, setRating] = useState(0);
  const [review, setReview] = useState('');
  
  return (
    <div className="mt-6 bg-white border border-gray-200 rounded-lg p-6">
      <h2 className="text-xl font-bold text-gray-900 mb-6">Work at Maxgen Technologies? Share your experiences</h2>
      
      <div className="flex items-center mb-6">
        <div className="mr-6">
          <div className="flex items-center mb-1">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-blue-800" viewBox="0 0 100 100" fill="currentColor">
              <path d="M20 20 L80 20 L60 80 L40 80 Z" />
              <path d="M30 30 L70 30 L70 50 L30 50 Z" />
            </svg>
          </div>
          <h3 className="text-lg font-medium text-gray-900">Maxgen Technologies</h3>
        </div>
        
        <div>
          <div className="flex items-center mb-1">
            {[1, 2, 3, 4, 5].map((star) => (
              <button
                key={star}
                className="w-8 h-8 text-gray-300 hover:text-yellow-400"
                onClick={() => setRating(star)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill={star <= rating ? 'currentColor' : 'none'}
                  stroke="currentColor"
                  className="w-full h-full"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={star <= rating ? 0 : 2}
                    d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                  />
                </svg>
              </button>
            ))}
          </div>
          <p className="text-gray-500 text-sm">Select a star to rate</p>
        </div>
      </div>
      
      <div className="mb-6">
        <p className="mb-2 text-gray-900 font-medium">Start your review</p>
        <textarea
          className="w-full p-4 border border-gray-300 rounded-md h-32 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
          placeholder="Share details of your experiences"
          value={review}
          onChange={(e) => setReview(e.target.value)}
        ></textarea>
      </div>
      
      <div className="flex flex-wrap gap-3">
        <button className="px-4 py-2 border border-gray-300 rounded-md font-medium text-gray-800 hover:bg-gray-50">
          Add salary
        </button>
        <button className="px-4 py-2 border border-gray-300 rounded-md font-medium text-gray-800 hover:bg-gray-50">
          Add interview
        </button>
        <button className="px-4 py-2 border border-gray-300 rounded-md font-medium text-gray-800 hover:bg-gray-50">
          Add Benefits
        </button>
      </div>
    </div>
  );
}