

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/about-me/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/3.847b334d.js","_app/immutable/chunks/scheduler.61ee4713.js","_app/immutable/chunks/index.ad37b216.js","_app/immutable/chunks/paths.69ea9b4b.js","_app/immutable/chunks/Step.b8234421.js"];
export const stylesheets = ["_app/immutable/assets/3.27605dcc.css","_app/immutable/assets/Step.eb9a94c3.css"];
export const fonts = [];
