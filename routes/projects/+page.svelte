<script>
	import ProjectCard from "$lib/Components/ProjectCard.svelte";
    import { projects } from "../../../static/data/projects";

</script>

<div class="page">
    <h1>projects</h1>

    <div class="card-container">
        <div class="cards">
            {#each projects as project}
                <div class="card">
                    <ProjectCard project={project}></ProjectCard>
                </div>
            {/each}
        </div>
    </div>
</div>

<style>
    .page {
        display: flex;
        flex-direction: column;
        padding: var(--page-padding);
    }

    .card-container {
        display: flex;
        justify-content: center;
    }

    .cards {
        display: flex;
        flex-wrap: wrap;
        justify-content: center; /* flex-start; */
    }

    .card {
        margin: 1rem;
    }
</style>