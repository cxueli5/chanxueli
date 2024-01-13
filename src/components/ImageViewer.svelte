<script>
  export let imagePath;
  export let buttonText = "View PDF";
  let showImage = false;

  function openImage() {
    showImage = true;
  }

  function closeImage() {
    showImage = false;
  }
</script>

{#if showImage}
  <!-- Display image viewer -->
  <div class="image-preview">
    <img src={imagePath} alt="Image Preview" />
    <button on:click={closeImage} class="close-image-btn">Close</button>
  </div>
{:else}
  <!-- Button to open image -->
  <button on:click={openImage} class="view-image-btn">{buttonText}</button>
{/if}

<style>
  .image-preview {
    max-width: 100%;
    text-align: center;
    position: relative;
  }

  .image-preview img {
    max-width: 100%;
    max-height: 100%;
  }

  .view-image-btn {
    background-color: #4285f4;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    font-weight: bold;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }

  .view-image-btn:hover {
    background-color: lightblue;
    color: black;
  }

  .close-image-btn {
    background-color: #ea4335;
    color: white;
    position: absolute;
    top: 10px;
    right: 10px;
    padding: 8px 15px;
    cursor: pointer;
    border: none;
    border-radius: 5px;
    transition: background-color 0.3s ease;
  }

  .close-image-btn:hover {
    background-color: #ff6659; /* Adjust hover color */
  }

  /* Responsive Styles */
  @media screen and (max-width: 768px) {
    .image-preview {
      margin: 0 auto;
    }
  }
</style>
