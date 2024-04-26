import { c as create_ssr_component, v as validate_component, b as add_attribute } from "../../../chunks/ssr.js";
import { S as Step, P as PDFViewer } from "../../../chunks/Step.js";
import { b as base } from "../../../chunks/paths.js";
import { I as ImageViewer } from "../../../chunks/ImageViewer.js";
const SchoolProjects_svelte_svelte_type_style_lang = "";
const css = {
  code: '.button-container.svelte-1b9dzyo.svelte-1b9dzyo{display:flex;flex-direction:column;align-items:center}.button.svelte-1b9dzyo.svelte-1b9dzyo{margin-bottom:10px;background-color:#4285f4;color:white;font-weight:bold;padding:10px 20px;border:none;border-radius:5px}@media(min-width: 768px){.button-container.svelte-1b9dzyo.svelte-1b9dzyo{flex-direction:row;justify-content:center}.button.svelte-1b9dzyo.svelte-1b9dzyo{margin-bottom:0;margin-right:10px}}.project-thumbnail.svelte-1b9dzyo.svelte-1b9dzyo{display:flex;align-items:center;justify-content:center;margin-bottom:20px;width:calc(70%);margin-right:auto;margin-left:auto;max-width:800px;padding:20px;border-radius:10px;box-shadow:0 4px 6px rgba(0, 0, 0, 0.1)}.project-thumbnail.svelte-1b9dzyo img.svelte-1b9dzyo{width:200px;margin-right:40px}@media screen and (max-width: 768px){.project-thumbnail.svelte-1b9dzyo.svelte-1b9dzyo{flex-direction:column;align-items:center;width:calc(100% - 40px)}.project-thumbnail.svelte-1b9dzyo img.svelte-1b9dzyo{margin-right:0;margin-bottom:10px}}#feature-head.svelte-1b9dzyo.svelte-1b9dzyo{text-align:left;padding-left:50px;margin-bottom:5px}.circle-bullet-list.svelte-1b9dzyo.svelte-1b9dzyo{list-style-type:none;padding-left:50px;text-align:left}.circle-bullet-list.svelte-1b9dzyo li.svelte-1b9dzyo::before{content:"\\2022";color:white;font-weight:bold;display:inline-block;width:1em;margin-left:-1em}@media screen and (max-width: 768px){#feature-head.svelte-1b9dzyo.svelte-1b9dzyo{padding-left:0px}.circle-bullet-list.svelte-1b9dzyo.svelte-1b9dzyo{padding-left:0px}}.grid-item.svelte-1b9dzyo.svelte-1b9dzyo{width:100%;position:relative;display:flex;flex-direction:column;justify-content:center;align-items:center;overflow:hidden;border-radius:8px}.grid-item.svelte-1b9dzyo img.svelte-1b9dzyo{width:100%;height:auto;display:block;border-radius:8px}@media screen and (max-width: 768px){.mobile-responsive-iframe.svelte-1b9dzyo.svelte-1b9dzyo{width:100%;height:0;position:relative;padding-bottom:75%}.mobile-responsive-iframe.svelte-1b9dzyo iframe.svelte-1b9dzyo{position:absolute;top:0;left:0;width:100%;height:100%}}',
  map: null
};
const SchoolProjects = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let steps = [
    {
      name: "TikTok Youth Camp 2022 (Hangman Project, Frontend)",
      icon: "fa-solid fa-gamepad"
    },
    {
      name: "Portfolio Website",
      icon: "fa-solid fa-plane"
    },
    {
      name: "OIP Design Thinking Journal (📍UoG, Glasgow)",
      icon: "fa-solid fa-plane"
    },
    {
      name: "OIP Virtual Exhibition, Alexander Thomsons (📍UoG, Glasgow)",
      icon: "fa-solid fa-university"
    },
    {
      name: "Tan Tock Seng Endoscopy Tracker",
      icon: "fa-solid fa-stethoscope"
    },
    {
      name: "UOB Final Year Project",
      icon: "fa-solid fa-university"
    },
    {
      name: "SP Lex Program",
      icon: "fa-solid fa-plane"
    },
    {
      name: "SP Infographics (Modules)",
      icon: "fa-solid fa-graduation-cap"
    },
    {
      name: "SP Digital Marketing (Module)",
      icon: "fa-solid fa-graduation-cap"
    },
    {
      name: "WorthEats",
      icon: "fa-solid fa-cutlery"
    }
  ];
  $$result.css.add(css);
  return `${$$result.head += `<!-- HEAD_svelte-1en3a0b_START -->${$$result.title = `<title>Projects</title>`, ""}<!-- HEAD_svelte-1en3a0b_END -->`, ""} <main class="flex flex-col flex-1 p-4"> <section class="py-20 pt-10 lg:pt-16 lg:py-32 flex flex-col gap-16 sm:gap-20 md:gap-24 relative" id="projects"> <div class="flex flex-col gap-2 text-center relative before:absolute before:top-0 before:left-0 before:w-2/3 before:h-1.5 before:bg-violet-700 after:absolute after:bottom-0 after:right-0 after:w-2/3 after:h-1.5 after:bg-violet-700 py-4" data-svelte-h="svelte-1xiutnn"><h6 class="text-large sm:text-xl md:text-2xl">By Me</h6> <h3 class="font-semibold text-3xl sm:text-4xl md:text-5xl"><span class="poppins text-violet-400">Personal</span> Projects</h3></div> <div class="grid grid-cols-1 lg:grid-cols-1 gap-20 lg:gap-25">${validate_component(Step, "Step").$$render($$result, { step: steps[0] }, {}, {
    default: () => {
      return `<p data-svelte-h="svelte-5foxnu">Took part in this bootcamp to enhance my frontend development skills.
          My group achieved <b style="color: var(--xpink);">2nd best user experience</b>.</p>   <div class="mobile-responsive-iframe svelte-1b9dzyo" data-svelte-h="svelte-wyrjb6"><iframe width="560" height="315" src="https://www.youtube.com/embed/FkEoiOE0eqQ?si=dfsev3Le7rOfpWDA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen style="margin-right:auto; margin-left:auto;" class="svelte-1b9dzyo"></iframe></div> <div class="button-container svelte-1b9dzyo">${validate_component(ImageViewer, "ImageViewer").$$render(
        $$result,
        {
          imagePath: `${base}/testimonials/tiktok_2ndbest.jpeg`,
          buttonText: "2nd Best User Experience"
        },
        {},
        {}
      )}</div> <p data-svelte-h="svelte-1bu26eh"><b style="color: var(--xpeach);">My role in the team</b> (highlight):
          <br>
          Developed telebot game for the game web application for the first time
          using node.js, used GitHub for collaboration and Heroku for deployment.
          Video by me.</p> <p data-svelte-h="svelte-1tni94f"><b style="color: var(--xyellow);">New skills I learnt</b>: <br>
          Web animation, React, Andriod Development (basic)</p> <p></p> <p data-svelte-h="svelte-1uj9txt"><b style="color:var(--xpurple);">Skills:</b> Node.js · JSON · Heroku ·
          Python (Programming Language) · GitHub · Cascading Style Sheets (CSS) ·
          HTML5</p>`;
    }
  })} ${validate_component(Step, "Step").$$render($$result, { step: steps[1] }, {}, {
    default: () => {
      return `<p data-svelte-h="svelte-1a80ozf">What you are looking now is my personal portfolio website, developed
          using <b style="color: var(--xpeach);">Svelte</b>. Svelte is one of
          the skills I learnt during my internship at SPH Media.</p> <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" style="width: fit-content; margin-right: auto; margin-left: auto;" data-svelte-h="svelte-rw4rc1"><a href="https://cxueli5.github.io/chanxueli/" target="_blank" rel="noopener noreferrer">Project Link</a></button> <p data-svelte-h="svelte-1oswl2j"><b style="color:var(--xpurple);">Skills:</b> Svelte · HTML5 · CSS · TailwindCSS
          · JavaScript</p>`;
    }
  })}</div>  <div class="flex flex-col gap-2 text-center relative before:absolute before:top-0 before:left-0 before:w-2/3 before:h-1.5 before:bg-violet-700 after:absolute after:bottom-0 after:right-0 after:w-2/3 after:h-1.5 after:bg-violet-700 py-4" data-svelte-h="svelte-d7l8tg"><h6 class="text-large sm:text-xl md:text-2xl">Computing Science (Relevant)</h6> <h3 class="font-semibold text-3xl sm:text-4xl md:text-5xl"><span class="poppins text-violet-400">University</span> Projects</h3></div> <div class="grid grid-cols-1 lg:grid-cols-1 gap-20 lg:gap-25">${validate_component(Step, "Step").$$render($$result, { step: steps[2] }, {}, {
    default: () => {
      return `<p data-svelte-h="svelte-1vtk3zv">This project is part of <b style="color:var(--xblue);">SIT-UoG Overseas Immersion Program in University of Glasgow</b></p> <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" style="width: fit-content; margin-right: auto; margin-left: auto;" data-svelte-h="svelte-1eklh2r"><a href="https://whathellahor.github.io/3003-uog/" target="_blank">Website Link (view in desktop)</a></button> <p data-svelte-h="svelte-fkjoc8">A website documenting my team&#39;s journey in creating a <b style="color:var(--xpeach);">virtual exhibition</b> for The Mitchell Library. This exhibition showcases one of Glasgow&#39;s
          reowned arhitects, Alexander Thomson&#39;s works and buildings around Glasgow</p> <p data-svelte-h="svelte-19pfz10"><b style="color:var(--xpurple);">Skills:</b> Design Thinking · Teamwork
          · Communication · Tailwind CSS · Interpersonal Skills · Cascading Style
          Sheets (CSS) · HTML5 · JavaScript</p>`;
    }
  })} ${validate_component(Step, "Step").$$render($$result, { step: steps[3] }, {}, {
    default: () => {
      return `<p data-svelte-h="svelte-1vtk3zv">This project is part of <b style="color:var(--xblue);">SIT-UoG Overseas Immersion Program in University of Glasgow</b></p> <div class="button-container svelte-1b9dzyo" data-svelte-h="svelte-609mki"><button class="button svelte-1b9dzyo"><a href="https://whathellahor.github.io/3003-alexanderthomson/" target="_blank" rel="noopener noreferrer">Project Link</a></button>  <div class="mobile-responsive-iframe svelte-1b9dzyo"><iframe width="560" height="315" src="https://www.youtube.com/embed/Vfy14ZsiwgU?si=xCQWSQdhvZEj0Tod" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen style="margin-right:auto; margin-left: auto;" class="svelte-1b9dzyo"></iframe></div></div> <p data-svelte-h="svelte-ishv6w">Developed a <b style="color:var(--xpeach);">virtual exhibition</b> for
          The Mitchell Library to showcase one of Glasgow&#39;s reowned architects,
          Alexander Thomson&#39;s works and buildings around Glasgow. This
          exhibition includes
          <b style="color: var(--xgreen);">virtual tours with AR integration</b>, <b style="color:var(--xpink);">virtual gallery</b> of Thomson&#39;s
          works and <b style="color:var(--xblue);">biography</b> on Alexander Thomson.</p> <p data-svelte-h="svelte-1134tdj"><b style="color:var(--xpurple);">Skills:</b> User Interface Design · UX
          · UI · AR · Tailwind CSS · Interpersonal Skills · Cascading Style Sheets
          (CSS) · HTML5</p>`;
    }
  })} ${validate_component(Step, "Step").$$render($$result, { step: steps[4] }, {}, {
    default: () => {
      return `<p data-svelte-h="svelte-1t4tsf3">A project from Human Computer Interaction <b style="color:var(--xblue);">(HCI) module in collaboration with TTSH</b>.</p>  <div class="mobile-responsive-iframe svelte-1b9dzyo" data-svelte-h="svelte-11ib28e"><iframe width="560" height="315" src="https://www.youtube.com/embed/twtxvbZTi-E?si=HsE-q3lkU_D5rDEk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen style="margin-right:auto; margin-left: auto;" class="svelte-1b9dzyo"></iframe></div> <p data-svelte-h="svelte-90l74d">My team did a <b style="color:var(--xpeach);">mobile app prototype</b>
          that helps the nurses
          <b style="color: var(--xpink);">keep track of their tasks</b>,
          <b style="color: var(--xpurple);">schedule endoscopy washes and update status</b>,
          <b style="color: var(--xgreen);">search for patients and endoscopies from their respective databases</b>.</p> <p data-svelte-h="svelte-np8yz3"><b style="color:var(--xpurple);">Skills:</b> React Native · Firebase ·
          Human Computer Interaction · Prototyping · Usability Testing · Heuristic
          Evaluation · Storyboarding · UX · UI</p>`;
    }
  })} ${validate_component(Step, "Step").$$render($$result, { step: steps[9] }, {}, {
    default: () => {
      return `<p data-svelte-h="svelte-11gddft">A project from Professional Software Development module</p>  <div class="mobile-responsive-iframe svelte-1b9dzyo" data-svelte-h="svelte-ppvwkb"><iframe width="560" height="315" src="https://www.youtube.com/embed/YX39VlK8CCk?si=kl2WRm_Dpu46FWtg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen style="margin-right:auto; margin-left: auto;" class="svelte-1b9dzyo"></iframe></div> <p data-svelte-h="svelte-12c3t8e">My team did a <b style="color:var(--xpeach);">web-application</b>
          for businesses to list food created from left over / access ingredients
          at cheaper prices. This helps businesses in the F&amp;B industry to reduce
          food wastage.</p> <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" style="width: fit-content; margin-right: auto; margin-left: auto;" data-svelte-h="svelte-13vayyz"><a href="https://github.com/chanxueli/SIT_CSC2012_PSD_AY2023" target="_blank">GitHub Link (More information on project in ReadMe)</a></button> <p data-svelte-h="svelte-mcv74o"><b style="color:var(--xpurple);">Skills:</b> React · Tailwind CSS · Firebase
          · Docker · UX · UI · Machine Learning · GitHub</p>`;
    }
  })}</div>  <div class="flex flex-col gap-2 text-center relative before:absolute before:top-0 before:left-0 before:w-2/3 before:h-1.5 before:bg-violet-700 after:absolute after:bottom-0 after:right-0 after:w-2/3 after:h-1.5 after:bg-violet-700 py-4" data-svelte-h="svelte-the2gu"><h6 class="text-large sm:text-xl md:text-2xl">Business Information Technology (Relevant)</h6> <h3 class="font-semibold text-3xl sm:text-4xl md:text-5xl"><span class="poppins text-violet-400">Polytechnic</span> Projects</h3></div> <div class="grid grid-cols-1 lg:grid-cols-1 gap-20 lg:gap-25">${validate_component(Step, "Step").$$render($$result, { step: steps[5] }, {}, {
    default: () => {
      return `<p data-svelte-h="svelte-kf526b">Final Year Project in collaboration with <b style="color: var(--xblue);">UOB</b>.</p>  <div class="mobile-responsive-iframe svelte-1b9dzyo" data-svelte-h="svelte-d80dzo"><iframe width="560" height="315" src="https://www.youtube.com/embed/5MjS_Ikhy4E?si=4OH7WUPhPvmwI2fx" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen style="margin-right:auto; margin-left:auto;" class="svelte-1b9dzyo"></iframe></div> <p data-svelte-h="svelte-arz2ou">Created a Branch Service Portal for customers to complete specific
          banking transaction and self-services for any bank related enquiries. <br>Learnt how to use AEM software to create forms.</p> <p data-svelte-h="svelte-16auk80"><b style="color:var(--xpurple);">Skills:</b> AEM Software · JSON · GitHub
          · Cascading Style Sheets (CSS) · HTML5</p>`;
    }
  })} ${validate_component(Step, "Step").$$render($$result, { step: steps[6] }, {}, {
    default: () => {
      return `<p data-svelte-h="svelte-6nhmmr">Selected by SP to go on a Learning Xchange program to Isabella,
          Philippines and worked with a team of students from other courses to
          develop a solution for the locals tomato jam business.</p> <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" style="width: fit-content; margin-right: auto; margin-left: auto;" data-svelte-h="svelte-j1vl0b"><a href="https://docs.google.com/presentation/d/122nz4PTKasPWXog0QvH8id-Sz3XxaX4xQ8iDLcMOg40/edit#slide=id.g56036d978a_0_70" target="_blank" rel="noopener noreferrer">Project Presentation</a></button> <p data-svelte-h="svelte-a1bcqh"><b style="color:var(--xpurple);">Skills:</b> Design Thinking · Interpersonal
          Skills · Teamwork</p>  <div class="grid grid-cols-1 md:grid-cols-3 gap-4" data-svelte-h="svelte-4pu5oq"><div class="grid-item svelte-1b9dzyo"><img${add_attribute("src", `${base}/LeXImg/tomato1.jpeg`, 0)} alt="Tomato 1" class="svelte-1b9dzyo"><br> <p>Tomato Family Team</p></div> <div class="grid-item svelte-1b9dzyo"><img${add_attribute("src", `${base}/LeXImg/tomato2.jpeg`, 0)} alt="Tomato 2" class="svelte-1b9dzyo"><br> <p>Interview with Village Chief</p></div> <div class="grid-item svelte-1b9dzyo"><img${add_attribute("src", `${base}/LeXImg/tomato3.jpeg`, 0)} alt="Tomato 3" class="svelte-1b9dzyo"><br> <p>Showcase</p></div> <div class="grid-item svelte-1b9dzyo"><img${add_attribute("src", `${base}/LeXImg/tomato4.jpeg`, 0)} alt="Tomato 4" class="svelte-1b9dzyo"><br> <p>Tomato Jam Making Process</p></div> <div class="grid-item svelte-1b9dzyo"><img${add_attribute("src", `${base}/LeXImg/tomato5.jpeg`, 0)} alt="Tomato 5" class="svelte-1b9dzyo"><br> <p>Tomato Jam Machine Prototype</p></div></div>`;
    }
  })} ${validate_component(Step, "Step").$$render($$result, { step: steps[7] }, {}, {
    default: () => {
      return `<p data-svelte-h="svelte-1pfdhyr">Some infographic works done using <img${add_attribute("src", `${base}/icons/illustrator.png`, 0)} alt="Illustrator Icon" style="width: 20px; height: auto; margin-right: 5px; display: inline;"> Adobe Illustrator for my modules.</p> <p data-svelte-h="svelte-1dpvmzu"><b style="color:var(--xpurple);">Skills:</b> Adobe Illustrator · Adobe
          XD · UI · UX · Design Thinking · Team Collaboration</p> <div class="project-thumbnail svelte-1b9dzyo"> <img${add_attribute("src", `${base}/polyImg/pdf1.png`, 0)} alt="Project Thumbnail" class="svelte-1b9dzyo"> <div class="project-details"><p data-svelte-h="svelte-bc32ci">Infographic activity to familarise with AI tools</p> <br>  ${validate_component(PDFViewer, "PDFViewer").$$render(
        $$result,
        {
          filePath: `${base}/pdf/pdf1.pdf#toolbar=0`
        },
        {},
        {}
      )}</div></div> <div class="project-thumbnail svelte-1b9dzyo"> <img${add_attribute("src", `${base}/polyImg/pdf2.png`, 0)} alt="Project Thumbnail" class="svelte-1b9dzyo"> <div class="project-details"><p data-svelte-h="svelte-ooop2n">Infographic proposal on mental health (stress) among polytechnic
              students. (Final artwork at the end)</p> <br>  ${validate_component(PDFViewer, "PDFViewer").$$render(
        $$result,
        {
          filePath: `${base}/pdf/pdf2.pdf#toolbar=0`
        },
        {},
        {}
      )}</div></div> <div class="project-thumbnail svelte-1b9dzyo"> <img${add_attribute("src", `${base}/polyImg/pdf3.png`, 0)} alt="Project Thumbnail" class="svelte-1b9dzyo"> <div class="project-details"><p data-svelte-h="svelte-1tknlfo">&#39;Feast&#39; mobile application design. Feast is a fictional restaurant
              booking application. All designs are designed on my own,
              background is hawker center table inspired, app is retro dining
              inspired.
              <br><br>Designs are incooperated in Adobe XD for presentation
              (not included here).</p> <br> <p id="feature-head" class="svelte-1b9dzyo" data-svelte-h="svelte-1h1y0dv"><b>Features:</b></p> <ul class="circle-bullet-list svelte-1b9dzyo" data-svelte-h="svelte-f58cbb"><li class="svelte-1b9dzyo">Log in</li> <li class="svelte-1b9dzyo">Main page</li> <li class="svelte-1b9dzyo">Filters (location)</li> <li class="svelte-1b9dzyo">For you recommended restaurants</li> <li class="svelte-1b9dzyo">&#39;Feast&#39; featured restaurants</li> <li class="svelte-1b9dzyo">Search page (Search bar, Filters: Meal type, No. of guests,
                Price, Ammenties, Cuisines)</li> <li class="svelte-1b9dzyo">Restaurant Page (Details, Croud watch, Menu, Reserve buttons)</li> <li class="svelte-1b9dzyo">Menu: Translate, View reviews, Dietary and spicy indications</li> <li class="svelte-1b9dzyo">Reviews page</li></ul> <br>  ${validate_component(PDFViewer, "PDFViewer").$$render(
        $$result,
        {
          filePath: `${base}/pdf/pdf3.pdf#toolbar=0`
        },
        {},
        {}
      )}</div></div> <div class="project-thumbnail svelte-1b9dzyo"> <img${add_attribute("src", `${base}/polyImg/pdf4.png`, 0)} alt="Project Thumbnail" style="width: 300px;" class="svelte-1b9dzyo"> <div class="project-details"><p data-svelte-h="svelte-vbk59g">Infographic resume project (k-pop, vending machine, youtube,
              bullet journal inspired)</p> <br>  ${validate_component(PDFViewer, "PDFViewer").$$render(
        $$result,
        {
          filePath: `${base}/pdf/pdf4.pdf#toolbar=0`
        },
        {},
        {}
      )}</div></div> <div class="project-thumbnail svelte-1b9dzyo"> <img${add_attribute("src", `${base}/polyImg/pdf5.png`, 0)} alt="Project Thumbnail" class="svelte-1b9dzyo"> <div class="project-details"><p data-svelte-h="svelte-y7kt0v">Infographic resume design journey</p> <br>  ${validate_component(PDFViewer, "PDFViewer").$$render(
        $$result,
        {
          filePath: `${base}/pdf/pdf5.pdf#toolbar=0`
        },
        {},
        {}
      )}</div></div> <div class="project-thumbnail svelte-1b9dzyo"> <img${add_attribute("src", `${base}/polyImg/pdf6.png`, 0)} alt="Project Thumbnail" class="svelte-1b9dzyo"> <div class="project-details"><p data-svelte-h="svelte-1nfucmb">Potrait</p> <br>  ${validate_component(PDFViewer, "PDFViewer").$$render(
        $$result,
        {
          filePath: `${base}/pdf/potrait.pdf#toolbar=0`
        },
        {},
        {}
      )}</div></div>`;
    }
  })} ${validate_component(Step, "Step").$$render($$result, { step: steps[8] }, {}, {
    default: () => {
      return `<p data-svelte-h="svelte-1vjkxy6">First digital marketing project in Year 1. Helped a small beauty salon
          business called &#39;La Reine De Beaute&#39; to improve their internet
          presence. Designed menu, brochure and filmed a promotional video (not
          included here).</p> <p data-svelte-h="svelte-1fjitff"><b style="color:var(--xpurple);">Skills:</b> Digital Marketing · Interpersonal
          Skill · Video Editing · Adobe Photoshop</p>  <div class="grid grid-cols-1 md:grid-cols-3 gap-4" data-svelte-h="svelte-1mgkpyl"><div class="grid-item svelte-1b9dzyo"><img${add_attribute("src", `${base}/polyImg/DBIT1A02a, 1816655 Chan Xue Li - Brochure.jpg`, 0)} alt="La Reine 1" class="svelte-1b9dzyo"><br> <p>Proposed Brochure Design (Front)<br>(colour and font not updated
              as outdated)</p></div> <div class="grid-item svelte-1b9dzyo"><img${add_attribute("src", `${base}/polyImg/DBIT1A02a, 1816655 Chan Xue Li - Brochure (2).jpg`, 0)} alt="La Reine 2" class="svelte-1b9dzyo"><br> <p>Proposed Brochure Design (Back)<br>(colour and font not updated
              as outdated)</p></div> <div class="grid-item svelte-1b9dzyo"><img${add_attribute("src", `${base}/polyImg/DBIT1A02a, 1816655 Chan Xue Li - Flyer.jpg`, 0)} alt="La Reine 3" class="svelte-1b9dzyo"><br> <p>Proposed Anniversary Promotion Poster<br>(colour and font not
              updated as outdated)</p></div> <div class="grid-item svelte-1b9dzyo"><img${add_attribute("src", `${base}/polyImg/ladigi1.png`, 0)} alt="La Reine 4" class="svelte-1b9dzyo"><br> <p>Giveaway on Facebook</p></div> <div class="grid-item svelte-1b9dzyo"><img${add_attribute("src", `${base}/polyImg/ladigi2.png`, 0)} alt="La Reine 5" class="svelte-1b9dzyo"><br> <p>One of the Question of Day on Facebook</p></div> <div class="grid-item svelte-1b9dzyo"><img${add_attribute("src", `${base}/polyImg/ladigi3.png`, 0)} alt="La Reine 6" class="svelte-1b9dzyo"><br> <p>One of the Question of Day on Facebook</p></div></div>`;
    }
  })}</div></section> </main>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(SchoolProjects, "SchoolProjects").$$render($$result, {}, {}, {})}`;
});
export {
  Page as default
};
