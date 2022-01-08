<template>
  <div class="SiteHeader__galleryCard">
    <div class="SiteHeader__galleryIconContainer">
      <svg
        version="1.1"
        id="Layer_1"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        x="0px"
        y="0px"
        viewBox="0 0 504.123 504.123"
        style="enable-background: new 0 0 504.123 504.123"
        xml:space="preserve"
      >
        <circle style="fill: #324a5e" cx="252.062" cy="252.062" r="252.062" />
        <path
          style="fill: #f9b54c"
          d="M241.822,422.991H135.877v-7.089c0-8.271,6.695-14.966,14.572-14.966h76.406
	c8.271,0,14.572,6.695,14.572,14.966v7.089H241.822z"
        />
        <polygon
          style="fill: #f1543f"
          points="399.754,261.12 255.212,261.12 255.212,171.717 399.754,171.717 374.942,216.222 "
        />
        <rect x="192.197" y="126.818" style="fill: #ff7058" width="118.154" height="89.403" />
        <rect x="181.169" y="111.852" style="fill: #e6e9ee" width="15.754" height="289.477" />
        <circle style="fill: #ffffff" cx="189.046" cy="99.249" r="18.511" />
        <polygon style="fill: #d33f2f" points="310.351,216.222 255.212,261.12 255.212,216.222 " />
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
      </svg>
    </div>
    <div class="SiteHeader__galleryLabelContainer">Zászlók</div>
  </div>
</template>

<script>
export default {
  name: 'SiteHeaderGalleryCard',
};
</script>

<style scoped>
.SiteHeader__galleryCard {
  display: flex;
  max-width: 500px;
  align-items: center;
}

.SiteHeader__galleryIconContainer {
  width: 50px;
  aspect-ratio: 1;
  margin-right: 25px;
}

.SiteHeader__galleryLabelContainer {
  font: var(--fontWeightNormal) 20px / 1.4 var(--fontFamily);
}
</style>
