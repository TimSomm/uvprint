<template>
  <div class="Guides">
    <div class="GuidesContainer"></div>
  </div>
</template>

<script>
export default {
  name: 'Guides',
};
</script>

<style scoped>
.Guides {
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  padding: 0 var(--columnPaddingNormal);
  pointer-events: none;
  z-index: 9999;
}

.GuidesContainer {
  position: relative;
  display: grid;
  height: 100%;
  max-width: var(--layoutWidth);
  margin: 0 auto;
  border-inline: 2px solid rgba(66, 71, 112, 0.06);
}
</style>
