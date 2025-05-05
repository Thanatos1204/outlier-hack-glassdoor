// File: components/CompanyOverview.tsx
"use client";

import { useState } from 'react';
import Image from 'next/image';

export default function CompanyOverview() {
  const [activeTab, setActiveTab] = useState('Overview');
  const tabs = [
    'Overview', 'Reviews', 'Jobs', 'Salaries', 'Interviews', 'Benefits', 'Photos'
  ];
  
  const stats = [
    { label: 'Reviews', count: '845' },
    { label: 'Jobs', count: '--' },
    { label: 'Salaries', count: '579' },
    { label: 'Interviews', count: '146' },
    { label: 'Benefits', count: '143' },
    { label: 'Photos', count: '20+' },
  ];

  return (
    <div className="mt-6 bg-white border border-gray-200 rounded-lg overflow-hidden">
      {/* Banner */}
      <div className="h-32 bg-gradient-to-r from-blue-900 via-blue-800 to-green-200"></div>
      
      {/* Company Info */}
      <div className="px-6 py-4">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            <div className="w-16 h-16 bg-white border border-gray-200 rounded-md flex items-center justify-center mr-4 -mt-10 shadow-md relative z-10">
              <div className="w-12 h-12 relative">
                <svg viewBox="0 0 100 100" className="w-full h-full text-blue-800" fill="currentColor">
                  <path d="M20 20 L80 20 L60 80 L40 80 Z" />
                  <path d="M30 30 L70 30 L70 50 L30 50 Z" />
                </svg>
              </div>
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Maxgen Technologies</h1>
              <button className="text-sm text-gray-500 flex items-center mt-1">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Is this your company?
              </button>
            </div>
          </div>
          <div className="flex space-x-3">
            <button className="px-5 py-2 border border-gray-300 rounded-md font-medium text-gray-700 hover:bg-gray-50">
              Follow
            </button>
            <button className="px-5 py-2 bg-gray-900 text-white rounded-md font-medium hover:bg-gray-800">
              Add a review
            </button>
          </div>
        </div>
        
        {/* Stats & Tabs */}
        <div className="flex items-center justify-between border-b border-gray-200">
          <div className="flex">
            {stats.map((stat, index) => (
              <div key={index} className="px-4 py-2 text-center">
                <span className="block text-sm font-semibold text-gray-900">{stat.count}</span>
                <span className="block text-xs text-gray-500">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
        
        {/* Tabs */}
        <div className="flex mt-2 border-b border-gray-200">
          {tabs.map((tab) => (
            <button
              key={tab}
              className={`px-4 py-3 text-sm font-medium ${
                activeTab === tab
                  ? 'text-green-600 border-b-2 border-green-600'
                  : 'text-gray-700 hover:text-green-600'
              }`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}