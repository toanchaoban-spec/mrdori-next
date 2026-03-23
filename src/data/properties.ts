export type Property = {
  id: number;
  slug: string;
  title: string;
  location: string;
  district: string;
  city: string;
  price: number;
  type: 'Apartment' | 'Villa' | 'Townhouse' | 'Office';
  status: 'For sale' | 'For rent';
  bedrooms: number;
  bathrooms: number;
  area: number;
  yearBuilt: number;
  featured: boolean;
  premiumTag: 'Signature' | 'Hot' | 'New';
  description: string;
  highlights: string[];
  amenities: string[];
  cover: string;
  gallery: string[];
  agent: {
    name: string;
    role: string;
    phone: string;
  };
};

export const properties: Property[] = [
  {
    id: 1,
    slug: 'riverfront-penthouse-thu-thiem',
    title: 'Riverfront penthouse with skyline terrace in Thu Thiem',
    location: 'Thu Thiem Ward, Thu Duc City, Ho Chi Minh City',
    district: 'Thu Duc',
    city: 'Ho Chi Minh City',
    price: 28500000000,
    type: 'Apartment',
    status: 'For sale',
    bedrooms: 4,
    bathrooms: 4,
    area: 245,
    yearBuilt: 2023,
    featured: true,
    premiumTag: 'Signature',
    description:
      'A luxury duplex penthouse inspired by the premium experience in the legacy prototype, with panoramic glazing, a private entertainment lounge, and hotel-style concierge access.',
    highlights: ['Private terrace spa', 'Direct river view', 'Smart-home lighting scenes'],
    amenities: ['Concierge', 'Infinity pool', 'Sky gym', 'Private wine room', 'Pet spa'],
    cover: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1200&q=80'
    ],
    agent: { name: 'Linh Tran', role: 'Senior private advisor', phone: '+84 902 888 112' },
  },
  {
    id: 2,
    slug: 'garden-villa-thao-dien',
    title: 'Garden villa with resort courtyard in Thao Dien',
    location: 'Thao Dien Ward, Thu Duc City, Ho Chi Minh City',
    district: 'Thu Duc',
    city: 'Ho Chi Minh City',
    price: 47500000000,
    type: 'Villa',
    status: 'For sale',
    bedrooms: 5,
    bathrooms: 6,
    area: 480,
    yearBuilt: 2022,
    featured: true,
    premiumTag: 'Hot',
    description:
      'Contemporary villa with a palm-lined pool, double-height living room, and a detached studio for wellness or private work.',
    highlights: ['Saltwater pool', 'Designer kitchen', 'Detached guest pavilion'],
    amenities: ['24/7 security', 'Outdoor cinema', 'EV charging', 'Wine cellar'],
    cover: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=80'
    ],
    agent: { name: 'Minh Vo', role: 'Luxury villa specialist', phone: '+84 909 118 445' },
  },
  {
    id: 3,
    slug: 'heritage-townhouse-district-1',
    title: 'Heritage townhouse suitable for flagship retail in District 1',
    location: 'Nguyen Hue Boulevard, District 1, Ho Chi Minh City',
    district: 'District 1',
    city: 'Ho Chi Minh City',
    price: 19800000000,
    type: 'Townhouse',
    status: 'For sale',
    bedrooms: 3,
    bathrooms: 3,
    area: 138,
    yearBuilt: 2019,
    featured: false,
    premiumTag: 'New',
    description:
      'A restored shophouse with elevated frontage, flexible mezzanine layout, and strong pedestrian visibility in the city center.',
    highlights: ['Retail frontage', 'Flexible mezzanine', 'Turnkey interiors'],
    amenities: ['Security access', 'Storage room', 'Meeting suite'],
    cover: 'https://images.unsplash.com/photo-1460317442991-0ec209397118?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1460317442991-0ec209397118?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=1200&q=80'
    ],
    agent: { name: 'Khanh Nguyen', role: 'Commercial advisor', phone: '+84 938 551 112' },
  },
  {
    id: 4,
    slug: 'creative-office-phu-my-hung',
    title: 'Creative office floor with branded reception in Phu My Hung',
    location: 'Tan Phu Ward, District 7, Ho Chi Minh City',
    district: 'District 7',
    city: 'Ho Chi Minh City',
    price: 175000000,
    type: 'Office',
    status: 'For rent',
    bedrooms: 0,
    bathrooms: 2,
    area: 310,
    yearBuilt: 2021,
    featured: false,
    premiumTag: 'Signature',
    description:
      'Fully fitted office with boardroom, phone booths, and hospitality pantry designed for boutique real estate or finance teams.',
    highlights: ['Move-in ready', 'Flexible meeting rooms', 'Riverwalk address'],
    amenities: ['Reception desk', 'Parking', 'Fiber internet', 'Access card'],
    cover: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1497366412874-3415097a27e7?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1200&q=80'
    ],
    agent: { name: 'Bao Pham', role: 'Corporate leasing lead', phone: '+84 901 774 221' },
  },
  {
    id: 5,
    slug: 'canal-view-apartment-binh-thanh',
    title: 'Canal-view apartment with clubhouse access in Binh Thanh',
    location: 'Ward 22, Binh Thanh District, Ho Chi Minh City',
    district: 'Binh Thanh',
    city: 'Ho Chi Minh City',
    price: 6900000000,
    type: 'Apartment',
    status: 'For sale',
    bedrooms: 2,
    bathrooms: 2,
    area: 92,
    yearBuilt: 2020,
    featured: false,
    premiumTag: 'Hot',
    description:
      'A polished riverside apartment designed for urban families seeking strong amenities and fast access to District 1.',
    highlights: ['Clubhouse access', 'Riverwalk trails', 'Corner layout'],
    amenities: ['Pool', 'Coworking lounge', 'Children playroom', 'Gym'],
    cover: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1200&q=80'
    ],
    agent: { name: 'An Do', role: 'Residential advisor', phone: '+84 935 220 991' },
  },
  {
    id: 6,
    slug: 'boutique-villa-da-nang',
    title: 'Boutique coastal villa for short-stay investment in Da Nang',
    location: 'Ngu Hanh Son District, Da Nang',
    district: 'Ngu Hanh Son',
    city: 'Da Nang',
    price: 32000000000,
    type: 'Villa',
    status: 'For sale',
    bedrooms: 4,
    bathrooms: 5,
    area: 360,
    yearBuilt: 2024,
    featured: true,
    premiumTag: 'New',
    description:
      'A hospitality-driven villa concept with tropical landscaping, rental-ready furnishing, and easy beach access.',
    highlights: ['Beach club partnership', 'Rental-ready package', 'Private courtyard'],
    amenities: ['Spa room', 'Saltwater pool', 'Butler prep kitchen', 'Bicycle storage'],
    cover: 'https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1560185007-cde436f6a4d0?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80'
    ],
    agent: { name: 'Huy Le', role: 'Resort property lead', phone: '+84 907 330 445' },
  },
];

export const homepageHighlights = [
  {
    title: 'Premium discovery flow',
    description: 'Hero search, editorial sections, and neighborhood storytelling inspired by the original prototype without preserving the monolithic HTML structure.',
  },
  {
    title: 'Advisor-led buyer journey',
    description: 'Dedicated surfaces for saved homes, posting, and authentication keep the experience feeling productized instead of demo-only.',
  },
  {
    title: 'Modular Next.js foundation',
    description: 'App Router pages, reusable Tailwind components, and centralized data make the codebase easier to extend feature by feature.',
  },
];
