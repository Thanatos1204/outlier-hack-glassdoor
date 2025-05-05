// File: components/Sidebar.tsx
import Image from 'next/image';

export default function Sidebar() {
  const followedCompanies = [
    { id: 1, name: 'Ventura Securities L...', rating: '3.8' },
    { id: 2, name: 'Drip Capital Inc', rating: '3.7' },
    { id: 3, name: 'MetaUpSpace LLP', rating: null },
  ];

  return (
    <div className="py-6">
      {/* Bowls Section */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Bowls</h2>
        <div className="bg-white rounded-lg shadow-sm p-4 mb-4">
          <div className="flex items-start">
            <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mr-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </div>
            <div>
              <h3 className="font-medium text-gray-900">Career Advice for Students...</h3>
              <p className="text-sm text-gray-600 mt-1">
                Get actionable career advice tailored to you by joining more bowls.
              </p>
            </div>
          </div>
          <button className="mt-4 px-4 py-2 bg-gray-100 text-gray-800 font-medium rounded-md hover:bg-gray-200 transition">
            Explore more bowls
          </button>
        </div>
      </div>

      {/* Followed Companies */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Followed companies</h2>
        <p className="text-sm text-gray-600 mb-4">
          Stay ahead in opportunities and insider tips by following your dream companies.
        </p>
        <div className="space-y-4">
          {followedCompanies.map((company) => (
            <div key={company.id} className="flex items-center">
              <div className="w-8 h-8 bg-orange-500 rounded mr-2"></div>
              <div className="flex-1">
                <p className="text-gray-800 font-medium">{company.name}</p>
              </div>
              {company.rating && (
                <div className="flex items-center">
                  <span className="text-gray-700 mr-1">{company.rating}</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>
        <button className="mt-6 px-4 py-2 bg-gray-100 text-gray-800 font-medium rounded-md hover:bg-gray-200 transition w-full">
          Search for companies
        </button>
      </div>

      {/* Saved Jobs */}
      <div>
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Saved jobs</h2>
        <p className="text-sm text-gray-600 mb-4">
          Get personalised job recommendations and updates by starting your searches.
        </p>
        <button className="px-4 py-2 bg-gray-100 text-gray-800 font-medium rounded-md hover:bg-gray-200 transition">
          Search Jobs
        </button>
      </div>
    </div>
  );
}