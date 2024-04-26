

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.e63d9943.js","_app/immutable/chunks/scheduler.61ee4713.js","_app/immutable/chunks/index.ad37b216.js","_app/immutable/chunks/singletons.9e2c8e9d.js","_app/immutable/chunks/paths.ce3b1d9e.js"];
export const stylesheets = [];
export const fonts = [];
