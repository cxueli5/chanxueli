

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.fe1ad273.js","_app/immutable/chunks/scheduler.61ee4713.js","_app/immutable/chunks/index.ad37b216.js","_app/immutable/chunks/singletons.d549fa28.js","_app/immutable/chunks/paths.a4dfc6e7.js"];
export const stylesheets = [];
export const fonts = [];
