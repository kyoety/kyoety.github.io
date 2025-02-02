import TUTORI from '../images/tutori.png';
import FINTRACKER from '../images/fintracker.png'
import WORDLE from '../images/wordle.png'
import ABOURD from '../images/gallery/ABOURD.png'
import ASTAT from '../images/gallery/ASTAT.png'
import AYBFISH from '../images/gallery/AYBFISH.jpeg'
import PPORCH from '../images/gallery/PPORCH.png'
import PRBOW from '../images/gallery/PRBOW.JPG'
import AFACEPULL from '../images/gallery/AFACEPULL.png'
import ABACKSIT from '../images/gallery/ABACKSIT.png'
import ABACK from '../images/gallery/ABACK.png'
import ABLUELAY from '../images/gallery/ABLUELAY.png'
import ABLUESIT from '../images/gallery/ABLUESIT.png'



const info = {
    // ============ MAIN DETAILS ============
    main: {
        name: "Katherine Ye",
        description: "I'm a Computer Engineering student at the University of Toronto, dedicated to building innovative integrated solutions and continuously exploring the ever-growing field of technology.",
        photo: "../photo.webp",
        email: "kt.ye@mail.utoronto.ca",
    },

    // ============ SOCIAL LINKS ============
    socials: {
		github: "https://github.com/dsbalico",
		linkedin: "https://linkedin.com/in/dsbalico",
		instagram: "https://instagram.com/dsbalico",
    },

    // ============ ABOUT ME ============
    about: {
        description: ["If there's one sentance you might use to describe me it might be: I like to keep my hands busy, whether it be art, sports, or writing.","Coding became the ultimate outlet; as I dove into the world of software and tech my passion for design, technology, and the endless pursuit of knowledge began to grow. I thrive at the intersection of creativity and innovation, where I explore how technology can be applied to enhance our lives and push the boundaries of various fields through research and personal projects.", "Outside of work you can find me drawing, geocaching, on a hike, or playing the NYT crossword archives."],
        photo: "../photo.webp"
    },

    // ============ PROJECTS ============
    projects: [
        {
            title: "Music discovery web application",
            description: "Developing a web application with smart song reccomendation based on music metadata (genre, key, artist, year, etc.) by embedding dataset gathered from self hosted server (MusicBrainz) into Pinecone. Currently implementing relationship data visualization with a network graph using React, and modifying/traning models.",
            technologies: [" Python ","Flask","Tenserflow", "Pinecone", "Docker", "React", "Tailwind"],
            external: "#",
            ext: "",
            photo: FINTRACKER,
            alt: 'Harmonica',
            year: '2024'
        },
        {
            title: "Diffusion sound board",
            description: "Developing and building soundboard (edge AI on RPi5), leading the training of modules to collect and embed sound datasets using Flask, Freesound API, and SentenceTransformers (pandas), into a vector database with Pinecone.",
            technologies: [" Python ","Flask","Pandas", "Pinecone", "SentanceTransformers", "Freesound API" , "RPi5"],
            external: "#",
            ext: "",
            photo: FINTRACKER,
            alt: 'Diffusion sound board',
            year: '2024'
        },
        {
            title: "Multiplayer mini-arcade",
            description: "Developed software including socket programming for arcade machines with multiplayer mode, built using Raspberry Pi 4, C++, raylib, and Python. Led team in research, debugging, and documentation, collaborating with team members through agile development cycle. Successfully demoed at club fair to 200+ students.",
            technologies: [" C++ ", " Python ", "RPi4"],
            external: "https://github.com/aFluffyHotdog/Tetris",
            ext: "github.com/aFluffyHotdog/Tetris",
            photo: FINTRACKER,
            alt: 'Mini Arcade',
            year: '2024'
        },
        {
            title: "Smart Financial Tracker",
            description: "CRUD App to manage expenses. ",
            technologies: ["Javascript", "Next.js", "Tailwind CSS", "MySQL", "Regex", "Python"],
            external: "https://github.com/kyoety/FinTracker",
            ext: "github.com/kyoety/FinTracker",
            photo: FINTRACKER,
            alt: 'Mini Arcade',
            year: '2024'
        },
        {
            title: "Othello AI",
            description: "Created an intelligent algorithm that plays Othello using Monte Carlo Tree Search with 75% win rate.",
            technologies: [" C "],
            external: "https://github.com/kyoety/FinTracker",
            ext: "github.com/kyoety/FinTracker",
            photo: FINTRACKER,
            alt: 'Mini Arcade',
            year: '2024'
        },
        {
            title: "Wordle AI",
            description: "Basic ML made to solve the daily Wordle from the NYT using reinforcement learning and RNN.",
            technologies: ["Python", "NumPy", "TensorFlow", "Keras"],
            external: "https://github.com/kyoety/wordle_ML",
            ext:"github.com/kyoety/wordle_ML",
            photo: WORDLE,
            alt: 'Wordle AI',
            year: '2023'
        },
        {
            title: "tutori.me",
            description: "Online free peer tutoring for underrepresented communities. Features include live chat, scheduling and booking, user-user interactions, and more. Sponsored by Pathways to Education, network of 200+ students.",
            technologies: ["HTML", "CSS", "JavaScript", "C#", "MSQL", "Docker", "GitHub"],
            external: "https://www.tutori.me/",
            ext: "tutori.me/",
            photo: TUTORI,
            alt: 'Tutori',
            year: '2022'

        },
        {
            title: "Rideshare application",
            description: "Developed and deployed on-demand service application for rideshare between drivers and passengers with MySQL and PHP, using Google Maps API. Managed end-to-end development and maintenance of user authentication, real-time location tracking, user-friendly trip coordination, etc. back-end services and seamless front-end interfaces, ensuring high scalability and user experience. Served 200+ users.",
            technologies: ["HTML", "CSS", "JavaScript", "Python", "MySQL", "Django", "PythonAnywhere"],
            external: "#",
            ext: "",
            photo: TUTORI,
            alt: 'Tutori',
            year: '2021'
        
        }
    ],

    // ============ FEATURES ============
    features: [
        {
            title: "tutori.me",
            description: "Online free peer tutoring for underrepresented communities. Features session authentication, include live chat, scheduling and booking, user-user interactions, and more. Sponsored by Pathways to Education, network of 200+ students.",
            technologies: ["HTML", "CSS", "JavaScript", "C#", "MSQL", "Docker", "PythonAnywhere"],
            imagePosition: "right",
            external: "https://www.tutori.me/",
            ext: "tutori.me/",
            photo: TUTORI,
            alt: 'Tutori',
            year: '2022'

        },
        {
            title: "Rideshare application",
            description: "Developed and deployed on-demand service application for rideshare between drivers and passengers with MySQL and PHP, using Google Maps API. Managed end-to-end development and maintenance of user authentication, real-time location tracking, user-friendly trip coordination, etc. back-end services and seamless front-end interfaces, ensuring high scalability and user experience. Served 200+ users.",
            technologies: ["HTML", "CSS", "JavaScript", "Python", "MySQL", "Django", "PythonAnywhere"],
            imagePosition: "left",
            external: "#",
            ext: "",
            photo: TUTORI,
            alt: 'Tutori',
            year: '2021'
        
        },
        {
            title: "Multiplayer mini-arcade",
            description: "Developed software including socket programming for arcade machines with multiplayer mode, built using Raspberry Pi 4, C++, raylib, and Python. Led team in research, debugging, and documentation, collaborating with team members through agile development cycle. Successfully demoed at club fair to 200+ students.",
            technologies: [" C++ ", " Python ", "RPi4"],
            imagePosition: "right",
            external: "https://github.com/aFluffyHotdog/Tetris",
            ext: "github.com/aFluffyHotdog/Tetris",
            photo: FINTRACKER,
            alt: 'Mini Arcade',
            year: '2024'
        }
    ],
    
    // ============ EXPERIENCE ============
    experience: [
        {
            period: "May 2024 - Sept 2024",
            title: "Co-Op Designer · JP Thomson Architects Ltd",
            description: "Led full-stack team development and deployment company website with MVC using C# with ASP.NET and MSSQL, integrated with an admin side dynamic management project system hosted on Cloudflare to ensure security and performance reliability. Improved SEO through UI/UX redesign resulting in a 30% increase in website traffic. Managed social media accounts, leading to a 50% increase in engagement within one month.",
            skills: [" HTML", "CSS", "JavaScript", "C#", "MSQL", "Docker", "ASP.NET", "GitHub", "Cloudflare"],
            number: "2"
        },
        {
            period: "May 2024 - Aug 2024",
            title: "Research Assistant · ISTEP, University of Toronto",
            description: "Developed frameworks for the ethical usage of ChatGPT through prompt engineering and analysis of GPT 4o and LLM architecture, supervised by Dr Qin Liu and Professor Greg Evans. Presented work at UnERD 2024 as a podium presentation.",
            number: "2"
        }
    ],

    // ============ CONTACT ============
    contact: {
        title: "Let's Get in Touch: Ways to Connect with Me",
        description: "Thank you for your interest in getting in touch with me. I welcome your feedback, questions, and suggestions. If you have a specific question or comment, please feel free to email me directly at danielshan.balico@gmail.com. I make an effort to respond to all messages within 24 hours, although it may take me longer during busy periods. Finally, if you prefer to connect on social media, you can connect with me using the social media links below.",
    },

    // ============ GALLERY ============
    work: [
        {
            title: "Tony - Digital",
            date:"September 2024",
            photo: ABOURD,
            angle: "3deg"
        },
        {
            title: "Porch - Canon DSLR",
            date:"October 2024",
            photo: PPORCH,
            angle: "0deg"
        },
        {
            title: "Figure 10min - Graphite Pencil",
            date:"July 2024",
            photo: ABACKSIT,
            angle: "-3deg"
        },
        {
            title: "Figure 15min - Graphite Pencil",
            date:"July 2024",
            photo: ABACK,
            angle: "0deg"
        },
        {
            title: "Figure 10min - Pencil Crayon",
            date:"June 2024",
            photo: ABLUESIT,
            angle: "0deg"
        },
        {
            title: "Irish Rainbow - Canon DSLR",
            date:"August 2024",
            photo: PRBOW,
            angle: "0deg"
        },
        {
            title: "Figure 15min - Pencil Crayon",
            date:"June 2024",
            photo: ABLUELAY,
            angle: "0deg"
        },
        {
            title: "Marble Busts - Acrylic",
            date:"March 2023",
            photo: ASTAT,
            angle: "-3deg"
        },
        {
            title: "Fish Art Cover - Digital",
            date:"February 2023",
            photo: AYBFISH,
            angle: "0deg"
        },
        {
            title: "Distortion - Graphite Pencil",
            date:"November 2022",
            photo: AFACEPULL,
            angle: "3deg"
        }
    ],

    // ============ FOOTER ============
    footer: "© 2024 Katherine Ye. All Rights Reserved"
}

export default info