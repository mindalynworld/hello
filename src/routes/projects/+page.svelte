<script>
	import ProjectCard from "$lib/Components/ProjectCard.svelte";
    import { projects } from "../../../static/data/projects";

</script>

<div class="page">
    <h1>projects</h1>

    {#each projects as project}
        <ProjectCard project={project}></ProjectCard>
    {/each}
</div>

<style>
    .page {
        padding: var(--page-padding);
    }
</style>