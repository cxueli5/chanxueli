import { c as create_ssr_component, e as escape } from "./ssr.js";
import "./Step.js";
const css = {
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
  $$result.css.add(css);
  return `${` <button class="view-image-btn svelte-2xfb09">${escape(buttonText)}</button>`}`;
});
export {
  ImageViewer as I
};
