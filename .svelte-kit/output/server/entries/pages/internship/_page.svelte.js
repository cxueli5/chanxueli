import { c as create_ssr_component, v as validate_component, b as add_attribute } from "../../../chunks/ssr.js";
import { b as base } from "../../../chunks/paths.js";
import { S as Step, P as PDFViewer } from "../../../chunks/Step.js";
import { I as ImageViewer } from "../../../chunks/ImageViewer.js";
const Internship_svelte_svelte_type_style_lang = "";
const css = {
  code: '.button-container.svelte-11hi266.svelte-11hi266{display:flex;flex-direction:column;align-items:center;gap:10px}@media(min-width: 768px){.button-container.svelte-11hi266.svelte-11hi266{flex-direction:row;justify-content:center}}@media screen and (max-width: 768px){}.circle-bullet-list.svelte-11hi266.svelte-11hi266{list-style-type:none;padding-left:10px;text-align:left}.circle-bullet-list.svelte-11hi266 li.svelte-11hi266::before{content:"\\2022";color:white;font-weight:bold;display:inline-block;width:1em;margin-left:-1em}#internContent.svelte-11hi266.svelte-11hi266{max-width:600px;margin:0 auto}@media screen and (max-width: 768px){.circle-bullet-list.svelte-11hi266.svelte-11hi266{padding-left:0px}#internContent.svelte-11hi266.svelte-11hi266{max-width:100%;padding:0 20px}}li.svelte-11hi266.svelte-11hi266{padding-bottom:10px}',
  map: null
};
const Internship = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let steps = [
    {
      name: "SPH Media",
      image: `${base}/icons/sph-new.png`
    },
    {
      name: "E-Speed Stabilizing Network Technology Pte. Ltd.",
      image: `${base}/icons/espeed_logo.png`
    },
    {
      name: "Born in Colour",
      image: `${base}/icons/bic.png`
    },
    {
      name: "Fullerton Health",
      image: `${base}/icons/fullerton.jpeg`
    },
    {
      name: "Royal T Group Pte. Ltd.",
      image: `${base}/icons/liho.jpeg`
    },
    {
      name: "NUS",
      image: `${base}/icons/nus.png`
    }
  ];
  $$result.css.add(css);
  return `${$$result.head += `<!-- HEAD_svelte-gmvvf3_START -->${$$result.title = `<title>Internship</title>`, ""}<!-- HEAD_svelte-gmvvf3_END -->`, ""} <main class="flex flex-col flex-1 p-4"> <section class="py-20 pt-10 lg:pt-16 lg:py-32 flex flex-col gap-16 sm:gap-20 md:gap-24 relative" id="projects"> <div class="flex flex-col gap-2 text-center relative before:absolute before:top-0 before:left-0 before:w-2/3 before:h-1.5 before:bg-violet-700 after:absolute after:bottom-0 after:right-0 after:w-2/3 after:h-1.5 after:bg-violet-700 py-4" data-svelte-h="svelte-dl3d54"><h6 class="text-large sm:text-xl md:text-2xl">Full-time</h6> <h3 class="font-semibold text-3xl sm:text-4xl md:text-5xl"><span class="poppins text-violet-400">Working</span> Experience</h3></div> <div class="grid grid-cols-1 lg:grid-cols-1 gap-20 lg:gap-25">${validate_component(Step, "Step").$$render($$result, { step: steps[5] }, {}, {
    default: () => {
      return `<p data-svelte-h="svelte-tsobfr"><b style="color: var(--xpeach);">Executive (Contract)</b>
          |
          <b style="color: var(--xblue);">Oct 2024 - Apr 2025 (6 months)</b></p> <div id="internContent" class="svelte-11hi266" data-svelte-h="svelte-1lst94r"><ul class="circle-bullet-list svelte-11hi266"><li class="svelte-11hi266">Created and managed customer invoices using Microsoft Excel,
              collaborating with the finance team to address SAP-related issues,
              and received commendations for efficient ticket resolution and
              troubleshooting.</li> <li class="svelte-11hi266">Conducted data cleaning to maintain accurate records and ensure
              smooth invoice generation.</li> <li class="svelte-11hi266">Supported faculty with course scheduling and managed appointment
              forms, enhancing overall administrative efficiency.</li> <li class="svelte-11hi266">Updated the NUS CLSLANG website through WordPress, ensuring
              current and relevant information for stakeholders.</li> <li class="svelte-11hi266">Facilitated undergraduate programs for Bahasa Indonesia, keeping
              students informed about placement test schedules and course
              mapping.</li> <li class="svelte-11hi266">Addressed customer inquiries promptly via email and Zoom, ensuring
              a high standard of customer service.</li> <li class="svelte-11hi266">Coordinated with third-party delivery teams to manage course
              material logistics, updating customers on delivery status.</li></ul></div>`;
    }
  })}</div>  <div class="flex flex-col gap-2 text-center relative before:absolute before:top-0 before:left-0 before:w-2/3 before:h-1.5 before:bg-violet-700 after:absolute after:bottom-0 after:right-0 after:w-2/3 after:h-1.5 after:bg-violet-700 py-4" data-svelte-h="svelte-1oi87mj"><h6 class="text-large sm:text-xl md:text-2xl">Polytechnic / University</h6> <h3 class="font-semibold text-3xl sm:text-4xl md:text-5xl"><span class="poppins text-violet-400">Internship</span> Experience</h3></div> <div class="grid grid-cols-1 lg:grid-cols-1 gap-20 lg:gap-25">${validate_component(Step, "Step").$$render($$result, { step: steps[0] }, {}, {
    default: () => {
      return `<p data-svelte-h="svelte-1fnm1lm"><b style="color: var(--xpeach);">Data Visualisation Developer Intern (The Straits Times Digigraphics)</b>
          |
          <b style="color: var(--xblue);">Aug 2023 - Apr 2024 (8 months)</b></p> <div id="internContent" class="svelte-11hi266"><ul class="circle-bullet-list svelte-11hi266" data-svelte-h="svelte-1w9tc4q"><li class="svelte-11hi266">Developed interactive articles using Svelte</li> <li class="svelte-11hi266">Create collaterals using Adobe Illustrator and Adobe Photoshop</li> <li class="svelte-11hi266">Collaborative work with local and international developers and
              designers</li> <li class="svelte-11hi266">Collaborate with designers for UI design, pre-planning stage such
              as: research, ideation and content planning for mockups</li> <li class="svelte-11hi266">Practice good use of dynamic programming skills for easier
              maintenance of sites in the long-run</li> <li class="svelte-11hi266">Publish and maintain weekly discover articles</li> <li class="svelte-11hi266">Led and taught new interns on general workflow and code workflow,
              curated tutorials based on non-developers feedback so that they
              can understand technical concepts such as how to use GitHub etc.</li></ul>  <br> ${validate_component(PDFViewer, "PDFViewer").$$render(
        $$result,
        {
          filePath: `${base}/testimonials/xue-li-testimonial.pdf#toolbar=0`,
          buttonText: "View Testimonial 1"
        },
        {},
        {}
      )} ${validate_component(PDFViewer, "PDFViewer").$$render(
        $$result,
        {
          filePath: `${base}/testimonials/cxl-reference-letter.pdf#toolbar=0`,
          buttonText: "View Testimonial 2"
        },
        {},
        {}
      )} <br><br> <p data-svelte-h="svelte-q994hd"><b style="color:var(--xpurple);">Skills:</b> Svelte · Adobe Illustrator
            · Adobe XD · Adobe Photoshop · GitHub · UI Design · NodeJS · JavaScript
            · HTML5 · CSS / SCSS · JSON · Figma · Adobe XD · Canva · Microsoft Excel
            · ArchieML (Google Doc Longform) · Interpersonal Skills · Team Collaboration
            · Data Visualization · Interactive Storytelling · Visual Storytelling</p></div>  <div class="grid grid-cols-1 md:grid-cols-3 gap-4" data-svelte-h="svelte-gslpd7"><div class="grid-item"><img${add_attribute("src", `${base}/intern/pmlee.jpg`, 0)} alt="PM Lee 20 Years in Office"><br> <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" style="width: fit-content; margin-right: auto; margin-left: auto;"><a href="https://www.straitstimes.com/multimedia/graphics/2024/04/lee-hsien-loong-20-years-in-office/index.html" target="_blank" rel="noopener noreferrer">PM Lee Project Link</a></button>  <br><br> <ul class="circle-bullet-list svelte-11hi266" style="width: auto; margin-right:auto; margin-left:auto;"><li class="svelte-11hi266">Kickstarted project by studying an old project template to reuse
                for this project</li> <li class="svelte-11hi266">Modified old project template code and file structure by
                removing redundant files for easier maintainence</li> <li class="svelte-11hi266">Aliased with local and international designers to deliver
                template based on the Figma design given to me</li> <li class="svelte-11hi266">Participated in initial development stages to prepare project
                template for journalists to input the story at a later stage</li></ul></div> <div class="grid-item"><img${add_attribute("src", `${base}/intern/taylor2.jpg`, 0)} alt="Taylor Swift SG 2024"><br> <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" style="width: fit-content; margin-right: auto; margin-left: auto;"><a href="https://www.straitstimes.com/multimedia/graphics/2024/03/taylor-swift-eras-quiz/index.html" target="_blank" rel="noopener noreferrer">Taylor Swift Quiz 2024</a></button> <br><br> <ul class="circle-bullet-list svelte-11hi266" style="width: auto; margin-right:auto; margin-left:auto;"><li class="svelte-11hi266">Fully involved and participated in all stages of projects</li> <li class="svelte-11hi266"><b>Pre-planning:</b> Research on Taylor Swift and interactive games
                with friendship bracelets concept, actively contributed ideas to
                enhance UI and UX experience for the game (in all stages of project)</li> <li class="svelte-11hi266">Developed all pages including styles, custom components such as
                heart progress bar, reveal answers etc.</li> <li class="svelte-11hi266">Assisted development and testing of anagram game logic and
                results bar UI</li> <li class="svelte-11hi266">Actively participated in all team meetings related to this
                project, and contributed my opinions and thoughts on issues
                raised</li> <li class="svelte-11hi266">Represent team to update project progress during weekly meetings
                when team lead is not available</li> <li class="svelte-11hi266">Published project and did the necessary post publish
                communications with other department</li></ul></div> <div class="grid-item"><img${add_attribute("src", `${base}/intern/arts-analysis.jpg`, 0)} alt="Arts Analysis"><br> <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" style="width: fit-content; margin-right: auto; margin-left: auto;"><a href="https://www.straitstimes.com/multimedia/graphics/2024/01/discover-art-georgette-chen/index.html" target="_blank" rel="noopener noreferrer">Discover SG Art Link</a></button> <br><br> <ul class="circle-bullet-list svelte-11hi266" style="width: auto; margin-right:auto; margin-left:auto;"><li class="svelte-11hi266">Developed scrolly template for designers / journalists to
                customize and adjust zoom levels</li> <li class="svelte-11hi266">Communicated with designers and understand journalists workflow
                from full-timers, to ensure that longform is designed for easy
                use especially for non-tech savvy users</li> <li class="svelte-11hi266">Actively communicated with international and local developers to
                understand how longform and custom svelte components work
                together as part of self-learning process</li> <li class="svelte-11hi266">This project helped me to work more effectively and efficiently
                for future projects, and taught new interns how the code
                workflow works</li></ul> </div> <div class="grid-item"><img${add_attribute("src", `${base}/intern/food.jpg`, 0)} alt="Food in your hood"><br> <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" style="width: fit-content; margin-right: auto; margin-left: auto;"> <a href="https://www.straitstimes.com/multimedia/graphics/2024/11/welcome-to-st-food/shops.html" target="_blank" rel="noopener noreferrer">Food in your Hood Link</a></button> <br><br> <ul class="circle-bullet-list svelte-11hi266" style="width: auto; margin-right:auto; margin-left:auto;"><li class="svelte-11hi266">Assisted development works (from end Aug 2023, took over as the
                development intern working on project in early Nov 2023) which
                expediated project progress</li> <li class="svelte-11hi266">Styling (overall website)</li> <li class="svelte-11hi266">Create custom components (Image Slider, Food label, Custom
                buttons, Custom props to hide show content etc.)</li> <li class="svelte-11hi266">Spreadsheet database maintainence</li> <li class="svelte-11hi266">Attended meetings with food project team and food journalists on
                UI changes and content workflow changes</li></ul></div> <div class="grid-item"><img${add_attribute("src", `${base}/intern/sgincolours.jpg`, 0)} alt="Sg in colours explainer"><br> <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" style="width: fit-content; margin-right: auto; margin-left: auto;"><a href="https://www.straitstimes.com/multimedia/graphics/2024/03/singapore-in-colour-explainer/index.html" target="_blank" rel="noopener noreferrer">SG in Colours Explainer Link</a></button> <br><br> <ul class="circle-bullet-list svelte-11hi266" style="width: auto; margin-right:auto; margin-left:auto;"><li class="svelte-11hi266">Developed article to showcase the behind the scenes and
                technologies used in an old project (Singapore in Colours)</li> <li class="svelte-11hi266">Arranged meetings with members who worked on Singapore in
                Colours, and assisted in doing this write up to explain the
                behind the scenes of Singapore in Colours</li> <li class="svelte-11hi266">Actively communicated with supervisor to ensure that article is
                ready for publication</li></ul> </div> <div class="grid-item"><img${add_attribute("src", `${base}/intern/superlative.jpg`, 0)} alt="Superlative Cartoons"><br> <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" style="width: fit-content; margin-right: auto; margin-left: auto;"><a href="https://www.straitstimes.com/multimedia/graphics/2023/12/superlative-singapore/index.html" target="_blank" rel="noopener noreferrer">Superlative Cartoons Link</a></button> <br><br> <ul class="circle-bullet-list svelte-11hi266" style="width: auto; margin-right:auto; margin-left:auto;"><li class="svelte-11hi266">Development Works (Explored old template on my own and adjusted
                current template to get desired context card as requested by
                designers)</li></ul> </div> <div class="grid-item"><img${add_attribute("src", `${base}/intern/arts-pick.jpg`, 0)} alt="Arts Calendar Events"><br> <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" style="width: fit-content; margin-right: auto; margin-left: auto;"><a href="https://www.straitstimes.com/multimedia/graphics/2023/10/arts-calendar-events-singapore/index.html" target="_blank" rel="noopener noreferrer">Arts Calendar Events Link</a></button> <br><br> <p>Assisted with styling, UI enhancement, update of events</p></div> <div class="grid-item"><img${add_attribute("src", `${base}/intern/cartoons.jpg`, 0)} alt="Cartoons"><br> <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" style="width: fit-content; margin-right: auto; margin-left: auto;"><a href="https://www.straitstimes.com/multimedia/graphics/2023/12/cartoons-of-the-week-december-26/index.html" target="_blank" rel="noopener noreferrer">Cartoons Link</a></button> <br><br> <p><b style="color: var(--xpink);">Weekly Discover Task</b></p> <br> <ul class="circle-bullet-list svelte-11hi266" style="width: auto; margin-right:auto; margin-left:auto;"><li class="svelte-11hi266">Designed newsletter thumbnail using Adobe Illustrator and cover
                image using Adobe Photoshop</li> <li class="svelte-11hi266">Communicate with designers and make the necessary changes to the
                newsletter image and cover image</li> <li class="svelte-11hi266">Assisted designers and artists with content input and deployment
                to publish on The Straits Times</li></ul> </div> <div class="grid-item"><img${add_attribute("src", `${base}/intern/wip.jpg`, 0)} alt="Week in Pictures"><br> <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" style="width: fit-content; margin-right: auto; margin-left: auto;"><a href="https://www.straitstimes.com/multimedia/graphics/2023/09/the-week-in-pictures-september-25/index.html" target="_blank" rel="noopener noreferrer">Week in Pictures Link</a></button> <br><br> <p><b style="color: var(--xpink);">Weekly Discover Task</b></p> <br> <ul class="circle-bullet-list svelte-11hi266" style="width: auto; margin-right:auto; margin-left:auto;"><li class="svelte-11hi266">Designed newsletter blurb using Adobe Illustrator</li> <li class="svelte-11hi266">Assist journalists to update content and deployment to publish
                on Straits Times</li></ul> </div> <div class="grid-item"><img${add_attribute("src", `${base}/intern/hif2.jpg`, 0)} alt="Tides of change: One last look at Senoko Fishery Port"><br> <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" style="width: fit-content; margin-right: auto; margin-left: auto;"><a href="https://www.straitstimes.com/multimedia/graphics/2024/03/senoko-fishery-port-singapore/index.html" target="_blank" rel="noopener noreferrer">Home in Focus Link</a></button> <br><br> <ul class="circle-bullet-list svelte-11hi266" style="width: auto; margin-right:auto; margin-left:auto;"><li class="svelte-11hi266">Designed newsletter thumbnail using Adobe Illustrator</li> <li class="svelte-11hi266">Aliased with photojournalists to translate their story to online
                article, and prepare story for publication to The Straits Times
                site</li></ul> </div> <div class="grid-item"><img${add_attribute("src", `${base}/intern/hif-jtc.jpg`, 0)} alt="Building bridges: Improving connectivity in Jurong West with this new overhead bridge"><br> <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" style="width: fit-content; margin-right: auto; margin-left: auto;"><a href="https://www.straitstimes.com/multimedia/graphics/2024/04/overhead-bridge-jurong-west-singapore/index.html" target="_blank" rel="noopener noreferrer">Home in Focus Link</a></button> <br><br> <ul class="circle-bullet-list svelte-11hi266" style="width: auto; margin-right:auto; margin-left:auto;"><li class="svelte-11hi266">Designed newsletter thumbnail using Adobe Illustrator</li> <li class="svelte-11hi266">Aliased with photojournalists to translate their story to online
                article, and prepare story for publication to The Straits Times
                site</li></ul> </div></div>`;
    }
  })} ${validate_component(Step, "Step").$$render($$result, { step: steps[1] }, {}, {
    default: () => {
      return `<p data-svelte-h="svelte-1ckmhkh"><b style="color: var(--xpeach);">Software Developer Intern</b>
          |
          <b style="color: var(--xblue);">May 2022 - Aug 2022 (4 months)</b></p> <div id="internContent" class="svelte-11hi266"><ul class="circle-bullet-list svelte-11hi266" data-svelte-h="svelte-1u76s3u"><li class="svelte-11hi266">C# asp.net mvc project (self-learn), includes Microsoft SQL Server
              Integration</li> <li class="svelte-11hi266">Project I was working on: <a href="https://studytrustintl.com/" target="_blank">https://studytrustintl.com/</a></li></ul> <br> ${validate_component(PDFViewer, "PDFViewer").$$render(
        $$result,
        {
          filePath: `${base}/testimonials/E-Speed.pdf#toolbar=0`,
          buttonText: "View Testimonial"
        },
        {},
        {}
      )} <br> <br> <p data-svelte-h="svelte-1ojlw2v"><b style="color:var(--xpurple);">Skills:</b> C# · ASP.NET MVC · Microsoft
            SQL Server</p></div>  <div class="grid grid-cols-1 md:grid-cols-1 gap-4" data-svelte-h="svelte-17ntjao"><div class="grid-item"><img${add_attribute("src", `${base}/intern/studytrust.jpeg`, 0)} alt="Study Trust" style="margin-right: auto; margin-left:auto;"><br> <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" style="width: fit-content; margin-right: auto; margin-left: auto;"><a href="https://studytrustintl.com/" target="_blank" rel="noopener noreferrer">Study Trust International Link</a></button> <br><br> <p>Assist in redevelopment of website in C# Asp.Net for easier
              maintenance.</p></div></div>`;
    }
  })} ${validate_component(Step, "Step").$$render($$result, { step: steps[2] }, {}, {
    default: () => {
      return `<p data-svelte-h="svelte-1tj3s2h"><b style="color: var(--xpeach);">Internet Marketing Intern + Part Time</b>
          |
          <b style="color: var(--xblue);">March 2020 - Sep 2020 (8 months)</b></p> <div id="internContent" class="svelte-11hi266"><ul class="circle-bullet-list svelte-11hi266" data-svelte-h="svelte-1n5ifo6"><li class="svelte-11hi266">Managed and maintained company&#39;s blog page</li> <li class="svelte-11hi266">Redesign company&#39;s website homepage</li> <li class="svelte-11hi266">Revamp store locator page</li> <li class="svelte-11hi266">Designed promotional posters in-store and online (e.g. featured on
              TV products)</li> <li class="svelte-11hi266">Did product photoshoot and generate new ideas for bundle sales</li> <li class="svelte-11hi266">Assisted online sales via chatbot and in-store sales</li> <li class="svelte-11hi266">Used company&#39;s third-party software to send electronic mail to
              store members (require HTML, CSS and PS knowledge)</li></ul> <br> <b data-svelte-h="svelte-2phhq4">Part Time:</b> <ul class="circle-bullet-list svelte-11hi266" data-svelte-h="svelte-nabafw"><li class="svelte-11hi266">Managed company&#39;s blog page</li> <li class="svelte-11hi266">Assist online and in-store sales</li></ul> <br> <div class="button-container svelte-11hi266">${validate_component(ImageViewer, "ImageViewer").$$render(
        $$result,
        {
          imagePath: `${base}/testimonials/Bic-Testimonial.jpeg`,
          buttonText: "View Testimonial"
        },
        {},
        {}
      )} ${validate_component(PDFViewer, "PDFViewer").$$render(
        $$result,
        {
          filePath: `${base}/testimonials/sp_testimonial.pdf#toolbar=0`,
          buttonText: "View SP Lecturer Testimonial"
        },
        {},
        {}
      )}</div> <br> <br> <p data-svelte-h="svelte-1adrtag"><b style="color:var(--xpurple);">Skills:</b> Cascading Style Sheets
            (CSS) · HTML5 · Adobe Photoshop · JavaScript</p></div>  <div class="grid grid-cols-1 md:grid-cols-3 gap-4" data-svelte-h="svelte-ynwzrw"><div class="grid-item"><img${add_attribute("src", `${base}/icons/bic.png`, 0)} alt="Born in Colour" style="margin-right: auto; margin-left:auto;"><br> <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" style="width: fit-content; margin-right: auto; margin-left: auto;"><a href="https://www.bornincolour.com/" target="_blank" rel="noopener noreferrer">Home page Link</a></button> <br><br> <p>Revamp homepage</p></div> <div class="grid-item"><img${add_attribute("src", `${base}/intern/bic2.jpeg`, 0)} alt="Born in Colour" style="margin-right: auto; margin-left:auto;"><br> <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" style="width: fit-content; margin-right: auto; margin-left: auto;"><a href="https://www.bornincolour.com/blog/" target="_blank" rel="noopener noreferrer">Tips &amp; Inspiration Blog Link</a></button> <br><br> <p><b>Highlight blogs:</b></p> <br> <ul class="circle-bullet-list svelte-11hi266"><li class="svelte-11hi266">Tired of working from home during the circuit breaker period in
                Singapore? Make your workspace more fun with the Macaron Family!</li> <li class="svelte-11hi266">All the korean blogs</li> <li class="svelte-11hi266">Designed new blog thumbnails and redesigned old blog thumbnails</li> <li class="svelte-11hi266">Propose using tags to categorise articles, link to collections
                and leverage korean media feature to attract younger audience.
                Designed offline posters to put in-store.</li> <li class="svelte-11hi266">SEO integration to improve Google search rankings</li> <li class="svelte-11hi266">Blog site maintanence and update</li></ul></div> <div class="grid-item"><img${add_attribute("src", `${base}/intern/bic3.jpeg`, 0)} alt="Born in Colour" style="margin-right: auto; margin-left:auto;"><br> <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" style="width: fit-content; margin-right: auto; margin-left: auto;"><a href="https://www.bornincolour.com/store-locator" target="_blank" rel="noopener noreferrer">Store Locator Link</a></button> <br><br> <p>Redesigned store locator page</p></div></div>`;
    }
  })}</div> <div class="flex flex-col gap-2 text-center relative before:absolute before:top-0 before:left-0 before:w-2/3 before:h-1.5 before:bg-violet-700 after:absolute after:bottom-0 after:right-0 after:w-2/3 after:h-1.5 after:bg-violet-700 py-4" data-svelte-h="svelte-kecngy"><h3 class="font-semibold text-3xl sm:text-4xl md:text-5xl"><span class="poppins text-violet-400">Part Time</span> Jobs</h3></div> <div class="grid grid-cols-1 lg:grid-cols-1 gap-20 lg:gap-25">${validate_component(Step, "Step").$$render($$result, { step: steps[3] }, {}, {
    default: () => {
      return `<p data-svelte-h="svelte-gz3o99"><b style="color: var(--xpeach);">Part Time Vaccination Administration</b>
          |
          <b style="color: var(--xblue);">March 2021 - Dec 2021 (10 months)</b></p> <div id="internContent" class="svelte-11hi266" data-svelte-h="svelte-5gcxyd"><ul class="circle-bullet-list svelte-11hi266"><li class="svelte-11hi266">Administered registration for patients coming in for COVID-19
              vaccination</li> <li class="svelte-11hi266">Usher patients to their allocated vaccination booths</li></ul> <br> <p><b style="color:var(--xpurple);">Skills:</b> Data Entry · Administrative
            Assistance · Customer Service</p></div>`;
    }
  })} ${validate_component(Step, "Step").$$render($$result, { step: steps[4] }, {}, {
    default: () => {
      return `<p data-svelte-h="svelte-1rzs2zm"><b style="color: var(--xpeach);">Part Time Tearista @ LiHo</b>
          |
          <b style="color: var(--xblue);">Nov 2017 - Nov 2019 (2 years)</b></p> <div id="internContent" class="svelte-11hi266" data-svelte-h="svelte-3c4506"><b>Responsibilities:</b> <ul class="circle-bullet-list svelte-11hi266"><li class="svelte-11hi266">Cashier</li> <li class="svelte-11hi266">Handle customers enquiries</li> <li class="svelte-11hi266">Maintain store&#39;s cleanliness</li> <li class="svelte-11hi266">Ensure that stocks are enough to last for the day</li> <li class="svelte-11hi266">Tally and report the sales of the day</li></ul></div>`;
    }
  })}</div></section> </main>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Internship, "Internship").$$render($$result, {}, {}, {})}`;
});
export {
  Page as default
};
