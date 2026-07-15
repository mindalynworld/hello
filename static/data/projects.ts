export interface Project {
    title: string;
    imgSrc: string;
    clients: string[];
    clientLinks: string[];
    date: string;
    arts: boolean;
    tech: boolean;
    edu: boolean;
    technologies: string[];
    responsibilities: string[];
    hashtags: string[];
    link: string;
    desc_short: string;
    desc_long?: string[];
    internalSlug?: string;
    showExternalNav?: boolean;
    exclude?: boolean;
}

export interface ImageSet {
    images: {
        URL: string;
        alt: string;
        feature?: boolean;
    }[];
    showArrows: boolean;
    squares: boolean;
}

// export type Category = "ARTS" | "DATA/TECH" | "EDUCATION";

export const projects: Project[] = [
    {
        title: "The Lollapalooza Arts Education Fund",
        imgSrc: "/images/lolla_cover.png",
        clients: ["Ingenuity", "Lollapalooza"],
        clientLinks: ["https://www.ingenuity-inc.org/", "https://www.lollapalooza.com/"],
        date: "August 2025",
        arts: true,
        tech: true,
        edu: true,
        technologies: ["d3", "Svelte", "R", "GIS", "Figma", "HTML/CSS/Typescript", "Github Pages", "Google Analytics"],
        hashtags: ["#dataviz", "#dataanalysis", "#scrollytelling", "#interactive", "#animations", "#webdev", "#projectmanagement", "#visualdesign", "#maps"],
        link: "https://ingenuity-chicago.github.io/laef_impact/",
        desc_short: "A long-form, interactive and animated scrollytelling piece visualizing the impact of Lollapalooza's $2.2 million investment in arts education in Chicago Public Schools.",
        desc_long: [
            `<b><i>What is possible when every students has access to high-quality arts education?</i><b>`,
            "Lollapalooza, one of the largest music festivals in the US, believes that every student deserves access to the arts. In 2021, they partnered with Ingenuity, the leading arts education data authority in Chicago, to invest $2.2 million in arts education in Chicago Public Schools (CPS).",
            "Ingenuity wanted to do a long-form, data-driven scrollytelling piece to visualize the impact of this investment. As the only data visualization specialist at the company, I was given full ownership of this project. I explored & analyzed the data, sculpted the narrative arc, designed the visualizations, and developed the web app. Having more context about the partnership, the client took the lead on writing the copy-text."
        ],
        responsibilities: ["Story design", "UI/UX design", "data analysis", "data visualization design & development", "web development"],
        internalSlug: "project-lollapalooza",
        showExternalNav: true
    },
    {
        title: "Case for the Arts",
        imgSrc: "/images/caseforarts_cover.png",
        clients: ["Ingenuity"],
        clientLinks: ["https://www.ingenuity-inc.org/"],
        date: "July 2026",
        arts: true,
        tech: true,
        edu: true,
        technologies: ["R", "Figma"],
        hashtags: ["#dataviz", "informationdesign", "#dataanalysis", "#visualdesign"],
        link: "",
        desc_short: "A static one-page infographic poster showing the impact of arts education on the academic achievement outcomes of students in Chicago Public Schools.",
        desc_long: [
            "A work in progress of a static one-page infographic poster showing the relationship between access to arts education and academic outcomes of students in Chicago Public Schools. Ingenuity will use this in both print and digital to advocate for arts-supportive policy and fundraising.",
            "<i>To be published end of July 2026.</i>"
        ],
        responsibilities: ["Story design", "visual design", "data analysis", "data visualization design & development"],
        internalSlug: "project-case-for-arts",
        showExternalNav: false,
        exclude: true
    },
    {
        title: "The Dark Divide",
        imgSrc: "/images/darkdivide_cover.png",
        clients: ["Gauteng City-Region Observatory"],
        clientLinks: ["https://www.gcro.ac.za/"],
        date: "October 2023",
        arts: false,
        tech: true,
        edu: false,
        technologies: ["QGIS", "Google Earth Engine", "R", "python", "d3", "Svelte"],
        hashtags: ["#dataviz", "#dataanalysis", "#maps", "#research", "#investigation", "#projectmanagement"],
        link: "https://mindalynworld.github.io/portfolio/projects/south-africa-energy",
        desc_short: "Investigative research using nighttime lights to study disparities in energy access amidst the energy crisis in South Africa.",
        responsibilities: ["Research design", "data wrangling & analysis", "data visualization design & development", "web development", "writing"]
    },
    {
        title: "Gender, Commuting, and Belonging",
        imgSrc: "/images/mom_cover.png",
        clients: ["Gauteng City-Region Observatory"],
        clientLinks: ["https://www.gcro.ac.za/"],
        date: "August 2023",
        arts: false,
        tech: true,
        edu: false,
        technologies: ["QGIS", "R"],
        hashtags: ["#dataviz", "#maps", "#investigation", "datawrangling", "#dataanalysis"],
        link: "https://gcro.ac.za/outputs/map-of-the-month/detail/extended-urbanisation-gcr-gender-commuting-migration-and-belonging/",
        desc_short: "Report on gender disparities in commuting patterns in South Africa. Responsible for map visualizations in “Male-female Journeys to work” section.",
        responsibilities: ["Data wrangling & analysis", "data visualization design & development"]
    },
    {
        title: "My Year in Data 2025",
        imgSrc: "/images/personal_data_cover.png",
        clients: ["Independent"],
        clientLinks: [],
        date: "March 2026",
        arts: true,
        tech: true,
        edu: false,
        technologies: ["d3", "R", "Figma", "Google Sheets"],
        hashtags: ["dataviz", "design", "storytelling", "personalproject"],
        link: "https://www.instagram.com/p/DWHthMBkuuh/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
        desc_short: "What could I learn from exploring data about my own life? In 2025, I started collecting data about my daily habits (exercise, sleep, emotions, etc.) to see if I could find any interesting patterns.",
        desc_long: [
            "In 2025, I started collecting data about my daily habits (exercise, sleep, emotions, etc.). As a data visualization developer, I was curious... <b><i>what could I learn from looking at data about my own life?</i></b> I've had pretty bad insomnia and IBS for the past few years, so I wanted to see if any patterns existed between my symptoms and other lifestyle habits.",
            "These are some static visualizations of initial findings that I created for an Instagram carousel post. Interestingly, the process of collecting this info has already made me much more aware of my physical and emotional state, which has actually helped me regulate them better."
        ],
        responsibilities: ["Everything"],
        internalSlug: "project-my-year-in-data"
    },
    {
        title: "Fueling Flames: 40 years of daily temperatures in San Francisco",
        imgSrc: "/images/temps_cover.png",
        clients: ["Independent"],
        clientLinks: [],
        date: "December 2025",
        arts: true,
        tech: true,
        edu: false,
        technologies: ["d3", "R"],
        hashtags: ["dataviz", "art", "storytelling", "personalproject"],
        link: "https://mindalynworld.github.io/portfolio/projects/temperatures",
        desc_short: "How have the daily average temperatures in San Francisco changed over 40 years. A visual timelapse of calendar heatmaps from 1980 to 2019.",
        responsibilities: ["Everything"]
    },
    {
        title: "Project Qute",
        imgSrc: "/images/qute_cover.png",
        clients: ["CalTech", "Google Quantum AI", "Quantum Realm Games"],
        clientLinks: ["https://www.caltech.edu/", "https://quantumai.google/", "https://chess.quantumnative.io/#/"],
        date: "April 2022",
        arts: false,
        tech: true,
        edu: true,
        technologies: ["Google suite"],
        hashtags: ["#projectmanagement", "#STEMEducation"],
        link: "https://iqim.caltech.edu/quantime/",
        desc_short: "Project Qute was a collaboration between Google, Caltech and Quantum Realm Games to introduce quantum information science to high school students using the game of chess. As a project manager, I led the education team to develop a curriculum for an in-classroom workshop. It was delivered to over 10,000 students across the U.S. as a part of the U.S. National Quantum Initiative by the White House.",
        responsibilities: ["Project management"]
    },
    {
        title: "The Role of Mental Illness in Fatal Police Shootings",
        imgSrc: "/images/police_cover.png",
        clients: ["Independent"],
        clientLinks: [],
        date: "January 2025",
        arts: false,
        tech: true,
        edu: false,
        technologies: ["Datawrapper", "R"],
        hashtags: ["dataviz", "dataanalysis", "investigation", "personalproject"],
        link: "https://mindalynworld.github.io/portfolio/projects/police-shootings",
        desc_short: "Should you call the police to de-escalate your mental health emergency? The data says no. This piece is a work in progress, showing an initial exploration of the Washington Post's police shootings database using various data visualizations to investigate the role mental illness plays in these shootings.",
        responsibilities: ["Everything"]
    },

]