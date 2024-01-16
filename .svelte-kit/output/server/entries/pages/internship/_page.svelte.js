import { c as create_ssr_component, e as escape, v as validate_component, b as add_attribute } from "../../../chunks/ssr.js";
import { b as base } from "../../../chunks/paths.js";
import { S as Step } from "../../../chunks/Step.js";
import { P as PDFViewer } from "../../../chunks/PDFViewer.js";
const ImageViewer_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".image-preview.svelte-2xfb09.svelte-2xfb09{max-width:100%;text-align:center;position:relative}.image-preview.svelte-2xfb09 img.svelte-2xfb09{max-width:100%;max-height:100%}.view-image-btn.svelte-2xfb09.svelte-2xfb09{background-color:#4285f4;color:white;padding:10px 20px;border:none;border-radius:5px;font-weight:bold;cursor:pointer;transition:background-color 0.3s ease}.view-image-btn.svelte-2xfb09.svelte-2xfb09:hover{background-color:lightblue;color:black}.close-image-btn.svelte-2xfb09.svelte-2xfb09{background-color:#ea4335;color:white;position:absolute;top:10px;right:10px;padding:8px 15px;cursor:pointer;border:none;border-radius:5px;transition:background-color 0.3s ease}.close-image-btn.svelte-2xfb09.svelte-2xfb09:hover{background-color:#ff6659}@media screen and (max-width: 768px){.image-preview.svelte-2xfb09.svelte-2xfb09{margin:0 auto}}",
  map: null
};
const ImageViewer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { imagePath } = $$props;
  let { buttonText = "View PDF" } = $$props;
  if ($$props.imagePath === void 0 && $$bindings.imagePath && imagePath !== void 0)
    $$bindings.imagePath(imagePath);
  if ($$props.buttonText === void 0 && $$bindings.buttonText && buttonText !== void 0)
    $$bindings.buttonText(buttonText);
  $$result.css.add(css$1);
  return `${` <button class="view-image-btn svelte-2xfb09">${escape(buttonText)}</button>`}`;
});
const Internship_svelte_svelte_type_style_lang = "";
const css = {
  code: '.button-container.svelte-zw28j2.svelte-zw28j2{display:flex;flex-direction:column;align-items:center;gap:10px}@media(min-width: 768px){.button-container.svelte-zw28j2.svelte-zw28j2{flex-direction:row;justify-content:center}}@media screen and (max-width: 768px){}.circle-bullet-list.svelte-zw28j2.svelte-zw28j2{list-style-type:none;padding-left:10px;text-align:left}.circle-bullet-list.svelte-zw28j2 li.svelte-zw28j2::before{content:"\\2022";color:white;font-weight:bold;display:inline-block;width:1em;margin-left:-1em}#internContent.svelte-zw28j2.svelte-zw28j2{max-width:600px;margin:0 auto}@media screen and (max-width: 768px){.circle-bullet-list.svelte-zw28j2.svelte-zw28j2{padding-left:0px}#internContent.svelte-zw28j2.svelte-zw28j2{max-width:100%;padding:0 20px}}',
  map: null
};
const Internship = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let steps = [
    {
      name: "SPH Media",
      image: `${base}/icons/sph_logo.jpeg`
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
    }
  ];
  $$result.css.add(css);
  return `${$$result.head += `<!-- HEAD_svelte-gmvvf3_START -->${$$result.title = `<title>Internship</title>`, ""}<!-- HEAD_svelte-gmvvf3_END -->`, ""} <main class="flex flex-col flex-1 p-4"> <section class="py-20 pt-10 lg:pt-16 lg:py-32 flex flex-col gap-16 sm:gap-20 md:gap-24 relative" id="projects"> <div class="flex flex-col gap-2 text-center relative before:absolute before:top-0 before:left-0 before:w-2/3 before:h-1.5 before:bg-violet-700 after:absolute after:bottom-0 after:right-0 after:w-2/3 after:h-1.5 after:bg-violet-700 py-4" data-svelte-h="svelte-1oi87mj"><h6 class="text-large sm:text-xl md:text-2xl">Polytechnic / University</h6> <h3 class="font-semibold text-3xl sm:text-4xl md:text-5xl"><span class="poppins text-violet-400">Internship</span> Experience</h3></div> <div class="grid grid-cols-1 lg:grid-cols-1 gap-20 lg:gap-25">${validate_component(Step, "Step").$$render($$result, { step: steps[0] }, {}, {
    default: () => {
      return `<p data-svelte-h="svelte-m9uv73"><b style="color: var(--xpeach);">Data Viz Intern (Developer, Straits Times Digigraphics)</b>
          |
          <b style="color: var(--xblue);">Aug 2023 - Apr 2024 (8 months)</b></p> <div id="internContent" class="svelte-zw28j2" data-svelte-h="svelte-bemy42"><ul class="circle-bullet-list svelte-zw28j2"><li class="svelte-zw28j2">Developed interactive articles using Svelte</li> <li class="svelte-zw28j2">Create collaterals using Adobe Illustrator and Adobe Photoshop</li> <li class="svelte-zw28j2">Collaborative work with local and international developers and
              designers</li> <li class="svelte-zw28j2">Collaborate with designers for UI design, pre-planning stage such
              as: research, ideation and content planning for mockups</li> <li class="svelte-zw28j2">Publish and maintain weekly discover articles</li></ul> <br> <b style="color: var(--xgreen);">Projects (not shown / no link):</b> <br> <p><b style="color: var(--xblue);">Taylor Swift 2024</b> - Participated
            in pre-planning stage (Research, UI design, Content planning for mockup),
            Assisted in development of anagram game.</p> <br> <p><b style="color:var(--xpurple);">Skills:</b> Svelte · Adobe Illustrator
            · Adobe XD · Adobe Photoshop · GitHub · UI Design · NodeJS · JavaScript
            · HTML5 · CSS · Microsoft Excel · Interpersonal Skills · Team Collaboration</p></div>  <div class="grid grid-cols-1 md:grid-cols-3 gap-4" data-svelte-h="svelte-eyo40j"><div class="grid-item"><img${add_attribute("src", `${base}/intern/arts-analysis.jpg`, 0)} alt="Arts Analysis"><br> <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" style="width: fit-content; margin-right: auto; margin-left: auto;"><a href="https://www.straitstimes.com/multimedia/graphics/2024/01/discover-art-georgette-chen/index.html" target="_blank" rel="noopener noreferrer">Discover SG Art Link</a></button> <br><br> <p>Developed template for designers to adjust zoom levels, Tested
              with landscape, potrait and svg artworks.</p></div> <div class="grid-item"><img${add_attribute("src", `${base}/intern/food.jpg`, 0)} alt="Food in your hood"><br> <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" style="width: fit-content; margin-right: auto; margin-left: auto;"><a href="https://youtu.be/h2X7KYX63V0?si=TpTIYVaEzzyZ2IBA" target="_blank" rel="noopener noreferrer">Food in your Hood Link</a></button> <br><br> <ul class="circle-bullet-list svelte-zw28j2" style="width: 300px; margin-right:auto; margin-left:auto;"><li class="svelte-zw28j2">Assisted development works (from end Aug 2023)</li> <li class="svelte-zw28j2">Styling (overall website)</li> <li class="svelte-zw28j2">Create custom components (Image Slider, Food label, Custom
                buttons, Custom props to hide show content etc.)</li> <li class="svelte-zw28j2">Spreadsheet database maintainence</li></ul></div> <div class="grid-item"><img${add_attribute("src", `${base}/intern/superlative.jpg`, 0)} alt="Superlative Cartoons"><br> <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" style="width: fit-content; margin-right: auto; margin-left: auto;"><a href="https://www.straitstimes.com/multimedia/graphics/2023/12/superlative-singapore/index.html" target="_blank" rel="noopener noreferrer">Superlative Cartoons Link</a></button> <br><br> <p>Development Works (Adjust current template to get desired context
              card)</p></div> <div class="grid-item"><img${add_attribute("src", `${base}/intern/arts-pick.jpg`, 0)} alt="Arts Calendar Events"><br> <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" style="width: fit-content; margin-right: auto; margin-left: auto;"><a href="https://www.straitstimes.com/multimedia/graphics/2023/10/arts-calendar-events-singapore/index.html" target="_blank" rel="noopener noreferrer">Arts Calendar Events Link</a></button> <br><br> <p>Assisted with styling, UI enhancement, update of events</p></div> <div class="grid-item"><img${add_attribute("src", `${base}/intern/cartoons.jpg`, 0)} alt="Cartoons"><br> <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" style="width: fit-content; margin-right: auto; margin-left: auto;"><a href="https://www.straitstimes.com/multimedia/graphics/2023/12/cartoons-of-the-week-december-26/index.html" target="_blank" rel="noopener noreferrer">Cartoons Link</a></button> <br><br> <p><b style="color: var(--xpink);">Weekly Discover Task</b></p> <br> <p>Designed newsletter thumbnail using Adobe Illustrator and cover
              image using Adobe Photoshop, <br><br>Assisted designers and
              artists with content input and deployment to publish on The
              Straits Times</p></div> <div class="grid-item"><img${add_attribute("src", `${base}/intern/wip.jpg`, 0)} alt="Week in Pictures"><br> <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" style="width: fit-content; margin-right: auto; margin-left: auto;"><a href="https://www.straitstimes.com/multimedia/graphics/2023/10/arts-calendar-events-singapore/index.html" target="_blank" rel="noopener noreferrer">Week in Pictures Link</a></button> <br><br> <p><b style="color: var(--xpink);">Weekly Discover Task</b></p> <br> <p>Designed newsletter blurb using Adobe Illustrator, <br><br>
              Assist journalists to update content and deployment to publish on Straits
              Times</p></div></div>`;
    }
  })} ${validate_component(Step, "Step").$$render($$result, { step: steps[1] }, {}, {
    default: () => {
      return `<p data-svelte-h="svelte-1ckmhkh"><b style="color: var(--xpeach);">Software Developer Intern</b>
          |
          <b style="color: var(--xblue);">May 2022 - Aug 2022 (4 months)</b></p> <div id="internContent" class="svelte-zw28j2"><ul class="circle-bullet-list svelte-zw28j2" data-svelte-h="svelte-1u76s3u"><li class="svelte-zw28j2">C# asp.net mvc project (self-learn), includes Microsoft SQL Server
              Integration</li> <li class="svelte-zw28j2">Project I was working on: <a href="https://studytrustintl.com/" target="_blank">https://studytrustintl.com/</a></li></ul> <br> ${validate_component(PDFViewer, "PDFViewer").$$render(
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
          <b style="color: var(--xblue);">March 2020 - Sep 2020 (8 months)</b></p> <div id="internContent" class="svelte-zw28j2"><ul class="circle-bullet-list svelte-zw28j2" data-svelte-h="svelte-1n5ifo6"><li class="svelte-zw28j2">Managed and maintained company&#39;s blog page</li> <li class="svelte-zw28j2">Redesign company&#39;s website homepage</li> <li class="svelte-zw28j2">Revamp store locator page</li> <li class="svelte-zw28j2">Designed promotional posters in-store and online (e.g. featured on
              TV products)</li> <li class="svelte-zw28j2">Did product photoshoot and generate new ideas for bundle sales</li> <li class="svelte-zw28j2">Assisted online sales via chatbot and in-store sales</li> <li class="svelte-zw28j2">Used company&#39;s third-party software to send electronic mail to
              store members (require HTML, CSS and PS knowledge)</li></ul> <br> <b data-svelte-h="svelte-2phhq4">Part Time:</b> <ul class="circle-bullet-list svelte-zw28j2" data-svelte-h="svelte-nabafw"><li class="svelte-zw28j2">Managed company&#39;s blog page</li> <li class="svelte-zw28j2">Assist online and in-store sales</li></ul> <br> <div class="button-container svelte-zw28j2">${validate_component(ImageViewer, "ImageViewer").$$render(
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
            (CSS) · HTML5 · Adobe Photoshop · JavaScript</p></div>  <div class="grid grid-cols-1 md:grid-cols-3 gap-4" data-svelte-h="svelte-ynwzrw"><div class="grid-item"><img${add_attribute("src", `${base}/icons/bic.png`, 0)} alt="Born in Colour" style="margin-right: auto; margin-left:auto;"><br> <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" style="width: fit-content; margin-right: auto; margin-left: auto;"><a href="https://www.bornincolour.com/" target="_blank" rel="noopener noreferrer">Home page Link</a></button> <br><br> <p>Revamp homepage</p></div> <div class="grid-item"><img${add_attribute("src", `${base}/intern/bic2.jpeg`, 0)} alt="Born in Colour" style="margin-right: auto; margin-left:auto;"><br> <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" style="width: fit-content; margin-right: auto; margin-left: auto;"><a href="https://www.bornincolour.com/blog/" target="_blank" rel="noopener noreferrer">Tips &amp; Inspiration Blog Link</a></button> <br><br> <p><b>Highlight blogs:</b></p> <br> <ul class="circle-bullet-list svelte-zw28j2"><li class="svelte-zw28j2">Tired of working from home during the circuit breaker period in
                Singapore? Make your workspace more fun with the Macaron Family!</li> <li class="svelte-zw28j2">All the korean blogs</li> <li class="svelte-zw28j2">Designed new blog thumbnails and redesigned old blog thumbnails</li> <li class="svelte-zw28j2">Propose using tags to categorise articles, link to collections
                and leverage korean media feature to attract younger audience.
                Designed offline posters to put in-store.</li> <li class="svelte-zw28j2">SEO integration to improve Google search rankings</li> <li class="svelte-zw28j2">Blog site maintanence and update</li></ul></div> <div class="grid-item"><img${add_attribute("src", `${base}/intern/bic3.jpeg`, 0)} alt="Born in Colour" style="margin-right: auto; margin-left:auto;"><br> <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" style="width: fit-content; margin-right: auto; margin-left: auto;"><a href="https://www.bornincolour.com/store-locator" target="_blank" rel="noopener noreferrer">Store Locator Link</a></button> <br><br> <p>Redesigned store locator page</p></div></div>`;
    }
  })}</div> <div class="flex flex-col gap-2 text-center relative before:absolute before:top-0 before:left-0 before:w-2/3 before:h-1.5 before:bg-violet-700 after:absolute after:bottom-0 after:right-0 after:w-2/3 after:h-1.5 after:bg-violet-700 py-4" data-svelte-h="svelte-kecngy"><h3 class="font-semibold text-3xl sm:text-4xl md:text-5xl"><span class="poppins text-violet-400">Part Time</span> Jobs</h3></div> <div class="grid grid-cols-1 lg:grid-cols-1 gap-20 lg:gap-25">${validate_component(Step, "Step").$$render($$result, { step: steps[3] }, {}, {
    default: () => {
      return `<p data-svelte-h="svelte-gz3o99"><b style="color: var(--xpeach);">Part Time Vaccination Administration</b>
          |
          <b style="color: var(--xblue);">March 2021 - Dec 2021 (10 months)</b></p> <div id="internContent" class="svelte-zw28j2" data-svelte-h="svelte-5gcxyd"><ul class="circle-bullet-list svelte-zw28j2"><li class="svelte-zw28j2">Administered registration for patients coming in for COVID-19
              vaccination</li> <li class="svelte-zw28j2">Usher patients to their allocated vaccination booths</li></ul> <br> <p><b style="color:var(--xpurple);">Skills:</b> Data Entry · Administrative
            Assistance · Customer Service</p></div>`;
    }
  })} ${validate_component(Step, "Step").$$render($$result, { step: steps[4] }, {}, {
    default: () => {
      return `<p data-svelte-h="svelte-1rzs2zm"><b style="color: var(--xpeach);">Part Time Tearista @ LiHo</b>
          |
          <b style="color: var(--xblue);">Nov 2017 - Nov 2019 (2 years)</b></p> <div id="internContent" class="svelte-zw28j2" data-svelte-h="svelte-3c4506"><b>Responsibilities:</b> <ul class="circle-bullet-list svelte-zw28j2"><li class="svelte-zw28j2">Cashier</li> <li class="svelte-zw28j2">Handle customers enquiries</li> <li class="svelte-zw28j2">Maintain store&#39;s cleanliness</li> <li class="svelte-zw28j2">Ensure that stocks are enough to last for the day</li> <li class="svelte-zw28j2">Tally and report the sales of the day</li></ul></div>`;
    }
  })}</div></section> </main>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Internship, "Internship").$$render($$result, {}, {}, {})}`;
});
export {
  Page as default
};
