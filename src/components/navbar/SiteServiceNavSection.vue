<template>
  <section class="SiteServiceList">
    <h2 class="SiteServiceList__title">{{ title }}</h2>
    <div>
      <ul v-for="(d, i) in logo" v-bind:key="d.title" class="SiteServiceList__list">
        <SiteServiceNavCard :logo="logo[i]" :label="label[i]" :body="body[i]" />
      </ul>
    </div>
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
  --siteNavListMinWidth: 15vw;
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
  font: var(--fontWeightBold) 14px / 1.5 var(--fontFamily);
  letter-spacing: 0.4px;
  text-transform: uppercase;
  color: #8898aa;
  text-align: start;
}
</style>
