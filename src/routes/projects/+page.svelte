<script>
	import ProjectCard from "$lib/Components/ProjectCard.svelte";
    import { projects } from "../../../static/data/projects";

</script>

<div class="page">
    <h1>projects</h1>

    <div class="cards">
        {#each projects as project}
            <div class="card">
                <ProjectCard project={project}></ProjectCard>
            </div>
        {/each}
    </div>
</div>

<style>
    .page {
        padding: var(--page-padding);
    }

    .cards {
        display: flex;
        flex-wrap: wrap;
    }

    .card {
        margin: 1rem;
    }
</style>