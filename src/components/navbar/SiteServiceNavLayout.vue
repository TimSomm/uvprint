<template>
  <section class="SiteMenuSection">
    <div class="SiteMenuSection__body">
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
    </div>
  </section>
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
            'Hurkolt poliészter, textil alapanyag',
          ],
          logo: ['molino.png', 'tarp.png', 'placard.png', 'flag.png'],
        },
        {
          title: 'Reklámtábla, matrica',
          label: ['Laminált és plexi', 'Kirakat matrica', 'Hozott anyagra', 'Öntapadó fólia'],
          body: [
            'Reklámtáblák',
            'Kirakat matrica öntapadós fóliából',
            'Nyomtatás',
            'Autó és dekor matrica',
          ],
          logo: ['sign.png', 'sticker.png', 'fabric.png', 'car.png'],
        },
        {
          title: 'Egyéb',
          label: ['Laminálás', 'Roll-Up film', 'Koncertek', 'Standok'],
          body: [
            'Hideg- és meleg laminálás',
            'Nyomtatás',
            'Fesztiválok, Programok dekorációja',
            'Színpadok, Rendezvények',
          ],
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
.SiteMenuSection {
  --siteMenuSpacing: 24px;
  position: relative;
}

.SiteMenuSection__body {
  padding: var(--siteMenuSpacing);
}

@media (min-width: 900px) {
  .SiteMenuSection {
    display: inline-block;
    --siteMenuSpacing: 32px;
  }
}

.SiteServiceNav__layout {
  --columnCount: 3;
  display: inline-grid;
  grid: auto/repeat(var(--columnCount), 1fr);
  gap: calc(var(--siteMenuSpacing) * 1.5) var(--siteMenuSpacing);
}
</style>
