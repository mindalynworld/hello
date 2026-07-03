<script>
	import ProjectCard from "$lib/Components/ProjectCard.svelte";
    import { projects } from "../../../static/data/projects";
    import { handleNavigate } from "$lib/Helpers/helpers";
    import Button from "$lib/Components/Button.svelte";
</script>

<div class="page">

    <div class="btn-container">
        <Button theme="contrast" border={false} label={"← back to home"} clickHandler={handleNavigate("about")}></Button>
    </div>

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

    /* .card-container {
        display: flex;
        justify-content: center;
    } */

    .cards {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
        gap: 16px;
        /* flex-wrap: wrap;
        justify-content: center; flex-start; */
    }

    .card {
        margin: 1rem;
        justify-self: center;
    }
</style>