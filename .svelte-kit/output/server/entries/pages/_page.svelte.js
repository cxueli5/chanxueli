import { c as create_ssr_component, b as add_attribute, v as validate_component } from "../../chunks/ssr.js";
import { b as base } from "../../chunks/paths.js";
const Main = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `<!-- HEAD_svelte-1eu8qr0_START -->${$$result.title = `<title>Chan Xue Li</title>`, ""}<!-- HEAD_svelte-1eu8qr0_END -->`, ""} <main class="flex flex-col flex-1" style="padding: 30px;" data-svelte-h="svelte-tbz36y"> <section id="introPage" class="grid grid-cols-1 lg:grid-cols-2 gap-10"> <div class="flex flex-col lg:justify-center text-center lg:text-left gap-6 md:gap-8 lg:gap-10"><h2 class="font-semibold text-4xl sm:text-5xl md:text-6xl" style="line-height: 1.5;">Welcome to my site! <br> I am Chan
        <span style="color: var(--xblue);">Xue Li</span> 😊</h2> <p class="text-base sm:text-lg md:text-xl" style="text-align: justify;">My keen interest lies in
        <b style="color: var(--xpeach);">software development</b>,
        <b style="color: var(--xpurple);">UI/UX design</b>, and
        <b style="color: var(--xgreen);">digital marketing</b>.
        <b style="background: linear-gradient(to right, var(--xpink), var(--xpurple), var(--xpeach), var(--xyellow), var(--xgreen), var(--xblue)); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">A fun fact about this site:</b>
        It&#39;s coded in Svelte, a skill I picked up during my internship. <b style="color: var(--xred);">Actively looking for full-time job opportunities for fresh grads (Sep 2024), let&#39;s connect and chat!</b></p> <div class="flex items-center gap-4"><a href="pdf/ChanXueLi_resume.pdf" download class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition duration-300 focus:outline-none focus:ring focus:ring-blue-300">Download Resume</a> <a href="https://www.linkedin.com/in/xue-li" target="_blank" rel="noopener noreferrer"><img src="https://www.svgrepo.com/show/28145/linkedin.svg" width="30" height="30" alt="LinkedIn"></a> <a href="mailto:cxuelisit@gmail.com" target="_blank" rel="noopener noreferrer"><img${add_attribute("src", `${base}/icons/gmail.svg`, 0)} width="30" height="30" alt="Gmail"></a></div></div> <div class="relative shadow-2xl grid place-items-center"><img${add_attribute("src", `${base}/images/profile1.jpg`, 0)} alt="Chan Xue Li" class="object-cover z-[2] max-h-[70vh] rounded-full overflow-hidden"></div></section></main>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Main, "Main").$$render($$result, {}, {}, {})}`;
});
export {
  Page as default
};
