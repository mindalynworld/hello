<script lang="ts">
    import * as d3 from 'd3';
    import { onMount } from 'svelte';

    let vis: HTMLElement;

    onMount(() => {
        init();
    });

    function init(): void {

    }

</script>

<main>
    <div id="vis" bind:this={vis}></div>
</main>

<style></style>



<!-- FOR IMAGES
<script lang="ts">
    import { resolve } from "$app/paths";

    let imgSrc = "/images/area-chart-annotations.svg";
</script>


<img src="{resolve(imgSrc)}" alt="stacked area chart of experiences"/> -->