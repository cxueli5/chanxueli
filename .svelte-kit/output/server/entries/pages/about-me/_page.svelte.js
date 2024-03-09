import { c as create_ssr_component, b as add_attribute, v as validate_component } from "../../../chunks/ssr.js";
import { b as base } from "../../../chunks/paths.js";
import { S as Step } from "../../../chunks/Step.js";
const css = {
  code: "#aboutContent.svelte-9onc2m.svelte-9onc2m{padding-right:30px}@media(max-width: 1024px){ul.svelte-9onc2m li a.svelte-9onc2m{padding:8px 16px}#aboutProfile.svelte-9onc2m.svelte-9onc2m{max-height:30vh}#aboutContent.svelte-9onc2m.svelte-9onc2m{padding-right:0px}}@media(max-width: 768px){ul.svelte-9onc2m li a.svelte-9onc2m{padding:6px 12px}#aboutProfile.svelte-9onc2m.svelte-9onc2m{max-height:50vh}#aboutContent.svelte-9onc2m.svelte-9onc2m{padding-right:0px}}#skillIcon.svelte-9onc2m.svelte-9onc2m{width:fit-content;height:200px;margin-right:auto;margin-left:auto}",
  map: null
};
const About = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let steps = [
    {
      name: "University of Glasgow",
      image: `${base}/icons/uog.jpeg`
    },
    {
      name: "Singapore Institute of Technology (SIT)",
      image: `${base}/icons/sit.jpeg`
    },
    {
      name: "Singapore Polytechnic",
      image: `${base}/icons/sp.jpeg`
    },
    {
      name: "Secondary School",
      icon: "fa-solid fa-graduation-cap"
    },
    {
      name: "Primary School",
      icon: "fa-solid fa-graduation-cap"
    },
    {
      name: "Edusave Certificate of Academic Achievement",
      icon: "fa-solid fa-graduation-cap"
    },
    {
      name: "EAGLES Award",
      icon: "fa-solid fa-graduation-cap"
    },
    {
      name: "NYAA",
      icon: "fa-solid fa-graduation-cap"
    }
  ];
  $$result.css.add(css);
  return `${$$result.head += `<!-- HEAD_svelte-fgvcgy_START -->${$$result.title = `<title>About Me</title>`, ""}<!-- HEAD_svelte-fgvcgy_END -->`, ""} <main class="flex flex-col flex-1 p-4"><section id="about" class="py-20 pt-10 lg:pt-16 lg:py-32 flex flex-col gap-16 sm:gap-20 md:gap-24 relative" data-svelte-h="svelte-x6bus0"><div class="flex flex-col gap-2 text-center relative before:absolute before:top-0 before:left-0 before:w-2/3 before:h-1.5 before:bg-violet-700 after:absolute after:bottom-0 after:right-0 after:w-2/3 after:h-1.5 after:bg-violet-700 py-4"><h6 class="text-large sm:text-xl md:text-2xl">Hello! Let&#39;s learn</h6> <h3 class="font-semibold text-3xl sm:text-4xl md:text-5xl"><span class="poppins text-violet-400">About</span> me.</h3></div>  <ul class="flex flex-wrap justify-center gap-2 text-sm font-medium text-center text-gray-500 dark:text-gray-400 svelte-9onc2m"><li class="me-2"><a href="#myHobbies" class="inline-block px-3 py-2 rounded-lg hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-white svelte-9onc2m">Likes</a></li> <li class="me-2"><a href="#mySkills" class="inline-block px-3 py-2 rounded-lg hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-white svelte-9onc2m">Skills</a></li> <li class="me-2"><a href="#myEdu" class="inline-block px-3 py-2 rounded-lg hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-white svelte-9onc2m">Education</a></li> <li class="me-2"><a href="#myAchievement" class="inline-block px-3 py-2 rounded-lg hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-white svelte-9onc2m">Achievements</a></li></ul> <section id="myProfile" class="grid grid-cols-1 lg:grid-cols-2 lg:gap-2 gap-10"> <div class="relative shadow-2xl grid place-items-center"><img id="aboutProfile"${add_attribute("src", `${base}/images/profile3.jpeg`, 0)} alt="Chan Xue Li" class="object-cover z-[2] max-h-[70vh] rounded-lg overflow-hidden svelte-9onc2m"></div>  <div id="aboutContent" class="flex flex-col lg:justify-center text-center lg:text-left gap-6 md:gap-8 lg:gap-10 svelte-9onc2m"><h2 class="font-semibold text-4xl sm:text-5xl md:text-6xl">About Me</h2> <p class="text-base sm:text-lg md:text-xl" style="text-align: justify;">My journey with IT began in primary school through the ICT Club CCA,
          sparking a curiosity about its potential to revolutionaise our daily
          lives. This ignited my passion for continuous learning. <br><br>With some interest in business as well, I pursed a
          <b style="color: var(--xblue);">Business IT</b>
          diploma and graduated with a Bachelor&#39;s degree with honors in
          <b style="color: var(--xblue);">Computing Science</b>. I aim to
          specialise in
          <b style="color: var(--xpeach);">software development</b>,
          <b style="color: var(--xpurple);">UI/UX design</b>, and
          <b style="color: var(--xgreen);">digital marketing</b>. <br><br>I
          am driven by curiosity, always questioning the &#39;why&#39; and &#39;how&#39; of the
          world around us. My personal interests include 🇰🇷 Korean culture
          (K-Pop), 🎨 drawing and 🏸 badminton (casual play not a professional
          haha).</p>  <div class="flex items-center gap-4"><a${add_attribute("href", `${base}/pdf/ChanXueLi_resume.pdf`, 0)} download class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition duration-300 focus:outline-none focus:ring focus:ring-blue-300">Download Resume</a> <a href="https://www.linkedin.com/in/xue-li" target="_blank" rel="noopener noreferrer"><img src="https://www.svgrepo.com/show/28145/linkedin.svg" width="30" height="30" alt="LinkedIn"></a> <a href="mailto:cxuelisit@gmail.com" target="_blank" rel="noopener noreferrer"><img${add_attribute("src", `${base}/icons/gmail.svg`, 0)} width="30" height="30" alt="Gmail"></a></div></div></section></section>   <section id="myHobbies" data-svelte-h="svelte-yqz1w0"><div class="flex flex-col gap-2 text-center relative before:absolute before:top-0 before:left-0 before:w-2/3 before:h-1.5 before:bg-violet-700 after:absolute after:bottom-0 after:right-0 after:w-2/3 after:h-1.5 after:bg-violet-700 py-4"><h6 class="text-large sm:text-xl md:text-2xl"></h6> <h3 class="font-semibold text-3xl sm:text-4xl md:text-5xl">Likes</h3></div> <br> <div class="grid grid-cols-1 md:grid-cols-5 gap-4"><div class="grid-item"><img${add_attribute("src", `${base}/likes/like6.jpeg`, 0)} alt="Kpop concert"></div> <div class="grid-item"><img${add_attribute("src", `${base}/likes/like1.jpeg`, 0)} alt="Kpop concert"></div> <div class="grid-item"><img${add_attribute("src", `${base}/likes/like2.jpeg`, 0)} alt="Kpop concert"></div> <div class="grid-item"><img${add_attribute("src", `${base}/likes/like3.jpeg`, 0)} alt="Drawing"></div> <div class="grid-item"><img${add_attribute("src", `${base}/likes/like4.jpeg`, 0)} alt="Drawing"></div> <div class="grid-item"><img${add_attribute("src", `${base}/likes/like5.jpeg`, 0)} alt="Badminton"></div></div></section>  <section id="mySkills" data-svelte-h="svelte-1fb2g7b"><br> <div class="flex flex-col gap-2 text-center relative before:absolute before:top-0 before:left-0 before:w-2/3 before:h-1.5 before:bg-violet-700 after:absolute after:bottom-0 after:right-0 after:w-2/3 after:h-1.5 after:bg-violet-700 py-4"><h6 class="text-large sm:text-xl md:text-2xl"></h6> <h3 class="font-semibold text-3xl sm:text-4xl md:text-5xl">Skills</h3></div> <br> <div class="grid grid-cols-1 md:grid-cols-6 gap-4"><div class="grid-item"><img id="skillIcon"${add_attribute("src", `${base}/skills/html.png`, 0)} alt="HTML" class="svelte-9onc2m"></div> <div class="grid-item"><img id="skillIcon"${add_attribute("src", `${base}/skills/css.png`, 0)} alt="CSS" class="svelte-9onc2m"></div> <div class="grid-item"><img id="skillIcon"${add_attribute("src", `${base}/skills/javascript.png`, 0)} alt="Javascript" class="svelte-9onc2m"></div> <div class="grid-item"><img id="skillIcon"${add_attribute("src", `${base}/skills/jquery.png`, 0)} alt="jQuery" class="svelte-9onc2m"></div> <div class="grid-item"><img id="skillIcon"${add_attribute("src", `${base}/skills/svelte.png`, 0)} alt="svelte" class="svelte-9onc2m"></div> <div class="grid-item"><img id="skillIcon"${add_attribute("src", `${base}/skills/python.png`, 0)} alt="python" class="svelte-9onc2m"></div> <div class="grid-item"><img id="skillIcon"${add_attribute("src", `${base}/skills/illustrator.png`, 0)} alt="illustrator" class="svelte-9onc2m"></div> <div class="grid-item"><img id="skillIcon"${add_attribute("src", `${base}/skills/photoshop.png`, 0)} alt="photoshop" class="svelte-9onc2m"></div> <div class="grid-item"><img id="skillIcon"${add_attribute("src", `${base}/skills/xd.png`, 0)} alt="xd" class="svelte-9onc2m"></div> <div class="grid-item"><img id="skillIcon"${add_attribute("src", `${base}/skills/figma.png`, 0)} alt="figma" class="svelte-9onc2m"></div> <div class="grid-item"><img id="skillIcon"${add_attribute("src", `${base}/skills/sql.png`, 0)} alt="sql" class="svelte-9onc2m"></div> <div class="grid-item"><img id="skillIcon"${add_attribute("src", `${base}/skills/react.png`, 0)} alt="react" class="svelte-9onc2m"></div> <div class="grid-item"><img id="skillIcon"${add_attribute("src", `${base}/skills/premire.png`, 0)} alt="premiere" class="svelte-9onc2m"></div></div></section>  <section id="myEdu" class="py-20 pt-10 lg:pt-16 lg:py-32 flex flex-col gap-16 sm:gap-20 md:gap-24 relative"><div class="flex flex-col gap-2 text-center relative before:absolute before:top-0 before:left-0 before:w-2/3 before:h-1.5 before:bg-violet-700 after:absolute after:bottom-0 after:right-0 after:w-2/3 after:h-1.5 after:bg-violet-700 py-4" data-svelte-h="svelte-17yk939"><h3 class="font-semibold text-3xl sm:text-4xl md:text-5xl"><h6 class="text-large sm:text-xl md:text-2xl"></h6> <h3 class="font-semibold text-3xl sm:text-4xl md:text-5xl">Education</h3></h3></div> <div class="grid grid-cols-1 lg:grid-cols-3 gap-20 lg:gap-25">${validate_component(Step, "Step").$$render($$result, { step: steps[0] }, {}, {
    default: () => {
      return `<p data-svelte-h="svelte-1histud"><b style="color: var(--xpeach);">Bachelor of Science - BS with Honours in Computing Science</b>
          |
          <b style="color: var(--xblue);">Sep 2021 - Sep 2024 (3 years)</b></p>`;
    }
  })} ${validate_component(Step, "Step").$$render($$result, { step: steps[1] }, {}, {
    default: () => {
      return `<p data-svelte-h="svelte-1histud"><b style="color: var(--xpeach);">Bachelor of Science - BS with Honours in Computing Science</b>
          |
          <b style="color: var(--xblue);">Sep 2021 - Sep 2024 (3 years)</b></p>`;
    }
  })} ${validate_component(Step, "Step").$$render($$result, { step: steps[2] }, {}, {
    default: () => {
      return `<p data-svelte-h="svelte-1rjr9p2"><b style="color: var(--xpeach);">Diploma in Business Information Technology</b>
          |
          <b style="color: var(--xblue);">April 2018 - May 2021 (3 years)</b></p> <div id="internContent" data-svelte-h="svelte-1ad0lni"><p><b style="color: var(--xpurple);">CCA:</b> Leo Club (Volunteering Activities),
            Welfare Club (Volunteering Activities), Sign Language Club (Basic)</p></div>`;
    }
  })} ${validate_component(Step, "Step").$$render($$result, { step: steps[3] }, {}, {
    default: () => {
      return `<div id="internContent" data-svelte-h="svelte-1l0mh1u"><p><b style="color: var(--xpurple);">CCA:</b> Drama Club <br><br> <b>Represented school in:</b>
            Singapore Youth Festival 2015 and 2017 (Represented School at SYF Arts
            Presentation, obtained Certificate of Accomplishment, Drama)
            <br><br>
            Others: Secondary 3 Entrepreneurship Fair (Participant)</p></div>`;
    }
  })} ${validate_component(Step, "Step").$$render($$result, { step: steps[4] }, {}, {
    default: () => {
      return `<div id="internContent" data-svelte-h="svelte-1hv9o66"><p><b style="color: var(--xpurple);">CCA:</b> ICT Club (Chairperson)<br> <br> <b>Represented school for:</b>
            School Digital Media Awards 2011, School Digital Media Awards 2012, National
            Infocomm Club Awards Competition 2013</p></div>`;
    }
  })}</div></section>  <section id="myAchievement" class="py-20 pt-10 lg:pt-16 lg:py-32 flex flex-col gap-16 sm:gap-20 md:gap-24 relative"><div class="flex flex-col gap-2 text-center relative before:absolute before:top-0 before:left-0 before:w-2/3 before:h-1.5 before:bg-violet-700 after:absolute after:bottom-0 after:right-0 after:w-2/3 after:h-1.5 after:bg-violet-700 py-4" data-svelte-h="svelte-387nzx"><h3 class="font-semibold text-3xl sm:text-4xl md:text-5xl"><h6 class="text-large sm:text-xl md:text-2xl"></h6> <h3 class="font-semibold text-3xl sm:text-4xl md:text-5xl">Achievements</h3></h3></div> <div class="grid grid-cols-1 lg:grid-cols-3 gap-20 lg:gap-25">${validate_component(Step, "Step").$$render($$result, { step: steps[5] }, {}, {
    default: () => {
      return `<p data-svelte-h="svelte-ftb8ms"><b style="color: var(--xblue);">Nov 2020</b></p> <div class="internContent" data-svelte-h="svelte-1cj6ht"><p>Good performance and conduct in school coming in among top 25% in my
            level and course (Diploma in Business Information Technology at
            Singapore Polytechnic)</p></div>`;
    }
  })} ${validate_component(Step, "Step").$$render($$result, { step: steps[6] }, {}, {
    default: () => {
      return `<p data-svelte-h="svelte-jzc9vx"><b style="color: var(--xblue);">Jan 2018</b></p> <div class="internContent" data-svelte-h="svelte-13xbfwh"><p>Edusave Award for Achievement, Good Leadership and Service</p></div>`;
    }
  })} ${validate_component(Step, "Step").$$render($$result, { step: steps[7] }, {}, {
    default: () => {
      return `<p data-svelte-h="svelte-13cubae"><b style="color: var(--xblue);">Aug 2017</b></p> <p data-svelte-h="svelte-r9vxh4">National Youth Achievement Award Singapore |
          <b style="color: var(--xblue);">Silver Award</b></p>`;
    }
  })}</div></section> </main>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(About, "About").$$render($$result, {}, {}, {})}`;
});
export {
  Page as default
};
