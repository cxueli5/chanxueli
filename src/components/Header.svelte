<script>
  import { onMount } from "svelte";
  import { base } from "$app/paths";

  export let y;

  export let tabs = [
    { name: "Home", link: `${base}/`, icon: "fa-home" },
    { name: "Projects", link: `${base}/projects`, icon: "fa-folder" },
    { name: "Jobs/Internship", link: `${base}/internship`, icon: "fa-briefcase" },
    { name: "About Me", link: `${base}/about-me`, icon: "fa-user" },
  ];

  let showSidebar = false;

  function toggleSidebar() {
    showSidebar = !showSidebar;
  }

  onMount(() => {
    // Add any initialization or side effects here
  });
</script>

<header
  class={"sticky z-[10] top-0 duration-200 px-6 flex items-center justify-between border-b border-solid " +
    (y > 0
      ? " py-4 bg-slate-950 border-violet-950"
      : " py-6 bg-transparent border-transparent")}
>
  <a href={`${base}/`} target="_blank">
    <!-- <h1 class="font-medium">
      <b class="font-bold poppins">Chan Xue Li</b>
    </h1> -->
    <img
      src={`${base}/images/cxl.png`}
      alt="Chan Xue Li Icon"
      style="width: fit-content; height: 90px; margin-top: 10px;"
    />
  </a>

  <div class="sm:hidden">
    <button id="sidebaricon" class="text-white" on:click={toggleSidebar}>
      <svg
        class="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        {#if showSidebar}
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M6 18L18 6M6 6l12 12"
          />
        {:else}
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16m-7 6h7"
          />
        {/if}
      </svg>
    </button>
  </div>

  <div class="sm:flex items-center gap-4 hidden">
    {#each tabs as tab, index}
      <!-- TO DO: change target index -->
      <a
        href={tab.link}
        class="duration-200 hover:text-violet-400"
        target={index === 4 ? "_blank" : ""}
      >
        <p>{tab.name}</p>
      </a>
    {/each}
    <a
      href={`${base}/pdf/ChanXueLi_resume.pdf`}
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
      <img src={`${base}/icons/gmail.svg`} width="30" height="30" alt="Gmail" />
    </a>
  </div>
</header>

<!-- Sidebar -->
<div
  class={`fixed inset-y-0 right-0 z-50 w-64 bg-gray-900 text-white shadow-lg transform transition-transform ease-in-out ${
    showSidebar ? "translate-x-0" : "translate-x-full"
  }`}
>
  <div class="flex justify-end p-4">
    <button class="text-gray-300" on:click={toggleSidebar}>
      <svg
        class="w-6 h-6"
        fill="none"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path d="M18 6L6 18M6 6l12 12"></path>
      </svg>
    </button>
  </div>
  <!-- Sidebar content -->
  <div class="flex flex-col items-start gap-4 p-4">
    {#each tabs as tab, index}
      <!-- TO DO: change target index -->
      <div class="tab-container">
        <i class="fa {tab.icon} tab-icon"></i>
        <a
          href={tab.link}
          class="text-gray-300 hover:text-gray-200 py-2 px-3 rounded transition duration-300 ease-in-out"
          target={index === 4 ? "_blank" : ""}
          on:click={toggleSidebar}
        >
          <p class="tab-name">{tab.name}</p>
        </a>
      </div>
    {/each}
    <div class="button-container">
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
    <a
      href={`${base}/pdf/ChanXueLi_resume.pdf`}
      download
      class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition duration-300 focus:outline-none focus:ring focus:ring-blue-300"
    >
      Download Resume
    </a>
  </div>
</div>

<style>
  #sidebaricon {
    margin-top: -900px;
  }

  .button-container {
    display: flex;
  }

  .button-container a {
    margin-right: 10px; /* Adjust the spacing between icons as needed */
  }

  .tab-container {
    display: flex;
    align-items: center;
  }

  /* .tab-icon {
    font-size: 24px;
    margin-right: 10px;
  } */

  .tab-name {
    margin: 0;
  }
</style>
