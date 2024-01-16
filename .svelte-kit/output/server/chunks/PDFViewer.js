import { c as create_ssr_component, e as escape } from "./ssr.js";
const PDFViewer_svelte_svelte_type_style_lang = "";
const css = {
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
  $$result.css.add(css);
  return `${` <button class="view-pdf-btn svelte-fph8h">${escape(buttonText)}</button>`} ${``}`;
});
export {
  PDFViewer as P
};
