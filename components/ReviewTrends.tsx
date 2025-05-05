// File: components/ReviewTrends.tsx
"use client";

import { useState } from 'react';

export default function ReviewTrends() {
  const [timeFrame, setTimeFrame] = useState('6m');
  
  // Mock data for review trends
  const trends = {
    '3m': {
      ratings: [4.3, 4.5, 4.2],
      months: ['Mar', 'Apr', 'May'],
      count: [12, 15, 18]
    },
    '6m': {
      ratings: [3.8, 4.0, 4.3, 4.5, 4.2, 4.6],
      months: ['Dec', 'Jan', 'Feb', 'Mar', 'Apr', 'May'],
      count: [10, 8, 14, 12, 15, 18]
    },
    '1y': {
      ratings: [3.5, 3.2, 3.6, 3.9, 4.1, 3.8, 4.0, 4.3, 4.5, 4.2, 4.6, 4.8],
      months: ['Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar', 'Apr', 'May'],
      count: [5, 7, 8, 9, 11, 7, 10, 8, 14, 12, 15, 18]
    }
  };
  
  // Get current trend data based on selected timeframe
  const currentTrend = trends[timeFrame as keyof typeof trends];
  
  // Top keywords from reviews
  const keywords = [
    { keyword: 'Work-life balance', count: 42, positive: true },
    { keyword: 'Learning opportunities', count: 37, positive: true },
    { keyword: 'Team environment', count: 35, positive: true },
    { keyword: 'Competitive salary', count: 31, positive: true },
    { keyword: 'Leadership', count: 28, positive: false },
    { keyword: 'Career growth', count: 22, positive: false }
  ];
  
  return (
    <div className="mt-6 bg-white border border-gray-200 rounded-lg p-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6">
        <h2 className="text-xl font-bold text-gray-900 mb-2 sm:mb-0">Review Trends</h2>
        <div className="flex space-x-2">
          <button 
            className={`px-3 py-1 text-sm rounded-md ${timeFrame === '3m' ? 'bg-green-600 text-white' : 'bg-gray-100 text-gray-700'}`}
            onClick={() => setTimeFrame('3m')}
          >
            3 months
          </button>
          <button 
            className={`px-3 py-1 text-sm rounded-md ${timeFrame === '6m' ? 'bg-green-600 text-white' : 'bg-gray-100 text-gray-700'}`}
            onClick={() => setTimeFrame('6m')}
          >
            6 months
          </button>
          <button 
            className={`px-3 py-1 text-sm rounded-md ${timeFrame === '1y' ? 'bg-green-600 text-white' : 'bg-gray-100 text-gray-700'}`}
            onClick={() => setTimeFrame('1y')}
          >
            1 year
          </button>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Rating Trend Chart */}
        <div>
          <h3 className="font-medium text-gray-900 mb-4">Average Rating Over Time</h3>
          <div className="h-64 relative">
            {/* Y axis labels */}
            <div className="absolute left-0 top-0 h-full flex flex-col justify-between text-xs text-gray-500">
              <span>5.0</span>
              <span>4.0</span>
              <span>3.0</span>
              <span>2.0</span>
              <span>1.0</span>
            </div>
            
            {/* Chart area */}
            <div className="ml-8 h-full flex items-end relative">
              {/* Grid lines */}
              <div className="absolute inset-0 flex flex-col justify-between">
                {[0, 1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-full h-px bg-gray-100"></div>
                ))}
              </div>
              
              {/* Data bars */}
              <div className="w-full h-full flex items-end">
                {currentTrend.ratings.map((rating, index) => {
                  // Calculate height percentage (1-5 scale)
                  const heightPercent = (rating / 5) * 100;
                  
                  return (
                    <div key={index} className="flex-1 flex flex-col items-center">
                      <div 
                        className="w-3/4 bg-green-500 rounded-t relative group"
                        style={{ height: `${heightPercent}%` }}
                      >
                        {/* Tooltip */}
                        <div className="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs rounded py-1 px-2 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                          {rating.toFixed(1)} ({currentTrend.count[index]} reviews)
                        </div>
                      </div>
                      <span className="text-xs text-gray-500 mt-1">{currentTrend.months[index]}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
        
        {/* Top Keywords */}
        <div>
          <h3 className="font-medium text-gray-900 mb-4">Most Mentioned in Reviews</h3>
          <div className="space-y-3">
            {keywords.map((item, index) => (
              <div key={index} className="flex items-center">
                <div className="w-8 text-xs text-gray-500">{item.count}</div>
                <div className="flex-1">
                  <div className="h-6 bg-gray-100 rounded-md relative">
                    <div 
                      className={`h-6 ${item.positive ? 'bg-green-100' : 'bg-red-100'} rounded-md`}
                      style={{ width: `${(item.count / 50) * 100}%` }}
                    >
                      <span className="absolute inset-0 flex items-center px-3 text-sm font-medium">
                        {item.keyword}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="ml-2">
                  <span className={`text-xs px-2 py-0.5 rounded-full ${item.positive ? 'bg-green-50 text-green-600' : 'bg-red-50 text-red-600'}`}>
                    {item.positive ? 'Positive' : 'Negative'}
                  </span>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-4 text-sm text-gray-500 flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
            </svg>
            <span>Based on analysis of review text from the past 12 months.</span>
          </div>
        </div>
      </div>
    </div>
  );
}