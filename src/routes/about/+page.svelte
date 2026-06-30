<script lang="ts">
    import { resolve } from "$app/paths";
	import Button from "$lib/Components/Button.svelte";
	import StackedAreaChart from "$lib/Components/StackedAreaChart.svelte";
    import Timeline from "$lib/Components/Timeline.svelte";
    import { handleNavigate } from "$lib/Helpers/helpers";

    let imgSrc = "/images/headshot.jpg";

    function handleClick(option: String) {
        switch(option) {
            case "projects":
                handleNavigate("projects");
                return;
            default:
                return;
        }
    }

</script>

<div class="page">
    <div class="content">
        <div class="intro">
            <div class="img">
                <img class="headshot" src="{resolve(imgSrc)}" alt="photo of mindy">
            </div>
            <div class="text">
                <p>
                    Hi, I’m Mindy. I tell vibrant, <span class="emphasize-text">human-centered, visual stories grounded in data</span> to make information engaging and accessible for all audiences.  
                </p>

                <p>
                    As a 
                    <b class="tag" style="color: #F5B031;">data scientist</b> & 
                    <b class="tag" style="color: #F5B031;">software engineer</b>, 
                    <b class="tag" style="color: #81CE3C;">educator</b>, and 
                    <b class="tag" style="color: #AB91F2;">dance artist</b>, 
                    I see <span class="emphasize-text">data storytelling</span> as natural intersection of my work -- a place where my technical background and eye for visual communication meet and bring to life stories that
                        <span class="emphasize-text">educate and inspire action</span> in readers, from individuals to policymakers. 
                </p>

                <h4>Jump to:</h4>
                <div class="nav-options">
                    <!-- <button class="option-box" onclick={() => handleClick("resume")}>Interactive Resume Explorer</button> -->
                    <a class="option-box" href="#resume-explorer">Interactive Resume Explorer</a>
                    <button class="option-box" onclick={() => handleClick("projects")}>Projects</button>
                    <!-- <div class="option-box">Projects</div>
                    <div class="option-box">Contact</div> -->
                </div>
            </div>
        </div>
    

        <div class="resume-explorer" id="resume-explorer">

            <h2 class="title">Interactive Resume Explorer</h2>
            <div class="timeline-intro">
                <p class="section-1">
                    When looking back at my career, I started to notice that every experience fell into one or more of these key themes:
                    <span class="intro-themes" style="border-color: rgb(245, 176, 49); background-color: rgb(245, 176, 49, 0.7);">Data & Technology</span>, 
                    <span class="intro-themes" style="border-color: rgb(183, 224, 146); background-color: rgb(183, 224, 146, 0.7); ">Education & Community Organizing</span>, and 
                    <span class="intro-themes" style="border-color: rgb(171, 145, 242); background-color: rgb(171, 145, 242, 0.7);">Arts & Storytelling</span>. 
                </p>
                <p>
                    I was curious about how my involvement in each of these categories has looked or changed over time. 
                
                    I started by entering all of my experiences from 2016 - 2025 into a spreadsheet, tagging them with themes, their level of time commitment, and duration. 
                    Then, I decided to visualize it. <i>Click on items in the chart below to explore.</i>
                </p>
            </div>

                <h3 class="chart-title">Experience Timeline</h3>
                <!-- <p class="subtitle">
                    <i>Click items to read more</i>.
                </p> -->
            

            <Timeline></Timeline>

            <div class="area-chart-intro">
                <p>At a glance, the colors in the Experience Timeline look relatively balanced. But has is always been this way?
                    <span class="emphasize-text">Have I maintained a balance or have I prioritized categories in different periods of my life?</span>
                </p>
            </div>
            <h3 class="chart-title">Evolution over time</h3>
            <StackedAreaChart></StackedAreaChart>
        </div>
</div>
</div>

<style>
    .page {
        /* display: flex;
        flex-direction: column; */
        padding: var(--page-padding);

        @media (width <= 700px) {
            padding: 0.5rem;
        }
    }

    .content {
        padding: 2rem;
        display: flex;
        flex-direction: column;
        /* justify-content: center; */
        align-items: center;
    }

    .intro {
        display: flex;
        flex-direction: row;
        max-width: 900px;
        margin-bottom: 6rem;

        @media (width <= 800px) {
            flex-direction: column;
        }

        .img {
            display: flex;
            align-items: center;
            justify-content: center;
            flex: 0 0 250px;
        }

        .headshot {
            width: 100%;           
            height: fit-content;

            @media (width <= 800px) {
                width: 200px;
            }
        }

        .text {
            padding: 3rem;
            flex: 1;
        }
    }

    .emphasize-text {
        font-weight: 600;
    } 

    .nav-options {
        display: flex;
        justify-content: center;
        max-width: 900px;

        /* @media (width <= 800px) {
            flex-direction: column;
        } */
    }

    .option-box {
        display: flex;
        flex: 1;
        justify-content: center;
        text-align: center;
        align-items: center;

        border: solid 1px;
        border-radius: 5px;
        height: 100px;
        margin: 1rem;
        margin: 0.5rem;
        padding: 0 2rem;

        text-decoration: none;
        color: var(--primary-text-color);
        background: none;
        font-weight: 600;
        font-size: 16px;
    
        
        @media (width <= 800px) {
            padding: 0 1rem;
        }
    }

    .option-box:hover {
        background-image: radial-gradient(circle at center, 
            rgb(183, 224, 146, 0.6),
            rgb(245, 176, 49, 0.6),
            rgb(171, 145, 242, 0.6)
            );
        cursor: pointer;
    }

    .resume-explorer {
        margin: 3rem;
        width: 100%;
        max-width: 900px;
    }

    .title {
        margin-bottom: 2rem;
        color: var(--tertiary-text-color);
        text-align: center;
    }

    .chart-title {
        display: flex;
        justify-content: center;
        color: var(--tertiary-text-color);
    }

    /* .subtitle {
        display: flex;
        justify-content: center;
        color: var(--tertiary-text-color);
    } */

    .intro-themes {
        border: solid;
        border-radius: 1rem; 
        margin: 0.5rem;
        font-weight: 600;
        text-decoration: none;
        text-align: center;
        padding: 0.1rem 0.5rem;
        white-space: nowrap;
    } 

    .timeline-intro {
        margin-bottom: 6rem;
        text-align: center;
        border: solid 1px;
        border-radius: 1rem;
        background: var(--secondary-color-light);

        .section-1 {
            line-height: 2;
        }
    } 

    .area-chart-intro {
        margin: 6rem 0;
        padding: 1rem;
        text-align: center;
        border: solid 1px;
        border-radius: 1rem;
        background: var(--secondary-color-light);
    }
       
</style>