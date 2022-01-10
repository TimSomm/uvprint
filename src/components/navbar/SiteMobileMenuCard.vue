<template>
  <li class="SiteNavItem">
    <a href="#" class="SiteNavItem__link">
      <span class="SiteNavItem__iconContainer">
        <img :src="require(`./../../assets/img/${data.logo}`)" />
      </span>
      <span class="SiteNavItem__labelContainer">
        {{ data.label }}
      </span>
    </a>
  </li>
</template>

<script>
export default {
  name: 'SiteMobileMenuCard',
  props: ['data'],
};
</script>

<style scoped>
.SiteNavItem {
  margin-left: 0;
  font: var(--fontWeightNormal) 14px/1.428571429 var(--fontFamily);
  letter-spacing: 0.2px;
  display: flex;
  align-items: center;
}

a {
  text-decoration: none;
}

.SiteNavItem__link {
  display: inline-flex;
  color: #0a2540;
  outline: none;
  padding: 6px;
  align-items: center;
}

.SiteNavItem__iconContainer {
  --iconLightColor: #88add2;
  --iconDarkColor: #0a2540;
  --iconKnockoutColor: #fff;
  flex: 0 0 auto;
  width: var(--siteNavIconSize);
  height: var(--siteNavIconSize);
  margin-right: var(--siteNavIconSpacing);
}

img {
  width: inherit;
  height: inherit;
}

.SiteNavItem__labelContainer {
  color: inherit;
  font-weight: 425;
}
</style>
