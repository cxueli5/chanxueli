

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.88b6b4d4.js","_app/immutable/chunks/scheduler.61ee4713.js","_app/immutable/chunks/index.ad37b216.js","_app/immutable/chunks/singletons.e36d98ba.js","_app/immutable/chunks/paths.b290ff6a.js"];
export const stylesheets = [];
export const fonts = [];
