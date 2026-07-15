<script lang="ts">
    import { resolve } from '$app/paths';
    import type { Project } from "../../../static/data/projects"
	import Button from './Button.svelte';
    import { handleNavigate } from '$lib/Helpers/helpers';

    let { project } : { project: Project } = $props();

    function navToProject(project: Project, internal: boolean) {
        if (internal) {
            handleNavigate(project.internalSlug);
        } else {
            window.open(project.link, '_blank');
        }
    }

</script>

<div class="card">
    <img class="thumbnail" src="{resolve(project.imgSrc)}" alt="FILL IN">
        <div class="categories">
        {#if project.arts}
            <p class="category" id="arts">arts</p>
        {/if}
        {#if project.tech}
            <p class="category" id="tech">data/tech</p>
        {/if}
        {#if project.edu}
            <p class="category" id="edu">education</p>
        {/if}
    </div>
    <h3 class="title">{project.title}</h3>
    <p class="description">{project.desc_short}</p>
    <p class="metadata">
        <b>Partners: </b> 
        {#each project.clients as client, i}
            <a href={project.clientLinks[i]} target="_blank" rel="noopener noreferrer">{client}</a>{#if i != project.clients.length - 1}, &nbsp; {/if}
        {/each}
    </p>
    <p class="metadata">
        <b>Tools: </b>
        {#each project.technologies as technology, i}
            {technology}{#if i != project.technologies.length - 1}, &nbsp; {/if}
        {/each}
    </p>
    <p class="metadata">
        <b>Responsibilities: </b>
        {#each project.responsibilities as responsibility, i}
            {responsibility}{#if i != project.responsibilities.length - 1}, &nbsp; {/if}
        {/each}
    </p>
    <!-- <p class="hashtags">
        {#each project.hashtags as hashtag}
            {hashtag} &nbsp;
        {/each}
    </p> -->

    <div class="btn-container">
        <Button theme="contrast" label={"Go to project →"} clickHandler={() => navToProject(project, project.internalSlug ? true : false)}></Button>
    </div>
    
</div>

<style>
    .card {
        width: 325px;

        display: flex;
        flex-direction: column;

        border: solid 1px black;
        border-radius: var(--border-radius);
        padding: 25px;
    }

    .card > * {
        margin: 0 0 1rem 0;
    }

    .thumbnail {
        height: 190px;
        margin: 0 auto 1rem;

        /* width: 100%;             /* Fills the width of its parent container */
        /* max-width: 300px;        Optional: Limits the maximum size */
        /* aspect-ratio: 1 / 1;     Forces the image box to be a perfect square */
        object-fit: cover;       /* Crops the image to fill the box without distortion */
        object-position: center;
    }

    .description {
        font-weight: 500;
        text-align: center;
    }

    .categories {
        display: flex;
        justify-content: center;
    }

    .category {
        display: flex;
        flex-direction: column;
        justify-content: center;
        font-weight: 700;
        font-size: 14px;
        width: 4.5rem;
        height: 1.3rem;
        text-align: center;
        margin: 0 5px;
        border-radius: var(--border-radius);
        color: var(--primary-color);

        &#arts {
            background-color: var(--arts-color);
        }
        &#tech {
            background-color: var(--tech-color);
        }
        &#edu {
            background-color: var(--edu-color);
        }
    }

    .title {
        text-align: center;
        font-size: 1.2rem;
    }

    .metadata {
        font-size: 15px;
    }

    .hashtags {
        color: var(--secondary-color);
        font-weight: 700;
        font-size: 14px;
    }

    .btn-container {
        display: flex;
        justify-content: center;
        align-self: center;
        width: 10rem;
        margin-bottom: 0;
    }

    a {
        color: var(--client-link-color);
    }
</style>