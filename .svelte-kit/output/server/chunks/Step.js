import { c as create_ssr_component, e as escape, b as add_attribute, d as null_to_empty } from "./ssr.js";
const PDFViewer_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".pdf-preview.svelte-fph8h.svelte-fph8h{width:100%;max-width:100%;overflow:auto}.pdf-preview.svelte-fph8h iframe.svelte-fph8h{width:100%;height:100%;min-height:500px;min-width:500px}.view-pdf-btn.svelte-fph8h.svelte-fph8h,.close-pdf-btn.svelte-fph8h.svelte-fph8h,.close-error-btn.svelte-fph8h.svelte-fph8h{padding:10px 20px;border:none;border-radius:5px;font-weight:bold;cursor:pointer;transition:background-color 0.3s ease}.view-pdf-btn.svelte-fph8h.svelte-fph8h{background-color:#4285f4;color:white}.close-pdf-btn.svelte-fph8h.svelte-fph8h,.close-error-btn.svelte-fph8h.svelte-fph8h{background-color:#ea4335;color:white;margin-top:10px}.close-pdf-btn.svelte-fph8h.svelte-fph8h:hover,.close-error-btn.svelte-fph8h.svelte-fph8h:hover{background-color:#ff6659}.view-pdf-btn.svelte-fph8h.svelte-fph8h:hover{background-color:lightblue;color:black}@media screen and (max-width: 768px){.pdf-preview.svelte-fph8h iframe.svelte-fph8h{width:95%;height:95%}.close-pdf-btn.svelte-fph8h.svelte-fph8h{top:10px;right:10px;padding:8px 15px}}",
  map: null
};
const PDFViewer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { filePath } = $$props;
  let { buttonText = "View PDF" } = $$props;
  if ($$props.filePath === void 0 && $$bindings.filePath && filePath !== void 0)
    $$bindings.filePath(filePath);
  if ($$props.buttonText === void 0 && $$bindings.buttonText && buttonText !== void 0)
    $$bindings.buttonText(buttonText);
  $$result.css.add(css$1);
  return `${` <button class="view-pdf-btn svelte-fph8h">${escape(buttonText)}</button>`} ${``}`;
});
const ImageViewer_svelte_svelte_type_style_lang = "";
const Step_svelte_svelte_type_style_lang = "";
const css = {
  code: ".icon-image.svelte-18x6r3h{width:fit-content;height:100px}",
  map: null
};
const Step = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { step } = $$props;
  if ($$props.step === void 0 && $$bindings.step && step !== void 0)
    $$bindings.step(step);
  $$result.css.add(css);
  return `<a${add_attribute("href", step.href, 0)} target="_blank" class="p-4 sm:p-6 md:p-8 flex flex-col gap-4 rounded-lg border border-solid border-violet-700 text-center cursor-pointer group hover:border-violet-400 duration-200"><div class="bg-slate-950 grid place-items-center px-4 text-5xl md:text-6xl -mt-10 sm:-mt-12 md:-mt-14 lg:-mt-16 mx-auto duration-200">${step.icon ? `<i class="${escape(null_to_empty(step.icon), true) + " svelte-18x6r3h"}"></i>` : `${step.image ? `<img${add_attribute("src", step.image, 0)}${add_attribute("alt", step.name, 0)} class="icon-image svelte-18x6r3h">` : ``}`}</div> <h3 class="font-medium text-xl sm:text-2xl md:text-3xl">${escape(step.name)}</h3>  ${slots.default ? slots.default({}) : ``}  </a>`;
});
export {
  PDFViewer as P,
  Step as S
};
