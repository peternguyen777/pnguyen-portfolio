const PortfolioProjects = [
  {
    id: 0,
    imageMobile: "/portfolio/mobile/image-portfolio-clock@2x.jpg",
    imageTablet: "/portfolio/tablet/image-portfolio-clock@2x.jpg",
    imageDesktop: "/portfolio/desktop/image-portfolio-clock@2x.jpg",
    title: "Bitcoin Clock",
    slug: "clock",
    introduction:
      "This project is a responsive Bitcoin Clock app built with NextJS. Using FetchAPI to call Bitcoin data and World Time from external APIs, the project also integrates Satoshi Nakamoto quotes from our own firebase database.",
    background:
      "This project started as front-end challenge from Frontend Mentor. The aim was to create a responsive mobile-first clock dashboard working with external APIs to set time data based on a visitor's location and generate random programming quotes. Inspired by the Blockclock Moscow Time meme spawned from Jack Dorsey's House Committee hearing, I added Bitcoin clock functionality to the app to display relevant bitcoin statistics. The quotes were then linked to a firebase database of Satoshi Nakamoto's important quotes from the BitcoinTalk forum before he left the project in late 2010.",

    category: "Interaction Design / Front End Development",
    languages: "NextJS / TailwindCSS / Framer Motion / Firebase",
    heroMobile: "/detail/mobile/image-clock-hero@2x.jpg",
    heroTablet: "/detail/tablet/image-clock-hero@2x.jpg",
    heroDesktop: "/detail/desktop/image-clock-hero@2x.jpg",
    previewMobile: "/detail/mobile/image-clock-preview-1@2x.jpg",
    preview2Mobile: "/detail/mobile/image-clock-preview-2@2x.jpg",
    previewTablet: "/detail/tablet/image-clock-preview-1@2x.jpg",
    preview2Tablet: "/detail/tablet/image-clock-preview-2@2x.jpg",
    previewDesktop: "/detail/desktop/image-clock-preview-1@2x.jpg",
    preview2Desktop: "/detail/desktop/image-clock-preview-2@2x.jpg",
    website: "https://fem-bitcoin-clock.vercel.app",
    github: "https://github.com/peternguyen777/fem-bitcoin-clock",
  },
  {
    id: 1,
    imageMobile: "/portfolio/mobile/image-portfolio-comments@2x.jpg",
    imageTablet: "/portfolio/tablet/image-portfolio-comments@2x.jpg",
    imageDesktop: "/portfolio/desktop/image-portfolio-comments@2x.jpg",
    title: "Interactive Comments",
    slug: "interactive",
    introduction:
      "This project is a fully-responsive interactive chat application built with NextJS, TailwindCSS and some Redux for state management. The app has built-in CRUD functionality, allowing comments to be posted, editted, deleted.",
    background:
      "This project started as a challenge from Frontend mentor. The app allows the current user to reply to others' comments and to delete/edit their own. Beginning with a provided UI design, the initial app was built with a mobile-first approach using HTML and CSS (Tailwind). To make the application interactive, state management was achieved with React props and Redux toolkit. Finally, to facilitate the CRUD functionality, I used a Firebase Realtime Database.",
    category: "Interaction Design / Front End Development",
    languages: "NextJS / TailwindCSS / Redux / Firebase",
    heroMobile: "/detail/mobile/image-bookmark-hero@2x.jpg",
    heroTablet: "/detail/tablet/image-bookmark-hero@2x.jpg",
    heroDesktop: "/detail/desktop/image-bookmark-hero@2x.jpg",
    previewMobile: "/detail/mobile/image-bookmark-preview-1@2x.jpg",
    preview2Mobile: "/detail/mobile/image-bookmark-preview-2@2x.jpg",
    previewTablet: "/detail/tablet/image-bookmark-preview-1@2x.jpg",
    preview2Tablet: "/detail/tablet/image-bookmark-preview-2@2x.jpg",
    previewDesktop: "/detail/desktop/image-bookmark-preview-1@2x.jpg",
    preview2Desktop: "/detail/desktop/image-bookmark-preview-2@2x.jpg",
    website: "https://fem-interactive-comments.vercel.app/",
    github: "https://github.com/peternguyen777/fem-interactive-comments",
  },
  {
    id: 2,
    imageMobile: "/portfolio/mobile/image-portfolio-crowdfund@2x.jpg",
    imageTablet: "/portfolio/tablet/image-portfolio-crowdfund@2x.jpg",
    imageDesktop: "/portfolio/desktop/image-portfolio-crowdfund@2x.jpg",
    title: "Crowdfund",
    slug: "crowdfund",
    introduction:
      "This project is a fully responsive landing page for a crowdfunding project built with NextJS. The project is built with HTML5, TailwindCSS and uses ReactJS to manage and update state of pledged amounts and available packages.",
    background:
      "This project is a front-end challenge from Frontend Mentor. The project allows users to select what pledge to make and updates crowdfunding statistics upon selection. For the layout, I took a mobile-first approach using TailwindCSS to style HTML components, pop-up modals and menus with media queries for mobile, tablet and desktop modes. Using ReactJS the project can track and update the state of remaining pledges, progress bar, bookmark status and total pledged amounts and backers.",
    category: "Interaction Design / Front End Development",
    languages: "NextJS / TailwindCSS",
    heroMobile: "/detail/mobile/image-crowdfund-hero@2x.jpg",
    heroTablet: "/detail/tablet/image-crowdfund-hero@2x.jpg",
    heroDesktop: "/detail/desktop/image-crowdfund-hero@2x.jpg",
    previewMobile: "/detail/mobile/image-crowdfund-preview-1@2x.jpg",
    preview2Mobile: "/detail/mobile/image-crowdfund-preview-2@2x.jpg",
    previewTablet: "/detail/tablet/image-crowdfund-preview-1@2x.jpg",
    preview2Tablet: "/detail/tablet/image-crowdfund-preview-2@2x.jpg",
    previewDesktop: "/detail/desktop/image-crowdfund-preview-1@2x.jpg",
    preview2Desktop: "/detail/desktop/image-crowdfund-preview-2@2x.jpg",
    website: "https://fem-crowdfunding.vercel.app/",
    github: "https://github.com/peternguyen777/fem-crowdfunding",
  },

  // {
  //   id: 3,
  //   imageMobile: "/portfolio/mobile/image-portfolio-insure@2x.jpg",
  //   imageTablet: "/portfolio/tablet/image-portfolio-insure@2x.jpg",
  //   imageDesktop: "/portfolio/desktop/image-portfolio-insure@2x.jpg",
  //   title: "Insure",
  //   slug: "insure",
  //   introduction:
  //     "This was a small project which mostly consisted of HTML and CSS. I built a fully-responsive landing page. The only JavaScript this project required was to enable the toggling of the mobile navigation.",
  //   background:
  //     "This project was a front-end  challenge from Frontend Mentor. It's a platform that enables you to practice building websites to a design and project brief. Each challenge includes mobile and desktop designs to show how the website should look at different screen sizes. Creating these projects has helped me refine my workflow and solve real-world coding problems. I've learned something new with each project, helping me to improve and adapt my style.",
  //   category: "Interaction Design / Front End Development",
  //   languages: "HTML / CSS / JS",
  //   heroMobile: "/detail/mobile/image-insure-hero@2x.jpg",
  //   heroTablet: "/detail/tablet/image-insure-hero@2x.jpg",
  //   heroDesktop: "/detail/desktop/image-insure-hero@2x.jpg",
  //   previewMobile: "/detail/mobile/image-insure-preview-1@2x.jpg",
  //   preview2Mobile: "/detail/mobile/image-insure-preview-2@2x.jpg",
  //   previewTablet: "/detail/tablet/image-insure-preview-1@2x.jpg",
  //   preview2Tablet: "/detail/tablet/image-insure-preview-2@2x.jpg",
  //   previewDesktop: "/detail/desktop/image-insure-preview-1@2x.jpg",
  //   preview2Desktop: "/detail/desktop/image-insure-preview-2@2x.jpg",
  //   website:
  //     "https://www.frontendmentor.io/challenges/insure-landing-page-uTU68JV8",
  //   github: "https://github.com/peternguyen777/fem-bitcoin-clock",
  // },
  // {
  //   id: 4,
  //   imageMobile: "/portfolio/mobile/image-portfolio-fylo@2x.jpg",
  //   imageTablet: "/portfolio/tablet/image-portfolio-fylo@2x.jpg",
  //   imageDesktop: "/portfolio/desktop/image-portfolio-fylo@2x.jpg",
  //   title: "Fylo",
  //   slug: "fylo",
  //   introduction:
  //     "This project was built in pure HTML and CSS. I had mobile and desktop designs to work to and built it so that it was fully-responsive. I took a mobile-first approach and used modern CSS like Flexbox and Grid for layout purposes.",
  //   background:
  //     "This project was a front-end  challenge from Frontend Mentor. It's a platform that enables you to practice building websites to a design and project brief. Each challenge includes mobile and desktop designs to show how the website should look at different screen sizes. Creating these projects has helped me refine my workflow and solve real-world coding problems. I've learned something new with each project, helping me to improve and adapt my style.",
  //   category: "Interaction Design / Front End Development",
  //   languages: "HTML / CSS",
  //   heroMobile: "/detail/mobile/image-fylo-hero@2x.jpg",
  //   heroTablet: "/detail/tablet/image-fylo-hero@2x.jpg",
  //   heroDesktop: "/detail/desktop/image-fylo-hero@2x.jpg",
  //   previewMobile: "/detail/mobile/image-fylo-preview-1@2x.jpg",
  //   preview2Mobile: "/detail/mobile/image-fylo-preview-2@2x.jpg",
  //   previewTablet: "/detail/tablet/image-fylo-preview-1@2x.jpg",
  //   preview2Tablet: "/detail/tablet/image-fylo-preview-2@2x.jpg",
  //   previewDesktop: "/detail/desktop/image-fylo-preview-1@2x.jpg",
  //   preview2Desktop: "/detail/desktop/image-fylo-preview-2@2x.jpg",
  //   website:
  //     "https://www.frontendmentor.io/challenges/fylo-dark-theme-landing-page-5ca5f2d21e82137ec91a50fd",
  //   github: "https://github.com/peternguyen777/fem-bitcoin-clock",
  // },
];

export default PortfolioProjects;
