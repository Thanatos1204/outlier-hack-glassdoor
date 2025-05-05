// File: components/CompanyMetrics.tsx
"use client";

import { useState } from 'react';

export default function CompanyMetrics() {
  const [expanded, setExpanded] = useState(false);
  
  // Mock data for company metrics
  const metrics = {
    workLifeBalance: 3.7,
    careerGrowth: 3.2,
    salaryTransparency: 2.8,
    cultureScore: 4.1,
    diversityScore: 3.5
  };
  
  // Render a metric gauge
  const renderMetricGauge = (value: number, label: string, color: string) => {
    // Calculate width percentage based on value (1-5 scale)
    const percentage = (value / 5) * 100;
    
    return (
      <div className="mb-4">
        <div className="flex items-center justify-between mb-1">
          <span className="text-sm font-medium text-gray-700">{label}</span>
          <span className="text-sm font-medium text-gray-900">{value.toFixed(1)}/5</span>
        </div>
        <div className="h-2.5 rounded-full bg-gray-200">
          <div 
            className={`h-2.5 rounded-full ${color}`} 
            style={{ width: `${percentage}%` }}
          ></div>
        </div>
      </div>
    );
  };
  
  return (
    <div className="mt-6 bg-white border border-gray-200 rounded-lg p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold text-gray-900">Company Metrics</h2>
        <div className="flex items-center px-2 py-1 bg-green-50 text-green-600 rounded-full text-sm">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 mr-1">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/>
          </svg>
          <span>Based on reviews</span>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          {/* Work-Life Balance */}
          {renderMetricGauge(metrics.workLifeBalance, "Work-Life Balance", "bg-blue-500")}
          
          {/* Career Growth */}
          {renderMetricGauge(metrics.careerGrowth, "Career Growth", "bg-green-500")}
          
          {/* Salary Transparency */}
          {renderMetricGauge(metrics.salaryTransparency, "Salary Transparency", "bg-amber-500")}
        </div>
        
        <div>
          {/* Company Culture */}
          <div className="flex flex-col items-center">
            <div className="relative mb-4">
              <svg viewBox="0 0 36 36" className="w-32 h-32">
                <path 
                  d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" 
                  fill="none" 
                  stroke="#eee" 
                  strokeWidth="3" 
                  strokeDasharray="100, 100"
                />
                <path 
                  d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" 
                  fill="none" 
                  stroke="#4ade80" 
                  strokeWidth="3" 
                  strokeDasharray={`${metrics.cultureScore * 20}, 100`} 
                  className="animate-pulse"
                />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <span className="text-4xl font-bold text-green-500">{metrics.cultureScore.toFixed(1)}</span>
                </div>
              </div>
            </div>
            <p className="text-center font-medium text-gray-900">Company Culture Score</p>
            <p className="text-sm text-gray-600 text-center mt-1">
              Above average compared to similar companies
            </p>
          </div>
        </div>
      </div>
      
      {expanded && (
        <div className="mt-6 border-t border-gray-200 pt-4">
          <h3 className="font-medium text-gray-900 mb-3">Company Culture Breakdown</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            <div className="bg-gray-50 rounded-lg p-3 text-center">
              <div className="font-medium text-gray-800">4.3/5</div>
              <div className="text-sm text-gray-600">Work Environment</div>
            </div>
            <div className="bg-gray-50 rounded-lg p-3 text-center">
              <div className="font-medium text-gray-800">3.8/5</div>
              <div className="text-sm text-gray-600">Management</div>
            </div>
            <div className="bg-gray-50 rounded-lg p-3 text-center">
              <div className="font-medium text-gray-800">4.2/5</div>
              <div className="text-sm text-gray-600">Team Collaboration</div>
            </div>
            <div className="bg-gray-50 rounded-lg p-3 text-center">
              <div className="font-medium text-gray-800">3.9/5</div>
              <div className="text-sm text-gray-600">Recognition</div>
            </div>
            <div className="bg-gray-50 rounded-lg p-3 text-center">
              <div className="font-medium text-gray-800">4.5/5</div>
              <div className="text-sm text-gray-600">Team Events</div>
            </div>
            <div className="bg-gray-50 rounded-lg p-3 text-center">
              <div className="font-medium text-gray-800">3.7/5</div>
              <div className="text-sm text-gray-600">Communication</div>
            </div>
          </div>
        </div>
      )}
      
      <button 
        className="w-full mt-4 text-green-600 font-medium flex items-center justify-center" 
        onClick={() => setExpanded(!expanded)}
      >
        {expanded ? 'Show less' : 'Show detailed breakdown'}
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          className={`h-5 w-5 ml-1 transition-transform ${expanded ? 'rotate-180' : ''}`} 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
    </div>
  );
}