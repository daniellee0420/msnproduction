const Items = [
  {
    id: 1,
    title: "SIP",
    subtitle: "(Standar)",
    label: "Rp.",
    price: "139K",
    diskon: "240K",
    // icon: <FaMobileAlt />,
    description:
      "Kembangkan sistem informasi, sistem administrasi, atau sistem promosi, berbasis website & aplikasi mobile sesuai kebutuhan untuk meningkatkan keuntungan dan efisiensi operasional bisnis di perusahaan Anda. \n ✅ iOS App Development \n ✅ Android App Development \n ✅ UI/UX Web/Mobile App Design \n ✅ WordPress Web Development \n ✅ Custom Web App Development",
  },
  {
    id: 2,
    title: "BASIC",
    subtitle: "(Standar)",
    label: "Rp.",
    price: "199K",
    diskon: "329K",
    // icon: <FaBullhorn />,
    description:
      "Tingkatkan reputasi bisnis Anda untuk membangun persepsi yang baik dan mudah dikenali di mata masyarakat dengan layanan Branding & Content Creative yang didambakan pelangggan bisnis Anda. \n ✅ Logo Design \n ✅ Stationary Design \n ✅ Marketing Kit Design \n ✅ Photo & Videography \n ✅ Social Media Content Design ",
  },
  {
    id: 3,
    title: "ADVANCE",
    subtitle: "(Full Fitur)",
    label: "Rp.",
    price: "249K",
    diskon: "499K",
    // icon: <FaLaptop />,
    description:
      "Dapatkan pelanggan baru dan penjualan lebih banyak dengan bantuan layanan pemasaran online atau Digital Marketing & Advertising sesuai anggaran pemasaran, target market, dan jangkauan wilayah usaha Anda. \n ✅ Tiktok Ads \n ✅ Google Search Ads \n ✅ GDN & Youtube Ads \n ✅ Facebook & Instagram Ads \n ✅ Search Engine Optimization",
  },
  {
    id: 4,
    title: "PRO",
    subtitle: "(Full Fitur, Photo & Video Prewed)",
    price: "CALL US",
    diskon: "x.xxxK",
    // icon: <FaLaptop />,
    description:
      "Dapatkan pelanggan baru dan penjualan lebih banyak dengan bantuan layanan pemasaran online atau Digital Marketing & Advertising sesuai anggaran pemasaran, target market, dan jangkauan wilayah usaha Anda. \n ✅ Tiktok Ads \n ✅ Google Search Ads \n ✅ GDN & Youtube Ads \n ✅ Facebook & Instagram Ads \n ✅ Search Engine Optimization",
  },
  {
    id: 5,
    title: "PAKET STARTER",
    subtitle: "(Standar)",
    label: "Rp.",
    price: "1.999K",
    diskon: "2.699K",
    // icon: <FaLaptop />,
    description:
      "Dapatkan pelanggan baru dan penjualan lebih banyak dengan bantuan layanan pemasaran online atau Digital Marketing & Advertising sesuai anggaran pemasaran, target market, dan jangkauan wilayah usaha Anda. \n ✅ Tiktok Ads \n ✅ Google Search Ads \n ✅ GDN & Youtube Ads \n ✅ Facebook & Instagram Ads \n ✅ Search Engine Optimization",
    category: "tokoonline",
  },
  {
    id: 6,
    title: "PAKET UMKM",
    subtitle: "(Standar)",
    price: "CALL US",
    diskon: "x.xxxK",
    // icon: <FaLaptop />,
    description:
      "Dapatkan pelanggan baru dan penjualan lebih banyak dengan bantuan layanan pemasaran online atau Digital Marketing & Advertising sesuai anggaran pemasaran, target market, dan jangkauan wilayah usaha Anda. \n ✅ Tiktok Ads \n ✅ Google Search Ads \n ✅ GDN & Youtube Ads \n ✅ Facebook & Instagram Ads \n ✅ Search Engine Optimization",
    category: "tokoonline",
  },
  {
    id: 7,
    title: "PAKET CORPORATE",
    subtitle: "(Full Fitur)",
    price: "CALL US",
    diskon: "x.xxxK",
    // icon: <FaLaptop />,
    description:
      "Dapatkan pelanggan baru dan penjualan lebih banyak dengan bantuan layanan pemasaran online atau Digital Marketing & Advertising sesuai anggaran pemasaran, target market, dan jangkauan wilayah usaha Anda. \n ✅ Tiktok Ads \n ✅ Google Search Ads \n ✅ GDN & Youtube Ads \n ✅ Facebook & Instagram Ads \n ✅ Search Engine Optimization",
    category: "tokoonline",
  },
  {
    id: 8,
    title: "PAKET CORPORATE",
    subtitle: "(Full Fitur)",
    price: "CALL US",
    diskon: "x.xxxK",
    // icon: <FaLaptop />,
    description:
      "Dapatkan pelanggan baru dan penjualan lebih banyak dengan bantuan layanan pemasaran online atau Digital Marketing & Advertising sesuai anggaran pemasaran, target market, dan jangkauan wilayah usaha Anda. \n ✅ Tiktok Ads \n ✅ Google Search Ads \n ✅ GDN & Youtube Ads \n ✅ Facebook & Instagram Ads \n ✅ Search Engine Optimization",
    category: "tokoonline",
  },
  {
    id: 9,
    title: "PAKET STARTER",
    subtitle: "(Ideal Untuk Pemula)",
    label: "Rp.",
    price: "999K",
    diskon: "2.699K",
    // icon: <FaLaptop />,
    description:
      "Dapatkan pelanggan baru dan penjualan lebih banyak dengan bantuan layanan pemasaran online atau Digital Marketing & Advertising sesuai anggaran pemasaran, target market, dan jangkauan wilayah usaha Anda. \n ✅ Tiktok Ads \n ✅ Google Search Ads \n ✅ GDN & Youtube Ads \n ✅ Facebook & Instagram Ads \n ✅ Search Engine Optimization",
    category: "companyprofile",
  },
  {
    id: 10,
    title: "PAKET UMKM",
    subtitle: "(Ideal Untuk Usaha Menengah)",
    price: "CALL US",
    diskon: "x.xxxK",
    // icon: <FaLaptop />,
    description:
      "Dapatkan pelanggan baru dan penjualan lebih banyak dengan bantuan layanan pemasaran online atau Digital Marketing & Advertising sesuai anggaran pemasaran, target market, dan jangkauan wilayah usaha Anda. \n ✅ Tiktok Ads \n ✅ Google Search Ads \n ✅ GDN & Youtube Ads \n ✅ Facebook & Instagram Ads \n ✅ Search Engine Optimization",
    category: "companyprofile",
  },
  {
    id: 11,
    title: "PAKET CORPORATE",
    subtitle: "(Ideal Untuk Instansi & Perusahaan)",
    price: "CALL US",
    diskon: "x.xxxK",
    // icon: <FaLaptop />,
    description:
      "Dapatkan pelanggan baru dan penjualan lebih banyak dengan bantuan layanan pemasaran online atau Digital Marketing & Advertising sesuai anggaran pemasaran, target market, dan jangkauan wilayah usaha Anda. \n ✅ Tiktok Ads \n ✅ Google Search Ads \n ✅ GDN & Youtube Ads \n ✅ Facebook & Instagram Ads \n ✅ Search Engine Optimization",
    category: "companyprofile",
  },
  {
    id: 12,
    title: "PAKET CORPORATE",
    subtitle: "(Ideal Untuk Instansi & Perusahaan)",
    price: "CALL US",
    diskon: "x.xxxK",
    // icon: <FaLaptop />,
    description:
      "Dapatkan pelanggan baru dan penjualan lebih banyak dengan bantuan layanan pemasaran online atau Digital Marketing & Advertising sesuai anggaran pemasaran, target market, dan jangkauan wilayah usaha Anda. \n ✅ Tiktok Ads \n ✅ Google Search Ads \n ✅ GDN & Youtube Ads \n ✅ Facebook & Instagram Ads \n ✅ Search Engine Optimization",
    category: "companyprofile",
    price: "CALL US",
    diskon: "x.xxxK",
  },
  //   id: 1,
  //   mainImage: "https://i.ibb.co/Nm206nP/jobs-ladder-main.png",
  //   img: [
  //     "https://i.ibb.co/YXkdynd/register.png",
  //     "https://i.ibb.co/KyY9frq/Screenshot-2.png",
  //     "https://i.ibb.co/bzzCKGF/Screenshot-3.png",
  //     "https://i.ibb.co/PDyt1hg/Screenshot-4.png",
  //     "https://i.ibb.co/BrhBg7W/Screenshot-5.png",
  //     "https://i.ibb.co/yRxFbMh/Screenshot-6.png",
  //     "https://i.ibb.co/7ygmj9H/Screenshot-7.png",
  //   ],
  //   features: [
  //     "An User can log in with different 3 roles. (HR, Employee, and Job Seeker).",
  //     "An Hr can post jobs with his requirements.",
  //     "A Job Seeker will see all the posted jobs and will be able to apply there.",
  //     " HR can manage the candidates. like sending them tasks or could remove them.",
  //     "Notify an Important task with their Email.",
  //     "HR can also send tasks or contact his company's employees.",
  //     "Secured Front-end Routes and back-end API's.",
  //   ],
  //   technologies: [
  //     "React",
  //     "Redux",
  //     "TailwindCSS",
  //     "Firebase",
  //     "NodeJS",
  //     "ExpressJS",
  //     "MongoDB",
  //     "Send In Blue",
  //     "JWT etc.",
  //   ],
  //   title: "Job's Ladder",
  //   description:
  //     "This is the Company Managing Website to help the hr of the company. Where HR, Employees, and Job Seekers will connect to each other. Job Seeker will find their desired jobs and could apply for these. Hr will be able to manage candidates and employees by sending them tasks, emails, or contact with them.",
  //   category: "business",
  //   liveLink: "https://job-ledder.web.app/",
  //   codeLink: "https://github.com/shakil18046/Job-s-Ladder",
  // },
  // {
  //   id: 2,
  //   mainImage: "https://i.ibb.co/gd6qmZf/allied-main.png",
  //   img: [
  //     "https://i.ibb.co/cNCSRSH/allied-parts.png",
  //     "https://i.ibb.co/SN9yQvy/allied-2.png",
  //     "https://i.ibb.co/4W3nHGR/allied-3.png",
  //     "https://i.ibb.co/8zzDsRw/allied-4.png",
  //   ],
  //   features: [
  //     "Login & Register With Email/Password & Google",
  //     "Achievement Section",
  //     "Secured Product Purchase Page",
  //     "Payment With Card",
  //     "Beautiful User Dashboard",
  //     "Authenticated Admin Controls",
  //     "Fully Secured Server",
  //     "Responsive for all Devices",
  //   ],
  //   technologies: [
  //     "React",
  //     "Firebase",
  //     "NodeJS",
  //     "ExpressJS",
  //     "MongoDB",
  //     "Stripe",
  //     "JWT etc.",
  //   ],
  //   title: "Allied Parts",
  //   description:
  //     "A parts Manufacturer Website with admin controls, payment gateway, secured all necessary pages etc.",
  //   category: "business",
  //   liveLink: "https://allied-parts-manufacturing.web.app/",
  //   codeLink: "https://github.com/itsproali/allied-parts-client",
  // },
  // {
  //   id: 3,
  //   mainImage: "https://i.ibb.co/bsFpVR1/super-bike-main.png",
  //   img: [
  //     "https://i.ibb.co/Jtdzytx/bike-1.png",
  //     "https://i.ibb.co/tQZBT1m/bike-2.png",
  //     "https://i.ibb.co/8mDkkYy/bike-3.png",
  //     "https://i.ibb.co/jftPgQp/bike-4.png",
  //   ],
  //   features: [
  //     "SignIn with email and password, google, facebook, github",
  //     "Secured Product Purchase Page",
  //     "Manage Product Warehouse",
  //     "Add a product to database",
  //     "Edit product details & update on database",
  //     "Remove a product from database",
  //     "Deliver a product",
  //     "Restock product",
  //     "404 Page and many more.",
  //   ],
  //   technologies: [
  //     "React",
  //     "React",
  //     "Firebase",
  //     "NodeJS",
  //     "ExpressJS",
  //     "MongoDB",
  //     "JWT",
  //     "Heroku etc.",
  //   ],
  //   title: "Super Bike Warehouse",
  //   description:
  //     "A Warehouse website with warehouse management, product buying option, adding new products and many more features.",
  //   category: "business",
  //   liveLink: "https://super-bike-warehouse.web.app/",
  //   codeLink: "https://github.com/itsproali/super-bike-client",
  // },
  // {
  //   id: 4,
  //   mainImage: "https://i.ibb.co/c8ykxZv/learning-buddy-main.png",
  //   img: [
  //     "https://i.ibb.co/Twk9w2x/learning-buddy-1.png",
  //     "https://i.ibb.co/hVBxRV2/learning-buddy-2.png",
  //     "https://i.ibb.co/M5CT0Nj/learning-buddy-3.png",
  //   ],
  //   features: [
  //     "Enrolling In a Course Package",
  //     "Register a New User or Login a old User",
  //     "Social Media Sign In Option (Google & Facebook)",
  //     "Required Auth Private Route",
  //     "Learn More about Firebase/Authentication",
  //     "Know More about Me",
  //   ],
  //   technologies: [
  //     "React",
  //     "React Router",
  //     "React Tailwind",
  //     "Firebase Authentication",
  //     "React hot toast",
  //     "React Firebase Hooks",
  //   ],
  //   title: "Learning Buddy",
  //   description:
  //     "A website is created by focused on a tutor. He is selling his course package online. Where a user will be able to see the packages. If a user want to enroll to course, he/she need to login or register first. User can be logged in using email & password, Google, Facebook account. It is created with React.",
  //   category: "personal",
  //   liveLink: "https://learning-buddy-itsproali.web.app/",
  //   codeLink: "https://github.com/itsproali/learning-buddy",
  // },
  // {
  //   id: 5,
  //   mainImage: "https://i.ibb.co/r49F3pZ/convention-center-main.png",
  //   img: [
  //     "https://i.ibb.co/YhH7rZg/convention-center-1.png",
  //     "https://i.ibb.co/VjZLXzw/convention-center-2.png",
  //     "https://i.ibb.co/HH2X4wz/convention-center-3.png",
  //   ],
  //   features: [
  //     "Beautiful & minimalistic User Interface",
  //     "Banner Carousel with description",
  //     "Comparison with packages ",
  //     "Customer Reviews",
  //     "Navigation Menu",
  //   ],
  //   technologies: ["HTML", "CSS", "Bootstrap"],
  //   title: "Fantasy Convention  Center",
  //   description:
  //     "A simple & awesome looking convention center. They organize many types of events like, wedding, get-together, tour event, party or any other events.",
  //   category: "business",
  //   liveLink: "https://itsproali.github.io/fantasy-convention-center/",
  //   codeLink: "https://github.com/itsproali/fantasy-convention-center",
  // },
];

export default Items;