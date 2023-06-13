import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    lgc,
    trc,
    carrent,
    jobit,
    tripguide,
    threejs,
    bootstrap,
    wordpress,
    php,
    scss,
    npm,
    asp,
    java,
    python,
} from "../assets";

export const navLinks = [
    {
        id: "about",
        title: "About",
    },
    {
        id: "work",
        title: "Work",
    },
    {
        id: "contact",
        title: "Contact",
    },
];

const services = [
    {
        title: "Speedy Typist",
        sub: "406 CPM",
        icon: web,
    },
    {
        title: "Shutterbug",
        sub: "Photographer",

        icon: mobile,
    },
    {
        title: "Master of Visuals",
        sub: "Video & Photo Editor",

        icon: backend,
    },
    {
        title: "Karate",
        sub: "Brown 1st Belt",
        icon: creator,
    },
];

const technologies = [
    {
        name: "HTML 5",
        icon: html,
    },
    {
        name: "CSS 3",
        icon: css,
    },
    // {
    //     name: "SCSS",
    //     icon: scss,
    // },
    {
        name: "JavaScript",
        icon: javascript,
    },
    // {
    //     name: "TypeScript",
    //     icon: typescript,
    // },
    // {
    //     name: "NPM",
    //     icon: npm,
    // },
    {
        name: "React JS",
        icon: reactjs,
    },
    {
        name: "Wordpress",
        icon: wordpress,
    },
    // {
    //     name: "Tailwind CSS",
    //     icon: tailwind,
    // },
    // {
    //     name: "Bootstrap",
    //     icon: bootstrap,
    // },
    {
        name: "Node JS",
        icon: nodejs,
    },
    // {
    //     name: "MongoDB",
    //     icon: mongodb,
    // },
    // {
    //     name: "Three JS",
    //     icon: threejs,
    // },
    {
        name: "git",
        icon: git,
    },
    {
        name: "figma",
        icon: figma,
    },
    // {
    //     name: "docker",
    //     icon: docker,
    // },
    {
        name: "ASP.NET",
        icon: asp,
    },
    {
        name: "Java",
        icon: java,
    },
    {
        name: "Python",
        icon: python,
    },
    {
        name: "php",
        icon: php,
    },
];

const experiences = [
    {
        title: "Full Stack Developer",
        company_name: "LGC",
        icon: lgc,
        iconBg: "#383E56",
        date: "Sep 2022 – Present",
        points: [
            "Reduced potential security risks by fixing vulnerabilities in website code, updating/removing WordPress Themes and plugins, resulting in a 98% decrease in security risks.",
            "Upgraded internal applications to the latest PHP version and migrated it to a new server, resulting in a 30% improvement in application performance and a 90% reduction in security vulnerabilities.",
            "Developed a new QR generator for Excel macros, increasing workflow efficiency by 70% and eliminating data entry errors.",
            "Improved reliability and accessibility by successfully migrating the applications from the new acquisition to LGC's infrastructure, resulting in a 99.9% uptime and seamless access for users.",
            "Documented: development procedures, tools,  user manuals, website troubleshooting for customer service, daily website update flow, career updates guide.",
            "Improved catalogue on the website by 95% developing a Catalogue Management Tool (CMT) and Missing Image Identifier (MII) using Python (pandas) which generates and sends reports of missing data and images to respective departments.",
            "Automated uploading documents, images and data to website seamlessly by writing Python scripts which led to 100% manual free uploads.",
        ],
    },
    {
        title: "Web Developer",
        company_name: "LGC",
        icon: lgc,
        iconBg: "#E6DEDD",
        date: "Jun 2020 - Sep 2022",
        points: [
            "Streamlined order processing and improved customer experience by integrating the website's order processing with Salesforce API, reducing manual work by 90%.",
            "Accomplished 100% better tracking and analysis of user data by integrating website user registration with Pardot, leading to  improved insights and targeted marketing efforts.",
            "Optimized website to handle 1 million+ users monthly by caching, database restructure and code.",
            "Trained customer service and order processing to adapt to rapid website improvements.",
            "Established accessibility by making sure all pages are designed in a way that supports accessibility.",
        ],
    },
    {
        title: "Web Developer",
        company_name: "Toronto Research Chemicals",
        icon: trc,
        iconBg: "#383E56",
        date: "Jan 2020 - Jun 2020",
        points: [
            "Maintained high customer satisfaction with a Net Promoter Score (NPS) of 9 by incorporating analytics tools and working closely with the Marketing Team and Business Analysts.",
            "Served as a subject matter expert on website UX/UI, best practices, integrations, and troubleshooting for internal teams and external vendors worldwide.",
            "Boosted online revenue by 290.15% through the integration of the Braintree Payment Gateway.",
            "Developed custom WordPress themes, templates, and plugins while following best practices for both Toronto Research Chemicals and Synfine Research Limited websites (currently discontinued).",
        ],
    },
    {
        title: "Junior Web Developer",
        company_name: "Toronto Research Chemicals",
        icon: trc,
        iconBg: "#E6DEDD",
        date: "Sep 2018 - Dec 2019",
        points: [
            "Increased daily active users by 258.30 % by spearheading custom eCommerce to the existing website.",
            "Enhanced customer satisfaction by designing a user-friendly shopping UI/UX - NPS score of 9.",
            "Improved user experience and sales by piloting a chemical structure search tool (page value of 54.04%). (https://www.trc-canada.com/structure-search/)",
            "Established custom quotation and bulk order tool raising page value to 29.74% revenue. ",
            "Introduced and implemented Google Analytics to website, significantly improving user tracking and driving sales growth",
        ],
    },
];

const testimonials = [
    {
        testimonial:
            "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
        name: "Sara Lee",
        designation: "CFO",
        company: "Acme Co",
        image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
        testimonial:
            "I've never met a web developer who truly cares about their clients' success like Rick does.",
        name: "Chris Brown",
        designation: "COO",
        company: "DEF Corp",
        image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
        testimonial:
            "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
        name: "Lisa Wang",
        designation: "CTO",
        company: "456 Enterprises",
        image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
];

const projects = [
    {
        name: "Car Rent",
        description:
            "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "mongodb",
                color: "green-text-gradient",
            },
            {
                name: "tailwind",
                color: "pink-text-gradient",
            },
        ],
        image: carrent,
        source_code_link: "https://github.com/",
    },
    {
        name: "Job IT",
        description:
            "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "restapi",
                color: "green-text-gradient",
            },
            {
                name: "scss",
                color: "pink-text-gradient",
            },
        ],
        image: jobit,
        source_code_link: "https://github.com/",
    },
    {
        name: "Trip Guide",
        description:
            "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
        tags: [
            {
                name: "nextjs",
                color: "blue-text-gradient",
            },
            {
                name: "supabase",
                color: "green-text-gradient",
            },
            {
                name: "css",
                color: "pink-text-gradient",
            },
        ],
        image: tripguide,
        source_code_link: "https://github.com/",
    },
];

export { services, technologies, experiences, testimonials, projects };