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
    threejs,
    bootstrap,
    wordpress,
    php,
    scss,
    npm,
    asp,
    java,
    python,
    alkhaleej,
    infratec,
    chris,
    mopasangValath,
    skillTrainingIndia,
    vanGogh,
    chestHunt,
    diceRoller,
    quasarTwit,
    spyderWeb,
    twinTanker,
    webWrapper
} from "../assets";

export const navLinks = [
    {
        id: "about",
        title: "About",
    },
    {
        id: "experience",
        title: "Experience",
    },
    {
        id: "works",
        title: "Works",
    },
    {
        id: "projects",
        title: "Projects",
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
            "Working with Nithin was a game-changer for me as an artist with no technical background; he not only understood my need for an online presence but transformed it into a stunning website that perfectly showcases my art.",
        name: "Vangogh Valath",
        designation: "Owner",
        company: "Vangogh arts",
        image: "https://vangoghvalath.com/wp-content/themes/vangogh/assets/vangogh_profile.png",
    },
    {
        testimonial:
            "I was initially skeptical about the possibility of creating a website that truly captured the beauty of our product, but you exceeded my expectations, demonstrating your remarkable skills and delivering an exceptional website in just two days.",
        name: "KJ Thomas",
        designation: "CEO",
        company: "Bag Master",
        image: "",
    },
    // {
    //     testimonial:
    //         "After Nithin optimized our website, our traffic increased by 50%. We can't thank him enough!",
    //     name: "Chriss Blair Vincent",
    //     designation: "Founder",
    //     company: "Silver Brush Studio",
    //     image: "https://test111.chrisblairvincent.com/wp-content/themes/chriss/assets/images/team/Chris.jpg",
    // },
];

const works = [
    {
        name: "Van Gogh Valath",
        description:
            "Explore the portfolio website of vivid imagination and artistic brilliance of Vangogh Valath, a concept artist who brings captivating worlds to life through his visionary creations.",
        tags: [
            {
                name: "php",
                color: "blue-text-gradient",
            },
            {
                name: "wordpress",
                color: "green-text-gradient",
            },
            {
                name: "gsap",
                color: "pink-text-gradient",
            },
            {
                name: "custom-theme",
                color: "blue-text-gradient",
            },
        ],
        image: vanGogh,
        source_code_link: "https://vangoghvalath.com/",
    },
    {
        name: "Skill Training India",
        description:
            "Empowering Communities, Creating a Sustainable Future: Skill Training India drives social transformation through green business education and eco-friendly practices.",
        tags: [
            {
                name: "wordpress",
                color: "blue-text-gradient",
            },
            {
                name: "bootstrap",
                color: "green-text-gradient",
            },
            {
                name: "php",
                color: "pink-text-gradient",
            },
            {
                name: "custom-theme",
                color: "blue-text-gradient",
            },
        ],
        image: skillTrainingIndia,
        source_code_link: "https://skilltrainingindia.com/",
    },
    {
        name: "Silver Brush Studio",
        description:
            "A leading Indian creative agency specializing in transformative art and design solutions, elevating spaces and experiences with unparalleled craftsmanship and visionary expertise.",
        tags: [
            {
                name: "wordpress",
                color: "blue-text-gradient",
            },
            {
                name: "bootstrap",
                color: "green-text-gradient",
            },
            {
                name: "php",
                color: "pink-text-gradient",
            },
            {
                name: "custom-theme",
                color: "blue-text-gradient",
            },
        ],
        image: chris,
        source_code_link: "https://github.com/",
    },
    {
        name: "Infratec",
        description:
            "Powering Digital Transformation: Infratec, the Middle East's premier system integrator, delivers customized IT solutions for businesses across sectors, driving innovation and growth.",
        tags: [
            {
                name: "wordpress",
                color: "blue-text-gradient",
            },
            {
                name: "bootstrap",
                color: "green-text-gradient",
            },
            {
                name: "php",
                color: "pink-text-gradient",
            },
            {
                name: "custom-theme",
                color: "blue-text-gradient",
            },
        ],
        image: infratec,
        source_code_link: "https://infratec.ae/",
    },
    {
        name: "Mopasang Valath",
        description:
            "Capturing Life's Colors: Mopasang Valath, a renowned artist and state patron, creates vibrant watercolor masterpieces, exhibits globally, and conducts engaging workshops, leaving an indelible mark on the art world.",
        tags: [
            {
                name: "wordpress",
                color: "blue-text-gradient",
            },
            {
                name: "bootstrap",
                color: "green-text-gradient",
            },
            {
                name: "php",
                color: "pink-text-gradient",
            },
            {
                name: "custom-theme",
                color: "blue-text-gradient",
            },
        ],
        image: mopasangValath,
        source_code_link: "https://mopasangvalath.com/",
    },
    {
        name: "Alkhaleejtr",
        description:
            "Revolutionizing Digital Transformation: Alkhaleejtr empowers businesses with cutting-edge IT solutions, leveraging the latest technologies to drive digital innovation and elevate client performance.",
        tags: [
            {
                name: "wordpress",
                color: "blue-text-gradient",
            },
            {
                name: "bootstrap",
                color: "green-text-gradient",
            },
            {
                name: "php",
                color: "pink-text-gradient",
            },
            {
                name: "custom-theme",
                color: "blue-text-gradient",
            },
        ],
        image: alkhaleej,
        source_code_link: "https://alkhaleejtr.com/",
    },
];

const projects = [
    {
        name: "Web Wrapper",
        description:
            "Web Wrapper: Empowering users without coding expertise, this interactive web application features a WYSIWYG editor, enabling effortless creation of stunning websites tailored to the unique needs of small-scale businesses, marketers, and content creators.",
        tags: [
            {
                name: "JavaScript",
                color: "blue-text-gradient",
            },
            {
                name: "jQuery",
                color: "green-text-gradient",
            },
            {
                name: "PHP",
                color: "pink-text-gradient",
            },
            {
                name: "custom-theme",
                color: "blue-text-gradient",
            },
        ],
        image: webWrapper,
        source_code_link: "https://alkhaleejtr.com/",
    },
    {
        name: "Sypder Web",
        description:
            "Spyder Web: Rediscover the power of community and meaningful connections with our revolutionary app that brings people together, allowing users to create and join events in their area, fostering socialization and bridging the gap between communities while offering exclusive promotional opportunities for local businesses.",
        tags: [
            {
                name: "laravel",
                color: "blue-text-gradient",
            },
            {
                name: "bootstrap",
                color: "green-text-gradient",
            },
            {
                name: "php",
                color: "pink-text-gradient",
            },
        ],
        image: spyderWeb,
        source_code_link: "https://github.com/nithinkzy/laravel-syderweb",
    },
    {
        name: "Twin Tanker",
        description:
            "Tanker Battle: Engage in an exhilarating multiplayer or single-player experience with this JavaScript game project, powered by EaselJS, PreloadJS, SoundJS, and TweenJS, as you strategize and dominate the battlefield in an epic tanker showdown.",
        tags: [
            {
                name: "JavaScript",
                color: "blue-text-gradient",
            },
            {
                name: "EaselJS",
                color: "green-text-gradient",
            },
            {
                name: "TweenJS",
                color: "pink-text-gradient",
            },
            {
                name: "TypeScript",
                color: "blue-text-gradient",
            },
        ],
        image: twinTanker,
        source_code_link: "https://nithinkzy.github.io/twin-tanker-game/",
    },
    // {
    //     name: "QuasarTwit",
    //     description:
    //         "Step into the world of microblogging with this JavaScript project, built using the Quasar framework, delivering a sleek and intuitive clone of Twitter's essence in a simplified form.",
    //     tags: [
    //         {
    //             name: "quasar",
    //             color: "blue-text-gradient",
    //         },
    //         {
    //             name: "JavaScript",
    //             color: "green-text-gradient",
    //         },
    //         {
    //             name: "npm",
    //             color: "pink-text-gradient",
    //         },

    //     ],
    //     image: quasarTwit,
    //     source_code_link: "https://github.com/nithinkzy/quasar-twitter-clone",
    // },

    // {
    //     name: "Chest Hunt",
    //     description:
    //         "Hunt for Treasures: Immerse yourself in a thrilling adventure with this JavaScript game project, powered by EaselJS, PreloadJS, SoundJS, and TweenJS, as you embark on a quest to find hidden chests and unlock exciting rewards in this captivating single-player game.",
    //     tags: [
    //         {
    //             name: "wordpress",
    //             color: "blue-text-gradient",
    //         },
    //         {
    //             name: "bootstrap",
    //             color: "green-text-gradient",
    //         },
    //         {
    //             name: "php",
    //             color: "pink-text-gradient",
    //         },
    //         {
    //             name: "custom-theme",
    //             color: "blue-text-gradient",
    //         },
    //     ],
    //     image: chestHunt,
    //     source_code_link: "https://nithinkzy.github.io/chest-hunt-game/",
    // },

    // {
    //     name: "The Dice Roller",
    //     description:
    //         "Roll the Dice: Experience the thrill of chance with this interactive JavaScript project using EaselJS, PreloadJS, SoundJS, and TweenJS, bringing a simple yet captivating dice roller to life.",
    //     tags: [
    //         {
    //             name: "JavaScript",
    //             color: "blue-text-gradient",
    //         },
    //         {
    //             name: "EaselJS",
    //             color: "green-text-gradient",
    //         },
    //         {
    //             name: "TweenJS",
    //             color: "pink-text-gradient",
    //         },
    //         {
    //             name: "PreloadJS",
    //             color: "blue-text-gradient",
    //         },
    //     ],
    //     image: diceRoller,
    //     source_code_link: "https://nithinkzy.github.io/dice-roller-game/",
    // },

];

export { services, technologies, experiences, testimonials, works, projects };