<script>
  export let filePath;
  export let buttonText = "View PDF";
  let showPDF = false;
  let showError = false;

  function openPDF() {
    if (window.innerWidth <= 768) {
      showError = true;
    } else {
      showPDF = true;
      // Hide the error message when viewing PDF on larger screens
      showError = false;
    }
  }

  function closePDF() {
    showPDF = false;
    showError = false;
  }

  function closeError() {
    showError = false;
  }
</script>

{#if showPDF}
  <!-- Display PDF viewer -->
  <div class="pdf-preview">
    <iframe src={filePath} frameborder="0"></iframe>
    <button on:click={closePDF} class="close-pdf-btn">Close PDF</button>
  </div>
{:else}
  <!-- Button to open PDF -->
  <button on:click={openPDF} class="view-pdf-btn">{buttonText}</button>
{/if}

{#if showError}
  <div class="error-message">
    <p
      style="color: white; font-weight: bold; margin-top: 10px; text-align: center;"
    >
      PDF cannot be displayed on mobile devices. Please view on a larger screen
      (tablet, laptop).
    </p>
    <button on:click={closeError} class="close-error-btn">Close Error</button>
  </div>
{/if}

<style>
  .pdf-preview {
    width: 100%;
    max-width: 100%;
    overflow: auto;
  }

  .pdf-preview iframe {
    width: 100%;
    height: 100%;
    min-height: 500px;
    min-width: 500px;
  }

  .view-pdf-btn,
  .close-pdf-btn,
  .close-error-btn {
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    font-weight: bold;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }

  .view-pdf-btn {
    background-color: #4285f4;
    color: white;
  }

  .close-pdf-btn,
  .close-error-btn {
    background-color: #ea4335;
    color: white;
    margin-top: 10px;
  }

  .close-pdf-btn:hover,
  .close-error-btn:hover {
    background-color: #ff6659;
  }
  .view-pdf-btn:hover {
    background-color: lightblue;
    color: black;
  }

  @media screen and (max-width: 768px) {
    .pdf-preview iframe {
      width: 95%;
      height: 95%;
    }

    .close-pdf-btn {
      top: 10px;
      right: 10px;
      padding: 8px 15px;
    }
  }
</style>
