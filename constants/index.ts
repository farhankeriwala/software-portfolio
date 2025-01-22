export const navItems: NavItem[] = [
    {
        href: "/",
        label: "Home",
        icon: '/assets/icons/home.svg'
    },
    {
        href: "/about",
        label: "About",
        icon: '/assets/icons/user.svg'

    },
    {
        href: "/projects",
        label: "Projects",
        icon: '/assets/icons/gallery.svg'
    },
    {
        href: "/contact",
        label: "Contact",
        icon: '/assets/icons/contact.svg'
    },
]

export const socialMediaItems: SocialMediaItem[] = [
    {
        url: '',
        label: 'Instagram',
        icon: '/assets/icons/instagram.svg'
    },
    {
        url: '',
        label: 'Facebook',
        icon: '/assets/icons/facebook.svg'
    },
    {
        url: '',
        label: 'LinkedIn',
        icon: '/assets/icons/linkedin.svg'
    },
    {
        url: '',
        label: 'GitHub',
        icon: '/assets/icons/github.svg'
    },
]

export const heroTypeWriterWords = [
    {
        text: "MSc",
    },
    {
        text: "Computer",
        className: "text-blue-500 dark:text-blue-500",

    },
    {
        text: "Science",
        className: "text-blue-500 dark:text-blue-500",

    },
    {
        text: "Student",
    },
];

export const projects = [
    {
        id: 1,
        title: "hobbyHive",
        description: "hobby social network app",
        images: [
            '/assets/images/projects/hobbyhive/sign-in.png',
            '/assets/images/projects/hobbyhive/home.png',
            '/assets/images/projects/hobbyhive/users.png',
            '/assets/images/projects/hobbyhive/hobbies.png',
            '/assets/images/projects/hobbyhive/friends.png',
            '/assets/images/projects/hobbyhive/profile1.png',
            '/assets/images/projects/hobbyhive/profile2.png',


        ],
        techStack: [
            {
                name: "Django",
                icon:'/assets/icons/django.svg'
            },
            {
                name: "Vue JS",
                icon:'/assets/icons/vue.svg'
            },
            {
                name: "TypeScript",
                icon:'/assets/icons/typescript.svg'
            },
            {
                name: "Tailwind CSS",
                icon:'/assets/icons/tailwind.svg'
            },
            {
                name: "Python",
                icon:'/assets/icons/python.svg'
            },
            {
                name: "Selenium",
                icon:'/assets/icons/selenium.svg'
            },

        ],
        url: 'https://group35-web-apps-ec22615.apps.a.comp-teach.qmul.ac.uk/',
        github: 'https://github.com/farhankeriwala/ecs639-cwgroup/'
    },
    {
        id: 2,
        title: "storeIt",
        description: "google drive clone",
        images: [
            '/assets/images/projects/storeit/sign-up.png',
            '/assets/images/projects/storeit/sign-in.png',
            '/assets/images/projects/storeit/dashboard1.png',
            '/assets/images/projects/storeit/dashboard2.png',
            '/assets/images/projects/storeit/uploading.png',
        ],
        details: {
            overview:
                "A modern storage management and file-sharing platform designed for seamless file organization and collaboration. Built with Next.js 15 and the Appwrite Node SDK, it offers a robust, user-friendly experience for managing files efficiently. From intuitive file uploads to advanced sharing and search capabilities, this platform showcases cutting-edge technologies for a superior file management experience.",
            features: [
                "User Authentication: Secure signup, login, and logout using Appwrite's authentication system for reliable user management.",
                "File Uploads: Effortlessly upload a variety of file types, including documents, images, videos, and audio, ensuring all your essential data is stored securely.",
                "File Browsing and Management: Browse through uploaded files, view them in a new tab, rename, or delete them with ease.",
                "Download Files: Instant access to essential documents by downloading them directly from the platform.",
                "File Sharing: Seamlessly share uploaded files with others for effortless collaboration and data exchange.",
                "Dynamic Dashboard: A visually appealing dashboard displaying total and consumed storage, recent uploads, and file summaries grouped by type.",
                "Global Search: Quickly locate files or shared content with a robust search feature across the platform.",
                "Sorting Options: Organize files effectively by sorting them by name, date, or size, enhancing file management efficiency.",
                "Responsive Design: A sleek and minimalist user interface that adapts flawlessly to all devices, ensuring usability and accessibility.",
            ],
            useCases: [
                "Personal file storage for documents, photos, and media.",
                "Collaborative file sharing for teams or small businesses.",
                "Organized cloud storage for quick file retrieval and management.",
                "Global search and sorting for efficient data handling in large repositories.",
            ],
        },

        techStack: [
            {
                name: "React JS",
                icon:'/assets/icons/nextjs.svg'
            },
            {
                name: "Next JS",
                icon:'/assets/icons/react.svg'
            },
            {
                name: "TypeScript",
                icon:'/assets/icons/typescript.svg'
            },
            {
                name: "Tailwind CSS",
                icon:'/assets/icons/tailwind.svg'
            },
            {
                name: "ShadCN",
                icon:'/assets/icons/shadcn.png'
            },
            {
                name: "Appwrite",
                icon:'/assets/icons/appwrite.svg'
            },
        ],
        url: 'https://store-it-eight-ruby.vercel.app/',
        github: 'https://github.com/farhankeriwala/store-it'
    },
    {
        id: 3,
        title: "blockadoku",
        description: "sudoku style block game",
        images: [
            '/assets/images/projects/blockadoku/state3.png',
            '/assets/images/projects/blockadoku/state2.png',
            '/assets/images/projects/blockadoku/state3.png',
            '/assets/images/projects/blockadoku/state4.png',
        ],
        techStack: [
            {
                name: "Java",
                icon:'/assets/icons/java.svg'
            },
        ],
        url: '',
        github: 'https://github.com/farhankeriwala/store-it'
    },
]