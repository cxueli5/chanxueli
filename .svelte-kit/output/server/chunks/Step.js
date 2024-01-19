import { c as create_ssr_component, b as add_attribute, e as escape, d as null_to_empty } from "./ssr.js";
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
  Step as S
};
