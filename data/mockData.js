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
    name: "Muhammad Irfan Yasir",
    role: "Principal / Assistant Professor Chemistry",
    type: "teaching",
    dept: "Chemistry",
    image: "/assets/images/team/principal.png",
  },
  {
    id: 2,
    name: "Shakeel Ahmad",
    role: "Vice Principal / Assistant Professor",
    type: "teaching",
    dept: "Islamic Studies / English / Urdu",
    image: "/assets/images/team/vice-principal.png",
  },
  {
    id: 3,
    name: "Muhammad Ahsan Malik",
    role: "Assistant Professor",
    type: "teaching",
    dept: "History & Pak Studies",
    image: "/assets/images/team/ahsan.png",
  },
  {
    id: 4,
    name: "Akhtar Mehmood Joiya",
    role: "Assistant Professor (MA History)",
    type: "teaching",
    dept: "History",
    image: "/assets/images/dummy-men.jpg",
  },
  {
    id: 5,
    name: "Muhammad Altaf",
    role: "Assistant Professor (MSc Zoology)",
    type: "teaching",
    dept: "Biology",
    image: "/assets/images/dummy-men.jpg",
  },
  {
    id: 8,
    name: "Dr. Zahid Nawaz Khan",
    role: "Assistant Professor (PhD Chemistry)",
    type: "teaching",
    dept: "Chemistry",
    image: "/assets/images/dummy-men.jpg",
  },
  {
    id: 9,
    name: "Israr Ahmad",
    role: "Assistant Professor (M.Phil Economics)",
    type: "teaching",
    dept: "Economics",
    image: "/assets/images/dummy-men.jpg",
  },
  {
    id: 10,
    name: "Rao Hamid Majeed",
    role: "Assistant Professor (M.Phil Health & Physical Education)",
    type: "teaching",
    dept: "Health",
    image: "/assets/images/dummy-men.jpg",
  },

  {
    id: 12,
    name: "Azhar Khurshid",
    role: "Senior Librarian (MA Library Science)",
    type: "teaching",
    dept: "Library Science",
    image: "/assets/images/dummy-men.jpg",
  },
  {
    id: 13,
    name: "Rao Faisal Intizar",
    role: "Lecturer (M.Phil Statistics, MBA Islamic Banking & Finance)",
    type: "teaching",
    dept: "Statistics",
    image: "/assets/images/team/faisal.png",
  },
  {
    id: 11,
    name: "Dr. Imran Shahid",
    role: "Lecturer (PhD Urdu)",
    type: "teaching",
    dept: "Urdu",
    image: "/assets/images/dummy-men.jpg",
  },
  {
    id: 6,
    name: "Mushtaq Ahmad",
    role: "Lecturer (Master in Physics)",
    type: "teaching",
    dept: "Physics",
    image: "/assets/images/dummy-men.jpg",
  },
  {
    id: 7,
    name: "Dr. Waris Malik",
    role: "Lecturer (PhD Saraiki)",
    type: "teaching",
    dept: "Saraiki",
    image: "/assets/images/dummy-men.jpg",
  },

  {
    id: 14,
    name: "Hassan Nawaz",
    role: "Assistant Professor (M.Phil Islamic Studies)",
    type: "teaching",
    dept: "Islamic Studies",
    image: "/assets/images/dummy-men.jpg",
  },
  {
    id: 15,
    name: "Zia Ur Rehman",
    role: "PhD Scholar",
    type: "teaching",
    dept: "Biology",
    image: "/assets/images/dummy-men.jpg",
  },
  {
    id: 16,
    name: "H. Muhammad Tayyab",
    role: "Lecturer (PhD Scholar Arabic)",
    type: "teaching",
    dept: "Arabic",
    image: "/assets/images/dummy-men.jpg",
  },
  {
    id: 17,
    name: "Shoaib Ahmed",
    role: "Lecturer (PhD Scholar Urdu)",
    type: "teaching",
    dept: "Urdu",
    image: "/assets/images/team/shoaib.png",
  },
  {
    id: 18,
    name: "Shazia Latif",
    role: "Lecturer (MS Economics)",
    type: "teaching",
    dept: "Economics",
    image: "/assets/images/dummy-women.jpg",
  },
  {
    id: 19,
    name: "Asma Liaqat",
    role: "Lecturer (M.Phil Computer Science)",
    type: "teaching",
    dept: "Computer Science",
    image: "/assets/images/dummy-women.jpg",
  },
  {
    id: 20,
    name: "Rashna Tanvir",
    role: "Lecturer (M.Phil Math)",
    type: "teaching",
    dept: "Mathematics",
    image: "/assets/images/dummy-women.jpg",
  },
  {
    id: 21,
    name: "Faiza Aroob",
    role: "Lecturer (MA English)",
    type: "teaching",
    dept: "English",
    image: "/assets/images/dummy-women.jpg",
  },
  {
    id: 22,
    name: "Rakhsanda Arif",
    role: "Lecturer (MA Saraiki)",
    type: "teaching",
    dept: "Saraiki",
    image: "/assets/images/dummy-women.jpg",
  },
  {
    id: 23,
    name: "Shabbir Hussain",
    role: "Head Clerk",
    type: "non-teaching",
    dept: "College Office",
  },
  {
    id: 24,
    name: "Waqar Ajmal",
    role: "Senior Clerk",
    type: "non-teaching",
    dept: "College Office",
  },
  {
    id: 25,
    name: "Waseem Akhtar",
    role: "Junior Clerk",
    type: "non-teaching",
    dept: "College Office",
  },
  {
    id: 26,
    name: "Anees Ur Rehman",
    role: "Library Clerk",
    type: "non-teaching",
    dept: "College Office",
  },
  {
    id: 27,
    name: "Syed M. Shafiq Rasool",
    role: "Lab Supervisor",
    type: "non-teaching",
    dept: "Physics Lab",
  },
  {
    id: 28,
    name: "Muhammad Imran",
    role: "Senior Lecturer Assistant",
    type: "non-teaching",
    dept: "Biology Lab",
  },
  {
    id: 29,
    name: "Qazi Muhammad Tanvir",
    role: "Lecturer Assistant",
    type: "non-teaching",
    dept: "Chemistry Lab",
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
