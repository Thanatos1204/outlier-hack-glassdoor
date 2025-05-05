// File: components/CompanyReviews.tsx
"use client";

import { useState } from 'react';

export default function CompanyReviews() {
  const [expanded, setExpanded] = useState(false);
  
  // Mock reviews data
  const reviews = [
    {
        id: 1,
        rating: 2.5,
        title: "Python Developer",
        role: "Software Engineer",
        status: "Former employee, 1-3 years",
        location: "Ahmedabad",
        recommend: false,
        ceoApproval: false,
        businessOutlook: false,
        pros: "Good place to get initial experience if you're a fresher or have limited options.",
        cons: "Toxic work environment with micromanagement. Poor work-life balance and unpaid overtime is common. No growth opportunities.",
        hasRedFlag: true
      },
    {
      id: 2,
      rating: 5.0,
      title: "AWS Devops Professional",
      role: "Devops engineer",
      status: "Current employee, less than 1 year",
      location: "Pune",
      recommend: true,
      ceoApproval: false,
      businessOutlook: true,
      pros: "This is a good experience working as devops engineer in this company. They give great opportunities to learn and grow professionally.",
      cons: "I got nice work experience no cons for this place.",
      hasRedFlag: false
    }
    
  ];
  
  // List of red flag words to detect
  const redFlagWords = ["toxic", "micromanagement", "unpaid", "no growth", "poor work-life", "overwork"];
  
  // Function to check if a review has red flags
  const checkForRedFlags = (cons: string) => {
    return redFlagWords.some(word => cons.toLowerCase().includes(word.toLowerCase()));
  };
  
  // Function to highlight red flag words in text
  const highlightRedFlags = (text: string) => {
    let highlightedText = text;
    
    // Create a regex that matches any of the red flag words (case insensitive)
    const redFlagRegex = new RegExp(`(${redFlagWords.join('|')})`, 'gi');
    
    // Replace matches with highlighted spans
    highlightedText = highlightedText.replace(redFlagRegex, (match) => {
      return `<span class="bg-red-100 text-red-700 px-1 rounded">${match}</span>`;
    });
    
    return { __html: highlightedText };
  };
  
  // Current review display (in a real app, we'd show multiple)
  const currentReview = expanded ? reviews[1] : reviews[0];
  
  // Determine if current review has red flags
  const hasRedFlags = checkForRedFlags(currentReview.cons);
  
  return (
    <div className="mt-6 bg-white border border-gray-200 rounded-lg p-6">
      <div className="mb-2 flex items-start">
        <div className="mr-4">
          <div className="text-xl font-bold text-gray-900">{currentReview.rating.toFixed(1)} 
            <span className="text-gray-600 ml-2">
              {[...Array(5)].map((_, index) => (
                <svg 
                  key={index}
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-5 w-5 inline" 
                  fill={index < Math.floor(currentReview.rating) ? "currentColor" : "none"} 
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={index < Math.floor(currentReview.rating) ? 0 : 2} d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                </svg>
              ))}
            </span>
          </div>
          <h2 className="text-lg font-bold mt-2">{currentReview.title}</h2>
        </div>
      </div>
      
      <div className="mb-4">
        <div className="flex items-center mb-2">
          <div className="mr-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
          </div>
          <span className="text-gray-700 font-medium">{currentReview.role}</span>
        </div>
        <div className="flex items-center text-sm text-gray-600 mb-4">
          <span className="mr-4">{currentReview.status}</span>
          <div className="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <span>{currentReview.location}</span>
          </div>
        </div>
        
        <div className="flex flex-wrap gap-4 mb-6">
          <div className="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className={`h-5 w-5 ${currentReview.recommend ? 'text-green-600' : 'text-gray-400'} mr-1`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span className="text-gray-700">Recommend</span>
          </div>
          <div className="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className={`h-5 w-5 ${currentReview.ceoApproval ? 'text-green-600' : 'text-gray-400'} mr-1`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="text-gray-700">CEO approval</span>
          </div>
          <div className="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className={`h-5 w-5 ${currentReview.businessOutlook ? 'text-green-600' : 'text-gray-400'} mr-1`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span className="text-gray-700">Business outlook</span>
          </div>
        </div>
        
        <div className="mb-4">
          <h3 className="text-green-600 font-medium mb-2">Pros</h3>
          <p className="text-gray-700">{currentReview.pros}</p>
        </div>
        
        <div className="mb-4">
          <h3 className="text-red-600 font-medium mb-2">Cons</h3>
          
          {/* Red Flag Detector */}
          {hasRedFlags && (
            <div className="mb-2 flex items-center px-3 py-1.5 bg-red-50 border border-red-200 rounded-md">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-red-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
              <span className="text-red-700 font-medium text-sm">Red Flag Detected</span>
            </div>
          )}
          
          {/* Either render highlighted text or regular text based on red flags */}
          {hasRedFlags ? (
            <p className="text-gray-700" dangerouslySetInnerHTML={highlightRedFlags(currentReview.cons)} />
          ) : (
            <p className="text-gray-700">{currentReview.cons}</p>
          )}
        </div>
        
        <button 
          className="text-green-600 font-medium flex items-center" 
          onClick={() => setExpanded(!expanded)}
        >
          {expanded ? 'Show previous review' : 'Show more reviews'}
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
      </div>
      
      <div className="mt-6 text-right">
        <a href="#" className="text-green-600 font-medium flex items-center justify-end">
          See all 845 reviews
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </a>
      </div>
    </div>
  );
}