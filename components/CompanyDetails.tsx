// File: components/CompanyDetails.tsx
import Link from 'next/link';

export default function CompanyDetails() {
  const companyDetails = {
    website: 'www.maxgentechnology.com',
    size: '51 to 200 Employees',
    revenue: 'Unknown / Non-Applicable',
    industry: 'Information Technology Support Services',
    location: 'Pune, India',
    type: 'Company - Private',
    competitors: 'Unknown'
  };

  const topCompanies = [
    { name: 'IBM', rating: '3.6', logo: '🔵' },
    { name: 'Concentrix', rating: '3.5', logo: '🔵' },
    { name: 'Hexaware Technologies', rating: '3.5', logo: '🔵' },
    { name: 'Dell Technologies', rating: '3.6', logo: '🔵' }
  ];

  return (
    <div className="mt-6 flex flex-col lg:flex-row gap-6">
      {/* Company Details */}
      <div className="w-full lg:w-2/3 bg-white border border-gray-200 rounded-lg p-6">
        <div className="flex flex-col space-y-6">
          <h2 className="text-xl font-bold text-gray-900">Maxgen Technologies overview <span className="text-lg font-normal">4.8 ★</span></h2>
          <p className="text-green-600 font-medium">Work here? Claim your free Employer Profile</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Link href="#" className="text-green-600 hover:underline flex items-center">
                {companyDetails.website}
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </Link>
              <p className="text-gray-700 mt-1">51 to 200 Employees</p>
              <p className="text-gray-700 mt-1">Revenue: Unknown / Non-Applicable</p>
            </div>
            <div>
              <p className="text-gray-700">{companyDetails.location}</p>
              <p className="text-gray-700 mt-1">Type: Company - Private</p>
              <Link href="#" className="text-green-600 hover:underline block mt-1">
                {companyDetails.industry}
              </Link>
            </div>
          </div>
          
          <div>
            <p className="text-gray-700">Competitors: <span className="text-gray-500">Unknown</span></p>
          </div>
        </div>
      </div>
      
      {/* Top Companies Sidebar */}
      <div className="w-full lg:w-1/3 bg-white border border-gray-200 rounded-lg p-6">
        <h3 className="text-lg font-bold text-gray-900 mb-4">
          Top companies for "Compensation and Benefits" near you
        </h3>
        <div className="space-y-4">
          {topCompanies.map((company, index) => (
            <div key={index} className="flex items-center">
              <div className="w-10 h-10 bg-blue-100 rounded flex items-center justify-center mr-3">
                <span className="text-xl">{company.logo}</span>
              </div>
              <div>
                <p className="font-medium text-gray-900">{company.name}</p>
                <p className="text-green-600 text-sm">Compensation and benefits</p>
                <div className="flex items-center mt-1">
                  <span className="text-gray-700 mr-1">{company.rating}</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-green-500" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}