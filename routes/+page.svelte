<script lang="ts">
    import { resolve } from "$app/paths";
	import Button from "$lib/Components/Button.svelte";
	import StackedAreaChart from "$lib/Components/StackedAreaChart.svelte";
    import Timeline from "$lib/Components/Timeline.svelte";
    import { handleNavigate } from "$lib/Helpers/helpers";

    let imgSrc = "/images/headshot.jpg";

</script>

<div class="page">
    <div class="content">
        <div class="intro">
            <div class="headshot-container">
                <img class="headshot" src="{resolve(imgSrc)}" alt="photo of mindy">
                <!-- <p>@ayezeem</p> -->
            </div>
            <div class="text">
                <p>
                    Hi, I’m Mindy. I tell vibrant, <span class="emphasize-text">human-centered, visual stories grounded in data</span> to make information engaging and accessible for all audiences, from everyday people to policymakers.  
                </p>

                <p>
                    As a 
                    <b class="tag" style="color: #F5B031;">data scientist</b> & 
                    <b class="tag" style="color: #F5B031;">web developer</b>, 
                    <b class="tag" style="color: #81CE3C;">educator</b>, and 
                    <b class="tag" style="color: #AB91F2;">dance artist</b>, 
                    I see <span class="emphasize-text">data storytelling and visualization</span> as a natural intersection of my work -- a place where my technical background and eye for visual communication meet and bring to life stories that
                        <span class="emphasize-text">inform and inspire change</span>. 
                </p>

                <h4>Jump to:</h4>
                <div class="nav-options">
                    <!-- <button class="option-box" onclick={() => handleClick("resume")}>Interactive Resume Explorer</button> -->
                    <a class="option-box" href="#resume-explorer">Interactive Resume Explorer</a>
                    <button class="option-box" onclick={() => handleNavigate("projects#top")}>Projects</button>
                    <!-- <div class="option-box">Projects</div>
                    <div class="option-box">Contact</div> -->
                </div>
            </div>
        </div>
    

        <div class="resume-explorer" id="resume-explorer">

            <h2 class="title">Interactive Resume Explorer</h2>
            <!-- <p class="subtitle"><i>a visual exploration of my career over the past decade</i></p> -->
            <div class="narrative" id="timeline">
                <p>
                    Over the past decade, I've worn many hats. From engineering to teaching, researching to performing, these experiences sometimes felt distinct or unrelated to each other.
                    But recently, I noticed some common threads. 
                    <span class="emphasize-text">Each experience was connected to one or more of these key themes:</span>
                </p>
                <p class="section-1">
                    <span class="intro-themes" style="border-color: rgb(245, 176, 49); background-color: rgb(245, 176, 49, 0.7);">data & technology</span>, 
                    <span class="intro-themes" style="border-color: rgb(183, 224, 146); background-color: rgb(183, 224, 146, 0.7); ">education</span>, and 
                    <span class="intro-themes" style="border-color: rgb(171, 145, 242); background-color: rgb(171, 145, 242, 0.7);">art & design</span>. 
                </p>
                <p>
                    I wanted to see what this looked like. I was curious... <span class="emphasize-text">how has my involvement in each of these categories looked over time?</span>
                    I started by entering all of my experiences from the past 10 years (2015 - 2025) into a spreadsheet, and tagged them with themes, their level of time commitment, and duration. 
                    Then, I visualized it. 
                    
                </p>
                <p><i>Click on items in the chart below to explore.</i></p>
            </div>

                <h3 class="chart-title">Experience Timeline</h3>
                <!-- <p class="subtitle">
                    <i>Click items to read more</i>.
                </p> -->
            

            <Timeline></Timeline>

            <div class="narrative" id="area-chart">
                <p>At a glance, the colors in the <i>Experience Timeline</i> look relatively balanced. But has is always been this way?
                    <span class="emphasize-text">Have I maintained a balance or have I prioritized categories in different periods of my life?</span>
                </p>
            </div>
            <h3 class="chart-title">Evolution over time</h3>
            <StackedAreaChart></StackedAreaChart>

            <div class="narrative" id="conclusion">
                <p>
                    At first, I was surprised to see how drastically tech and education pushed art out of my life in that middle period. But I remember how it felt. 
                    Those years were challenging, and the disappearance of art from my day-to-day <span class="emphasize-text">made me realize how important maintaining balance is. </span>
                    Each of these themes is an important part of who I am and what I can offer.
                </p>
                <p>
                Still, I don't regret any part of my journey. During this time I developed so many technical and leadership skills that now empower me to create the things that matter to me. 
                As I reshape my career as a freelancer, I'm finding that my strongest work is emerging when I weave together my skills and passions in ways that feel authentic, exciting, and balanced again.
                </p>
                <p>
                    <span class="emphasize-text"><i>Let's work together!</i></span>
                </p>
            </div>

        </div>

        <div class="next-nav">
            <h4>Go to:</h4>
                <div class="nav-options">
                    <a class="option-box" href="#header">Back to top</a>
                    <button class="option-box" onclick={() => handleNavigate("projects#top")}>Projects</button>
                    <!-- <div class="option-box">Projects</div>
                    <div class="option-box">Contact</div> -->
                </div>
        </div>


        <div class="about-website">
            <h3 class="title" id="viz-title">About This Website</h3>

            <p>This website was designed and built from scratch by me. Here's a window into my process:</p>

                <p><b>Data</b></p>
                <p>I converted my resume into a structured <a href="https://docs.google.com/spreadsheets/d/1Bpo8kMEhp0QY8Nh1I1b7FzerjE953_5d_1k1QWQ0zvY/edit?usp=sharing" target="_blank" rel="noopener noreferrer">data set</a> in Google Sheets, 
                    labeling each experience with the theme(s) it falls into and its time commitment level (full-time, part-time, or intermittent). The themes are weighted, so for example, my experience working as a software engineer in the education industry was 2 parts tech and 1 part education, because that job focused more on my technical skills than on education. I used R to process and analyze the data.</p>

                <p><b>Design</b></p>
                <p>I start every project by sketching ideas in a notebook, and using online design tools (like Figma), to create wireframes before actually coding. Much of what I know about design comes from working closely with UI/UX designers in the tech industry and a UI/UX course I took in college. But mostly, my ideas come from reading and getting inspired by all of the data viz out on the web! My biggest data viz inspirations are Shirley Wu, Erin Davis, and The Pudding. </p>

                <p><b>Development</b></p>
                <p>I built this website using Svelte. Data visualizations were brought to life with d3.js and R.

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

        .headshot-container {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            flex: 0 0 250px;

            p {
                font-size: 14px;
            }
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

            @media (width <= 480px) {
                padding: 1rem;
            }
        }
    }

    .emphasize-text {
        font-weight: 600;
    } 

    .nav-options {
        display: flex;
        justify-content: center;
        max-width: 900px;
        /* width: 80%; */

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

        border: solid 2px;
        border-radius: 5px;
        margin: 0.5rem;
        padding: 1rem;

        text-decoration: none;
        /* color: var(--primary-text-color); */
        background: none; 
        border-color: var(--secondary-color);
        color: var(--secondary-color);

        font-weight: 700;
        font-size: 16px;
    
        
        /* @media (width <= 800px) {
            padding: 0 1rem;
        } */
    }

    .option-box:hover {
        /* background-image: radial-gradient(circle at center, 
            rgb(183, 224, 146, 0.6),
            rgb(245, 176, 49, 0.6),
            rgb(171, 145, 242, 0.6)
            ); */
        background-color: var(--primary-contrast);
        color: var(--primary);
        border-color: var(--primary-contrast);
        cursor: pointer;
    }

    .resume-explorer {
        margin: 3rem;
        width: 100%;
        max-width: 900px;
    }

    .title {
        margin-bottom: 1rem;
        color: var(--tertiary-text-color);
        text-align: center;
    }

    .subtitle {
        text-align: center;
        margin-bottom: 2rem;
        font-weight: 500;
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

    .narrative {
        /* text-align: center; */
        border: solid 1px;
        border-radius: 1rem;
        background: var(--secondary-color-light);
        padding: 1rem 3rem;
        max-width: 700px;
        justify-self: center;

        @media (width <= 480px) {
            padding: 1rem 2rem;
        }
    }

    #timeline {
        margin-bottom: 6rem;
    
        .section-1 {
            line-height: 2;
        }
    } 

    #area-chart {
        margin: 6rem 0;
    }

    .next-nav {
        margin-bottom: 3rem;

        .option-box {
            width: 200px;
            min-height: 10px;
            
            @media (width <= 800px) {
                width: 125px;
            }
        }
    }

    .about-website {
        max-width: 900px;
        border: solid 1px;
        border-radius: 1rem;
        padding: 2rem;
    }
       
</style>