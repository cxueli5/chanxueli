

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/internship/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/4.fd48dc87.js","_app/immutable/chunks/scheduler.61ee4713.js","_app/immutable/chunks/index.ad37b216.js","_app/immutable/chunks/paths.b290ff6a.js","_app/immutable/chunks/Step.b8234421.js","_app/immutable/chunks/ImageViewer.7bd8225d.js"];
export const stylesheets = ["_app/immutable/assets/4.ef1d6421.css","_app/immutable/assets/Step.eb9a94c3.css","_app/immutable/assets/ImageViewer.8300ddeb.css"];
export const fonts = [];
