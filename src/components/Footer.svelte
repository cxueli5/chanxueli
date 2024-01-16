<script>
  import { base } from "$app/paths";
</script>

<footer class="bg-blue-100/80 font-sans dark:bg-gray-900">
  <div class="container px-6 py-12 mx-auto">
    <div
      class="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-y-10 lg:grid-cols-2"
    >
      <div id="quickLinkSection" class="flex flex-col items-center">
        <p class="font-semibold text-gray-800 dark:text-white">Quick Links</p>

        <div class="flex flex-col items-start mt-5 space-y-2">
          <a
            href={`${base}/`}
            class="text-gray-600 transition-colors duration-300 dark:text-gray-300 hover:text-white hover:underline hover:cursor-pointer hover:text-blue-500"
          >
            Home
          </a>
          <a
            href={`${base}/projects`}
            class="text-gray-600 transition-colors duration-300 dark:text-gray-300 hover:text-white hover:underline hover:cursor-pointer hover:text-blue-500"
          >
            Projects
          </a>
          <a
            href={`${base}/internship`}
            class="text-gray-600 transition-colors duration-300 dark:text-gray-300 hover:text-white hover:underline hover:cursor-pointer hover:text-blue-500"
          >
            Internship
          </a>
          <a
            href={`${base}/about-me`}
            class="text-gray-600 transition-colors duration-300 dark:text-gray-300 hover:text-white hover:underline hover:cursor-pointer hover:text-blue-500"
          >
            About Me
          </a>
        </div>
      </div>
      <div class="flex flex-col items-center">
        <p class="font-semibold text-gray-800 dark:text-white">
          Download My Resume
        </p>

        <div class="flex flex-col items-start mt-5 space-y-2">
          <a
            href={`${base}/pdf/ChanXueLi_resume.pdf`}
            download
            class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition duration-300 focus:outline-none focus:ring focus:ring-blue-300"
          >
            Download Resume
          </a>
        </div>
        <br>
        <p class="font-semibold text-gray-800 dark:text-white">
          Download My Resume (Print Version)
        </p>

        <div class="flex flex-col items-start mt-5 space-y-2">
          <a
            href={`${base}/pdf/ChanXueLi_resume_print_ver.pdf`}
            download
            class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition duration-300 focus:outline-none focus:ring focus:ring-blue-300"
          >
            Download Print Resume
          </a>
        </div>
      </div>
    </div>

    <hr class="my-6 border-gray-200 md:my-8 dark:border-gray-700 h-2" />

    <div id="connectSection" class="flex justify-center items-center gap-4">
      <h3 class="mr-2">Connect with me:</h3>
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

    <p class="font-sans p-8 text-start md:text-center md:text-lg md:p-4">
      © 2024 Chan Xue Li. All rights reserved.
    </p>
  </div>
</footer>

<style>
  @media (max-width: 768px) {
    #quickLinkSection {
      text-align: center;
      justify-content: center;
      margin-left: -80px;
    }

    #connectSection {
      margin-top: 10px;
    }
  }
</style>
