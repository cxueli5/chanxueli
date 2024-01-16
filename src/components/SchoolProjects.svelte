<script>
  import Step from "./Step.svelte";
  import PDFViewer from "./PDFViewer.svelte";
  import { base } from "$app/paths";

  let steps = [
    {
      name: "TikTok Youth Camp 2022 (Hangman Project, Frontend)",
      icon: "fa-solid fa-gamepad",
    },
    {
      name: "Portfolio Website",
      icon: "fa-solid fa-plane",
    },
    {
      name: "OIP Design Thinking Journal (📍UoG, Glasgow)",
      icon: "fa-solid fa-plane",
    },
    {
      name: "OIP Virtual Exhibition, Alexander Thomsons (📍UoG, Glasgow)",
      icon: "fa-solid fa-university",
    },
    {
      name: "Tan Tock Seng Endoscopy Tracker",
      icon: "fa-solid fa-stethoscope",
    },
    {
      name: "UOB Final Year Project",
      icon: "fa-solid fa-university",
    },
    {
      name: "SP Lex Program",
      icon: "fa-solid fa-plane",
    },
    {
      name: "SP Infographics (Modules)",
      icon: "fa-solid fa-graduation-cap",
    },
    {
      name: "SP Digital Marketing (Module)",
      icon: "fa-solid fa-graduation-cap",
    },
  ];
</script>

<svelte:head>
  <title>Projects</title>
</svelte:head>

<main class="flex flex-col flex-1 p-4">
  <!-- <section class="py-20 lg:py-32 flex flex-col gap-24" id="projects"> -->
  <section
    class="py-20 pt-10 lg:pt-16 lg:py-32 flex flex-col gap-16 sm:gap-20 md:gap-24 relative"
    id="projects"
  >
    <!-- Personal Projects -->
    <div
      class="flex flex-col gap-2 text-center relative before:absolute before:top-0 before:left-0 before:w-2/3 before:h-1.5 before:bg-violet-700 after:absolute after:bottom-0 after:right-0 after:w-2/3 after:h-1.5 after:bg-violet-700 py-4"
    >
      <h6 class="text-large sm:text-xl md:text-2xl">By Me</h6>
      <h3 class="font-semibold text-3xl sm:text-4xl md:text-5xl">
        <span class="poppins text-violet-400">Personal</span> Projects
      </h3>
    </div>
    <div class="grid grid-cols-1 lg:grid-cols-1 gap-20 lg:gap-25">
      <Step step={steps[0]}>
        <p>
          Took part in this bootcamp to enhance my frontend development skills.
          My group achieved <b style="color: var(--xpink);"
            >2nd best user experience</b
          >.
        </p>
        <!-- <button
          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          style="width: fit-content; margin-right: auto; margin-left: auto;"
        >
          <a href="https://youtu.be/FkEoiOE0eqQ" target="_blank">
            Project Demo
          </a>
        </button> -->
        <!-- <iframe width="560" height="315" src="https://www.youtube.com/embed/FkEoiOE0eqQ?si=dfsev3Le7rOfpWDA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen style="margin-right:auto; margin-left:"></iframe> -->
        <div class="mobile-responsive-iframe">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/FkEoiOE0eqQ?si=dfsev3Le7rOfpWDA"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
            style="margin-right:auto; margin-left:auto;"
          ></iframe>
        </div>
        <p>
          <b style="color: var(--xpeach);">My role in the team</b> (highlight):
          <br />
          Developed telebot game for the game web application for the first time
          using node.js, used GitHub for collaboration and Heroku for deployment.
          Video by me.
        </p>
        <p>
          <b style="color: var(--xyellow);">New skills I learnt</b>: <br />
          Web animation, React, Andriod Development (basic)
        </p>
        <p></p>
        <p>
          <b style="color:var(--xpurple);">Skills: </b> Node.js · JSON · Heroku ·
          Python (Programming Language) · GitHub · Cascading Style Sheets (CSS) ·
          HTML5
        </p>
      </Step>
      <Step step={steps[1]}>
        <p>
          What you are looking now is my personal portfolio website, developed
          using <b style="color: var(--xpeach);">Svelte</b>. Svelte is one of
          the skills I learnt during my internship at SPH Media.
        </p>
        <button
          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          style="width: fit-content; margin-right: auto; margin-left: auto;"
        >
          <a
            href="https://cxueli5.github.io/chanxueli/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Project Link
          </a>
        </button>
        <p>
          <b style="color:var(--xpurple);">Skills: </b> Svelte · HTML5 · CSS · TailwindCSS
          · JavaScript
        </p>
      </Step>
    </div>
    <!-- University Projects -->
    <div
      class="flex flex-col gap-2 text-center relative before:absolute before:top-0 before:left-0 before:w-2/3 before:h-1.5 before:bg-violet-700 after:absolute after:bottom-0 after:right-0 after:w-2/3 after:h-1.5 after:bg-violet-700 py-4"
    >
      <h6 class="text-large sm:text-xl md:text-2xl">
        Computing Science (Relevant)
      </h6>
      <h3 class="font-semibold text-3xl sm:text-4xl md:text-5xl">
        <span class="poppins text-violet-400">University</span> Projects
      </h3>
    </div>
    <a
      href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
      target="_blank"
      class="mx-auto px-4 py-2 rounded-md border border-solid border-white flex items-center gap-2 -mb-4 sm:-mb-0 -mt-10 hover:border-violet-700 duration-200"
    >
      <i class="fa-regular fa-circle-play" />
      <p>Watch the video</p>
    </a>
    <div class="grid grid-cols-1 lg:grid-cols-1 gap-20 lg:gap-25">
      <Step step={steps[2]}>
        <p>
          This project is part of <b style="color:var(--xblue);"
            >SIT-UoG Overseas Immersion Program in University of Glasgow</b
          >
        </p>
        <button
          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          style="width: fit-content; margin-right: auto; margin-left: auto;"
        >
          <a href="https://whathellahor.github.io/3003-uog/" target="_blank">
            Website Link (view in desktop)
          </a>
        </button>
        <p>
          A website documenting my team's journey in creating a <b
            style="color:var(--xpeach);">virtual exhibition</b
          > for The Mitchell Library. This exhibition showcases one of Glasgow's
          reowned arhitects, Alexander Thomson's works and buildings around Glasgow
        </p>
        <p>
          <b style="color:var(--xpurple);">Skills: </b> Design Thinking · Teamwork
          · Communication · Tailwind CSS · Interpersonal Skills · Cascading Style
          Sheets (CSS) · HTML5 · JavaScript
        </p>
      </Step>
      <Step step={steps[3]}>
        <p>
          This project is part of <b style="color:var(--xblue);"
            >SIT-UoG Overseas Immersion Program in University of Glasgow</b
          >
        </p>
        <div class="button-container">
          <button class="button">
            <a
              href="https://whathellahor.github.io/3003-alexanderthomson/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Project Link
            </a>
          </button>
          <!-- <button class="button">
            <a
              href="https://www.youtube.com/watch?v=Vfy14ZsiwgU"
              target="_blank"
              rel="noopener noreferrer"
            >
              Project Demo
            </a>
          </button> -->
          <div class="mobile-responsive-iframe">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/Vfy14ZsiwgU?si=xCQWSQdhvZEj0Tod"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
              style="margin-right:auto; margin-left: auto;"
            ></iframe>
          </div>
        </div>
        <p>
          Developed a <b style="color:var(--xpeach);">virtual exhibition</b> for
          The Mitchell Library to showcase one of Glasgow's reowned architects,
          Alexander Thomson's works and buildings around Glasgow. This
          exhibition includes
          <b style="color: var(--xgreen);">virtual tours with AR integration</b
          >, <b style="color:var(--xpink);">virtual gallery</b> of Thomson's
          works and <b style="color:var(--xblue);">biography</b> on Alexander Thomson.
        </p>
        <p>
          <b style="color:var(--xpurple);">Skills: </b> User Interface Design · UX
          · UI · AR · Tailwind CSS · Interpersonal Skills · Cascading Style Sheets
          (CSS) · HTML5
        </p>
      </Step>
      <Step step={steps[4]}>
        <p>
          A project from Human Computer Interaction <b
            style="color:var(--xblue);"
          >
            (HCI) module in collaboration with TTSH</b
          >.
        </p>
        <!-- <button
          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          style="width: fit-content; margin-right: auto; margin-left: auto;"
        >
          <a href="https://www.youtube.com/watch?v=twtxvbZTi-E" target="_blank">
            Project Demo
          </a>
        </button> -->
        <div class="mobile-responsive-iframe">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/twtxvbZTi-E?si=HsE-q3lkU_D5rDEk"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
            style="margin-right:auto; margin-left: auto;"
          ></iframe>
        </div>
        <p>
          My team did a <b style="color:var(--xpeach);">mobile app prototype</b>
          that helps the nurses
          <b style="color: var(--xpink);">keep track of their tasks</b>,
          <b style="color: var(--xpurple);"
            >schedule endoscopy washes and update status</b
          >,
          <b style="color: var(--xgreen);"
            >search for patients and endoscopies from their respective databases</b
          >.
        </p>
        <p>
          <b style="color:var(--xpurple);">Skills: </b> React Native · Firebase ·
          Human Computer Interaction · Prototyping · Usability Testing · Heuristic
          Evaluation · Storyboarding · UX · UI
        </p>
      </Step>
    </div>
    <!-- Polytechnic Projects -->
    <div
      class="flex flex-col gap-2 text-center relative before:absolute before:top-0 before:left-0 before:w-2/3 before:h-1.5 before:bg-violet-700 after:absolute after:bottom-0 after:right-0 after:w-2/3 after:h-1.5 after:bg-violet-700 py-4"
    >
      <h6 class="text-large sm:text-xl md:text-2xl">
        Business Information Technology (Relevant)
      </h6>
      <h3 class="font-semibold text-3xl sm:text-4xl md:text-5xl">
        <span class="poppins text-violet-400">Polytechnic</span> Projects
      </h3>
    </div>
    <div class="grid grid-cols-1 lg:grid-cols-1 gap-20 lg:gap-25">
      <Step step={steps[5]}>
        <p>
          Final Year Project in collaboration with <b
            style="color: var(--xblue);">UOB</b
          >.
        </p>
        <!-- <button
          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          style="width: fit-content; margin-right: auto; margin-left: auto;"
        >
          <a href="https://www.youtube.com/watch?v=5MjS_Ikhy4E" target="_blank">
            Project Demo
          </a>
        </button> -->
        <div class="mobile-responsive-iframe">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/5MjS_Ikhy4E?si=4OH7WUPhPvmwI2fx"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
            style="margin-right:auto; margin-left:auto;"
          ></iframe>
        </div>
        <p>
          Created a Branch Service Portal for customers to complete specific
          banking transaction and self-services for any bank related enquiries. <br
          />Learnt how to use AEM software to create forms.
        </p>
        <p>
          <b style="color:var(--xpurple);">Skills: </b> AEM Software · JSON · GitHub
          · Cascading Style Sheets (CSS) · HTML5
        </p>
      </Step>
      <Step step={steps[6]}>
        <p>
          Selected by SP to go on a Learning Xchange program to Isabella,
          Philippines and worked with a team of students from other courses to
          develop a solution for the locals tomato jam business.
        </p>
        <button
          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          style="width: fit-content; margin-right: auto; margin-left: auto;"
        >
          <a
            href="https://docs.google.com/presentation/d/122nz4PTKasPWXog0QvH8id-Sz3XxaX4xQ8iDLcMOg40/edit#slide=id.g56036d978a_0_70"
            target="_blank"
            rel="noopener noreferrer"
          >
            Project Presentation
          </a>
        </button>
        <p>
          <b style="color:var(--xpurple);">Skills: </b> Design Thinking · Interpersonal
          Skills · Teamwork
        </p>

        <!-- photogrid -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div class="grid-item">
            <img src={`${base}/LeXImg/tomato1.jpeg`} alt="Tomato 1" /><br />
            <p>Tomato Family Team</p>
          </div>
          <div class="grid-item">
            <img src={`${base}/LeXImg/tomato2.jpeg`} alt="Tomato 2" /><br />
            <p>Interview with Village Chief</p>
          </div>
          <div class="grid-item">
            <img src={`${base}/LeXImg/tomato3.jpeg`} alt="Tomato 3" /><br />
            <p>Showcase</p>
          </div>
          <div class="grid-item">
            <img src={`${base}/LeXImg/tomato4.jpeg`} alt="Tomato 4" /><br />
            <p>Tomato Jam Making Process</p>
          </div>
          <div class="grid-item">
            <img src={`${base}/LeXImg/tomato5.jpeg`} alt="Tomato 5" /><br />
            <p>Tomato Jam Machine Prototype</p>
          </div>
        </div>
      </Step>
      <Step step={steps[7]}>
        <p>
          Some infographic works done using <img
            src={`${base}/icons/illustrator.png`}
            alt="Illustrator Icon"
            style="width: 20px; height: auto; margin-right: 5px; display: inline;"
          /> Adobe Illustrator for my modules.
        </p>

        <p>
          <b style="color:var(--xpurple);">Skills: </b> Adobe Illustrator · Adobe
          XD · UI · UX · Design Thinking · Team Collaboration
        </p>

        <div class="project-thumbnail">
          <!-- Thumbnail image -->
          <img src={`${base}/polyImg/pdf1.png`} alt="Project Thumbnail" />
          <div class="project-details">
            <p>Infographic activity to familarise with AI tools</p>
            <br />
            <!-- View PDF button -->
            <PDFViewer filePath={`${base}/pdf/pdf1.pdf#toolbar=0`} />
          </div>
        </div>

        <div class="project-thumbnail">
          <!-- Thumbnail image -->
          <img src={`${base}/polyImg/pdf2.png`} alt="Project Thumbnail" />
          <div class="project-details">
            <p>
              Infographic proposal on mental health (stress) among polytechnic
              students. (Final artwork at the end)
            </p>
            <br />
            <!-- View PDF button -->
            <PDFViewer filePath={`${base}/pdf/pdf2.pdf#toolbar=0`} />
          </div>
        </div>

        <div class="project-thumbnail">
          <!-- Thumbnail image -->
          <img src={`${base}/polyImg/pdf3.png`} alt="Project Thumbnail" />
          <div class="project-details">
            <p>
              'Feast' mobile application design. Feast is a fictional restaurant
              booking application. All designs are designed on my own,
              background is hawker center table inspired, app is retro dining
              inspired.
              <br /><br />Designs are incooperated in Adobe XD for presentation
              (not included here).
            </p>
            <br />
            <p id="feature-head"><b>Features:</b></p>
            <ul class="circle-bullet-list">
              <li>Log in</li>
              <li>Main page</li>
              <li>Filters (location)</li>
              <li>For you recommended restaurants</li>
              <li>'Feast' featured restaurants</li>
              <li>
                Search page (Search bar, Filters: Meal type, No. of guests,
                Price, Ammenties, Cuisines)
              </li>
              <li>
                Restaurant Page (Details, Croud watch, Menu, Reserve buttons)
              </li>
              <li>
                Menu: Translate, View reviews, Dietary and spicy indications
              </li>
              <li>Reviews page</li>
            </ul>

            <br />
            <!-- View PDF button -->
            <PDFViewer filePath={`${base}/pdf/pdf3.pdf#toolbar=0`} />
          </div>
        </div>

        <div class="project-thumbnail">
          <!-- Thumbnail image -->
          <img
            src={`${base}/polyImg/pdf4.png`}
            alt="Project Thumbnail"
            style="width: 300px;"
          />
          <div class="project-details">
            <p>
              Infographic resume project (k-pop, vending machine, youtube,
              bullet journal inspired)
            </p>
            <br />
            <!-- View PDF button -->
            <PDFViewer filePath={`${base}/pdf/pdf4.pdf#toolbar=0`} />
          </div>
        </div>

        <div class="project-thumbnail">
          <!-- Thumbnail image -->
          <img src={`${base}/polyImg/pdf4.png`} alt="Project Thumbnail" />
          <div class="project-details">
            <p>Infographic resume design journey</p>
            <br />
            <!-- View PDF button -->
            <PDFViewer filePath={`${base}/pdf/pdf5.pdf#toolbar=0`} />
          </div>
        </div>

        <div class="project-thumbnail">
          <!-- Thumbnail image -->
          <img src={`${base}/polyImg/pdf6.png`} alt="Project Thumbnail" />
          <div class="project-details">
            <p>Potrait</p>
            <br />
            <!-- View PDF button -->
            <PDFViewer filePath={`${base}/pdf/potrait.pdf#toolbar=0`} />
          </div>
        </div>
      </Step>
      <Step step={steps[8]}>
        <p>
          First digital marketing project in Year 1. Helped a small beauty salon
          business called 'La Reine De Beaute' to improve their internet
          presence. Designed menu, brochure and filmed a promotional video (not
          included here).
        </p>
        <p>
          <b style="color:var(--xpurple);">Skills: </b> Digital Marketing · Interpersonal
          Skill · Video Editing · Adobe Photoshop
        </p>

        <!-- photogrid -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div class="grid-item">
            <img
              src={`${base}/polyImg/DBIT1A02a, 1816655 Chan Xue Li - Brochure.jpg`}
              alt="La Reine 1"
            /><br />
            <p>
              Proposed Brochure Design (Front)<br />(colour and font not updated
              as outdated)
            </p>
          </div>
          <div class="grid-item">
            <img
              src={`${base}/polyImg/DBIT1A02a, 1816655 Chan Xue Li - Brochure (2).jpg`}
              alt="La Reine 2"
            /><br />
            <p>
              Proposed Brochure Design (Back)<br />(colour and font not updated
              as outdated)
            </p>
          </div>
          <div class="grid-item">
            <img
              src={`${base}/polyImg/DBIT1A02a, 1816655 Chan Xue Li - Flyer.jpg`}
              alt="La Reine 3"
            /><br />
            <p>
              Proposed Anniversary Promotion Poster<br />(colour and font not
              updated as outdated)
            </p>
          </div>
          <div class="grid-item">
            <img src={`${base}/polyImg/ladigi1.png`} alt="La Reine 4" /><br />
            <p>Giveaway on Facebook</p>
          </div>
          <div class="grid-item">
            <img src={`${base}/polyImg/ladigi2.png`} alt="La Reine 5" /><br />
            <p>One of the Question of Day on Facebook</p>
          </div>
          <div class="grid-item">
            <img src={`${base}/polyImg/ladigi3.png`} alt="La Reine 6" /><br />
            <p>One of the Question of Day on Facebook</p>
          </div>
        </div>
      </Step>
    </div>
  </section>
</main>

<style>
  .button-container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .button {
    margin-bottom: 10px;
    background-color: #4285f4;
    color: white;
    font-weight: bold;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
  }

  @media (min-width: 768px) {
    .button-container {
      flex-direction: row;
      justify-content: center;
    }

    .button {
      margin-bottom: 0;
      margin-right: 10px;
    }
  }

  .project-thumbnail {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 20px;
    width: calc(70%);
    margin-right: auto;
    margin-left: auto;
    max-width: 800px;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }

  .project-thumbnail img {
    width: 200px;
    margin-right: 40px;
  }

  @media screen and (max-width: 768px) {
    .project-thumbnail {
      flex-direction: column;
      align-items: center;
      width: calc(100% - 40px);
    }

    .project-thumbnail img {
      margin-right: 0;
      margin-bottom: 10px;
    }
  }

  #feature-head {
    text-align: left;
    padding-left: 50px;
    margin-bottom: 5px;
  }

  .circle-bullet-list {
    list-style-type: none;
    padding-left: 50px;
    text-align: left;
  }

  .circle-bullet-list li::before {
    content: "\2022";
    color: white;
    font-weight: bold;
    display: inline-block;
    width: 1em;
    margin-left: -1em;
  }
  @media screen and (max-width: 768px) {
    #feature-head {
      padding-left: 0px;
    }
    .circle-bullet-list {
      padding-left: 0px;
    }
  }

  .grid-item {
    width: 100%;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    border-radius: 8px;
  }

  .grid-item img {
    width: 100%;
    height: auto;
    display: block;
    border-radius: 8px;
  }

  @media screen and (max-width: 768px) {
    .mobile-responsive-iframe {
      width: 100%;
      height: 0;
      position: relative;
      padding-bottom: 75%;
    }
    .mobile-responsive-iframe iframe {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }
  }
</style>
