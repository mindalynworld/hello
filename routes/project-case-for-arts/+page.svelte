<script lang="ts">
    import { resolve } from "$app/paths";
    import { handleNavigate } from '$lib/Helpers/helpers';
    import Button from '$lib/Components/Button.svelte';
	import ImageGrid from "$lib/Components/ImageGrid.svelte";
    import { projects, type ImageSet } from "../../../static/data/projects";
	import ProjectDetails from "$lib/Components/ProjectDetails.svelte";

    const projectSketches: ImageSet = {
		images: [
            {
				URL: "/images/projects/case-for-arts/sketches/design-library.png",
				alt: "design library"
			},
            {
				URL: "/images/projects/case-for-arts/sketches/schools-breakdown.png",
				alt: "brainstorming how to display the sample set of schools"
			},
            {
				URL: "/images/projects/case-for-arts/sketches/vignettes.png",
				alt: "first draft vignettes"
			},
        ],
		showArrows: false,
        squares: false
	}
</script>

<div class="page">
    <div class="btn-container">
        <Button theme="contrast" border={false} label={"← back to projects"} clickHandler={handleNavigate("projects")}></Button>
    </div>

    <ProjectDetails project={projects[1]}></ProjectDetails>

    <div class="img-container">
        <div class="cover-img-container">
            <img class="cover-img" src={resolve("/images/projects/case-for-arts/stills/bcfa-draft.png")} alt="cover of project">
        </div>
    </div>

    <div class="process-text">
        <p>
            
        </p>
    </div>

    <h2>Mockups and Drafts</h2>

    <ImageGrid set={projectSketches}/>
    <br>
    <i>(From left to right): </i>
    <ol>
        <li>Created a design library and assets</li>
        <li>Brainstorming ways to display the sample set of scholis. Sometimes I create a moodboard of other data viz that inspire me. </li>
        <li>Drafts of data viz vignettes that can be rearranged modularly.</li>
    </ol>
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
        width: 100%;
    }

    * {
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
    }

    .process-text {
        margin: 1rem;
    }
</style>