export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "chanxueli/_app",
	assets: new Set([".DS_Store",".nojekyll","assets/particles.json","assets/test.gif","assets/test2.gif","assets/test3.gif","assets/test4.gif","favicon.png","icons/.DS_Store","icons/bic.png","icons/espeed_logo.png","icons/fullerton.jpeg","icons/gmail.svg","icons/illustrator.png","icons/liho.jpeg","icons/sit.jpeg","icons/sp.jpeg","icons/sph_logo.jpeg","icons/uog.jpeg","images/cxl.png","images/profile1.jpg","images/profile2.jpeg","images/profile3.jpeg","intern/.DS_Store","intern/arts-analysis.jpg","intern/arts-pick.jpg","intern/bic2.jpeg","intern/bic3.jpeg","intern/cartoons.jpg","intern/espeed_logo.jpg","intern/food.jpg","intern/studytrust.jpeg","intern/superlative.jpg","intern/wip.jpg","LeXImg/tomato1.jpeg","LeXImg/tomato2.jpeg","LeXImg/tomato3.jpeg","LeXImg/tomato4.jpeg","LeXImg/tomato5.jpeg","likes/like1.jpeg","likes/like2.jpeg","likes/like3.jpeg","likes/like4.jpeg","likes/like5.jpeg","pdf/.DS_Store","pdf/ChanXueLi_resume.pdf","pdf/ChanXueLi_resume_print_ver.pdf","pdf/pdf1.pdf","pdf/pdf2.pdf","pdf/pdf3.pdf","pdf/pdf4.pdf","pdf/pdf5.pdf","pdf/pdf7.pdf","pdf/potrait.pdf","polyImg/DBIT1A02a, 1816655 Chan Xue Li - Brochure (2).jpg","polyImg/DBIT1A02a, 1816655 Chan Xue Li - Brochure.jpg","polyImg/DBIT1A02a, 1816655 Chan Xue Li - Flyer.jpg","polyImg/ladigi1.png","polyImg/ladigi2.png","polyImg/ladigi3.png","polyImg/pdf1.png","polyImg/pdf2.png","polyImg/pdf3.png","polyImg/pdf4.png","polyImg/pdf5.png","polyImg/pdf6.png","skills/.DS_Store","skills/css.png","skills/figma.png","skills/html.png","skills/illustrator.png","skills/javascript.png","skills/jquery.png","skills/photoshop.png","skills/premire.png","skills/python.png","skills/react.png","skills/sql.png","skills/svelte.png","skills/xd.png","testimonials/.DS_Store","testimonials/Bic-Testimonial.jpeg","testimonials/E-Speed.pdf","testimonials/sp_testimonial.pdf"]),
	mimeTypes: {".json":"application/json",".gif":"image/gif",".png":"image/png",".jpeg":"image/jpeg",".svg":"image/svg+xml",".jpg":"image/jpeg",".pdf":"application/pdf"},
	_: {
		client: {"start":"_app/immutable/entry/start.7c0f61cc.js","app":"_app/immutable/entry/app.0ec9ce8f.js","imports":["_app/immutable/entry/start.7c0f61cc.js","_app/immutable/chunks/scheduler.61ee4713.js","_app/immutable/chunks/singletons.5bbb3edf.js","_app/immutable/chunks/paths.609ad5a4.js","_app/immutable/entry/app.0ec9ce8f.js","_app/immutable/chunks/scheduler.61ee4713.js","_app/immutable/chunks/index.ad37b216.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js')),
			__memo(() => import('./nodes/3.js')),
			__memo(() => import('./nodes/4.js')),
			__memo(() => import('./nodes/5.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/about-me",
				pattern: /^\/about-me\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/internship",
				pattern: /^\/internship\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/projects",
				pattern: /^\/projects\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 5 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})();
