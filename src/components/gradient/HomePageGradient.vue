<template>
  <div class="HomePageGradient__container">
    <img src="./../../assets/img/home_gradient.jpg" alt="" />
  </div>
</template>

<script>
export default {
  name: 'HomePageGradient',
};
</script>

<style scoped>
.HomePageGradient__container {
  position: absolute;
  top: 100%;
  transform: skewY(12deg) translateX(16px) translateY(-150%);
  width: 100vw;
  height: 100%;
  min-width: 100%;
  right: 16px;
	z-index: -1;
}

img {
  width: inherit;
  height: inherit;
}
</style>
