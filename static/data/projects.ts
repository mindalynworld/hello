export interface Project {
    title: string;
    imgSrc: string;
    client: string;
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
        imgSrc: "/images/lolla_choropleth.png",
        client: "Ingenuity",
        date: "August 2025",
        arts: true,
        tech: true,
        edu: true,
        technologies: ["d3.js", "Svelte", "R", "git", "GIS", "Figma", "Github Pages", "Google Analytics"],
        hashtags: ["#scrollytelling", "#interactive", "#animations", "#projectmanagement", "#visualdesign", "#maps"],
        link: "https://ingenuity-chicago.github.io/laef_impact/",
        desc_short: "Visualizing the impact of Lollapalooza's $2.2 Million investment in arts education in Chicago Public Schools through long-form scrollytelling."
    }
]