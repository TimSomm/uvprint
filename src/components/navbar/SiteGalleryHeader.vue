// TODO: url adas

<template>
  <div class="SiteHeader__galleryLayout">
    <div class="SiteHeader__galleryColumn">
      <ul class="SiteHeader__galleryList">
        <li v-for="data in datas" v-bind:key="data.logo" class="SiteHeader__galleryItem">
          <SiteHeaderGalleryCard :data="data" />
        </li>
        <li class="SiteHeader__galleryItem">
          <hr />
        </li>
        <li class="SiteHeader__galleryItem all_pictures">
          <a href="#">Összes kép</a>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="HoverArrow HoverArrow--sizeSmall SiteNavItem__arrow"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path
              d="M21.883 12l-7.527 6.235.644.765 9-7.521-9-7.479-.645.764 7.529 6.236h-21.884v1h21.883z"
            />
          </svg>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import SiteHeaderGalleryCard from './SiteHeaderGalleryCard.vue';

export default {
  name: 'SiteGalleryHeader',
  components: {
    SiteHeaderGalleryCard,
  },
  data() {
    return {
      datas: [
        {
          logo: 'gallery_flag.png',
          label: 'Zászló képek',
          body: 'Hurkolt poliészter, textil (selyemszatén) alapanyagú reklámhordozó zászlók',
          url: '',
        },
        {
          logo: 'gallery_car.png',
          label: 'Autó dekor matrica képek',
          body: 'Öntapadós Fóliák autó és jármű dekorációhoz, padlógrafikákhoz.',
          url: '',
        },
        {
          logo: 'gallery_poster.png',
          label: 'Plakát képek',
          body: 'Nagyfelbontású kültéri és beltéri igényes poszter, plakát',
          url: '',
        },
        {
          logo: 'gallery_sticker.png',
          label: 'Kirakat matrica képek',
          body: 'Kirakat matrica öntapadós fóliából, egyedi igények szerint',
          url: '',
        },
        {
          logo: 'gallery_rollup.png',
          label: 'Roll-up képek',
          body: 'Könnyen felállítható, mozgatható stand up típusú összeszerelhető állványokhoz használatos nyomathordozó',
          url: '',
        },
      ],
    };
  },
};
</script>

<style scoped>
.SiteHeader__galleryLayout {
  padding: 32px;
}

.SiteHeader__galleryList {
  list-style: none;
}

.SiteHeader__galleryItem + .SiteHeader__galleryItem {
  margin-top: 32px;
}

.all_pictures {
  display: flex;
  justify-content: center;
}

a {
  text-decoration: none;
  color: #0a2540;
  font: var(--fontWeightSemiBold) 20px / 1.4 var(--fontFamily);
}

hr {
  opacity: 0.5;
}

.HoverArrow {
  --arrowSpacing: 5px;
  --arrowHoverTransition: 150ms cubic-bezier(0.215, 0.61, 0.355, 1);
  --arrowLineOpacity: 0;
  position: relative;
  top: 1px;
  margin-left: 16px;
  stroke-width: 2px;
  opacity: 0;
  vertical-align: middle;
}

.HoverArrow--sizeSmall {
  --arrowSpacing: 4px;
  stroke-width: 1.5px;
}

.SiteNavItem__arrow.HoverArrow {
  transition: var(--hoverTransition);
  transition-property: opacity;
}

.all_pictures:hover .HoverArrow,
.all_pictures:hover .SiteHeader__galleryBodyContainer {
  opacity: 1;
}
</style>
