

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/projects/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/5.fe388502.js","_app/immutable/chunks/scheduler.61ee4713.js","_app/immutable/chunks/index.ad37b216.js","_app/immutable/chunks/Step.0964f894.js","_app/immutable/chunks/paths.ae1154bc.js","_app/immutable/chunks/ImageViewer.02603f4a.js"];
export const stylesheets = ["_app/immutable/assets/5.360b9de1.css","_app/immutable/assets/Step.ce46596e.css"];
export const fonts = [];
