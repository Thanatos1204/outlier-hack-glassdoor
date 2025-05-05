# Glassdoor AI-Enhanced Company Review Page

![Glassdoor Clone Banner](https://example.com/glassdoor-clone-banner.png)

## 📋 Overview

This project is a pixel-perfect, feature-rich clone of Glassdoor's company review page, enhanced with AI-powered features to improve the job seeker experience. Built using Next.js 15 with App Router, TypeScript, and Tailwind CSS v4, this frontend-only implementation uses mock data to simulate a complete company review platform.

## 🛠️ Tech Stack

- **Next.js 15** with App Router (`/app` directory)
- **TypeScript** for type safety
- **Tailwind CSS v4** (customized via `globals.css` only)
- **React 18** with hooks and functional components
- **Frontend-only** implementation with mock data

## ✨ Features

### Original Glassdoor Features

1. **Header & Navigation:**
   - Logo, navigation links (Community, Jobs, Companies, Salaries)
   - Search, notifications, and user profile icons
   - Interactive tab selection

2. **Company Overview:**
   - Company logo and name with rating
   - Follow and review buttons
   - Navigation tabs with active state
   - Company details and statistics

3. **User Reviews Display:**
   - Rating visualization with stars
   - Recommendation indicators
   - Pros/cons sections
   - User details and timestamps

4. **Interviews Section:**
   - Interview difficulty score (2.7/5)
   - Experience breakdown (positive vs. negative)
   - How others got interviews (visualization)
   - Interview question examples

5. **FAQ Section:**
   - Categorized questions about the company
   - Expandable answers
   - Related topics and navigation

6. **Photos Section:**
   - Company photo grid
   - Photo upload functionality
   - Browsing controls

7. **Review Submission:**
   - Star rating input
   - Review text area
   - Additional options (add salary, interview, benefits)

### 🧠 AI-Enhanced Features

1. **AI-Generated Pros & Cons Summary:**
   - A dedicated card that aggregates insights from hundreds of reviews
   - Bulleted lists of the most frequently mentioned pros and cons
   - AI badge and context for transparency
   - Clean visual integration with existing design language

2. **Red Flag Detector with Word Highlighting:**
   - Scans review "Cons" sections for concerning language
   - Displays warning badge when potential issues are detected
   - Highlights specific concerning words and phrases for easy visibility
   - Helps job seekers quickly identify potential workplace issues

3. **Company Metrics Dashboard:**
   - Work-Life Balance score with visual gauge
   - Career Growth potential visualization
   - Salary Transparency rating
   - Company Culture score with expandable detailed breakdown
   - Animated metrics for visual engagement

4. **Review Trends Visualization:**
   - Interactive time period selection (3mo, 6mo, 1yr)
   - Rating trends chart showing company performance over time
   - Most mentioned keywords with sentiment analysis
   - Visual distinction between positive and negative trends

## 🚀 Installation and Setup

1. **Clone the repository:**
   ```bash
   git clone https://github.com/yourusername/glassdoor-clone.git
   cd glassdoor-clone
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run the development server:**
   ```bash
   npm run dev
   ```

4. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
glassdoor-clone/
├── app/
│   ├── globals.css         # Global styles and Tailwind customizations
│   ├── layout.tsx          # Root layout with metadata
│   └── page.tsx            # Main page component
├── components/
│   ├── Header.tsx          # Top navigation bar
│   ├── Sidebar.tsx         # Left sidebar with user content
│   ├── CompanyOverview.tsx # Company header and tabs
│   ├── CompanyDetails.tsx  # Company information
│   ├── AISummary.tsx       # AI-generated review summary
│   ├── CompanyReviews.tsx  # Reviews with Red Flag detection
│   ├── CompanyMetrics.tsx  # Company scores and metrics
│   ├── ReviewTrends.tsx    # Rating trends visualization
│   ├── InterviewsSection.tsx # Interview experiences
│   ├── FAQSection.tsx      # Frequently asked questions
│   ├── PhotosSection.tsx   # Company photos
│   └── ReviewSubmission.tsx # Add review interface
├── public/
│   └── ...                 # Static assets
├── package.json
├── next.config.js
└── tsconfig.json
```

## 📝 Usage

### Basic Navigation

- Browse company information in the main overview section
- Toggle between tabs to see different content categories
- Click "Show more reviews" to cycle through available reviews
- Interact with the AI summary to get quick insights about the company

### AI Feature Interactions

- **Pro & Con Summary:** Review the AI-generated summary at the top for quick insights
- **Red Flag Detector:** Pay attention to highlighted words in reviews with warning badges
- **Company Metrics:** Check the metrics dashboard for key employment factors
- **Review Trends:** Use the time period selectors to see how company ratings have changed