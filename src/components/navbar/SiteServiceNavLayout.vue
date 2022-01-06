<template>
  <div class="SiteServiceNav__layout">
    <div v-for="data in datas" v-bind:key="data.title">
      <SiteServiceNavSection
        :title="data.title"
        :label="data.label"
        :body="data.body"
        :logo="data.logo"
      />
    </div>
  </div>
</template>

<script>
import SiteServiceNavSection from './SiteServiceNavSection.vue';

export default {
  data() {
    return {
      datas: [
        {
          title: 'Nagyméretű',
          label: ['Molinó', 'Ponyva nyomtatás', 'Plakát', 'Zászlókészítés'],
          body: [
            'Nyomtatás, készítés',
            'Kamion dekoráció',
            'Óriásplakát nyomtatás',
            'Zászló nyomtatás',
          ],
          logo: ['molino.png', 'tarp.png', 'placard.png', 'flag.png'],
        },
        {
          title: 'Reklámtábla, matrica',
          label: ['Laminált és plexi', 'Kirakat matrica', 'Hozott anyagra', 'Öntapadó fólia'],
          body: ['Reklámtáblák', '', 'Nyomtatás', 'Autó és dekor matrica'],
          logo: ['sign.png', 'sticker.png', 'fabric.png', 'car.png'],
        },
        {
          title: 'Egyéb',
          label: ['Laminálás', 'Roll-Up film', 'Koncertek', 'Standok'],
          body: ['', 'Nyomtatás', 'Fesztiválok, Programok dekorációja', 'Színpadok, Rendezvények'],
          logo: ['laminate.png', 'rollup.png', 'concert.png', 'booth.png'],
        },
      ],
    };
  },
  name: 'SiteServiceNavLayout',
  components: {
    SiteServiceNavSection,
  },
};
</script>

<style scoped>
.SiteServiceNav__layout {
  --columnCount: 3;
  display: inline-grid;
  grid: auto/repeat(var(--columnCount), 1fr);
  gap: calc(var(--siteMenuSpacing) * 1.5) var(--siteMenuSpacing);
}
</style>
