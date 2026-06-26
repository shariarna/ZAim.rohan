// --- Dictionary and Translations ---
const translations = {
  en: {
    page_title: "Md Rayhan Uddin - Full-Stack Developer & Android App Creator",
    nav_home: "Home",
    nav_services: "Services",
    nav_skills: "Skills",
    nav_portfolio: "Projects",
    nav_estimator: "Estimator",
    nav_experience: "Experience",
    nav_contact: "Contact",
    hero_badge_text: "Available for Freelance & Remote Work",
    hero_greetings: "Hi, I'm",
    hero_role: "Photographer, Android & Full-Stack Developer",
    hero_desc: "Building high-performance Android applications and responsive web dashboards.",
    btn_work: "View Portfolio",
    btn_contact: "Get In Touch",
    card_profession: "Full-Stack & App Professional",
    stat_completed: "Completed Projects",
    stat_satisfaction: "Quality Work",
    services_subtitle: "My Expertise",
    services_title: "Services I Offer",
    services_desc: "I offer comprehensive technical solutions, ranging from mobile coding to web engineering.",
    service_1_title: "Android App Development",
    service_1_desc: "Designing, building, and deploying fully native or hybrid mobile apps with smooth performance, clean layouts, and native feature integration.",
    service_2_title: "Full-Stack Web Development",
    service_2_desc: "Developing modern websites, administration panels, and database integrations. Secure, bilingual, and fully responsive across all screens.",
    service_3_title: "Photography & Photo Editing",
    service_3_desc: "Providing professional photoshoot sessions and expert digital post-processing.",
    skills_subtitle: "Tech Stack & Tools",
    skills_title: "Technical Skills",
    skills_desc: "Here is the selection of tools and technologies I use to deliver high-quality code.",
    skill_exp_advanced: "Advanced / Expert",
    skill_exp_intermediate: "Intermediate / Advanced",
    portfolio_subtitle: "Completed Works",
    portfolio_title: "Featured Projects",
    portfolio_desc: "Browse my project records and mobile apps. Select categories to filter results.",
    filter_all: "All",
    filter_websites: "Websites",
    filter_apps: "Android Apps",
    filter_photography: "Photography & Editing",
    cat_staging: "Web / Dashboard",
    cat_interface: "Android App",
    cat_component: "Photography & Edit",
    estimator_subtitle: "Project Planner",
    estimator_title: "Plan Your Project",
    estimator_desc: "Select your desired project type, scale, and custom options to start discussing with me directly on WhatsApp!",
    estimator_card_title: "Project Details",
    est_type: "Project Type",
    est_scale: "Project Scale",
    est_features: "Additional Services / Custom Options",
    est_type_websites: "Web Development (Dashboard / Website)",
    est_type_apps: "Android App Development",
    est_type_photography: "Creative Photography & Retouch Session",
    est_scale_small: "Basic / Personal",
    est_scale_medium: "Standard Business / Full Session",
    est_scale_large: "Advanced / Commercial Campaign",
    feat_security: "Captcha & Security Integration",
    feat_crypto: "USDT Automatic Deposit Checker",
    feat_translate: "Multi-language (i18n) Switcher",
    feat_theme: "Dark/Light Theme Switcher",
    feat_option5: "Admin Panel & CMS Integration",
    feat_option6: "SEO Optimization & Analytics",
    feat_push_notifications: "Push Notifications (Firebase)",
    feat_offline_sync: "Offline Support & SQLite Sync",
    feat_raw_files: "Raw Source Files (.RAW / .PSD)",
    feat_express_delivery: "Same-Day Express Delivery",
    est_estimated_cost: "Project Specs Selected",
    btn_send_estimate: "Discuss Project on WhatsApp",
    exp_subtitle: "My History",
    exp_title: "Professional Journey",
    exp_desc: "A summary of my roles and achievements in mobile coding and web engineering.",
    exp_date_1: "2024 - Present",
    exp_title_1: "Senior Full-Stack & App Architect",
    exp_company_1: "Oscar Panel Operations & Freelance Hub",
    exp_desc_1: "Developing secure staging portals, custom Android applications with Kotlin, on-chain crypto balance claim trackers, and complex web3 integrations.",
    exp_date_2: "2021 - 2024",
    exp_title_2: "Creative Director & Photographer",
    exp_company_2: "Rexer Zaim Photography & Design",
    exp_desc_2: "Conducted professional photo shoot sessions, edited and retouched raw photo collections using Adobe Photoshop/Lightroom, and designed responsive web portfolios for clients.",
    contact_subtitle: "Get in Touch",
    contact_title: "Contact Channels",
    contact_desc: "Feel free to reach out to me via any of the direct links below. I am ready to collaborate with you.",
    contact_chat: "Chat Now",
    contact_connect: "Connect",
    contact_follow: "Follow",
    footer_rights: "All rights reserved.",
    nav_about: "About",
    nav_blog: "Blog",
    portfolio_view_all: "View All Projects",
    testimonials_subtitle: "Client Feedback",
    testimonials_title: "What Clients Say",
    testimonials_desc: "Here is what founders, business owners, and partners say about working with me.",
    cta_badge: "Let's Collaborate",
    cta_title: "Let's Build Something Extraordinary",
    cta_desc: "Whether you need a powerful Android app, a secure web dashboard, or professional photography services, I'm ready to bring your vision to life.",
    cta_btn_start: "Start a Project",
    cta_btn_portfolio: "View Portfolio"
  },
  bd: {
    page_title: "মোঃ রায়হান উদ্দিন - ফুল-স্ট্যাক ডেভেলপার ও অ্যান্ড্রয়েড অ্যাপ ক্রিয়েটর",
    nav_home: "হোম",
    nav_services: "সার্ভিসসমূহ",
    nav_skills: "দক্ষতা",
    nav_portfolio: "প্রজেক্টসমূহ",
    nav_estimator: "এস্টিমেটর",
    nav_experience: "অভিজ্ঞতা",
    nav_contact: "যোগাযোগ",
    hero_badge_text: "ফ্রিল্যান্স ও রিমোট কাজের জন্য উপলব্ধ",
    hero_greetings: "হাই, আমি",
    hero_role: "ফটোগ্রাফার, অ্যান্ড্রয়েড ও ফুল-স্ট্যাক ডেভেলপার",
    hero_desc: "উচ্চ-কর্মক্ষমতাসম্পন্ন অ্যান্ড্রয়েড অ্যাপ্লিকেশন এবং রেসপন্সিভ ওয়েব ড্যাসবোর্ড তৈরি করা আমার প্রধান বিশেষত্ব।",
    btn_work: "পোর্টফোলিও দেখুন",
    btn_contact: "যোগাযোগ করুন",
    card_profession: "ফুল-স্ট্যাক ও অ্যাপ প্রফেশনাল",
    stat_completed: "সম্পন্ন প্রজেক্ট",
    stat_satisfaction: "উচ্চ মানসম্পন্ন কাজ",
    services_subtitle: "আমার দক্ষতা",
    services_title: "আমি যে সার্ভিসগুলো অফার করি",
    services_desc: "আমি অ্যাপ কোডিং থেকে শুরু করে সম্পূর্ণ টেকনিক্যাল ও ওয়েব ডেভেলপমেন্ট সমাধান প্রদান করি।",
    service_1_title: "অ্যান্ড্রয়েড অ্যাপ ডেভেলপমেন্ট",
    service_1_desc: "মসৃণ পারফরম্যান্স, পরিষ্কার লেআউট এবং মোবাইলের সমস্ত ফিচারের সমন্বয়সহ নেটিভ বা হাইব্রিড মোবাইল অ্যাপ তৈরি ও ডেপ্লয় করা।",
    service_2_title: "ফুল-স্ট্যাক ওয়েব ডেভেলপমেন্ট",
    service_2_desc: "আধুনিক ওয়েবসাইট, অ্যাডমিনিস্ট্রেটিভ কন্ট্রোল প্যানেল এবং ডাটাবেজ ইন্টিগ্রেশন তৈরি করা। সম্পূর্ণ নিরাপদ ও সব স্ক্রিনে রেসপন্সিভ।",
    service_3_title: "ফটোগ্রাফি ও ফটো এডিটিং",
    service_3_desc: "প্রফেশনাল ফটোশুট সেশন এবং চমৎকার এডিটিং সুবিধা।",
    skills_subtitle: "ট্যাকনোলজি স্ট্যাক ও টুলস",
    skills_title: "টেকনিক্যাল দক্ষতা",
    skills_desc: "উচ্চ-মানের কোড এবং ডিজিটাল সমাধান তৈরি করতে আমি যে সমস্ত টুলস ব্যবহার করি তা নিচে দেওয়া হলো।",
    skill_exp_advanced: "উন্নত / এক্সপার্ট",
    skill_exp_intermediate: "মধ্যম / উন্নত",
    portfolio_subtitle: "সম্পন্ন কাজ",
    portfolio_title: "আমার বিশেষ প্রজেক্টসমূহ",
    portfolio_desc: "আমার তৈরি করা প্রজেক্ট এবং মোবাইল অ্যাপগুলো নিচে দেখুন। ফিল্টার করতে ক্যাটাগরি সিলেক্ট করুন।",
    filter_all: "সব",
    filter_websites: "ওয়েবসাইটসমূহ",
    filter_apps: "অ্যান্ড্রয়েড অ্যাপস",
    filter_photography: "ফটোগ্রাফি ও এডিটিং",
    cat_staging: "ওয়েব / ড্যাশবোর্ড",
    cat_interface: "অ্যান্ড্রয়েড অ্যাপ",
    cat_component: "ফটোগ্রাফি ও এডিট",
    estimator_subtitle: "প্রজেক্ট প্ল্যানার",
    estimator_title: "আপনার প্রজেক্টের পরিকল্পনা করুন",
    estimator_desc: "আপনার প্রজেক্টের ধরন, পরিধি এবং অতিরিক্ত ফিচারসমূহ নির্বাচন করুন এবং সরাসরি আলোচনার জন্য আমার হোয়াটসঅ্যাপে পাঠান!",
    estimator_card_title: "প্রজেক্টের বিবরণ",
    est_type: "প্রজেক্টের ধরন",
    est_scale: "প্রজেক্টের পরিধি",
    est_features: "অতিরিক্ত সার্ভিস / কাস্টম অপশন",
    est_type_websites: "ওয়েব ডেভেলপমেন্ট (ড্যাশবোর্ড / ওয়েবসাইট)",
    est_type_apps: "অ্যান্ড্রয়েড অ্যাপস ডেভেলপমেন্ট",
    est_type_photography: "ক্রিয়েটিভ ফটোগ্রাফি ও রিটাচ সেশন",
    est_scale_small: "বেসিক / ব্যক্তিগত",
    est_scale_medium: "স্ট্যান্ডার্ড বিজনেস / সম্পূর্ণ সেশন",
    est_scale_large: "অ্যাডভান্সড / বাণিজ্যিক ক্যাম্পেইন",
    feat_security: "ক্যাপচা এবং সিকিউরিটি ইন্টিগ্রেশন",
    feat_crypto: "USDT স্বয়ংক্রিয় ডিপোজিট চেকার",
    feat_translate: "মাল্টি-ল্যাঙ্গুয়েজ (i18n) স্যুইচার",
    feat_theme: "ডার্ক/লাইট থিম স্যুইচার",
    feat_option5: "অ্যাডমিন প্যানেল ও CMS ইন্টিগ্রেশন",
    feat_option6: "এসইও অপটিমাইজেশন ও অ্যানালিটিক্স",
    feat_push_notifications: "পুশ নোটিফিকেশন (Firebase)",
    feat_offline_sync: "অফলাইন সাপোর্ট ও SQLite সিঙ্ক",
    feat_raw_files: "র সোর্স ফাইল (.RAW / .PSD)",
    feat_express_delivery: "দ্রুত ডেলিভারি (একই দিনে)",
    est_estimated_cost: "নির্বাচিত বিবরণ",
    btn_send_estimate: "হোয়াটসঅ্যাপে প্রজেক্টের বিবরণ পাঠান",
    exp_subtitle: "আমার ইতিহাস",
    exp_title: "পেশাগত পথচলা",
    exp_desc: "মোবাইল কোডিং এবং ওয়েব ইঞ্জিনিয়ারিংয়ে আমার ভূমিকা এবং অর্জনের সারসংক্ষেপ।",
    exp_date_1: "২০২৪ - বর্তমান",
    exp_title_1: "সিনিয়র ফুল-স্ট্যাক ও অ্যাপ আর্কিটেক্ট",
    exp_company_1: "অস্কার প্যানেল অপারেশন্স এবং ফ্রিল্যান্স হাব",
    exp_desc_1: "নিরাপদ স্ট্যাজিং পোর্টাল, কোটলিন ও জাভা দিয়ে কাস্টম অ্যান্ড্রয়েড অ্যাপ তৈরি করা এবং অন-চেইন ক্রিপ্টো ব্যালেন্স ট্র্যাকিং যুক্ত করা।",
    exp_date_2: "২০২১ - ২০২৪",
    exp_title_2: "ক্রিয়েটিভ ডিরেক্টর ও ফটোগ্রাফার",
    exp_company_2: "রেক্সার জাইম ফটোগ্রাফি অ্যান্ড ডিজাইন",
    exp_desc_2: "পেশাদার ফটোশুট সেশন পরিচালনা, অ্যাডোবি ফটোশপ/লাইটরুম ব্যবহার করে র ফটো কালেকশন এডিট ও রিটাচ করা এবং ক্লায়েন্টদের জন্য রেসপন্সিভ ওয়েব পোর্টফোলিও ডিজাইন করা।",
    contact_subtitle: "যোগাযোগ করুন",
    contact_title: "যোগাযোগের মাধ্যম",
    contact_desc: "নিচের যেকোনো সরাসরি লিঙ্কের মাধ্যমে আমার সাথে নির্দ্বিধায় যোগাযোগ করুন। আমি আপনার সাথে কাজ করতে প্রস্তুত।",
    contact_chat: "চ্যাট করুন",
    contact_connect: "যুক্ত হোন",
    contact_follow: "ফলো করুন",
    footer_rights: "সর্বস্বত্ব সংরক্ষিত।",
    nav_about: "আমার সম্পর্কে",
    nav_blog: "ব্লগ",
    portfolio_view_all: "সমস্ত প্রজেক্ট দেখুন",
    testimonials_subtitle: "ক্লায়েন্টদের মতামত",
    testimonials_title: "ক্লায়েন্টরা কী বলেন",
    testimonials_desc: "প্রতিষ্ঠাতা, ব্যবসায়িক মালিক এবং অংশীদাররা আমার সাথে কাজ করার অভিজ্ঞতা সম্পর্কে কী বলেন।",
    cta_badge: "একসাথে কাজ করুন",
    cta_title: "চলুন অসাধারণ কিছু তৈরি করি",
    cta_desc: "শক্তিশালী অ্যান্ড্রয়েড অ্যাপ, সিকিউর ওয়েব ড্যাশবোর্ড, বা পেশাদার ফটোগ্রাফি সেবার প্রয়োজন হোক - আমি আপনার স্বপ্নকে বাস্তবে রূপ দিতে প্রস্তুত।",
    cta_btn_start: "প্রজেক্ট শুরু করুন",
    cta_btn_portfolio: "পোর্টফোলিও দেখুন"
  }
};

// --- Testimonials Data ---
const testimonials = [
  {
    name_en: "Md Arif Hossain",
    name_bd: "মোঃ আরিফ হোসেন",
    role_en: "Startup Founder",
    role_bd: "স্টার্টআপ প্রতিষ্ঠাতা",
    text_en: "Rayhan delivered an outstanding Android app with clean code, fast delivery, and a smooth UI. The login encryption and captcha integration he built exceeded my expectations. Highly recommended!",
    text_bd: "রায়হান অসাধারণ একটি অ্যান্ড্রয়েড অ্যাপ ডেলিভার করেছেন। পরিষ্কার কোড, দ্রুত ডেলিভারি এবং মসৃণ UI। তার তৈরি লগইন এনক্রিপশন এবং ক্যাপচা সিস্টেম আমার প্রত্যাশা ছাড়িয়ে গেছে।",
    rating: 5,
    avatar: "A"
  },
  {
    name_en: "Nusrat Jahan",
    name_bd: "নুসরাত জাহান",
    role_en: "Brand Manager",
    role_bd: "ব্র্যান্ড ম্যানেজার",
    text_en: "The photo editing and skin retouching was truly incredible. Professional-grade color grading made our campaign photos look premium. Rayhan has a great eye for detail and always delivers on time.",
    text_bd: "ফটো এডিটিং এবং স্কিন রিটাচিং কাজটি সত্যিই অবিশ্বাস্য ছিল। পেশাদার কালার গ্রেডিং আমাদের ক্যাম্পেইন ফটোগুলোকে প্রিমিয়াম লুক দিয়েছে। রায়হানের বিস্তারিত বিষয়ে দারুণ দৃষ্টি আছে।",
    rating: 5,
    avatar: "N"
  },
  {
    name_en: "Tanvir Ahmed",
    name_bd: "তানভীর আহমেদ",
    role_en: "E-Commerce Owner",
    role_bd: "ই-কমার্স মালিক",
    text_en: "Built our complete web dashboard with USDT payment integration. The system is secure, fast, and very easy to manage. Rayhan is extremely responsive and knowledgeable. Will definitely hire again!",
    text_bd: "USDT পেমেন্ট ইন্টিগ্রেশনসহ আমাদের সম্পূর্ণ ওয়েব ড্যাশবোর্ড তৈরি করেছেন। সিস্টেমটি নিরাপদ, দ্রুত এবং সহজে ব্যবহারযোগ্য। রায়হান অত্যন্ত প্রতিক্রিয়াশীল এবং জ্ঞানসম্পন্ন।",
    rating: 5,
    avatar: "T"
  }
];

// --- Portfolio Projects Database ---
const portfolioProjects = [
  // Photography Category
  {
    image: "photo_leaves.png",
    category: "photography",
    title_en: "Green Foliage Composition",
    title_bd: "\u09b8\u09ac\u09c1\u099c \u09aa\u09be\u09a4\u09be\u09b0 \u09a8\u09be\u09a8\u09cd\u09a6\u09a8\u09bf\u0995 \u0995\u09cb\u09b2\u09be\u099c",
    desc_en: "A creative grid layout focusing on fresh green textures, shadows, and natural botanical elements.",
    desc_bd: "\u09b8\u09a4\u09c7\u099c \u09b8\u09ac\u09c1\u099c \u099f\u09c7\u0995\u09cd\u09b8\u099a\u09be\u09b0, \u09b6\u09cd\u09af\u09be\u09a1\u09cb \u098f\u09ac\u0982 \u09aa\u09cd\u09b0\u09be\u0995\u09c3\u09a4\u09bf\u0995 \u09ac\u09cb\u099f\u09be\u09a8\u09bf\u0995\u09cd\u09af\u09be\u09b2 \u0989\u09aa\u09be\u09a6\u09be\u09a8\u09c7\u09b0 \u0993\u09aa\u09b0 \u09ab\u09cb\u0995\u09be\u09b8 \u0995\u09b0\u09be \u098f\u0995\u099f\u09bf \u0995\u09cd\u09b0\u09bf\u09af\u09bc\u09c7\u099f\u09bf\u09ad \u0997\u09cd\u09b0\u09bf\u09a1 \u09b2\u09c7\u0986\u0989\u099f \u09b8\u09c7\u09b6\u09a8\u0964",
    isWide: true
  },
  {
    image: "photo_river.png",
    category: "photography",
    title_en: "Riverside Horizon & Boats",
    title_bd: "\u09a8\u09a6\u09c0 \u09a4\u09c0\u09b0\u09ac\u09b0\u09cd\u09a4\u09c0 \u09a8\u09cc\u0995\u09be \u0993 \u09b6\u09be\u09a8\u09cd\u09a4 \u099c\u09b2\u09b0\u09be\u09b6\u09bf",
    desc_en: "A serene riverside capture featuring traditional wooden boats, cloudy sky reflections, and peaceful waters.",
    desc_bd: "\u0990\u09a4\u09bf\u09b9\u09cd\u09af\u09ac\u09be\u09b9\u09c0 \u0995\u09be\u09a0\u09c7\u09b0 \u09a8\u09cc\u0995\u09be, \u09b6\u09be\u09a8\u09cd\u09a4 \u09a8\u09a6\u09c0\u09b0 \u099c\u09b2 \u098f\u09ac\u0982 \u09ae\u09c7\u0998\u09b2\u09be \u0986\u0995\u09be\u09b6\u09c7\u09b0 \u09aa\u09cd\u09b0\u09a4\u09bf\u099a\u09cd\u099b\u09ac\u09bf \u09a8\u09bf\u09af\u09bc\u09c7 \u098f\u0995\u099f\u09bf \u09ae\u09a8\u09cb\u09b0\u09ae \u09a8\u09a6\u09c0 \u09b8\u09c7\u09b6\u09a8\u0964",
    isWide: true
  },
  // Web Category
  {
    image: "proj_bloodfinder.png",
    category: "websites",
    title_en: "Blood Finder \u2014 Donor Search Platform",
    title_bd: "\u09ac\u09cd\u09b2\u09be\u09a1 \u09ab\u09be\u0987\u09a8\u09cd\u09a1\u09be\u09b0 \u2014 \u09b0\u0995\u09cd\u09a4\u09a6\u09be\u09a4\u09be \u0996\u09cb\u0981\u099c\u09be\u09b0 \u09aa\u09cd\u09b2\u09cd\u09af\u09be\u099f\u09ab\u09b0\u09cd\u09ae",
    desc_en: "A full-stack web app to search blood donors by blood group & location across Bangladesh. Features donor registration, emergency request, and real-time contact.",
    desc_bd: "\u09ac\u09be\u0982\u09b2\u09be\u09a6\u09c7\u09b6 \u099c\u09c1\u09dc\u09c7 \u09b0\u0995\u09cd\u09a4\u09c7\u09b0 \u0997\u09cd\u09b0\u09c1\u09aa \u0993 \u09b2\u09cb\u0995\u09c7\u09b6\u09a8 \u0985\u09a8\u09c1\u09af\u09be\u09af\u09bc\u09c0 \u09b0\u0995\u09cd\u09a4\u09a6\u09be\u09a4\u09be \u0996\u09cb\u0981\u099c\u09be\u09b0 \u09ab\u09c1\u09b2-\u09b8\u09cd\u099f\u09cd\u09af\u09be\u0995 \u0993\u09af\u09bc\u09c7\u09ac \u0985\u09cd\u09af\u09be\u09aa\u0964",
    link: "https://blood-finder-mu.vercel.app/",
    isWide: true
  },
  {
    image: "proj_rxzai.png",
    category: "websites",
    title_en: "RXZ.Ai Chat \u2014 AI Chat Platform",
    title_bd: "RXZ.Ai \u099a\u09cd\u09af\u09be\u099f \u2014 AI \u099a\u09cd\u09af\u09be\u099f \u09aa\u09cd\u09b2\u09cd\u09af\u09be\u099f\u09ab\u09b0\u09cd\u09ae",
    desc_en: "A premium AI chat interface built with glassmorphism design. Features multi-model AI support, DALL-E 3 image generation, TradingView charts, chat history, and dark/light theme switching.",
    desc_bd: "\u0997\u09cd\u09b2\u09be\u09b8\u09ae\u09b0\u09ab\u09bf\u099c\u09ae \u09a1\u09bf\u099c\u09be\u0987\u09a8\u09c7 \u09a4\u09c8\u09b0\u09bf \u09aa\u09cd\u09b0\u09bf\u09ae\u09bf\u09af\u09bc\u09be\u09ae AI \u099a\u09cd\u09af\u09be\u099f \u0987\u09a8\u09cd\u099f\u09be\u09b0\u09ab\u09c7\u09b8\u0964 DALL-E 3 \u0987\u09ae\u09c7\u099c \u099c\u09c7\u09a8\u09be\u09b0\u09c7\u09b6\u09a8, TradingView \u099a\u09be\u09b0\u09cd\u099f, \u099a\u09cd\u09af\u09be\u099f \u09b9\u09bf\u09b8\u09cd\u099f\u09cb\u09b0\u09bf \u09b8\u09b9 \u09b8\u09ae\u09cd\u09aa\u09c2\u09b0\u09cd\u09a3 AI \u09aa\u09cd\u09b2\u09cd\u09af\u09be\u099f\u09ab\u09b0\u09cd\u09ae\u0964",
    link: "https://patoyari-gpt.vercel.app/",
    isWide: true
  },
  {
    image: "proj_7up.png",
    category: "websites",
    title_en: "7UP \u2014 Brand Landing Page",
    title_bd: "7UP \u2014 \u09ac\u09cd\u09b0\u09cd\u09af\u09be\u09a8\u09cd\u09a1 \u09b2\u09cd\u09af\u09be\u09a8\u09cd\u09a1\u09bf\u0982 \u09aa\u09c7\u099c",
    desc_en: "A vibrant, animated brand landing page for 7UP with modern glassmorphism design, product showcases, and smooth scroll animations.",
    desc_bd: "7UP-\u098f\u09b0 \u099c\u09a8\u09cd\u09af \u09aa\u09cd\u09b0\u09be\u09a3\u09ac\u09a8\u09cd\u09a4 \u0985\u09cd\u09af\u09be\u09a8\u09bf\u09ae\u09c7\u099f\u09c7\u09a1 \u09ac\u09cd\u09b0\u09cd\u09af\u09be\u09a8\u09cd\u09a1 \u09b2\u09cd\u09af\u09be\u09a8\u09cd\u09a1\u09bf\u0982 \u09aa\u09c7\u099c, \u0986\u09a7\u09c1\u09a8\u09bf\u0995 \u0997\u09cd\u09b2\u09be\u09b8\u09ae\u09b0\u09ab\u09bf\u099c\u09ae \u09a1\u09bf\u099c\u09be\u0987\u09a8 \u0993 \u09b8\u09cd\u09ae\u09c1\u09a5 \u09b8\u09cd\u0995\u09cd\u09b0\u09cb\u09b2 \u0985\u09cd\u09af\u09be\u09a8\u09bf\u09ae\u09c7\u09b6\u09a8 \u09b8\u09b9\u0964",
    link: "https://7up-hwnr.vercel.app/",
    isWide: true
  },
  {
    image: "proj_oscar.png",
    category: "websites",
    title_en: "Oscar Panel \u2014 Secure Admin Dashboard",
    title_bd: "\u0985\u09b8\u09cd\u0995\u09be\u09b0 \u09aa\u09cd\u09af\u09be\u09a8\u09c7\u09b2 \u2014 \u09b8\u09bf\u0995\u09bf\u0989\u09b0 \u0985\u09cd\u09af\u09be\u09a1\u09ae\u09bf\u09a8 \u09a1\u09cd\u09af\u09be\u09b6\u09ac\u09cb\u09b0\u09cd\u09a1",
    desc_en: "A premium bilingual admin staging panel with CAPTCHA security, role-based access, real-time analytics, USDT payment tracking, and DOB/State filtering.",
    desc_bd: "\u09aa\u09cd\u09b0\u09bf\u09ae\u09bf\u09af\u09bc\u09be\u09ae \u09ac\u09be\u0987\u09b2\u09bf\u0999\u09cd\u0997\u09c1\u09af\u09bc\u09be\u09b2 \u0985\u09cd\u09af\u09be\u09a1\u09ae\u09bf\u09a8 \u09b8\u09cd\u099f\u09cd\u09af\u09be\u099c\u09bf\u0982 \u09aa\u09cd\u09af\u09be\u09a8\u09c7\u09b2\u0964",
        isWide: true
  },
  {
    image: "proj_crypto.png",
    category: "websites",
    title_en: "Crypto Analysis Dashboard",
    title_bd: "\u0995\u09cd\u09b0\u09bf\u09aa\u09cd\u099f\u09cb \u0985\u09cd\u09af\u09be\u09a8\u09be\u09b2\u09be\u0987\u09b8\u09bf\u09b8 \u09a1\u09cd\u09af\u09be\u09b6\u09ac\u09cb\u09b0\u09cd\u09a1",
    desc_en: "Real-time crypto market tracker showing live prices, candlestick charts, market cap, portfolio overview, and all major token data (BTC, ETH, BNB, SOL, USDT).",
    desc_bd: "\u09b0\u09bf\u09af\u09bc\u09c7\u09b2-\u099f\u09be\u0987\u09ae \u0995\u09cd\u09b0\u09bf\u09aa\u09cd\u099f\u09cb \u09ae\u09be\u09b0\u09cd\u0995\u09c7\u099f \u099f\u09cd\u09b0\u09cd\u09af\u09be\u0995\u09be\u09b0 \u2014 BTC, ETH, BNB, SOL, USDT \u09a1\u09c7\u099f\u09be\u0964",
    isWide: true
  },
  {
    image: "proj_minigames2.png",
    category: "websites",
    title_en: "Mini Games Collection",
    title_bd: "\u09ae\u09bf\u09a8\u09bf \u0997\u09c7\u09ae\u09b8 \u0995\u09be\u09b2\u09c7\u0995\u09b6\u09a8",
    desc_en: "A browser-based game collection featuring Snake, Tic-Tac-Toe, Memory Cards, 2048, and more with local high score tracking.",
    desc_bd: "\u09ac\u09cd\u09b0\u09be\u0989\u099c\u09be\u09b0-\u09ac\u09c7\u09b8\u09a1 \u09ae\u09bf\u09a8\u09bf \u0997\u09c7\u09ae \u0995\u09be\u09b2\u09c7\u0995\u09b6\u09a8 \u2014 \u09b8\u09cd\u09a8\u09c7\u0995, \u099f\u09bf\u0995-\u099f\u09cd\u09af\u09be\u0995-\u099f\u09cb, 2048 \u09b8\u09b9 \u09b9\u09be\u0987 \u09b8\u09cd\u0995\u09cb\u09b0 \u099f\u09cd\u09b0\u09cd\u09af\u09be\u0995\u09bf\u0982\u0964",
    isWide: true
  },
  {
    image: "web_dashboard.png",
    category: "websites",
    title_en: "Bilingual Staging Portal",
    title_bd: "\u09ac\u09be\u0987\u09b2\u09bf\u0999\u09cd\u0997\u09c1\u09af\u09bc\u09be\u09b2 \u09b8\u09cd\u099f\u09cd\u09af\u09be\u099c\u09bf\u0982 \u09aa\u09cb\u09b0\u09cd\u099f\u09be\u09b2",
    desc_en: "A premium staging console for US profiles with advanced state, base, and DOB filtering controls.",
    desc_bd: "\u0989\u09a8\u09cd\u09a8\u09a4 \u09b8\u09cd\u099f\u09c7\u099f, \u09ac\u09c7\u09b8 \u098f\u09ac\u0982 \u099c\u09a8\u09cd\u09ae\u09a4\u09be\u09b0\u09bf\u0996 \u09ab\u09bf\u09b2\u09cd\u099f\u09be\u09b0\u09bf\u0982 \u09b8\u09c1\u09ac\u09bf\u09a7\u09be\u09b8\u09b9 \u09b2\u09cb\u0995\u09be\u09b2 \u09b8\u09cd\u099f\u09cd\u09af\u09be\u099c\u09bf\u0982 \u09b0\u09c7\u0995\u09b0\u09cd\u09a1 \u0995\u09a8\u09b8\u09cb\u09b2\u0964"
  },
  {
    image: "crypto_invoice.png",
    category: "websites",
    title_en: "Blockchain Deposit Portal",
    title_bd: "\u09ac\u09cd\u09b2\u0995\u099a\u09c7\u09a8 \u09a1\u09bf\u09aa\u099c\u09bf\u099f \u09aa\u09cb\u09b0\u09cd\u099f\u09be\u09b2",
    desc_en: "Multi-coin cryptopay invoicing page containing live currency conversion and manual hash confirmations.",
    desc_bd: "\u09b2\u09be\u0987\u09ad \u0995\u09be\u09b0\u09c7\u09a8\u09cd\u09b8\u09bf \u0995\u09a8\u09ad\u09be\u09b0\u09cd\u09b6\u09a8 \u098f\u09ac\u0982 \u09ae\u09cd\u09af\u09be\u09a8\u09c1\u09af\u09bc\u09be\u09b2 \u09b9\u09cd\u09af\u09be\u09b6 \u09a8\u09bf\u09b6\u09cd\u099a\u09bf\u09a4\u0995\u09b0\u09a3\u09b8\u09b9 \u09ae\u09be\u09b2\u09cd\u099f\u09bf-\u0995\u09af\u09bc\u09c7\u09a8 \u0995\u09cd\u09b0\u09bf\u09aa\u09cd\u099f\u09cb\u09aa\u09c7 \u0987\u09a8\u09ad\u09af\u09bc\u09c7\u09b8 \u09aa\u09c7\u099c\u0964"
  },
  // Apps Category
  {
    image: "proj_photoeditor.png",
    category: "apps",
    title_en: "Photo Editor & Camera App",
    title_bd: "\u09ab\u099f\u09cb \u098f\u09a1\u09bf\u099f\u09b0 \u0993 \u0995\u09cd\u09af\u09be\u09ae\u09c7\u09b0\u09be \u0985\u09cd\u09af\u09be\u09aa",
    desc_en: "Android app featuring a custom camera, real-time filters (Cinematic, Vivid, Vintage), brightness/saturation sliders, crop tool, and one-tap export.",
    desc_bd: "\u0995\u09be\u09b8\u09cd\u099f\u09ae \u0995\u09cd\u09af\u09be\u09ae\u09c7\u09b0\u09be, \u09b0\u09bf\u09af\u09bc\u09c7\u09b2-\u099f\u09be\u0987\u09ae \u09ab\u09bf\u09b2\u09cd\u099f\u09be\u09b0, \u09ac\u09cd\u09b0\u09be\u0987\u099f\u09a8\u09c7\u09b8/\u09b8\u09cd\u09af\u09be\u099a\u09c1\u09b0\u09c7\u09b6\u09a8 \u09b8\u09cd\u09b2\u09be\u0987\u09a1\u09be\u09b0, \u0995\u09cd\u09b0\u09aa \u099f\u09c1\u09b2 \u098f\u09ac\u0982 \u0993\u09af\u09bc\u09be\u09a8-\u099f\u09cd\u09af\u09be\u09aa \u098f\u0995\u09cd\u09b8\u09aa\u09cb\u09b0\u09cd\u099f\u09b8\u09b9 \u0985\u09cd\u09af\u09be\u09a8\u09cd\u09a1\u09cd\u09b0\u09af\u09bc\u09c7\u09a1 \u0985\u09cd\u09af\u09be\u09aa\u0964"
  },
  {
    image: "app_bloodfinder.png",
    category: "apps",
    title_en: "Blood Finder \u2014 Android App",
    title_bd: "\u09ac\u09cd\u09b2\u09be\u09a1 \u09ab\u09be\u0987\u09a8\u09cd\u09a1\u09be\u09b0 \u2014 \u0985\u09cd\u09af\u09be\u09a8\u09cd\u09a1\u09cd\u09b0\u09af\u09bc\u09c7\u09a1 \u0985\u09cd\u09af\u09be\u09aa",
    desc_en: "Native Android companion app for Blood Finder platform. Search donors, send emergency alerts, and manage your donor profile from your phone.",
    desc_bd: "\u09ac\u09cd\u09b2\u09be\u09a1 \u09ab\u09be\u0987\u09a8\u09cd\u09a1\u09be\u09b0 \u09aa\u09cd\u09b2\u09cd\u09af\u09be\u099f\u09ab\u09b0\u09cd\u09ae\u09c7\u09b0 \u09a8\u09c7\u099f\u09bf\u09ad \u0985\u09cd\u09af\u09be\u09a8\u09cd\u09a1\u09cd\u09b0\u09af\u09bc\u09c7\u09a1 \u0985\u09cd\u09af\u09be\u09aa\u0964"
  },
  {
    image: "app_ecommerce.png",
    category: "apps",
    title_en: "E-Commerce Android App",
    title_bd: "\u0987-\u0995\u09ae\u09be\u09b0\u09cd\u09b8 \u0985\u09cd\u09af\u09be\u09a8\u09cd\u09a1\u09cd\u09b0\u09af\u09bc\u09c7\u09a1 \u0985\u09cd\u09af\u09be\u09aa",
    desc_en: "Full-featured e-commerce Android app with product browsing, cart, USDT/cash payment gateway, order tracking, and admin order management.",
    desc_bd: "\u09aa\u09cd\u09b0\u09cb\u09a1\u09be\u0995\u09cd\u099f \u09ac\u09cd\u09b0\u09be\u0989\u099c\u09bf\u0982, \u0995\u09be\u09b0\u09cd\u099f, USDT/\u0995\u09cd\u09af\u09be\u09b6 \u09aa\u09c7\u09ae\u09c7\u09a8\u09cd\u099f \u0997\u09c7\u099f\u0993\u09af\u09bc\u09c7, \u0985\u09b0\u09cd\u09a1\u09be\u09b0 \u099f\u09cd\u09b0\u09cd\u09af\u09be\u0995\u09bf\u0982\u09b8\u09b9 \u09ab\u09c1\u09b2-\u09ab\u09bf\u099a\u09be\u09b0\u09cd\u09a1 \u0987-\u0995\u09ae\u09be\u09b0\u09cd\u09b8 \u0985\u09cd\u09af\u09be\u09a8\u09cd\u09a1\u09cd\u09b0\u09af\u09bc\u09c7\u09a1 \u0985\u09cd\u09af\u09be\u09aa\u0964"
  },
  {
    image: "mobile_app.png",
    category: "apps",
    title_en: "Secure Login Authenticator",
    title_bd: "\u09b8\u09bf\u0995\u09bf\u0989\u09b0 \u09b2\u0997\u0987\u09a8 \u0985\u09a5\u09c7\u09a8\u09cd\u099f\u09bf\u0995\u09c7\u099f\u09b0",
    desc_en: "Android credentials check app featuring built-in captcha and local session encryption algorithms.",
    desc_bd: "\u09ac\u09bf\u09b2\u09cd\u099f-\u0987\u09a8 \u0995\u09cd\u09af\u09be\u09aa\u099a\u09be \u09ad\u09cd\u09af\u09be\u09b2\u09bf\u09a1\u09c7\u09b6\u09a8 \u098f\u09ac\u0982 \u09b8\u09c7\u09b6\u09a8 \u098f\u09a8\u0995\u09cd\u09b0\u09bf\u09aa\u09b6\u09a8 \u0985\u09cd\u09af\u09be\u09b2\u0997\u09b0\u09bf\u09a6\u09ae\u09b8\u09b9 \u0985\u09cd\u09af\u09be\u09a8\u09cd\u09a1\u09cd\u09b0\u09af\u09bc\u09c7\u09a1 \u09ae\u09cb\u09ac\u09be\u0987\u09b2 \u0985\u09cd\u09af\u09be\u09aa\u0964"
  }
];


// Render dynamic portfolio items
function renderPortfolioItems(lang = 'en') {
  const grid = document.getElementById('portfolioGrid');
  if (!grid) return;
  
  grid.innerHTML = '';
  
  // Check if there is an active filter button currently
  const activeFilterBtn = document.querySelector('.portfolio-filters .filter-btn.active');
  const activeFilter = activeFilterBtn ? activeFilterBtn.getAttribute('data-filter') : null;
  
  // If there is no active filter button, hide all items initially and show the empty state message
  const hideAllInitially = !activeFilter;
  
  portfolioProjects.forEach(proj => {
    const title = lang === 'bd' ? proj.title_bd : proj.title_en;
    const desc = lang === 'bd' ? proj.desc_bd : proj.desc_en;
    const catLabelKey = proj.category === 'websites' ? 'cat_staging' : (proj.category === 'apps' ? 'cat_interface' : 'cat_component');
    const catLabel = translations[lang][catLabelKey];
    
    const item = document.createElement('div');
    item.className = 'portfolio-item reveal' + (proj.isWide ? ' wide' : '');
    item.setAttribute('data-category', proj.category);
    item.setAttribute('data-image', proj.image);
    item.setAttribute('data-title', title);
    item.setAttribute('data-desc', desc);
    
    if (hideAllInitially) {
      item.style.display = 'none';
      item.style.opacity = '0';
    } else if (activeFilter && activeFilter !== 'all' && proj.category !== activeFilter) {
      item.style.display = 'none';
      item.style.opacity = '0';
    }
    
    item.innerHTML = `
      <img src="${proj.image}" alt="${title}" class="portfolio-img" loading="lazy">
      <div class="portfolio-overlay">
        <div class="portfolio-cat">${catLabel}</div>
        <h3 class="portfolio-title">${title}</h3>
        ${proj.link ? `<a href="${proj.link}" target="_blank" rel="noopener noreferrer" class="portfolio-live-btn" onclick="event.stopPropagation()"><i class="bi bi-box-arrow-up-right"></i> Live Site</a>` : ''}
      </div>
    `;
    
    grid.appendChild(item);
  });
  
  if (hideAllInitially) {
    // Append beautiful empty state message
    const emptyState = document.createElement('div');
    emptyState.id = 'portfolioEmptyState';
    emptyState.className = 'portfolio-empty-state glass-panel reveal active';
    emptyState.style.gridColumn = '1 / -1';
    emptyState.style.padding = '3.5rem 2rem';
    emptyState.style.textAlign = 'center';
    emptyState.style.display = 'flex';
    emptyState.style.flexDirection = 'column';
    emptyState.style.alignItems = 'center';
    emptyState.style.justifyContent = 'center';
    emptyState.style.gap = '1.25rem';
    
    const msgIcon = '<i class="bi bi-folder2-open text-gradient-primary" style="font-size: 3.5rem;"></i>';
    const msgTitle = lang === 'bd' ? 'আমার প্রজেক্টগুলো দেখুন' : 'Explore My Projects';
    const msgDesc = lang === 'bd' ? 'আমার করা কাজগুলো দেখতে নিচে যেকোনো একটি ক্যাটাগরি নির্বাচন করুন:' : 'Select a category below to see my photography, website portfolios, or mobile apps:';
    
    // Dynamically retrieve labels for empty state buttons
    const btnPhotoLabel = translations[lang]['filter_photography'];
    const btnWebLabel = translations[lang]['filter_websites'];
    const btnAppLabel = translations[lang]['filter_apps'];
    
    emptyState.innerHTML = `
      ${msgIcon}
      <h3 style="font-size: 1.6rem; font-weight: 700; margin: 0;">${msgTitle}</h3>
      <p style="color: var(--text-secondary); max-width: 480px; margin: 0 0 0.5rem 0; font-size: 0.98rem; line-height: 1.5;">${msgDesc}</p>
      <div class="portfolio-empty-state-filters">
        <button class="filter-btn empty-state-btn" data-filter="photography">${btnPhotoLabel}</button>
        <button class="filter-btn empty-state-btn" data-filter="websites">${btnWebLabel}</button>
        <button class="filter-btn empty-state-btn" data-filter="apps">${btnAppLabel}</button>
      </div>
    `;
    grid.appendChild(emptyState);
    
    // Wire up event listeners to empty state buttons to trigger topFilters
    emptyState.querySelectorAll('.empty-state-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const filterVal = btn.getAttribute('data-filter');
        const topBtn = document.querySelector(`#topFilters .filter-btn[data-filter="${filterVal}"]`);
        if (topBtn) {
          topBtn.click();
        }
      });
    });
  }
  
  bindLightboxEvents();
  initTiltEffect(); // Re-apply tilt to newly generated items
}

// Render dynamic testimonials
function renderTestimonials(lang = 'en') {
  const grid = document.getElementById('testimonialsGrid');
  if (!grid) return;
  
  grid.innerHTML = '';
  
  testimonials.forEach(t => {
    const name = lang === 'bd' ? t.name_bd : t.name_en;
    const role = lang === 'bd' ? t.role_bd : t.role_en;
    const text = lang === 'bd' ? t.text_bd : t.text_en;
    
    const card = document.createElement('div');
    card.className = 'glass-panel testimonial-card reveal';
    card.innerHTML = `
      <div class="testimonial-stars">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
      <p class="testimonial-text">"${text}"</p>
      <div class="testimonial-author">
        <div class="testimonial-avatar">${t.avatar}</div>
        <div class="testimonial-author-info">
          <div class="testimonial-name">${name}</div>
          <div class="testimonial-role">${role}</div>
        </div>
      </div>
    `;
    
    grid.appendChild(card);
  });
  
  initTiltEffect();
  document.querySelectorAll('.testimonial-card').forEach(card => {
    if (card.getBoundingClientRect().top < window.innerHeight - 120) {
      card.classList.add('active');
    }
  });
}

// Bind Lightbox modal events
function bindLightboxEvents() {
  const items = document.querySelectorAll('.portfolio-item');
  const lightbox = document.getElementById('portfolioLightbox');
  const lightboxImg = document.getElementById('lightboxImg');
  const lightboxCaption = document.getElementById('lightboxCaption');
  const lightboxDesc = document.getElementById('lightboxDesc');
  
  items.forEach(item => {
    item.addEventListener('click', () => {
      const imgSrc = item.getAttribute('data-image');
      const title = item.getAttribute('data-title');
      const desc = item.getAttribute('data-desc');
      
      if (lightbox && lightboxImg) {
        lightboxImg.src = imgSrc;
        lightboxCaption.textContent = title;
        lightboxDesc.textContent = desc;
        lightbox.classList.add('active');
      }
    });
  });
}

// Handle translation operations
function translatePage(lang) {
  localStorage.setItem('lang', lang);
  const elements = document.querySelectorAll('[data-translate]');
  elements.forEach(el => {
    const key = el.getAttribute('data-translate');
    if (translations[lang] && translations[lang][key]) {
      if (el.tagName === 'INPUT' || el.tagName === 'SELECT') {
        el.setAttribute('placeholder', translations[lang][key]);
      } else {
        el.textContent = translations[lang][key];
      }
    }
  });
  
  if (lang === 'bd') {
    document.querySelectorAll('#estProjectType option').forEach((opt, idx) => {
      const keys = ['est_type_photography', 'est_type_websites', 'est_type_apps'];
      opt.textContent = translations.bd[keys[idx]];
    });
    document.querySelectorAll('#estProjectScale option').forEach((opt, idx) => {
      const keys = ['est_scale_small', 'est_scale_medium', 'est_scale_large'];
      opt.textContent = translations.bd[keys[idx]];
    });
  } else {
    document.querySelectorAll('#estProjectType option').forEach((opt, idx) => {
      const keys = ['est_type_photography', 'est_type_websites', 'est_type_apps'];
      opt.textContent = translations.en[keys[idx]];
    });
    document.querySelectorAll('#estProjectScale option').forEach((opt, idx) => {
      const keys = ['est_scale_small', 'est_scale_medium', 'est_scale_large'];
      opt.textContent = translations.en[keys[idx]];
    });
  }

  adjustEstimatorLabels(lang);
  renderPortfolioItems(lang);
  renderTestimonials(lang);
}

// Adjust labels inside project estimator dynamically
function adjustEstimatorLabels(lang = 'en') {
  const projectType = document.getElementById('estProjectType').value;
  const labelSecurity = document.getElementById('labelSecurity');
  const labelCrypto = document.getElementById('labelCrypto');
  const labelTranslate = document.getElementById('labelTranslate');
  const labelTheme = document.getElementById('labelTheme');
  const labelOption5 = document.getElementById('labelOption5');
  const labelOption6 = document.getElementById('labelOption6');
  
  if (!labelSecurity || !labelOption5 || !labelOption6) return;
  
  if (projectType === 'photography') {
    if (lang === 'bd') {
      labelSecurity.textContent = "প্রিমিয়াম স্কিন রিটাচিং (Skin Retouching)";
      labelCrypto.textContent = "অতিরিক্ত আউটডোর লোকেশন চার্জ";
      labelTranslate.textContent = "হাই-এন্ড কালার গ্রেডিং (Color Grading)";
      labelTheme.textContent = "কাস্টম ফ্রেম বা ক্যানভাস প্রিন্ট";
      labelOption5.textContent = translations.bd.feat_raw_files;
      labelOption6.textContent = translations.bd.feat_express_delivery;
    } else {
      labelSecurity.textContent = "Premium Skin Retouching";
      labelCrypto.textContent = "Additional Outdoor Location";
      labelTranslate.textContent = "High-End Color Grading";
      labelTheme.textContent = "Custom Frame or Canvas Print";
      labelOption5.textContent = translations.en.feat_raw_files;
      labelOption6.textContent = translations.en.feat_express_delivery;
    }
  } else if (projectType === 'apps') {
    if (lang === 'bd') {
      labelSecurity.textContent = translations.bd.feat_security;
      labelCrypto.textContent = translations.bd.feat_crypto;
      labelTranslate.textContent = translations.bd.feat_translate;
      labelTheme.textContent = translations.bd.feat_theme;
      labelOption5.textContent = translations.bd.feat_push_notifications;
      labelOption6.textContent = translations.bd.feat_offline_sync;
    } else {
      labelSecurity.textContent = translations.en.feat_security;
      labelCrypto.textContent = translations.en.feat_crypto;
      labelTranslate.textContent = translations.en.feat_translate;
      labelTheme.textContent = translations.en.feat_theme;
      labelOption5.textContent = translations.en.feat_push_notifications;
      labelOption6.textContent = translations.en.feat_offline_sync;
    }
  } else {
    // Default: websites
    if (lang === 'bd') {
      labelSecurity.textContent = translations.bd.feat_security;
      labelCrypto.textContent = translations.bd.feat_crypto;
      labelTranslate.textContent = translations.bd.feat_translate;
      labelTheme.textContent = translations.bd.feat_theme;
      labelOption5.textContent = translations.bd.feat_option5;
      labelOption6.textContent = translations.bd.feat_option6;
    } else {
      labelSecurity.textContent = translations.en.feat_security;
      labelCrypto.textContent = translations.en.feat_crypto;
      labelTranslate.textContent = translations.en.feat_translate;
      labelTheme.textContent = translations.en.feat_theme;
      labelOption5.textContent = translations.en.feat_option5;
      labelOption6.textContent = translations.en.feat_option6;
    }
  }
}

// --- Theme Management ---
function initTheme() {
  const savedTheme = localStorage.getItem('theme') || 'dark';
  document.documentElement.setAttribute('data-theme', savedTheme);
  updateThemeIcon(savedTheme);
}

function updateThemeIcon(theme) {
  const themeBtn = document.getElementById('themeToggleBtn');
  if (!themeBtn) return;
  themeBtn.innerHTML = theme === 'dark' ? '<i class="bi bi-sun-fill"></i>' : '<i class="bi bi-moon-stars-fill"></i>';
}

function toggleTheme() {
  const currentTheme = document.documentElement.getAttribute('data-theme') || 'dark';
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', newTheme);
  localStorage.setItem('theme', newTheme);
  updateThemeIcon(newTheme);
}

// --- Mobile Navigation ---
function initMobileMenu() {
  const toggle = document.getElementById('mobileMenuToggle');
  const menu = document.getElementById('navMenu');
  
  if (toggle && menu) {
    toggle.addEventListener('click', () => {
      menu.classList.toggle('active');
      const icon = toggle.querySelector('i');
      icon.className = menu.classList.contains('active') ? 'bi bi-x-lg' : 'bi bi-list';
    });

    menu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        menu.classList.remove('active');
        toggle.querySelector('i').className = 'bi bi-list';
      });
    });
  }
}

// --- Scroll Effects & Scroll Reveal ---
function initScrollEffect() {
  const navbar = document.querySelector('.navbar');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });
}

function initScrollReveal() {
  const reveals = document.querySelectorAll('.reveal');
  const revealOnScroll = () => {
    reveals.forEach(rev => {
      const windowHeight = window.innerHeight;
      const elementTop = rev.getBoundingClientRect().top;
      const elementVisible = 120;
      if (elementTop < windowHeight - elementVisible) {
        rev.classList.add('active');
      }
    });
  };
  window.addEventListener('scroll', revealOnScroll);
  revealOnScroll(); // Run initially
}

// --- 3D Card Tilt Interaction ---
function initTiltEffect() {
  const cards = document.querySelectorAll('.glass-panel, .portfolio-item');
  cards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      
      const rotateX = ((centerY - y) / centerY) * 10; // max 10 degrees tilt
      const rotateY = ((x - centerX) / centerX) * 10;
      
      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px)`;
    });
    
    card.addEventListener('mouseleave', () => {
      card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)';
    });
  });
}

// --- Check Profile Image Fallback ---
function checkProfileFallback() {
  const heroImage = document.getElementById('heroAvatarImg');
  if (heroImage) {
    heroImage.onerror = () => {
      // If profile.jpg is missing, fallback to our generated landscape/portrait
      heroImage.src = 'photo_portrait.jpg';
    };
  }
}

// --- Floating Widget ---
function initFloatingWidget() {
  const trigger = document.getElementById('floatingTrigger');
  const widget = document.getElementById('floatingWidget');
  
  if (trigger && widget) {
    trigger.addEventListener('click', (e) => {
      e.stopPropagation();
      widget.classList.toggle('active');
      const icon = trigger.querySelector('i');
      icon.className = widget.classList.contains('active') ? 'bi bi-x-circle-fill' : 'bi bi-share-fill';
    });
    
    document.addEventListener('click', () => {
      widget.classList.remove('active');
      trigger.querySelector('i').className = 'bi bi-share-fill';
    });
  }
}

// --- Portfolio Filters Binding ---
function initFilters() {
  const filtersContainer = document.querySelector('.portfolio-filters');
  const filters = document.querySelectorAll('.filter-btn');
  
  // Set has-active if there's already an active filter on load
  const hasActiveInitially = document.querySelector('.portfolio-filters .filter-btn.active');
  if (hasActiveInitially && filtersContainer) {
    filtersContainer.classList.add('has-active');
  }
  
  filters.forEach(btn => {
    btn.addEventListener('click', () => {
      filters.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      if (filtersContainer) {
        filtersContainer.classList.add('has-active');
        
        // Show topFilters smoothly if it was hidden
        if (filtersContainer.id === 'topFilters') {
          filtersContainer.style.display = 'flex';
          setTimeout(() => {
            filtersContainer.style.opacity = '1';
            filtersContainer.style.transform = 'translateY(0)';
          }, 50);
        }
      }
      
      const filterValue = btn.getAttribute('data-filter');
      const items = document.querySelectorAll('.portfolio-item');
      
      const emptyState = document.getElementById('portfolioEmptyState');
      if (emptyState) {
        emptyState.style.display = 'none';
      }
      
      items.forEach(item => {
        if (filterValue === 'all' || item.getAttribute('data-category') === filterValue) {
          item.style.display = 'block';
          setTimeout(() => item.style.opacity = '1', 50);
        } else {
          item.style.opacity = '0';
          setTimeout(() => item.style.display = 'none', 200);
        }
      });
    });
  });
}

// --- Estimator Pricing Calculator ---
function calculateEstimate() {
  const projectType = document.getElementById('estProjectType').value;
  const projectScale = document.getElementById('estProjectScale').value;
  const security = document.getElementById('featSecurity').checked;
  const crypto = document.getElementById('featCrypto').checked;
  const translate = document.getElementById('featTranslate').checked;
  const theme = document.getElementById('featTheme').checked;
  const option5 = document.getElementById('featOption5').checked;
  const option6 = document.getElementById('featOption6').checked;
  
  let basePrice = 80; // Web Developer
  if (projectType === 'apps') {
    basePrice = 140; // Android Developer
  } else if (projectType === 'photography') {
    basePrice = 40; // Photo Session
  }
  
  let multiplier = 1.0;
  if (projectScale === 'medium') {
    multiplier = 1.5;
  } else if (projectScale === 'large') {
    multiplier = 2.2;
  }
  
  let featuresCost = 0;
  
  if (projectType === 'photography') {
    if (security) featuresCost += 15;  // Skin Retouch
    if (crypto) featuresCost += 30;    // Outdoor Location
    if (translate) featuresCost += 20; // Color Grade
    if (theme) featuresCost += 25;     // Frame/Canvas
    if (option5) featuresCost += 20;   // Raw Files
    if (option6) featuresCost += 30;   // Same-day Delivery
  } else {
    if (security) featuresCost += 30;  // Captcha & Security
    if (crypto) featuresCost += 60;    // Crypto Balance Check
    if (translate) featuresCost += 40; // Multi-Language Switcher
    if (theme) featuresCost += 20;     // Advanced Color/Theme
    if (option5) featuresCost += 50;   // Admin Panel or Push Notification
    if (option6) featuresCost += 40;   // SEO or Offline Sync
  }
  
  const totalPrice = Math.round((basePrice * multiplier) + featuresCost);
  
  const priceDisplay = document.getElementById('estimatorPrice');
  if (priceDisplay) {
    priceDisplay.textContent = `$${totalPrice} USD`;
  }
  
  return { totalPrice, projectType, projectScale, security, crypto, translate, theme, option5, option6 };
}

function initEstimator() {
  const inputs = [
    document.getElementById('estProjectType'),
    document.getElementById('estProjectScale'),
    document.getElementById('featSecurity'),
    document.getElementById('featCrypto'),
    document.getElementById('featTranslate'),
    document.getElementById('featTheme'),
    document.getElementById('featOption5'),
    document.getElementById('featOption6')
  ];
  
  inputs.forEach(input => {
    if (input) {
      input.addEventListener('change', () => {
        const lang = localStorage.getItem('lang') || 'en';
        adjustEstimatorLabels(lang);
        calculateEstimate();
      });
    }
  });
  
  calculateEstimate();
  
  const sendBtn = document.getElementById('btnSendEstimate');
  if (sendBtn) {
    sendBtn.addEventListener('click', () => {
      const data = calculateEstimate();
      const currentLang = localStorage.getItem('lang') || 'en';
      
      const typeTextEn = { websites: 'Web Application / Admin Panel', apps: 'Android Mobile Application', photography: 'Photography & Digital Retouch' };
      const typeTextBd = { websites: 'ওয়েব অ্যাপ্লিকেশন / এডমিন প্যানেল', apps: 'অ্যান্ড্রয়েড মোবাইল অ্যাপ্লিকেশন', photography: 'ফটোগ্রাফি ও ডিজিটাল রিটাচ সেশন' };
      
      const scaleTextEn = { small: 'Basic (Staging / Personal)', medium: 'Standard (Standard business / Full session)', large: 'Advanced (Commercial / Enterprise)' };
      const scaleTextBd = { small: 'বেসিক (ব্যক্তিগত / স্ট্যাজিং)', medium: 'স্ট্যান্ডার্ড (সাধারণ ব্যবসা / ফুল সেশন)', large: 'অ্যাডভান্সড (কমার্শিয়াল / এন্টারপ্রাইজ)' };
      
      let featureList = [];
      if (data.projectType === 'photography') {
        if (data.security) featureList.push(currentLang === 'bd' ? 'স্কিন রিটাচিং' : 'Skin Retouching');
        if (data.crypto) featureList.push(currentLang === 'bd' ? 'আউটডোর লোকেশন' : 'Outdoor Location');
        if (data.translate) featureList.push(currentLang === 'bd' ? 'কালার গ্রেডিং' : 'Color Grading');
        if (data.theme) featureList.push(currentLang === 'bd' ? 'ফ্রেমিং/ক্যানভাস প্রিন্ট' : 'Framing/Canvas Print');
        if (data.option5) featureList.push(currentLang === 'bd' ? 'র সোর্স ফাইল (.RAW / .PSD)' : 'Raw Source Files (.RAW/.PSD)');
        if (data.option6) featureList.push(currentLang === 'bd' ? 'একই দিনে দ্রুত ডেলিভারি' : 'Same-Day Express Delivery');
      } else if (data.projectType === 'apps') {
        if (data.security) featureList.push(currentLang === 'bd' ? 'ক্যাপচা ও সিকিউরিটি প্যানেল' : 'Security Captcha');
        if (data.crypto) featureList.push(currentLang === 'bd' ? 'ইউএসডিটি অটো ভেরিফায়ার' : 'USDT Auto Deposit Tracker');
        if (data.translate) featureList.push(currentLang === 'bd' ? 'বাংলা-ইংরেজি ল্যাঙ্গুয়েজ স্যুইচার' : 'Multi-Language i18n Switcher');
        if (data.theme) featureList.push(currentLang === 'bd' ? 'ডার্ক/লাইট থিম স্যুইচার' : 'Dark/Light Theme Switcher');
        if (data.option5) featureList.push(currentLang === 'bd' ? 'পুশ নোটিফিকেশন (Firebase)' : 'Push Notifications (Firebase)');
        if (data.option6) featureList.push(currentLang === 'bd' ? 'অফলাইন সাপোর্ট ও SQLite সিঙ্ক' : 'Offline Support & SQLite Sync');
      } else {
        if (data.security) featureList.push(currentLang === 'bd' ? 'ক্যাপচা ও সিকিউরিটি প্যানেল' : 'Security Captcha');
        if (data.crypto) featureList.push(currentLang === 'bd' ? 'ইউএসডিটি অটো ভেরিফায়ার' : 'USDT Auto Deposit Tracker');
        if (data.translate) featureList.push(currentLang === 'bd' ? 'বাংলা-ইংরেজি ল্যাঙ্গুয়েজ স্যুইচার' : 'Multi-Language i18n Switcher');
        if (data.theme) featureList.push(currentLang === 'bd' ? 'ডার্ক/লাইট থিম স্যুইচার' : 'Dark/Light Theme Switcher');
        if (data.option5) featureList.push(currentLang === 'bd' ? 'অ্যাডমিন প্যানেল ও CMS ইন্টিগ্রেশন' : 'Admin Panel & CMS Integration');
        if (data.option6) featureList.push(currentLang === 'bd' ? 'এসইও অপটিমাইজেশন ও অ্যানালিটিক্স' : 'SEO Optimization & Analytics');
      }
      
      const featuresStr = featureList.length > 0 ? featureList.join(', ') : (currentLang === 'bd' ? 'কোনোটিই নয়' : 'None');
      
      let message = '';
      if (currentLang === 'bd') {
        message = `হ্যালো রায়হান, আমি আপনার সাথে একটি প্রজেক্ট শুরু করতে আগ্রহী। আমার নির্বাচিত বিবরণ নিচে দেওয়া হলো:

• প্রজেক্টের ধরন: ${typeTextBd[data.projectType]}
• প্রজেক্টের পরিধি: ${scaleTextBd[data.projectScale]}
• অতিরিক্ত সার্ভিসসমূহ: ${featuresStr}

আমি আপনার সাথে প্রজেক্টটি নিয়ে বিস্তারিত আলোচনা করতে চাই!`;
      } else {
        message = `Hello Rayhan, I am interested in planning a project with you. Here are the details I selected on your website:

• Project Type: ${typeTextEn[data.projectType]}
• Project Scale: ${scaleTextEn[data.projectScale]}
• Selected Features: ${featuresStr}

I would like to discuss starting this project with you!`;
      }
      
      const encodedMsg = encodeURIComponent(message);
      const whatsappUrl = `https://wa.me/8801754297175?text=${encodedMsg}`;
      window.open(whatsappUrl, '_blank');
    });
  }
}

// --- Lightbox Closing Action ---
function initLightboxClosing() {
  const lightbox = document.getElementById('portfolioLightbox');
  const lightboxClose = document.getElementById('lightboxClose');
  
  const closeBox = () => {
    if (lightbox) lightbox.classList.remove('active');
  };

  if (lightboxClose) lightboxClose.addEventListener('click', closeBox);
  if (lightbox) {
    lightbox.addEventListener('click', (e) => {
      if (e.target === lightbox) closeBox();
    });
  }
  
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeBox();
  });
}

// --- DOM Initialization ---
document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initMobileMenu();
  initScrollEffect();
  initFloatingWidget();
  initFilters();
  initEstimator();
  initLightboxClosing();
  checkProfileFallback();
  
  // Set copyright footer year automatically
  const yearSpan = document.getElementById('footerYear');
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }
  
  // Language Switcher selector
  const langSelect = document.getElementById('languageSelect');
  if (langSelect) {
    const savedLang = localStorage.getItem('lang') || 'en';
    langSelect.value = savedLang;
    translatePage(savedLang);
    
    langSelect.addEventListener('change', (e) => {
      translatePage(e.target.value);
    });
  }
  
  // Theme Toggle click event listener
  const themeToggle = document.getElementById('themeToggleBtn');
  if (themeToggle) {
    themeToggle.addEventListener('click', toggleTheme);
  }
  
  // Trigger initial scroll reveal and start observer
  setTimeout(() => {
    initScrollReveal();
  }, 200);
});
