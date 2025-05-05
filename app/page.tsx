// File: app/page.tsx
import Header from '@/components/Header';
import Sidebar from '@/components/Sidebar';
import CompanyOverview from '@/components/CompanyOverview';
import CompanyDetails from '@/components/CompanyDetails';
import CompanyReviews from '@/components/CompanyReviews';
import InterviewsSection from '@/components/InterviewsSection';
import FAQSection from '@/components/FAQSection';
import ReviewSubmission from '@/components/ReviewSubmission';
import WhatPeopleSaying from '@/components/WhatPeopleAreSaying';
import PhotosSection from '@/components/PhotosSection';
import AISummary from '@/components/AISummary';
import CompanyMetrics from '@/components/CompanyMetrics';
import ReviewTrends from '@/components/ReviewTrends';

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Header />
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="flex flex-col md:flex-row">
          {/* Sidebar */}
          <div className="w-full md:w-1/4 md:pr-6">
            <Sidebar />
          </div>
          
          {/* Main Content */}
          <div className="w-full md:w-3/4">
            <CompanyOverview />
            <CompanyDetails />
            
            {/* New AI-powered features */}
            <AISummary />
            <CompanyMetrics />
            <ReviewTrends />
            
            <WhatPeopleSaying />
            <CompanyReviews />
            <PhotosSection />
            <InterviewsSection />
            <FAQSection />
            <ReviewSubmission />
          </div>
        </div>
      </div>
    </main>
  );
}