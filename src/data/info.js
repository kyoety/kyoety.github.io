import TUTORI from '../images/tutori.png';
import FINTRACKER from '../images/fintracker.png'
import WORDLE from '../images/wordle.png'

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
            title: "Mltiplayer mini-arcade",
            description: "Developing and building a 3D printed mini arcade machine for multiplayer gameplay, using Raspberry Pi 3 and raylib.",
            technologies: [" C++ ", " Python "],
            imagePosition: "right",
            external: "https://github.com/kyoety/FinTracker",
            photo: FINTRACKER,
            alt: 'Mini Arcade'
        },
        {
            title: "Wordle AI",
            description: "Basic ML made to solve the daily Wordle from the NYT using reinforcement learning and RNN.",
            technologies: ["Python", "NumPy", "TensorFlow", "Keras"],
            imagePosition: "left",
            external: "https://github.com/kyoety/wordle_ML",
            photo: WORDLE,
            alt: 'Wordle AI'

        },
        {
            title: "tutori.me",
            description: "Online free peer tutoring for underrepresented communities. Features include live chat, scheduling and booking, user-user interactions, and more. Sponsored by Pathways to Education, network of 200+ students.",
            technologies: ["HTML", "CSS", "JavaScript", "C#", "MSQL", "Docker", "GitHub"],
            imagePosition: "right",
            external: "https://www.tutori.me/",
            photo: TUTORI,
            alt: 'Tutori'

        },
        
        {
            title: "Rideshare application",
            description: "Self-service multiplatform app for organizing carpooling between drivers and passangers. Features include live map, updates, and XXX idk man. // 200+ users",
            technologies: ["HTML", "CSS", "JavaScript", "Python", "MySQL", "Django", "GitHub"],
            imagePosition: "left",
            external: "#",
            photo: TUTORI,
            alt: 'Tutori'
        
        }
    ],
    
    // ============ EXPERIENCE ============
    experience: [
        {
            period: "May 2024 - Sept 2024",
            title: "Co-Op Designer · JP Thomson Architects Ltd",
            description: "Developing company website, admin portal,and management system for easy and flexible user-based management of company information. Managing social media accounts.",
            skills: [" HTML", "CSS", "JavaScript", "C#", "MSQL", "Docker", "GitHub"],
            number: "2"
        },
        {
            period: "May 2024 - Aug 2024",
            title: "Research Assistant · ISTEP, University of Toronto",
            description: "Developing frameworks for the ethical implementation of GenAI in engineering education, supervised by Dr Qin Liu and Professor Greg Evans. Methodology includes usability testing of GenAI models and analysis of LLM architecture",
            number: "2"
        }
    ],

    // ============ CONTACT ============
    contact: {
        title: "Let's Get in Touch: Ways to Connect with Me",
        description: "Thank you for your interest in getting in touch with me. I welcome your feedback, questions, and suggestions. If you have a specific question or comment, please feel free to email me directly at danielshan.balico@gmail.com. I make an effort to respond to all messages within 24 hours, although it may take me longer during busy periods. Finally, if you prefer to connect on social media, you can connect with me using the social media links below.",
    },

    // ============ FOOTER ============
    footer: "© 2024 Katherine Ye. All Rights Reserved"
}

export default info