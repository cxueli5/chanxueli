

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.80e22f68.js","_app/immutable/chunks/scheduler.61ee4713.js","_app/immutable/chunks/index.ad37b216.js","_app/immutable/chunks/paths.f066ec98.js"];
export const stylesheets = [];
export const fonts = [];
