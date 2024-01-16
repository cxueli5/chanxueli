<script>
  import { base } from "$app/paths";
  import Step from "./Step.svelte";
  let steps = [
    {
      name: "University of Glasgow",
      image: `${base}/icons/uog.jpeg`,
    },
    {
      name: "Singapore Institute of Technology (SIT)",
      image: `${base}/icons/sit.jpeg`,
    },
    {
      name: "Singapore Polytechnic",
      image: `${base}/icons/sp.jpeg`,
    },
    {
      name: "Secondary School",
      icon: "fa-solid fa-graduation-cap",
    },
    {
      name: "Primary School",
      icon: "fa-solid fa-graduation-cap",
    },
    {
      name: "Edusave Certificate of Academic Achievement",
      icon: "fa-solid fa-graduation-cap",
    },
    {
      name: "EAGLES Award",
      icon: "fa-solid fa-graduation-cap",
    },
    {
      name: "NYAA",
      icon: "fa-solid fa-graduation-cap",
    },
  ];
</script>

<svelte:head>
  <title>About Me</title>
</svelte:head>

<main class="flex flex-col flex-1 p-4">
  <section
    id="about"
    class="py-20 pt-10 lg:pt-16 lg:py-32 flex flex-col gap-16 sm:gap-20 md:gap-24 relative"
  >
    <div
      class="flex flex-col gap-2 text-center relative before:absolute before:top-0 before:left-0 before:w-2/3 before:h-1.5 before:bg-violet-700 after:absolute after:bottom-0 after:right-0 after:w-2/3 after:h-1.5 after:bg-violet-700 py-4"
    >
      <h6 class="text-large sm:text-xl md:text-2xl">Hello! Let's learn</h6>
      <h3 class="font-semibold text-3xl sm:text-4xl md:text-5xl">
        <span class="poppins text-violet-400">About</span> me.
      </h3>
    </div>

    <!-- Responsive Tabs -->
    <ul
      class="flex flex-wrap justify-center gap-2 text-sm font-medium text-center text-gray-500 dark:text-gray-400"
    >
      <li class="me-2">
        <a
          href="#myHobbies"
          class="inline-block px-3 py-2 rounded-lg hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-white"
          >Likes</a
        >
      </li>
      <li class="me-2">
        <a
          href="#mySkills"
          class="inline-block px-3 py-2 rounded-lg hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-white"
          >Skills</a
        >
      </li>
      <li class="me-2">
        <a
          href="#myEdu"
          class="inline-block px-3 py-2 rounded-lg hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-white"
          >Education</a
        >
      </li>
      <li class="me-2">
        <a
          href="#myAchievement"
          class="inline-block px-3 py-2 rounded-lg hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-white"
          >Achievements</a
        >
      </li>
    </ul>

    <section
      id="myProfile"
      class="grid grid-cols-1 lg:grid-cols-2 lg:gap-2 gap-10"
    >
      <!-- Profile Picture -->
      <div class="relative shadow-2xl grid place-items-center">
        <img
          id="aboutProfile"
          src={`${base}/images/profile3.jpeg`}
          alt="Chan Xue Li"
          class="object-cover z-[2] max-h-[70vh] rounded-lg overflow-hidden"
        />
      </div>
      <!-- Content -->
      <div
        id="aboutContent"
        class="flex flex-col lg:justify-center text-center lg:text-left gap-6 md:gap-8 lg:gap-10"
      >
        <h2 class="font-semibold text-4xl sm:text-5xl md:text-6xl">About Me</h2>
        <p class="text-base sm:text-lg md:text-xl" style="text-align: justify;">
          My journey with IT began in primary school through the ICT Club CCA,
          sparking a curiosity about its potential to revolutionaise our daily
          lives. This ignited my passion for continuous learning. <br /><br
          />With some interest in business as well, I pursed a
          <b style="color: var(--xblue);">Business IT</b>
          diploma and graduated with a Bachelor's degree with honors in
          <b style="color: var(--xblue);">Computing Science</b>. I aim to
          specialise in
          <b style="color: var(--xpeach);">frontend development</b>,
          <b style="color: var(--xpurple);">UI/UX design</b>, and
          <b style="color: var(--xgreen);">digital marketing</b>. <br /><br />I
          am driven by curiosity, always questioning the 'why' and 'how' of the
          world around us. My personal interests include 🇰🇷 Korean culture
          (K-Pop), 🎨 drawing and 🏸 badminton (casual play not a professional
          haha).
        </p>
        <!-- Resume and Connect -->
        <div class="flex items-center gap-4">
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
      </div>
    </section>
  </section>
  <!-- Tab Content -->
  <!-- Likes -->
  <section id="myHobbies">
    <div
      class="flex flex-col gap-2 text-center relative before:absolute before:top-0 before:left-0 before:w-2/3 before:h-1.5 before:bg-violet-700 after:absolute after:bottom-0 after:right-0 after:w-2/3 after:h-1.5 after:bg-violet-700 py-4"
    >
      <h6 class="text-large sm:text-xl md:text-2xl"></h6>
      <h3 class="font-semibold text-3xl sm:text-4xl md:text-5xl">Likes</h3>
    </div>
    <br />
    <div class="grid grid-cols-1 md:grid-cols-5 gap-4">
      <div class="grid-item">
        <img src={`${base}/likes/like1.jpeg`} alt="Kpop concert" />
      </div>
      <div class="grid-item">
        <img src={`${base}/likes/like2.jpeg`} alt="Kpop concert" />
      </div>
      <div class="grid-item">
        <img src={`${base}/likes/like3.jpeg`} alt="Drawing" />
      </div>
      <div class="grid-item">
        <img src={`${base}/likes/like4.jpeg`} alt="Drawing" />
      </div>
      <div class="grid-item">
        <img src={`${base}/likes/like5.jpeg`} alt="Badminton" />
      </div>
    </div>
  </section>

  <!-- Skills -->
  <section id="mySkills">
    <br />
    <div
      class="flex flex-col gap-2 text-center relative before:absolute before:top-0 before:left-0 before:w-2/3 before:h-1.5 before:bg-violet-700 after:absolute after:bottom-0 after:right-0 after:w-2/3 after:h-1.5 after:bg-violet-700 py-4"
    >
      <h6 class="text-large sm:text-xl md:text-2xl"></h6>
      <h3 class="font-semibold text-3xl sm:text-4xl md:text-5xl">Skills</h3>
    </div>
    <br />
    <div class="grid grid-cols-1 md:grid-cols-6 gap-4">
      <div class="grid-item">
        <img id="skillIcon" src={`${base}/skills/html.png`} alt="HTML" />
      </div>
      <div class="grid-item">
        <img id="skillIcon" src={`${base}/skills/css.png`} alt="CSS" />
      </div>
      <div class="grid-item">
        <img
          id="skillIcon"
          src={`${base}/skills/javascript.png`}
          alt="Javascript"
        />
      </div>
      <div class="grid-item">
        <img id="skillIcon" src={`${base}/skills/jquery.png`} alt="jQuery" />
      </div>
      <div class="grid-item">
        <img id="skillIcon" src={`${base}/skills/svelte.png`} alt="svelte" />
      </div>
      <div class="grid-item">
        <img id="skillIcon" src={`${base}/skills/python.png`} alt="python" />
      </div>
      <div class="grid-item">
        <img
          id="skillIcon"
          src={`${base}/skills/illustrator.png`}
          alt="illustrator"
        />
      </div>
      <div class="grid-item">
        <img
          id="skillIcon"
          src={`${base}/skills/photoshop.png`}
          alt="photoshop"
        />
      </div>
      <div class="grid-item">
        <img id="skillIcon" src={`${base}/skills/xd.png`} alt="xd" />
      </div>
      <div class="grid-item">
        <img id="skillIcon" src={`${base}/skills/figma.png`} alt="figma" />
      </div>
      <div class="grid-item">
        <img id="skillIcon" src={`${base}/skills/sql.png`} alt="sql" />
      </div>
      <div class="grid-item">
        <img id="skillIcon" src={`${base}/skills/react.png`} alt="react" />
      </div>
      <div class="grid-item">
        <img
          id="skillIcon"
          src={`${base}/skills/premire.png`}
          alt="premiere"
        />
      </div>
    </div>
  </section>

  <!-- Education -->
  <section
    id="myEdu"
    class="py-20 pt-10 lg:pt-16 lg:py-32 flex flex-col gap-16 sm:gap-20 md:gap-24 relative"
  >
    <div
      class="flex flex-col gap-2 text-center relative before:absolute before:top-0 before:left-0 before:w-2/3 before:h-1.5 before:bg-violet-700 after:absolute after:bottom-0 after:right-0 after:w-2/3 after:h-1.5 after:bg-violet-700 py-4"
    >
      <h3 class="font-semibold text-3xl sm:text-4xl md:text-5xl">
        <h6 class="text-large sm:text-xl md:text-2xl"></h6>
        Education
      </h3>
    </div>
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-20 lg:gap-25">
      <Step step={steps[0]}>
        <p>
          <b style="color: var(--xpeach);">
            Bachelor of Science - BS with Honours in Computing Science
          </b>
          |
          <b style="color: var(--xblue);">Sep 2021 - Sep 2024 (3 years)</b>
        </p>
      </Step>
      <Step step={steps[1]}>
        <p>
          <b style="color: var(--xpeach);">
            Bachelor of Science - BS with Honours in Computing Science
          </b>
          |
          <b style="color: var(--xblue);">Sep 2021 - Sep 2024 (3 years)</b>
        </p>
      </Step>
      <Step step={steps[2]}>
        <p>
          <b style="color: var(--xpeach);">
            Diploma in Business Information Technology
          </b>
          |
          <b style="color: var(--xblue);">April 2018 - May 2021 (3 years)</b>
        </p>
        <div id="internContent">
          <p>
            <b style="color: var(--xpurple);">CCA:</b> Leo Club (Volunteering Activities),
            Welfare Club (Volunteering Activities), Sign Language Club (Basic)
          </p>
        </div>
      </Step>
      <Step step={steps[3]}>
        <div id="internContent">
          <p>
            <b style="color: var(--xpurple);">CCA:</b> Drama Club <br /><br />
            <b>Represented school in:</b>
            Singapore Youth Festival 2015 and 2017 (Represented School at SYF Arts
            Presentation, obtained Certificate of Accomplishment, Drama)
            <br /><br />
            Others: Secondary 3 Entrepreneurship Fair (Participant)
          </p>
        </div>
      </Step>
      <Step step={steps[4]}>
        <div id="internContent">
          <p>
            <b style="color: var(--xpurple);">CCA:</b> ICT Club (Chairperson)<br
            /> <br />
            <b>Represented school for:</b>
            School Digital Media Awards 2011, School Digital Media Awards 2012, National
            Infocomm Club Awards Competition 2013
          </p>
        </div>
      </Step>
    </div>
  </section>

  <!-- Achievement -->
  <section
    id="myAchievement"
    class="py-20 pt-10 lg:pt-16 lg:py-32 flex flex-col gap-16 sm:gap-20 md:gap-24 relative"
  >
    <div
      class="flex flex-col gap-2 text-center relative before:absolute before:top-0 before:left-0 before:w-2/3 before:h-1.5 before:bg-violet-700 after:absolute after:bottom-0 after:right-0 after:w-2/3 after:h-1.5 after:bg-violet-700 py-4"
    >
      <h3 class="font-semibold text-3xl sm:text-4xl md:text-5xl">
        <h6 class="text-large sm:text-xl md:text-2xl"></h6>
        Achievements
      </h3>
    </div>
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-20 lg:gap-25">
      <Step step={steps[5]}>
        <p>
          <b style="color: var(--xblue);">Nov 2020</b>
        </p>
        <div class="internContent">
          <p>
            Good performance and conduct in school coming in among top 25% in my
            level and course (Diploma in Business Information Technology at
            Singapore Polytechnic)
          </p>
        </div>
      </Step>
      <Step step={steps[6]}>
        <p>
          <b style="color: var(--xblue);">Jan 2018</b>
        </p>
        <div class="internContent">
          <p>Edusave Award for Achievement, Good Leadership and Service</p>
        </div>
      </Step>
      <Step step={steps[7]}
        ><p>
          <b style="color: var(--xblue);">Aug 2017</b>
        </p>
        <p>
          National Youth Achievement Award Singapore |
          <b style="color: var(--xblue);">Silver Award</b>
        </p>
      </Step>
    </div>
  </section>
</main>

<style>
  #aboutContent {
    padding-right: 30px;
  }

  @media (max-width: 1024px) {
    /* Tablet size */
    ul li a {
      padding: 8px 16px;
    }
    #aboutProfile {
      max-height: 30vh;
    }
    #aboutContent {
      padding-right: 0px;
    }
  }

  @media (max-width: 768px) {
    /* Mobile size */
    ul li a {
      padding: 6px 12px;
    }
    #aboutProfile {
      max-height: 50vh;
    }
    #aboutContent {
      padding-right: 0px;
    }
  }

  #skillIcon {
    width: fit-content;
    height: 200px;
    margin-right: auto;
    margin-left: auto;
  }
</style>
