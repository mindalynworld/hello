export interface Project {
    title: string;
    imgSrc: string;
    clients: string[];
    clientLinks: string[];
    date: string;
    arts: boolean;
    tech: boolean;
    edu: boolean;
    technologies?: string[];
    hashtags: string[];
    link: string;
    desc_short: string;
    desc_long?: string;
}

// export type Category = "ARTS" | "DATA/TECH" | "EDUCATION";

export const projects: Project[] = [
    {
        title: "Lollapalooza Education Arts Fund",
        imgSrc: "/images/lolla_cover.png",
        clients: ["Ingenuity", "Lollapalooza"],
        clientLinks: ["https://www.ingenuity-inc.org/", "https://www.lollapalooza.com/"],
        date: "August 2025",
        arts: true,
        tech: true,
        edu: true,
        technologies: ["d3", "Svelte", "R", "git", "GIS", "Figma", "Github Pages", "Google Analytics"],
        hashtags: ["#dataviz", "#dataanalysis", "#scrollytelling", "#interactive", "#animations", "#webdev", "#projectmanagement", "#visualdesign", "#maps"],
        link: "https://ingenuity-chicago.github.io/laef_impact/",
        desc_short: "Visualizing the impact of Lollapalooza's $2.2 Million investment in arts education in Chicago Public Schools through long-form scrollytelling."
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
        desc_short: "Using nighttime lights to study disparities in energy access amidst the energy crisis in South Africa."
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
        desc_short: "Reporting on Gender disparities in commuting patterns in South Africa. See map visualizations in the first section titled “Male-female Journeys to work” (data wrangling, analysis, and visualizations done by me)."
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
        desc_short: "What could I learn from exploring data about my own life? In 2025, I started collecting data about my daily habits (exercise, sleep, emotions, etc.) to see if I could find any interesting patterns."
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
        desc_short: "Project Qute was a collaboration between Google, Caltech and Quantum Realm Games to introduce quantum information science to high school students using the game of chess. As a project manager, I led the education team to develop a curriculum for an in-classroom workshop. It was delivered to over 10,000 students across the U.S. as a part of the U.S. National Quantum Initiative by the White House."
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
        desc_short: "How have the daily average temperatures in San Francisco changed over 40 years. A visual timelapse of calendar heatmaps from 1980 to 2019."
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
        desc_short: "Should you call the police to de-escalate your mental health emergency? The data says no. This piece is a work in progress, showing an initial exploration of the Washington Post's police shootings database using various data visualizations to investigate the role mental illness plays in these shootings."
    },

]