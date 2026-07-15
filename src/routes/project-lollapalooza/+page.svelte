<script lang="ts">
    import { resolve } from "$app/paths";
    import { handleNavigate } from '$lib/Helpers/helpers';
    import Button from '$lib/Components/Button.svelte';
	import ImageGrid from "$lib/Components/ImageGrid.svelte";
    import { projects, type ImageSet } from "../../../static/data/projects";
	import ProjectDetails from "$lib/Components/ProjectDetails.svelte";
    
    const projectStills: ImageSet = {
		images: [
            {
				URL: "/images/projects/lolla/stills/classroom.png",
				alt: "classroom"
			},
            {
				URL: "/images/projects/lolla/stills/choropleth.png",
				alt: "choropleth map"
			},
            {
				URL: "/images/projects/lolla/stills/ratio.png",
				alt: "student-teacher ratio data viz"
			},
        ],
		showArrows: false,
        squares: true
	}

    const projectSketches: ImageSet = {
		images: [
            {
				URL: "/images/projects/lolla/sketches/notebook1.jpg",
				alt: "notebook sketches 1"
			},
            {
				URL: "/images/projects/lolla/sketches/notebook2.jpg",
				alt: "notebook sketches 2"
			},
            {
				URL: "/images/projects/lolla/sketches/ipad1.jpg",
				alt: "ipad sketches 1"
			},
            {
				URL: "/images/projects/lolla/sketches/ipad2.jpg",
				alt: "ipad sketches 2"
			},
            {
				URL: "/images/projects/lolla/sketches/wireframes.png",
				alt: "wireframes",
                feature: true
			},
        ],
		showArrows: false,
        squares: false
	}

    let project = projects[0]
</script>

<div class="page" id="top">
    <div class="btn-container">
        <Button theme="contrast" border={false} label={"← back to projects"} clickHandler={handleNavigate("projects#top")}></Button>
    </div>

    <ProjectDetails project={project}></ProjectDetails>

    <div class="img-container">
        <div class="cover-img-container">
            <img class="cover-img" src={resolve("/images/projects/lolla/stills/cover_wide.png")} alt="cover of project">
        </div>
        <div class="grid-container">
            <ImageGrid set={projectStills}/>
        </div>
    </div>

    <div class="process-text">
        <p>
            As my first large scale end-to-end data storytelling project this was a huge learning experience. With no available mentorship, I relied on online resources for best practices around storytelling and data viz with d3 + Svelte. My experience in the tech industry as an frontend software engineer helped guide me with UI/UX design and web app deployment.
        </p>
        <p>    
            Since these piece was a collaboration between Ingenuity and Lollapalooza, one of my first challenges was figuring out how to merge the styles of two different branding kits while still staying true to the aesthetic of each. 
            I was lucky that one of the colors (teal), was almost identical and shared between the two. I decided to use this as the primary theme color. 
        </p>
        <p>
            With this piece, I was interested in how to use scrolling and zooming functionality to balance the micro with the macro: how individual testimonials fit within the larger picture.
            I wanted to be intentional about how I was using interaction and animation -- when it was necessary and supportive vs. frivolous.
        </p>
        <p>
            This was a very iterative process that involved weekly check-ins and feedback rounds with the client. To keep the process smooth and rolling forward, I would start by designing on pen-and-paper sketches and mock-ups in Figma before putting anything in code. See below.
        </p>
    </div>

    <div class="btn-container" id="external-nav">
        <Button theme="contrast" label={"See the full story →"} clickHandler={() => window.open(project.link, '_blank')}></Button>
    </div>

    <h2>From Sketches to Code</h2>

    <ImageGrid set={projectSketches}/>
</div>

<style>
    .page {
        padding: var(--page-padding);
    }

    .img-container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding: 1rem;
        margin: 3rem 0;

        @media (max-width: 480px) {
            padding: 0;
		}
    }

    .grid-container {
        margin-top: 2rem;
        margin-bottom: 1rem;
    }

    .cover-img-container {
        display: flex;
        justify-content: center;
    }

    .cover-img {
        width: 75%;
    }

    * {
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
    }

    .process-text {
        justify-self: center;
        margin: 1rem 3rem 3rem;
        max-width: 900px;
        

        @media (width <= 480px) {
            margin: 1rem;
        }
    }

    .btn-container#external-nav {
        display: flex;
        justify-content: end;
        margin: 1rem 3rem 3rem;
    }
</style>