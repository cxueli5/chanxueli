<script>
  import { base } from "$app/paths";
</script>

<svelte:head>
  <title>Chan Xue Li</title>
</svelte:head>

<main class="flex flex-col flex-1" style="padding: 30px;">
  <!-- <section
    id="introPage"
    class="grid grid-cols-1 lg:grid-cols-2 gap-10 py-8 sm:py-14"
  > -->
  <section id="introPage" class="grid grid-cols-1 lg:grid-cols-2 gap-10">
    <!-- <div
      class="flex flex-col lg:justify-center text-center lg:text-left gap-6 md:gap-8 lg:gap-10"
    > -->
    <div
      class="flex flex-col lg:justify-center text-center lg:text-left gap-6 md:gap-8 lg:gap-10"
    >
      <h2
        class="font-semibold text-4xl sm:text-5xl md:text-6xl"
        style="line-height: 1.5;"
      >
        Welcome to my site! <br /> I am Chan
        <span style="color: var(--xblue);">Xue Li</span> 😊
      </h2>
      <p class="text-base sm:text-lg md:text-xl" style="text-align: justify;">
        My keen interest lies in
        <b style="color: var(--xpeach);">frontend development</b>,
        <b style="color: var(--xpurple);">UI/UX design</b>, and
        <b style="color: var(--xgreen);">digital marketing</b>.
        <b
          style="background: linear-gradient(to right, var(--xpink), var(--xpurple), var(--xpeach), var(--xyellow), var(--xgreen), var(--xblue)); -webkit-background-clip: text; -webkit-text-fill-color: transparent;"
          >A fun fact about this site:</b
        >
        It's coded in Svelte, a skill I picked up during my internship. Let's connect
        and explore together!
      </p>
      <div class="flex items-center gap-4">
        <a
          href="pdf/potrait.pdf"
          download
          class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition duration-300 focus:outline-none focus:ring focus:ring-blue-300"
        >
          Download Resume
        </a>
        <a
          href="https://www.linkedin.com/in/xue-li"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://www.svgrepo.com/show/28145/linkedin.svg"
            width="30"
            height="30"
            alt="LinkedIn"
          />
        </a>
        <a
          href="mailto:cxuelisit@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={`${base}/icons/gmail.svg`}
            width="30"
            height="30"
            alt="Gmail"
          />
        </a>
      </div>
    </div>
    <div class="relative shadow-2xl grid place-items-center">
      <img
        src={`${base}/images/profile1.jpg`}
        alt="Chan Xue Li"
        class="object-cover z-[2] max-h-[70vh] rounded-full overflow-hidden"
      />
    </div>
  </section>
</main>
