<script lang="ts">
    import { onMount } from 'svelte';
    import { resolve } from "$app/paths";
    import { handleNavigate } from '$lib/Helpers/helpers';
    import Button from '$lib/Components/Button.svelte';
	import ImageGrid from "$lib/Components/ImageGrid.svelte";
    import { projects, type ImageSet } from "../../../static/data/projects";
	import ProjectDetails from "$lib/Components/ProjectDetails.svelte";
    
</script>

<div class="page" id="top">
    <div class="btn-container">
        <Button theme="contrast" border={false} label={"← back to projects"} clickHandler={handleNavigate("projects#top")}></Button>
    </div>

    <ProjectDetails project={projects[7]}></ProjectDetails>

    <div class="container">
        <!-- {#if loaded} -->
         <h3 class="week-title">Week 1: Weekly connections</h3>
         <div class="cover-img-container">
            <img class="cover-img" src={resolve("/images/projects/data-by-hand/weekly-connections/final-full.png")} alt="cover of project">
        </div>
        <br>
        <div class="grid">
            <div class="grid-cell"><img src={resolve("/images/projects/data-by-hand/weekly-connections/draft1.jpeg")} alt="first draft"></div> 
            <div class="grid-cell"><img src={resolve("/images/projects/data-by-hand/weekly-connections/wip.jpeg")} alt="work in progress"></div> 
        </div>

        <h4 class="reflections-title">Reflections</h4>
        <p>
            Despite the spirit of this challenge, I ended up being a major perfectionist about this. I experimented with a few different visualizations to test which looked best, and when I would mess up while using pen or marker, I would start over or cut parts out and paste them on new paper.
            My first iteration was a stream graph, which I liked because it could show spikes and dips chronologically through the week, but I ultimately went with the circular clusters because I think the imagery of a network better represents the themes of connection or isolation.
        </p>
    </div>
</div>

<style>
    .page {
        padding: var(--page-padding);
    }

    .info {
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;

        @media (max-width: 800px) {
            flex-direction: column;
		}
    }

    .intro {
        width: 70%;
        margin-right: 2rem;
    }

    .reflections-title {
        margin-bottom: 0;
    }

    .container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding: 1rem;
        margin: 3rem 0;

        @media (max-width: 480px) {
            padding: 0;
		}
    }

    .cover-img-container {
        display: flex;
        justify-content: center;
    }

    .cover-img {
        width: 80%;
    }

    .grid {
        display: flex;
        gap: 3rem; 
        flex-wrap: wrap;
        justify-content: center;
    }

    .grid-cell {
        display: flex;
        align-items: center;
        width: 350px;

        h2 {
            margin-left: 0.5rem;
        }
    }

    img {
        width: 100%;
    }

    * {
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
    }

    #feature-item {
        flex-grow: 2;
    }

    .arrow {
        @media (max-width: 800px) {
            display: none;
		}
    }
</style>