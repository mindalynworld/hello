<script lang="ts">
    import { onMount } from 'svelte';
    import { resolve } from "$app/paths";
    import { handleNavigate } from '$lib/Helpers/helpers';
    import Button from '$lib/Components/Button.svelte';
	import ImageGrid from "$lib/Components/ImageGrid.svelte";
    import { projects, type ImageSet } from "../../../static/data/projects";
	import ProjectDetails from "$lib/Components/ProjectDetails.svelte";
    
</script>

<div class="page">
    <div class="btn-container">
        <Button theme="contrast" border={false} label={"← back to projects"} clickHandler={handleNavigate("projects")}></Button>
    </div>

    <ProjectDetails project={projects[4]}></ProjectDetails>

    <!-- <h1>My Year in Data 2025</h1>

    <div class="info">
        <div class="intro">
            <p>
                In 2025, I started collecting data about my daily habits (exercise, sleep, emotions, etc.). As a data visualization developer, I was curious... <b><i>what could I learn from looking at data about my own life?</i></b>
                I've had pretty bad insomnia and IBS for the past few years, so I wanted to see if any patterns existed between my symptoms and other lifestyle habits.
            </p>
            <p>
                These are some static visualizations of initial findings that I created for an Instagram carousel post. Interestingly, the process of collecting this info has already made me much more aware of my physical and emotional state, which has actually helped me regulate them better.
            </p>
        </div>
        <div class="metadata">
            <b>Date</b> March 2026 <br>
            <b>Tools:</b> R, Figma, d3.js
        </div>
    </div> -->

    <div class="container">
        <!-- {#if loaded} -->

        <div class="grid">
            <div class="grid-cell"><img src={resolve("/images/projects/my-year-in-data/slide1.PNG")} alt="slide 1"><h2>→</h2></div> 
            <div class="grid-cell"><img src={resolve("/images/projects/my-year-in-data/slide2.PNG")} alt="slide 2"><h2>→</h2></div>
            <div class="grid-cell"><img src={resolve("/images/projects/my-year-in-data/slide3.PNG")} alt="slide 3"><h2>→</h2></div>
            <div class="grid-cell"><img src={resolve("/images/projects/my-year-in-data/slide4.PNG")} alt="slide 4"><h2>→</h2></div>
            <div class="grid-cell"><img src={resolve("/images/projects/my-year-in-data/slide5.PNG")} alt="slide 5"><h2>→</h2></div>
            <div class="grid-cell"><img src={resolve("/images/projects/my-year-in-data/slide6.PNG")} alt="slide 6"><h2>→</h2></div>
            <!-- <div class="grid-cell"><img src={resolve("/images/projects/my-year-in-data/slide7.PNG")} alt="slide 7"><h2>→</h2></div>
            <div class="grid-cell"><img src={resolve("/images/projects/my-year-in-data/slide8.PNG")} alt="slide 8"><h2>→</h2></div> -->

            <div class="grid-cell" id="feature-item"><img src={resolve("/images/projects/my-year-in-data/top50full.png")} alt="slide 8 & 9"><h2>→</h2></div>
            <div class="grid-cell"><img src={resolve("/images/projects/my-year-in-data/slide9.PNG")} alt="slide 9"><h2>→</h2></div>
            <div class="grid-cell"><img src={resolve("/images/projects/my-year-in-data/slide10.PNG")} alt="slide 10"><h2>→</h2></div>
            <div class="grid-cell"><img src={resolve("/images/projects/my-year-in-data/slide11.PNG")} alt="slide 11"><h2>→</h2></div>
            <div class="grid-cell"><img src={resolve("/images/projects/my-year-in-data/slide12.PNG")} alt="slide 12"></div>
            
        </div>

    </div>

    <h2>Sketches & Design</h2>
    <div class="grid">
        <div class="grid-cell"><img src={resolve("/images/projects/my-year-in-data/sketches/emotracker.jpg")} alt="sketches 1"></div>
        <div class="grid-cell"><img src={resolve("/images/projects/my-year-in-data/sketches/stream.jpg")} alt="sketches 2"></div>
        <div class="grid-cell"><img src={resolve("/images/projects/my-year-in-data/sketches/sleep.jpg")} alt="sketches 3"></div>
        <div class="grid-cell"><img src={resolve("/images/projects/my-year-in-data/sketches/slide13.jpg")} alt="sketches 4"></div>
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

    .container {
        display: flex;
        justify-content: center;
        padding: 1rem;
        margin: 3rem 0;

        @media (max-width: 480px) {
            padding: 0;
		}
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
</style>