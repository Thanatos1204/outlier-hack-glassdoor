// File: components/WhatPeopleSaying.tsx
export default function WhatPeopleSaying() {
    const comments = [
      {
        role: 'works at Publicis Sapient',
        time: '10h',
        content: 'I have 9.8 years of experience in Web development and the majority in React.js. It\'s been more than 3 years...',
        likes: 2,
        commentCount: 2
      },
      {
        role: 'Senior Associate',
        time: '',
        content: 'Hi, I am looking for job change in Bangalore location for QA engineer with manual and automation testing...',
        likes: 0,
        commentCount: 2
      }
    ];
  
    return (
      <div className="mt-6">
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-6">What people are saying about Maxgen Technologies</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            {comments.map((comment, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-4">
                <div className="flex items-center mb-2">
                  <div className="flex items-center justify-center w-6 h-6 mr-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <span className="text-gray-900 font-medium text-sm">{comment.role}</span>
                  {comment.time && (
                    <span className="text-gray-500 text-sm ml-2">{comment.time}</span>
                  )}
                </div>
                <p className="text-gray-700 text-sm mb-3">{comment.content}</p>
                <div className="flex items-center">
                  <button className="flex items-center text-gray-600 mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill={comment.likes > 0 ? "currentColor" : "none"} viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                    </svg>
                    <span>{comment.likes}</span>
                  </button>
                  <button className="flex items-center text-gray-600">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                    </svg>
                    <span>{comment.commentCount} Comments</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
          
          <div className="bg-gray-50 rounded-lg p-4 flex flex-col md:flex-row items-start md:items-center justify-between">
            <div className="mb-4 md:mb-0">
              <h3 className="text-lg font-medium text-gray-900 mb-1">Got a burning question about Maxgen Technologies? Just ask!</h3>
              <p className="text-gray-600">
                On Glassdoor, you can share insights and advice anonymously with Maxgen Technologies employees and get real answers from people on the inside.
              </p>
            </div>
            <button className="bg-gray-900 text-white px-4 py-2 rounded-md font-medium hover:bg-gray-800">
              Ask a question
            </button>
          </div>
        </div>
        
        {/* Company Reviews Overview */}
        <div className="bg-white border border-gray-200 rounded-lg p-6 mt-6">
          <h2 className="text-xl font-bold text-gray-900 mb-6">Maxgen Technologies reviews</h2>
          <div className="flex items-center mb-4">
            <div className="mr-4">
              <span className="text-green-500 text-5xl font-bold">4.8</span>
              <div className="flex mt-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg key={star} xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-500" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                ))}
              </div>
            </div>
            <div>
              <p className="text-gray-900 font-medium text-lg">95% would recommend to a friend</p>
              <p className="text-gray-600">(624 total reviews)</p>
            </div>
          </div>
          
          <div className="bg-blue-50 border border-blue-100 rounded-md p-4 flex items-start mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <div className="flex-1">
              <p className="text-gray-700">
                Companies can't alter or remove reviews. (Really!) <span className="text-green-600">See how Glassdoor protects users and content</span>
              </p>
            </div>
            <button className="text-gray-500">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          
          <button className="text-green-600 font-medium flex items-center">
            Show more insights
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </div>
      </div>
    );
  }