<template>
  <div class="SiteHeader__galleryLayout">
    <div class="SiteHeader__galleryColumn">
      <SiteHeaderGalleryCard />
    </div>
  </div>
</template>

<script>
import SiteHeaderGalleryCard from './SiteHeaderGalleryCard.vue';

export default {
  name: 'SiteGalleryHeader',
  components: {
    SiteHeaderGalleryCard,
  },
};
</script>

<style scoped>
.SiteHeader__galleryLayout {
  padding: 32px;
}
</style>
