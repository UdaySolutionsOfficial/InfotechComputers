/**
 * Centralized Institute Information Configuration
 * Infotech Computers, Nidadavolu, Andhra Pradesh, India
 * 
 * NOTE: Strictly adheres to verified factual details only.
 * No fabricated addresses, batches, fees, or metrics.
 */

export interface CourseItem {
  id: string;
  name: string;
  category: 'office-accounting' | 'design-publishing' | 'programming-db';
  categoryLabel: string;
  status: 'active' | 'upcoming';
  badge?: string;
  shortDescription: string;
  iconName: string;
  featured?: boolean;
}

export interface DigitalServiceItem {
  id: string;
  title: string;
  category: string;
  description: string;
  inclusions: string[];
  iconName: string;
  badge?: string;
  highlight?: boolean;
}

export interface InstituteConfig {
  name: string;
  shortName: string;
  tagline: string;
  description: string;
  aboutText: string;
  location: {
    city: string;
    state: string;
    country: string;
    formatted: string;
    googleMapsUrl: string;
    embedUrl: string;
  };
  established: number;
  experienceYears: string;
  representative: {
    name: string;
    title: string;
    note: string;
  };
  contact: {
    phone: string;
    phoneFormatted: string;
    whatsapp: string;
    whatsappFormatted: string;
    email: string;
  };
  timings: {
    operatingHours: string;
    weeklyHoliday: string;
  };
  social: {
    instagram: string;
  };
  collaboration: {
    partnerName: string;
    scope: string;
    description: string;
    websiteUrl: string;
    email: string;
  };
  courses: CourseItem[];
  digitalServices: DigitalServiceItem[];
}

export const instituteData: InstituteConfig = {
  name: 'Infotech Computers',
  shortName: 'Infotech',
  tagline: 'Empowering Skills. Shaping Futures.',
  description: 'Building computer knowledge and practical technology skills in Nidadavolu since 2010. At Infotech Computers, we help learners develop the confidence and skills to grow in a technology-driven world.',
  aboutText: 'Established in 2010, Infotech Computers has been providing computer education and training in Nidadavolu. With a focus on building practical computer knowledge and essential technology skills, the institute offers learning opportunities across office applications, accounting, graphic design, programming and emerging technologies.',
  location: {
    city: 'Nidadavolu',
    state: 'Andhra Pradesh',
    country: 'India',
    formatted: 'Nidadavolu, Andhra Pradesh, India',
    googleMapsUrl: 'https://maps.app.goo.gl/KLkPWt6gBNEDTrwu5',
    embedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2977.421830530551!2d81.6712622751539!3d16.90246358390451!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a37b1003f1e9519%3A0x8caaa155883f4e82!2sInfotech%20Computers!5e1!3m2!1sen!2sin!4v1794301186684!5m2!1sen!2sin',
  },
  established: 2010,
  experienceYears: '16+ Years',
  representative: {
    name: 'N. Srinivas Sir',
    title: 'Institute Representative',
    note: 'Guiding computer education and practical skills training at Infotech Computers, Nidadavolu.',
  },
  contact: {
    phone: '9154481735',
    phoneFormatted: '+91 91544 81735',
    whatsapp: '9989848608',
    whatsappFormatted: '+91 99898 48608',
    email: 'infotechcomputers4@gmail.com',
  },
  timings: {
    operatingHours: '8:30 AM – 8:00 PM',
    weeklyHoliday: 'Sunday',
  },
  social: {
    instagram: 'https://www.instagram.com/infotech_computers_/',
  },
  collaboration: {
    partnerName: 'USolve',
    scope: 'Digital Services Collaboration',
    description: 'Digital services and software solutions delivered in technical collaboration with USolve.',
    websiteUrl: 'https://usolve.in',
    email: 'usolveofficial@gmail.com',
  },
  courses: [
    // Category: Office & Business Applications
    {
      id: 'ms-office',
      name: 'MS Office',
      category: 'office-accounting',
      categoryLabel: 'Office & Business',
      status: 'active',
      shortDescription: 'Develop essential office productivity skills through commonly used office applications.',
      iconName: 'FileSpreadsheet',
      featured: true,
    },
    {
      id: 'tally',
      name: 'Tally',
      category: 'office-accounting',
      categoryLabel: 'Office & Business',
      status: 'active',
      shortDescription: 'Explore computerized accounting and the fundamentals of business financial record management.',
      iconName: 'Calculator',
      featured: true,
    },
    // Category: Graphic Design & Publishing
    {
      id: 'photoshop',
      name: 'Photoshop',
      category: 'design-publishing',
      categoryLabel: 'Design & Publishing',
      status: 'active',
      shortDescription: 'Explore image editing, photo manipulation and graphic design fundamentals.',
      iconName: 'Image',
      featured: true,
    },
    {
      id: 'pagemaker',
      name: 'PageMaker',
      category: 'design-publishing',
      categoryLabel: 'Design & Publishing',
      status: 'active',
      shortDescription: 'Understand page layout and desktop publishing fundamentals.',
      iconName: 'Layout',
    },
    {
      id: 'coreldraw',
      name: 'CorelDRAW',
      category: 'design-publishing',
      categoryLabel: 'Design & Publishing',
      status: 'active',
      shortDescription: 'Explore vector graphics, illustration and design-layout fundamentals.',
      iconName: 'PenTool',
      featured: true,
    },
    // Category: Programming & Database
    {
      id: 'c-programming',
      name: 'C Programming',
      category: 'programming-db',
      categoryLabel: 'Programming & Database',
      status: 'active',
      shortDescription: 'Build foundational programming knowledge and logical problem-solving skills.',
      iconName: 'Code',
      featured: true,
    },
    {
      id: 'cpp',
      name: 'C++',
      category: 'programming-db',
      categoryLabel: 'Programming & Database',
      status: 'active',
      shortDescription: 'Explore structured programming and object-oriented programming fundamentals.',
      iconName: 'Binary',
    },
    {
      id: 'java',
      name: 'Java',
      category: 'programming-db',
      categoryLabel: 'Programming & Database',
      status: 'active',
      shortDescription: 'Understand Java programming fundamentals and object-oriented concepts.',
      iconName: 'Coffee',
      featured: true,
    },
    {
      id: 'oracle',
      name: 'Oracle',
      category: 'programming-db',
      categoryLabel: 'Programming & Database',
      status: 'active',
      shortDescription: 'Get introduced to database concepts and Oracle database fundamentals.',
      iconName: 'Database',
    },
    {
      id: 'python',
      name: 'Python',
      category: 'programming-db',
      categoryLabel: 'Programming & Database',
      status: 'active',
      shortDescription: 'Learn programming fundamentals using Python and develop logical problem-solving skills.',
      iconName: 'Terminal',
      featured: true,
    },
    // Category: Upcoming Courses
    {
      id: 'ai-fundamentals',
      name: 'AI Fundamentals',
      category: 'programming-db',
      categoryLabel: 'Upcoming Courses',
      status: 'upcoming',
      badge: 'COMING SOON',
      shortDescription: 'Discover the fundamentals of Artificial Intelligence, understand everyday AI applications, explore useful AI tools and learn the basics of writing effective prompts.',
      iconName: 'Sparkles',
      featured: true,
    },
    {
      id: 'web-technologies',
      name: 'Web Technologies',
      category: 'programming-db',
      categoryLabel: 'Upcoming Courses',
      status: 'upcoming',
      badge: 'COMING SOON',
      shortDescription: 'Explore the foundations of modern website development and the technologies used to create engaging digital experiences.',
      iconName: 'Globe',
      featured: true,
    },
  ],
  digitalServices: [
    {
      id: 'web-development',
      title: 'Website Design & Development',
      category: 'Web & Systems',
      description: 'Professional, responsive and modern websites designed to establish your business online with clean design and performance.',
      inclusions: [
        'Business & corporate websites',
        'Portfolio & institution portals',
        'Landing pages & UI/UX design',
        'Responsive mobile-friendly architecture',
        'Custom web development',
      ],
      iconName: 'Globe',
      highlight: true,
    },
    {
      id: 'custom-software',
      title: 'Customized Software Development',
      category: 'Software Engineering',
      description: 'Software solutions engineered around individual business workflows, administrative needs, and operational requirements.',
      inclusions: [
        'Custom business applications',
        'Workflow & task automation tools',
        'Administrative platforms',
        'Database & API integrations',
      ],
      iconName: 'Layers',
      highlight: true,
    },
    {
      id: 'ecommerce',
      title: 'E-commerce Website Development',
      category: 'Digital Commerce',
      description: 'Digital storefronts that help businesses present products, manage online orders, and facilitate customer transactions.',
      inclusions: [
        'Online shopping websites',
        'Product catalogue displays',
        'Shopping carts & checkout flows',
        'Order management & payment integration',
      ],
      iconName: 'ShoppingCart',
    },
    {
      id: 'billing-systems',
      title: 'Billing & Business Management Systems',
      category: 'Enterprise Operations',
      description: 'Practical digital systems that streamline day-to-day business operations, customer invoicing, and financial tracking.',
      inclusions: [
        'Invoicing & billing applications',
        'Inventory & stock monitoring',
        'Sales records & ledger summaries',
        'Business reporting & analytics',
      ],
      iconName: 'Receipt',
      highlight: true,
    },
    {
      id: 'tracking-systems',
      title: 'Tracking Systems',
      category: 'Operational Monitoring',
      description: 'Customized tracking platforms that help organizations manage and monitor relevant operational movements and assets.',
      inclusions: [
        'School bus tracking solutions',
        'Live status monitoring',
        'Centralized tracking dashboards',
        'Customized operational platforms',
      ],
      iconName: 'MapPin',
      highlight: true,
    },
    {
      id: 'mobile-apps',
      title: 'Web & Mobile Applications',
      category: 'Application Engineering',
      description: 'Custom application solutions designed for seamless user experiences across web browsers and mobile devices.',
      inclusions: [
        'Custom web applications',
        'Android applications',
        'Cross-platform responsive experiences',
        'Interactive administrative dashboards',
      ],
      iconName: 'Smartphone',
    },
    {
      id: 'ai-systems',
      title: 'AI-Powered Systems, Automation and Voice Agents',
      category: 'Advanced Intelligence',
      description: 'Practical artificial intelligence systems designed to support business automation, customer interactions, and digital efficiency.',
      inclusions: [
        'AI-powered business tools',
        'Intelligent process automation',
        'Voice agents & conversational bots',
        'Modern AI API integrations',
      ],
      iconName: 'Cpu',
      highlight: true,
    },
    {
      id: 'digital-marketing',
      title: 'Digital Marketing, SEO and Meta Ads',
      category: 'Growth & Visibility',
      description: 'Digital visibility, search optimization, and targeted advertising solutions that help businesses strengthen their presence.',
      inclusions: [
        'Search engine optimization (SEO)',
        'Meta advertising (Facebook & Instagram)',
        'Digital presence enhancement',
        'Local market promotion strategy',
      ],
      iconName: 'TrendingUp',
    },
    {
      id: 'creative-design',
      title: 'Graphic Design and Creative Services',
      category: 'Brand Communication',
      description: 'Professional visual communication and creative graphics for businesses, organizations, and brand campaigns.',
      inclusions: [
        'Brand identity assets',
        'Social media banners & creatives',
        'Print & promotional layouts',
        'Digital marketing collaterals',
      ],
      iconName: 'Palette',
    },
  ],
};
