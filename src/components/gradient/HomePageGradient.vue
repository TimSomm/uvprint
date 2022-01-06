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
	top: -50%;
	bottom: 0;
	transform: skewY(12deg);
	height: 200px;
	width: var(--windowWidth);
	min-width: 1000px;
	right: 16px;
}
</style>
