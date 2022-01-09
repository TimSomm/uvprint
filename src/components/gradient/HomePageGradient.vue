<template>
  <div class="HomePageGradient__container"></div>
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
  /* background-image: url('./../../assets/img/home_gradient.jpg');
	background-size: cover; */
  background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
	background-size: 400% 400%;
	animation: gradient 30s ease infinite;
	z-index: -1;
}

@keyframes gradient {
	0% {
		background-position: 0% 50%;
	}
	50% {
		background-position: 100% 50%;
	}
	100% {
		background-position: 0% 50%;
	}
}
</style>
