<script lang="ts">
    import { resolve } from '$app/paths';
    import type { Project } from "../../../static/data/projects"
	import Button from './Button.svelte';

    let { project } : { project: Project } = $props();

</script>

<div class="card">
    <img class="thumbnail" src="{resolve(project.imgSrc)}" alt="FILL IN">
    <h3 class="title">{project.title}</h3>
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
    <p class="description">{project.desc_short}</p>
    <p>
        <b>Client: </b> <a href={project.clientLink} target="_blank" rel="noopener noreferrer">{project.client}</a>
    </p>
    <p>
        <b>Technologies: </b>
        {#each project.technologies as technology}
            {technology} &nbsp;
        {/each}
    </p>
    <p class="hashtags">
        {#each project.hashtags as hashtag}
            {hashtag} &nbsp;
        {/each}
    </p>

    <div class="btn-container">
        <Button theme="contrast" label={"Go to project →"} clickHandler={() => window.open(project.link, '_blank')}></Button>
    </div>
    
</div>

<style>
    .card {
        width: 350px;

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
        width: 75%;
        margin: 0 auto 1rem;
    }

    .categories {
        display: flex;
        justify-content: space-around;
        padding: 0 30px;
    }

    .category {
        display: flex;
        flex-direction: column;
        justify-content: center;
        font-weight: 700;
        width: 5.5rem;
        height: 1.5rem;
        text-align: center;
        margin: 0;
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
        font-size: 1.3rem;
    }

    .hashtags {
        color: var(--secondary-color);
        font-weight: 700;
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