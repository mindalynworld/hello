<script lang="ts">
    import { resolve } from "$app/paths";
    import type { ImageSet } from "../../../static/data/projects";

    let { set } : { set: ImageSet } = $props();
</script>

<div class="grid">
    {#each set.images as image, i}
        <div class="grid-cell" class:featured={image.feature}>
            <img class:square={set.squares} src={resolve(image.URL)} alt={image.alt}>
        </div>
        {#if set.showArrows && (i != set.images.length - 1)}
            <h2>→</h2>
        {/if}
    {/each}
</div>

<style>

    .grid {
        /* display: grid;
        grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
        */
        display: flex;
        gap: 3rem; 
        flex-wrap: wrap;
        justify-content: center;
    }

    .grid-cell {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 30%;
        /* max-width: 400px; */

        @media (max-width: 800px) {
            width: 70%;
		}

        h2 {
            margin-left: 0.5rem;
        }

        :global(&.featured) {
            flex-grow: 2;
        }
    }

    img {
        width: 100%;             /* Fills the width of its parent container */

        :global(&.square) {
            max-width: 300px;        /* Optional: Limits the maximum size */
            aspect-ratio: 1 / 1;     /* Forces the image box to be a perfect square */
            object-fit: cover;       /* Crops the image to fill the box without distortion */
            object-position: center;
        }
    }
    
</style>