<template>
	<li class="SiteServiceItem">
		<a href="#" class="SiteServiceItem__link">
			<span class="SiteServiceItem__iconContainer">
				<img :src="require(`./../../assets/img/${logo}`)" />
			</span>
			<span class="SiteServiceItem__labelContainer">
				<span class="SiteServiceItem__label">{{ label }}</span>
				<p class="SiteServiceItem__body">{{ body }}</p>
			</span>
		</a>
	</li>
</template>

<script>
export default {
	name: 'SiteServiceNavCard',
	props: {
		logo: String,
		label: String,
		body: String,
	},
};
</script>

<style scoped>

.SiteServiceItem {
	margin-left: 0;
	font: var(--fontWeightNormal) 14px / 1.4 var(--fontFamily);
	letter-spacing: 0.2px;
}

.SiteServiceItem + .SiteServiceItem {
	margin-top: var(--siteNavListSpacing);
}

a {
	text-decoration: none;
}

.SiteServiceItem__link {
	display: inline-flex;
	color: #0a2540;
	outline: none;
	align-items: center;
}

.SiteServiceItem__iconContainer {
	flex: 0 0 auto;
	width: var(--siteNavIconSize);
	height: var(--siteNavIconSize);
	margin-right: var(--siteNavIconSpacing);
}

.SiteServiceItem__iconContainer img {
	width: inherit;
	height: inherit;
}

.SiteServiceItem__labelContainer {
	text-align: start;
}

.SiteServiceItem__label {
	font-weight: var(--fontWeightSemiBold);
}

.SiteServiceItem__body {
	color: inherit;
	opacity: 0.6;
	transition: var(--hoverTransition);
	transition-property: opacity;
	white-space: nowrap;
}
</style>
