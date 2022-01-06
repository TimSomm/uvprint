<template>
	<section class="SiteServiceList">
		<h1 class="SiteServiceList__title">{{ title }}</h1>
		<ul class="SiteServiceList__list">
			<SiteServiceNavCard
				v-if="logo[0] || label[0] || body[0]"
				:logo="logo[0]"
				:label="label[0]"
				:body="body[0]"
			/>
			<SiteServiceNavCard
				v-if="logo[1] || label[1] || body[1]"
				:logo="logo[1]"
				:label="label[1]"
				:body="body[1]"
			/>
			<SiteServiceNavCard
				v-if="logo[2] || label[2] || body[2]"
				:logo="logo[2]"
				:label="label[2]"
				:body="body[2]"
			/>
			<SiteServiceNavCard
				v-if="logo[3] || label[3] || body[3]"
				:logo="logo[3]"
				:label="label[3]"
				:body="body[3]"
			/>
		</ul>
	</section>
</template>

<script>
import SiteServiceNavCard from './SiteServiceNavCard.vue';

export default {
	name: 'SiteServiceNavSection',
	components: {
		SiteServiceNavCard,
	},
	props: {
		title: String,
		logo: Array,
		label: Array,
		body: Array,
	},
};
</script>

<style scoped>
.SiteServiceList {
	--siteNavIconSize: 32px;
	--siteNavIconSpacing: 14px;
	--siteNavListSpacing: 32px;
	--siteNavListMinWidth: 200px;
}

.SiteServiceList__list {
	min-width: var(--siteNavListMinWidth);
	margin: 0;
	padding: 0;
	list-style: none;
	text-align: start;
}

.SiteServiceList__title {
	margin-bottom: var(--siteNavListSpacing);
	font: var(--fontWeightBold) 13px / 1.5 var(--fontFamily);
	letter-spacing: 0.4px;
	text-transform: uppercase;
	color: #8898aa;
	text-align: start;
}
</style>
