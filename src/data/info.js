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
        description: ["If there's one sentance you might use to describe me it might be: I like to keep my hands busy, whether it be art, sports, or writing.","Coding became the ultimate outlet; as I dove into the world of software and tech my passion for design, technology, and the endless pursuit of knowledge began to grow. I thrive at the intersection of creativity and innovation, where I explore how technology can be applied to enhance our lives and push the boundaries of various fields through research and personal projects.", "Outside of work you can find me drawing or painting, cooking, on a hike, at the tennis court, or playing the NYT crossword archives."],
        photo: "../photo.webp"
    },

    // ============ PROJECTS ============
    projects: [
        {
            title: "Multiplayer mini-arcade",
            description: "Developing and building a 3D printed mini arcade machine for multiplayer gameplay, using RPi3 and raylib.",
            technologies: [" C++ ", " Python ", "RPi3"],
            external: "https://github.com/kyoety/FinTracker",
            ext: "",
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
            description: "Self-service multiplatform app for organizing carpooling between drivers and passangers. Features include live map, updates, and XXX idk man. // 200+ users",
            technologies: ["HTML", "CSS", "JavaScript", "Python", "MySQL", "Django", "GitHub"],
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
            title: "Multiplayer mini-arcade",
            description: "Developing and building a 3D printed mini arcade machine for multiplayer gameplay, using RPi3 and raylib.",
            technologies: [" C++ ", " Python ", "RPi3"],
            imagePosition: "right",
            external: "https://github.com/kyoety/FinTracker",
            ext: "",
            photo: FINTRACKER,
            alt: 'Mini Arcade',
            year: '2024'
        },
        {
            title: "Wordle AI",
            description: "Basic ML made to solve the daily Wordle from the NYT using reinforcement learning and RNN.",
            technologies: ["Python", "NumPy", "TensorFlow", "Keras"],
            imagePosition: "left",
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
            imagePosition: "right",
            external: "https://www.tutori.me/",
            ext: "tutori.me/",
            photo: TUTORI,
            alt: 'Tutori',
            year: '2022'

        }
    ],
    
    // ============ EXPERIENCE ============
    experience: [
        {
            period: "May 2024 - Sept 2024",
            title: "Co-Op Designer · JP Thomson Architects Ltd",
            description: "Designed company website, web admin, and project management system with dynamic CRUD, using REST API. Managed social media accounts and content creation, leading to a 50% increase in engagement within one month.",
            skills: [" HTML", "CSS", "JavaScript", "C#", "MSQL", "Docker", "ASP.NET", "GitHub"],
            number: "2"
        },
        {
            period: "May 2024 - Aug 2024",
            title: "Research Assistant · ISTEP, University of Toronto",
            description: "Developed frameworks for the ethical usage of ChatGPT through usability testing and systematic analysis of GenAI and LLM models, supervised by Dr Qin Liu and Professor Greg Evans. Methodology includes usability testing of GenAI models and technical analysis of LLM architecture. Attended UnERD 2024 as a podium presenter.",
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
            photo: ABOURD
        },
        {
            title: "Porch - Canon DSLR",
            date:"October 2024",
            photo: PPORCH
        },
        {
            title: "Figure 10min - Graphite Pencil",
            date:"July 2024",
            photo: ABACKSIT
        },
        {
            title: "Figure 15min - Graphite Pencil",
            date:"July 2024",
            photo: ABACK
        },
        {
            title: "Figure 10min - Pencil Crayon",
            date:"June 2024",
            photo: ABLUESIT
        },
        {
            title: "Irish Rainbow - Canon DSLR",
            date:"August 2024",
            photo: PRBOW
        },
        {
            title: "Figure 15min - Pencil Crayon",
            date:"June 2024",
            photo: ABLUELAY
        },
        {
            title: "Marble Busts - Acrylic",
            date:"March 2023",
            photo: ASTAT
        },
        {
            title: "Fish Art Cover - Digital",
            date:"February 2023",
            photo: AYBFISH
        },
        {
            title: "Distortion - Graphite Pencil",
            date:"November 2022",
            photo: AFACEPULL
        }
    ],

    // ============ FOOTER ============
    footer: "© 2024 Katherine Ye. All Rights Reserved"
}

export default info