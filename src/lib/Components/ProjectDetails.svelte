<script lang="ts">
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

<h1 class="title">{project.title}</h1>
<div class="info">
    <div class="intro">
            {#each project.desc_long as paragraph_text}
                <p>
                    {@html paragraph_text}
                </p>
            {/each}
    </div>
    <div class="metadata-container">
        <p class="metadata">
            <b>Date</b> {project.date}
        </p>
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

        {#if project.showExternalNav}
        <div class="btn-container">
            <Button theme="contrast" label={"See the story →"} clickHandler={() => navToProject(project, false)}></Button>
        </div>
        {/if}
    </div> 
</div>

<style>
    .info {
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
        margin: 0rem 1rem;

        @media (max-width: 800px) {
            flex-direction: column;
		}
		
    }

    .intro {
        width: 70%;
        margin-right: 2rem;
        
        @media (max-width: 800px) {
            width: 80%;
		}

    }

    .metadata-container {
        width: 30%;
        @media (max-width: 800px) {
            width: 80%;
		}
    }
</style>