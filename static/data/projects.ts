export interface Project {
    title: string;
    imgSrc: string;
    client: string;
    clientLink: string;
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
        client: "Ingenuity",
        clientLink: "https://www.ingenuity-inc.org/",
        date: "August 2025",
        arts: true,
        tech: true,
        edu: true,
        technologies: ["d3.js", "Svelte", "R", "git", "GIS", "Figma", "Github Pages", "Google Analytics"],
        hashtags: ["dataviz", "#dataanalysis", "#scrollytelling", "#interactive", "#animations", "#projectmanagement", "#visualdesign", "#maps"],
        link: "https://ingenuity-chicago.github.io/laef_impact/",
        desc_short: "Visualizing the impact of Lollapalooza's $2.2 Million investment in arts education in Chicago Public Schools through long-form scrollytelling."
    },
    {
        title: "The Dark Divide",
        imgSrc: "/images/darkdivide_cover.png",
        client: "Gauteng City-Region Observatory",
        clientLink: "https://www.gcro.ac.za/",
        date: "October 2023",
        arts: false,
        tech: true,
        edu: false,
        technologies: ["QGIS", "Google Earth Engine", "R", "python", "d3.js", "Svelte"],
        hashtags: ["#dataviz", "#dataanalysis", "#maps", "#investigation", "#projectmanagement"],
        link: "https://mindalynworld.github.io/portfolio/projects/south-africa-energy",
        desc_short: "Using nighttime lights to study disparities in energy access amidst the energy crisis in South Africa."
    },
    {
        title: "Gender, Commuting, and Belonging",
        imgSrc: "/images/mom_cover.png",
        client: "Gauteng City-Region Observatory",
        clientLink: "https://www.gcro.ac.za/",
        date: "August 2023",
        arts: false,
        tech: true,
        edu: false,
        technologies: ["QGIS", "R"],
        hashtags: ["#dataviz", "#maps", "#investigation", "datawrangling", "#dataanalysis"],
        link: "https://gcro.ac.za/outputs/map-of-the-month/detail/extended-urbanisation-gcr-gender-commuting-migration-and-belonging/",
        desc_short: "Reporting on Gender disparities in commuting patterns in South Africa. See map visualizations in the first section titled “Male-female Journeys to work” (data wrangling, analysis, and visualizations done by me)."
    }
]