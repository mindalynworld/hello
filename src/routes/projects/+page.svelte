<script>
	import ProjectCard from "$lib/Components/ProjectCard.svelte";
    import { projects } from "../../../static/data/projects";
    import { handleNavigate } from "$lib/Helpers/helpers";
    import Button from "$lib/Components/Button.svelte";
</script>

<div class="page" id="top">

    <div class="btn-container">
        <Button theme="contrast" border={false} label={"← back to home"} clickHandler={handleNavigate("home")}></Button>
    </div>

    <h1>projects</h1>

    <div class="card-container">
        <div class="cards">
            {#each projects as project}
                {#if !project.exclude}
                    <div class="card">
                        <ProjectCard project={project}></ProjectCard>
                    </div>
                {/if}
            {/each}
        </div>
    </div>

    <div class="next-nav">
        <h4>Go to:</h4>
            <div class="nav-options">
                <a class="option-box" href="#header">Back to top</a>
                <button class="option-box" onclick={() => handleNavigate("home")}>Home</button>
                <!-- <div class="option-box">Projects</div>
                <div class="option-box">Contact</div> -->
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
        grid-template-columns: repeat(auto-fit, minmax(375px, 1fr));
        gap: 16px;
        /* display: flex;
        flex-wrap: wrap;
        justify-content: center;  */
        /* flex-start; */

        @media (max-width: 480px) {
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
		}
    }

    .card {
        margin: 1rem;
        justify-self: center;
    }

    .nav-options {
        display: flex;
        justify-content: center;
        max-width: 900px;
    }

    .next-nav {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-bottom: 3rem;
    }

    .option-box {
        display: flex;
        flex: 1;
        justify-content: center;
        text-align: center;
        align-items: center;

        border: solid 2px;
        border-radius: 5px;
        margin: 0.5rem;
        padding: 1rem;

        text-decoration: none;
        background: none; 
        border-color: var(--secondary-color);
        color: var(--secondary-color);

        font-weight: 700;
        font-size: 16px;

        width: 200px;
        min-height: 10px;
    
        @media (width <= 800px) {
            width: 125px;
        }
    }

    .option-box:hover {
        background-color: var(--primary-contrast);
        color: var(--primary);
        border-color: var(--primary-contrast);
        cursor: pointer;
    }
</style>