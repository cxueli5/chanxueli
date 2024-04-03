import { c as create_ssr_component, b as add_attribute, e as escape, d as null_to_empty, f as each, v as validate_component } from "../../chunks/ssr.js";
import { b as base } from "../../chunks/paths.js";
const Footer_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: "@media(max-width: 768px){#quickLinkSection.svelte-1jbpv2s{text-align:center;justify-content:center;margin-left:-80px}#connectSection.svelte-1jbpv2s{margin-top:10px}}",
  map: null
};
const Footer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$1);
  return `<footer class="bg-blue-100/80 font-sans dark:bg-gray-900" data-svelte-h="svelte-1axjztp"><div class="container px-6 py-12 mx-auto"><div class="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-y-10 lg:grid-cols-2"><div id="quickLinkSection" class="flex flex-col items-center svelte-1jbpv2s"><p class="font-semibold text-gray-800 dark:text-white">Quick Links</p> <div class="flex flex-col items-start mt-5 space-y-2"><a${add_attribute("href", `${base}/`, 0)} class="text-gray-600 transition-colors duration-300 dark:text-gray-300 hover:text-white hover:underline hover:cursor-pointer hover:text-blue-500">Home</a> <a${add_attribute("href", `${base}/projects`, 0)} class="text-gray-600 transition-colors duration-300 dark:text-gray-300 hover:text-white hover:underline hover:cursor-pointer hover:text-blue-500">Projects</a> <a${add_attribute("href", `${base}/internship`, 0)} class="text-gray-600 transition-colors duration-300 dark:text-gray-300 hover:text-white hover:underline hover:cursor-pointer hover:text-blue-500">Internship</a> <a${add_attribute("href", `${base}/about-me`, 0)} class="text-gray-600 transition-colors duration-300 dark:text-gray-300 hover:text-white hover:underline hover:cursor-pointer hover:text-blue-500">About Me</a></div></div> <div class="flex flex-col items-center"><p class="font-semibold text-gray-800 dark:text-white">Download My Resume</p> <div class="flex flex-col items-start mt-5 space-y-2"><a${add_attribute("href", `${base}/pdf/ChanXueLi_resume.pdf`, 0)} download class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition duration-300 focus:outline-none focus:ring focus:ring-blue-300">Download Resume</a></div> <br> <p class="font-semibold text-gray-800 dark:text-white">Download My Resume (Print Version)</p> <div class="flex flex-col items-start mt-5 space-y-2"><a${add_attribute("href", `${base}/pdf/ChanXueLi_resume_print_ver.pdf`, 0)} download class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition duration-300 focus:outline-none focus:ring focus:ring-blue-300">Download Print Resume</a></div></div></div> <hr class="my-6 border-gray-200 md:my-8 dark:border-gray-700 h-2"> <div id="connectSection" class="flex justify-center items-center gap-4 svelte-1jbpv2s"><h3 class="mr-2">Connect with me:</h3> <a href="https://www.linkedin.com/in/xue-li" target="_blank" rel="noopener noreferrer"><img src="https://www.svgrepo.com/show/28145/linkedin.svg" width="30" height="30" alt="LinkedIn"></a> <a href="mailto:cxuelisit@gmail.com" target="_blank" rel="noopener noreferrer"><img${add_attribute("src", `${base}/icons/gmail.svg`, 0)} width="30" height="30" alt="Gmail"></a></div> <p class="font-sans p-8 text-start md:text-center md:text-lg md:p-4">© 2024 Chan Xue Li. All rights reserved.</p></div> </footer>`;
});
const Header_svelte_svelte_type_style_lang = "";
const css = {
  code: "#sidebaricon.svelte-1qwk8bl.svelte-1qwk8bl{margin-top:-900px}.button-container.svelte-1qwk8bl.svelte-1qwk8bl{display:flex}.button-container.svelte-1qwk8bl a.svelte-1qwk8bl{margin-right:10px}.tab-container.svelte-1qwk8bl.svelte-1qwk8bl{display:flex;align-items:center}.tab-name.svelte-1qwk8bl.svelte-1qwk8bl{margin:0}",
  map: null
};
const Header = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { y } = $$props;
  let { tabs = [
    {
      name: "Home",
      link: `${base}/`,
      icon: "fa-home"
    },
    {
      name: "Projects",
      link: `${base}/projects`,
      icon: "fa-folder"
    },
    {
      name: "Internship",
      link: `${base}/internship`,
      icon: "fa-briefcase"
    },
    {
      name: "About Me",
      link: `${base}/about-me`,
      icon: "fa-user"
    }
  ] } = $$props;
  if ($$props.y === void 0 && $$bindings.y && y !== void 0)
    $$bindings.y(y);
  if ($$props.tabs === void 0 && $$bindings.tabs && tabs !== void 0)
    $$bindings.tabs(tabs);
  $$result.css.add(css);
  return `<header class="${escape(
    null_to_empty("sticky z-[10] top-0 duration-200 px-6 flex items-center justify-between border-b border-solid " + (y > 0 ? " py-4 bg-slate-950 border-violet-950" : " py-6 bg-transparent border-transparent")),
    true
  ) + " svelte-1qwk8bl"}"><a${add_attribute("href", `${base}/`, 0)} target="_blank" class="svelte-1qwk8bl" data-svelte-h="svelte-155tbcb"> <img${add_attribute("src", `${base}/images/cxl.png`, 0)} alt="Chan Xue Li Icon" style="width: fit-content; height: 90px; margin-top: 10px;"></a> <div class="sm:hidden"><button id="sidebaricon" class="text-white svelte-1qwk8bl"><svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">${`<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path>`}</svg></button></div> <div class="sm:flex items-center gap-4 hidden">${each(tabs, (tab, index) => {
    return ` <a${add_attribute("href", tab.link, 0)} class="duration-200 hover:text-violet-400 svelte-1qwk8bl"${add_attribute("target", index === 4 ? "_blank" : "", 0)}><p>${escape(tab.name)}</p> </a>`;
  })} <a${add_attribute("href", `${base}/pdf/ChanXueLi_resume.pdf`, 0)} download class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition duration-300 focus:outline-none focus:ring focus:ring-blue-300 svelte-1qwk8bl" data-svelte-h="svelte-ro8c24">Download Resume</a> <a href="https://www.linkedin.com/in/xue-li" target="_blank" rel="noopener noreferrer" class="svelte-1qwk8bl" data-svelte-h="svelte-1x0x26a"><img src="https://www.svgrepo.com/show/28145/linkedin.svg" width="30" height="30" alt="LinkedIn"></a> <a href="mailto:cxuelisit@gmail.com" target="_blank" rel="noopener noreferrer" class="svelte-1qwk8bl" data-svelte-h="svelte-jsyht3"><img${add_attribute("src", `${base}/icons/gmail.svg`, 0)} width="30" height="30" alt="Gmail"></a></div></header>  <div class="${escape(null_to_empty(`fixed inset-y-0 right-0 z-50 w-64 bg-gray-900 text-white shadow-lg transform transition-transform ease-in-out ${"translate-x-full"}`), true) + " svelte-1qwk8bl"}"><div class="flex justify-end p-4"><button class="text-gray-300" data-svelte-h="svelte-tnzqm1"><svg class="w-6 h-6" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M18 6L6 18M6 6l12 12"></path></svg></button></div>  <div class="flex flex-col items-start gap-4 p-4">${each(tabs, (tab, index) => {
    return ` <div class="tab-container svelte-1qwk8bl"><i class="${"fa " + escape(tab.icon, true) + " tab-icon svelte-1qwk8bl"}"></i> <a${add_attribute("href", tab.link, 0)} class="text-gray-300 hover:text-gray-200 py-2 px-3 rounded transition duration-300 ease-in-out svelte-1qwk8bl"${add_attribute("target", index === 4 ? "_blank" : "", 0)}><p class="tab-name svelte-1qwk8bl">${escape(tab.name)}</p></a> </div>`;
  })} <div class="button-container svelte-1qwk8bl" data-svelte-h="svelte-1v608y8"><a href="https://www.linkedin.com/in/xue-li" target="_blank" rel="noopener noreferrer" class="svelte-1qwk8bl"><img src="https://www.svgrepo.com/show/28145/linkedin.svg" width="30" height="30" alt="LinkedIn"></a> <a href="mailto:cxuelisit@gmail.com" target="_blank" rel="noopener noreferrer" class="svelte-1qwk8bl"><img${add_attribute("src", `${base}/icons/gmail.svg`, 0)} width="30" height="30" alt="Gmail"></a></div> <a${add_attribute("href", `${base}/pdf/ChanXueLi_resume.pdf`, 0)} download class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition duration-300 focus:outline-none focus:ring focus:ring-blue-300 svelte-1qwk8bl" data-svelte-h="svelte-ro8c24">Download Resume</a></div> </div>`;
});
const app = "";
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let y;
  let innerHeight = 0;
  return `<div class="container relative flex flex-col max-w-[1400px] mx-auto w-full text-sm sm:text-base min-h-screen"><div${add_attribute(
    "class",
    "fixed bottom-0 w-full duration-200 flex p-10 z-[10]  pointer-events-none opacity-0",
    0
  )}><button class="ml-auto rounded-full bg-slate-900 text-violet-400 px-3 sm:px-4 hover:bg-slate-800 cursor-pointer aspect-square grid place-items-center" data-svelte-h="svelte-i4zgfz"><i class="fa-solid fa-arrow-up"></i></button></div> ${validate_component(Header, "Header").$$render($$result, { y, innerHeight }, {}, {})} ${slots.default ? slots.default({}) : ``} ${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}</div> `;
});
export {
  Layout as default
};
