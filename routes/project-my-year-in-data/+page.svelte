<script lang="ts">
    import { onMount } from 'svelte';
    import { resolve } from "$app/paths";
    import { handleNavigate } from '$lib/Helpers/helpers';
    import Button from '$lib/Components/Button.svelte';

    // let carousel: HTMLDivElement;
    // // let loaded = false;

    // onMount(async () => {
        // Dynamically import Flickity client-side bc SvelteKit uses Server-Side Rendering (SSR)
    //     const Flickity = (await import('flickity')).default;

    //     await import('flickity/css/flickity.css'); // have to import at top level because library is dynamically imported
    //     // loaded = true;
        
    //     new Flickity(carousel, {
    //         accessibility: true,
    //         // enable keyboard navigation, pressing left & right keys

    //         adaptiveHeight: false,
    //         // set carousel height to the selected slide

    //         autoPlay: false,
    //         // advances to the next cell
    //         // if true, default is 3 seconds
    //         // or set time between advances in milliseconds
    //         // i.e. `autoPlay: 1000` will advance every 1 second

    //         cellAlign: 'left',
    //         // alignment of cells, 'center', 'left', or 'right'
    //         // or a decimal 0-1, 0 is beginning (left) of container, 1 is end (right)

    //         cellSelector: undefined,
    //         // specify selector for cell elements

    //         contain: false,
    //         // will contain cells to container
    //         // so no excess scroll at beginning or end
    //         // has no effect if wrapAround is enabled

    //         dragThreshold: 3,
    //         // number of pixels a user must scroll horizontally to start dragging
    //         // increase to allow more room for vertical scroll for touch devices

    //         freeScroll: false,
    //         // enables content to be freely scrolled and flicked
    //         // without aligning cells

    //         friction: 0.2,
    //         // smaller number = easier to flick farther

    //         groupCells: false,
    //         // group cells together in slides

    //         initialIndex: 0,
    //         // zero-based index of the initial selected cell

    //         lazyLoad: false,
    //         // enable lazy-loading images
    //         // set img data-flickity-lazyload="src.jpg"
    //         // set to number to load images adjacent cells

    //         percentPosition: true,
    //         // sets positioning in percent values, rather than pixels
    //         // Enable if items have percent widths
    //         // Disable if items have pixel widths, like images

    //         prevNextButtons: true,
    //         // creates and enables buttons to click to previous & next cells

    //         pageDots: true,
    //         // create and enable page dots

    //         resize: true,
    //         // listens to window resize events to adjust size & positions

    //         rightToLeft: false,
    //         // enables right-to-left layout

    //         setGallerySize: true,
    //         // sets the height of gallery
    //         // disable if gallery already has height set with CSS

    //         watchCSS: false,
    //         // watches the content of :after of the element
    //         // activates if #element:after { content: 'flickity' }

    //         wrapAround: true
    //         // at end of cells, wraps-around to first for infinite scrolling

    //     });
    // });
</script>

<div class="page">
    <div class="btn-container">
        <Button theme="contrast" border={false} label={"← back to projects"} clickHandler={handleNavigate("projects")}></Button>
    </div>

    <h1>My Year in Data 2025</h1>

    <div class="intro">
        <p>
            Each day, I keep track of personal metrics related to sleep, health, and emotions. As a data visualization developer, I am curious what I can learn from looking at data about my own life.
            I've had pretty bad insomnia and IBS for the past few years, so I wanted to see if any patterns existed between my symptoms and other lifestyle habits.
        </p>
        <p>
            These are some static visualizations of initial findings that I created for an Instagram carousel post. Interestingly, the process of collecting this info has already made me much more aware of my physical and emotional state, which has actually helped me regulate them better.
        </p>
    </div>

    <div class="container">
        <!-- {#if loaded} -->

        <div class="grid">
            <div class="grid-cell"><img src={resolve("/images/projects/my-year-in-data/slide1.PNG")} alt="slide 1"><h2>→</h2></div> 
            <div class="grid-cell"><img src={resolve("/images/projects/my-year-in-data/slide2.PNG")} alt="slide 2"><h2>→</h2></div>
            <div class="grid-cell"><img src={resolve("/images/projects/my-year-in-data/slide3.PNG")} alt="slide 3"><h2>→</h2></div>
            <div class="grid-cell"><img src={resolve("/images/projects/my-year-in-data/slide4.PNG")} alt="slide 4"><h2>→</h2></div>
            <div class="grid-cell"><img src={resolve("/images/projects/my-year-in-data/slide5.PNG")} alt="slide 5"><h2>→</h2></div>
            <div class="grid-cell"><img src={resolve("/images/projects/my-year-in-data/slide6.PNG")} alt="slide 6"><h2>→</h2></div>
            <!-- <div class="grid-cell"><img src={resolve("/images/projects/my-year-in-data/slide7.PNG")} alt="slide 7"><h2>→</h2></div>
            <div class="grid-cell"><img src={resolve("/images/projects/my-year-in-data/slide8.PNG")} alt="slide 8"><h2>→</h2></div> -->

            <div class="grid-cell" id="feature-item"><img src={resolve("/images/projects/my-year-in-data/top50full.png")} alt="slide 8 & 9"><h2>→</h2></div>
            <div class="grid-cell"><img src={resolve("/images/projects/my-year-in-data/slide9.PNG")} alt="slide 9"><h2>→</h2></div>
            <div class="grid-cell"><img src={resolve("/images/projects/my-year-in-data/slide10.PNG")} alt="slide 10"><h2>→</h2></div>
            <div class="grid-cell"><img src={resolve("/images/projects/my-year-in-data/slide11.PNG")} alt="slide 11"><h2>→</h2></div>
            <div class="grid-cell"><img src={resolve("/images/projects/my-year-in-data/slide12.PNG")} alt="slide 12"></div>
            
        </div>
<!-- 
        <div class="carousel" bind:this={carousel}>
            <div class="carousel-cell"><img src={resolve("/images/projects/my-year-in-data/slide1.PNG")} alt="slide 1"></div>
            <div class="carousel-cell"><img src={resolve("/images/projects/my-year-in-data/slide2.PNG")} alt="slide 2"></div>
            <div class="carousel-cell"><img src={resolve("/images/projects/my-year-in-data/slide3.PNG")} alt="slide 3"></div>
            <div class="carousel-cell"><img src={resolve("/images/projects/my-year-in-data/slide4.PNG")} alt="slide 4"></div>
            <div class="carousel-cell"><img src={resolve("/images/projects/my-year-in-data/slide5.PNG")} alt="slide 5"></div>
            <div class="carousel-cell"><img src={resolve("/images/projects/my-year-in-data/slide6.PNG")} alt="slide 6"></div>
            <div class="carousel-cell"><img src={resolve("/images/projects/my-year-in-data/slide7.PNG")} alt="slide 7"></div>
            <div class="carousel-cell"><img src={resolve("/images/projects/my-year-in-data/slide8.PNG")} alt="slide 8"></div>
            <div class="carousel-cell"><img src={resolve("/images/projects/my-year-in-data/slide9.PNG")} alt="slide 9"></div>
            <div class="carousel-cell"><img src={resolve("/images/projects/my-year-in-data/slide10.PNG")} alt="slide 10"></div>
            <div class="carousel-cell"><img src={resolve("/images/projects/my-year-in-data/slide11.PNG")} alt="slide 11"></div>
            <div class="carousel-cell"><img src={resolve("/images/projects/my-year-in-data/slide12.PNG")} alt="slide 12"></div>
            <div class="carousel-cell"><img src={resolve("/images/projects/my-year-in-data/slide13.PNG")} alt="slide 13"></div>
        </div> -->
        <!-- {/if} -->
    </div>

    <h2>Sketches & Design</h2>
    <div class="grid">
        <div class="grid-cell"><img src={resolve("/images/projects/my-year-in-data/sketches/emotracker.jpg")} alt="sketches 1"></div>
        <div class="grid-cell"><img src={resolve("/images/projects/my-year-in-data/sketches/stream.jpg")} alt="sketches 2"></div>
        <div class="grid-cell"><img src={resolve("/images/projects/my-year-in-data/sketches/sleep.jpg")} alt="sketches 3"></div>
        <div class="grid-cell"><img src={resolve("/images/projects/my-year-in-data/sketches/slide13.jpg")} alt="sketches 4"></div>
    </div>

    <!-- <div>
        <h3>more info</h3>
    </div> -->
</div>

<style>
    .page {
        padding: var(--page-padding);
    }

    .container {
        display: flex;
        justify-content: center;
        padding: 1rem;
        margin-bottom: 3rem;

        @media (max-width: 480px) {
            padding: 0;
		}
    }

    .grid {
        /* display: grid;
        grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
        */
        display: flex;
        gap: 3rem; 
        flex-wrap: wrap;
        justify-content: center; /* flex-start; */
    }

    .grid-cell {
        display: flex;
        align-items: center;
        width: 350px;

        h2 {
            margin-left: 0.5rem;
        }
    }

    img {
        width: 100%;
    }

    * {
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
    }

    #feature-item {
        /* grid-column: span 2; */
        flex-grow: 2;
    }
/* 
    :global(.flickity-viewport) {
        height: 450px !important;
    }

    :global(.flickity-slider) {
        display: flex;
        align-items: center;
    }

    :global(.flickity-page-dots) {
        flex-wrap: nowrap !important;
    }

    :global(.flickity-prev-next-button.next){
        right: -30px !important;
    }

    :global(.flickity-prev-next-button.previous){
        left: -30px !important;
    }

    :global(.flickity-button) {
        background: var(--secondary-color) !important;
    }

    .carousel {
        width: 90%;
    }

    .carousel-cell {
        width: 350px;
        height: auto;
        margin-right: 10px;

        @media (max-width: 480px) {
            width: 325px;
		}
    } */
</style>