// data/mockData.js

export const collegeConfig = {
  name: "Government Graduate College Lodhran",
  shortName: "GGC Lodhran",
  tagline: "Shaping Futures, Uplifting Nations",
  established: "1952",
  logoPlaceholder: "/assets/images/logo.png",
  contact: {
    phone: "+92-060-8921046",
    email: "gdcboyslodhran@gmail.com",
    address: "Govt. Graduate College, Bahawalpur Road, Lodhran",
    mapEmbedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6944.951352195285!2d71.63821210769824!3d29.50249113843537!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x393b9934a299d15d%3A0x19228dc8d6b28975!2sGovernment%20Degree%20College%20Boys!5e0!3m2!1sen!2s!4v1782817785252!5m2!1sen!2s",
  },
};

// data/mockData.js

export const navLinks = [
  { name: "Home", href: "/", type: "link" },
  {
    name: "About Us",
    type: "dropdown",
    href: "/about",
    links: [
      { name: "College History", href: "/about" },
      { name: "Faculty & Staff", href: "/faculty" },
      { name: "Facilities", href: "/facilities" },
    ],
  },
  { name: "Admissions", href: "/admission", type: "link" },
  {
    name: "Campus Life",
    type: "dropdown",
    href: "gallery",
    links: [
      { name: "Notices", href: "/notices" },
      { name: "Events", href: "/events" },
      { name: "Gallery", href: "/gallery" },
    ],
  },
  { name: "Contact", href: "/contact", type: "link" },
];

// Add this to your data/mockData.js
export const team = [
  {
    id: 1,
    name: "Dr. Abdul Majeed",
    role: "Principal",
    type: "teaching",
    dept: "Administration",
  },
  {
    id: 2,
    name: "Prof. Sarah Khan",
    role: "Head of Physics",
    type: "teaching",
    dept: "Science",
  },
  {
    id: 3,
    name: "Mr. Ahmad Raza",
    role: "IT Coordinator",
    type: "non-teaching",
    dept: "IT Dept",
  },
  {
    id: 4,
    name: "Ms. Zainab Bibi",
    role: "Lab Assistant",
    type: "non-teaching",
    dept: "Science",
  },
];

export const stats = [
  { value: "70+", label: "Years of Excellence" },
  { value: "5,000+", label: "Active Students" },
  { value: "150+", label: "Expert Faculty" },
  { value: "25,000+", label: "Alumni Worldwide" },
];

export const facilities = [
  {
    id: 1,
    title: "Central Library",
    desc: "Over 50,000 books, digital journals, and quiet study zones.",
    icon: "BookOpen",
  },
  {
    id: 2,
    title: "Advanced Computer Lab",
    desc: "High-speed internet with modern workstations for practical learning.",
    icon: "Monitor",
  },
  {
    id: 3,
    title: "State-of-the-Art Science Labs",
    desc: "Fully equipped Physics, Chemistry, and Biology research spaces.",
    icon: "FlaskConical",
  },
  {
    id: 4,
    title: "Sports Complex",
    desc: "Cricket ground, football field, and indoor sports facilities.",
    icon: "Trophy",
  },
  {
    id: 5,
    title: "Main Auditorium",
    desc: "Air-conditioned 500-seat hall for seminars and cultural events.",
    icon: "Tv",
  },
  {
    id: 6,
    title: "Transport Services",
    desc: "Dedicated bus routes covering major sectors across the city.",
    icon: "Bus",
  },
];

export const events = [
  {
    id: 1,
    title: "Annual Convocation 2026",
    date: "Nov 15, 2026",
    desc: "Celebrating the academic achievements of our graduating batch.",
    category: "Academic",
  },
  {
    id: 2,
    title: "All-Pakistan Science Exhibition",
    date: "Dec 05, 2026",
    desc: "A platform for young innovators to showcase pioneering solutions.",
    category: "Exhibition",
  },
  {
    id: 3,
    title: "Inter-College Sports Week",
    date: "Jan 22, 2027",
    desc: "Fostering sportsmanship through fierce and healthy competition.",
    category: "Sports",
  },
];

export const notices = [
  {
    id: 1,
    title: "Revised Date Sheet for First Year Send-ups",
    date: "June 25, 2026",
    type: "Examination",
    isNew: true,
  },
  {
    id: 2,
    title: "Prime Minister's Laptop Scheme - Merit List",
    date: "June 20, 2026",
    type: "Scholarship",
    isNew: true,
  },
  {
    id: 3,
    title: "Fee Submission Deadline for Fall 2026",
    date: "June 15, 2026",
    type: "Administration",
    isNew: false,
  },
  {
    id: 4,
    title: "Tender Notice: Upgradation of IT Lab",
    date: "June 10, 2026",
    type: "Procurement",
    isNew: false,
  },
];
