import type { Project } from "../../../static/data/projects";

/* COLOR DEFINITIONS (TODO: maybe this can exist in styles and just add attr class?) or make a dictionary*/
const primary_color = "#454545";
const arts_color = "rgb(195, 175, 252)"; 
const edu_color = "rgb(205, 232, 181)";
const tech_color = "rgb(252, 191, 78)";

export function determineColorsByWeight(d: d3.DSVRowString<string>, isSVG: boolean): string { // update this to be more parameter based so it can cover more cases
        if (+d.edu_weight == 1) {
            return edu_color;
        }
        if (+d.arts_weight == 1) {
            return arts_color;
        }
        if (+d.tech_weight == 1) {
            return tech_color;
        }
    
        if (+d.edu_weight > 0) {
            if (+d.arts_weight > 0) {
                if (+d.tech_weight > 0) {
                    return isSVG ? `url(#allGradient)` : `linear-gradient(to right bottom, ${arts_color},  ${edu_color}, ${tech_color})`;
                }
                return isSVG ? `url(#eduArtsGradient)`: `linear-gradient(to right bottom, ${arts_color},  ${edu_color})`;
            }
            else if (+d.tech_weight > 0) {
                return isSVG ? `url(#eduTechGradient)` : `linear-gradient(to right bottom, ${edu_color}, ${tech_color})`;
            }
        } else if (+d.arts_weight > 0 && +d.tech_weight > 0) {
            return isSVG ? `url(#techArtsGradient)` : `linear-gradient(to right bottom, ${arts_color}, ${tech_color})`;
        }

        return "";
}

export function determineColors(project: Project, isSVG: boolean): string { // update this to be more parameter based so it can cover more cases
        if (project.edu && !project.arts && !project.tech) {
            return edu_color;
        }
        if (!project.edu && project.arts && !project.tech) {
            return arts_color;
        }
        if (!project.edu && !project.arts && project.tech) {
            console.log(project);
            return tech_color;
        }
    
        if (project.edu) {
            if (project.arts) {
                if (project.tech) {
                    console.log(project);
                    return isSVG ? `url(#allGradient)` : `linear-gradient(to right bottom, ${arts_color},  ${edu_color}, ${tech_color})`;
                }
                return isSVG ? `url(#eduArtsGradient)`: `linear-gradient(to right bottom, ${arts_color},  ${edu_color})`;
            }
            else if (project.tech) {
                return isSVG ? `url(#eduTechGradient)` : `linear-gradient(to right bottom, ${edu_color}, ${tech_color})`;
            }
        } else if (project.arts && project.tech) {
            return isSVG ? `url(#techArtsGradient)` : `linear-gradient(to right bottom, ${arts_color}, ${tech_color})`;
        }

        return "";
}