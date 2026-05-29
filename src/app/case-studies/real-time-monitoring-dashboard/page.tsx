import type { Metadata } from 'next';
import CaseStudyPage from './CaseStudyPage';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://adityabhosale.com';

export const metadata: Metadata = {
  title: 'Real-Time Monitoring Dashboard',
  description:
    'Premium case study for the Real-Time Monitoring Dashboard, an industrial monitoring and analytics system built during an internship at MSS PowerTech Pvt. Ltd.',
  alternates: {
    canonical: `${siteUrl}/case-studies/real-time-monitoring-dashboard`,
  },
  openGraph: {
    title: 'Real-Time Monitoring Dashboard | Aditya',
    description:
      'Industrial Monitoring & Analytics System case study with architecture, impact, challenges, and lessons learned.',
    url: `${siteUrl}/case-studies/real-time-monitoring-dashboard`,
    type: 'article',
    images: [
      {
        url: `${siteUrl}/images/projects/project4.png`,
        width: 1200,
        height: 630,
        alt: 'Real-Time Monitoring Dashboard case study preview',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Real-Time Monitoring Dashboard | Aditya',
    description:
      'Industrial Monitoring & Analytics System case study with architecture, impact, challenges, and lessons learned.',
    images: [`${siteUrl}/images/projects/project4.png`],
  },
};

export default function Page() {
  return <CaseStudyPage />;
}