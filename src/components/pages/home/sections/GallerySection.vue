<template>
  <div class="GallerySection" id="gallerySection">
    <div class="Section__masked">
      <div class="Section__backgroundMask">
        <div class="Section__background"></div>
      </div>
      <div class="GallerySection__container">
        <div class="GallerySection__layout">
          <div class="GallerySection__header">
            <h3 class="caption">Lorem, ipsum.</h3>
            <h2 class="title">Lorem ipsum dolor sit amet consectetur.</h2>
          </div>
          <div class="GallerySection__galleryContainer">
            <div class="GallerySection__gallery">
              <div href="#gallerySection" class="img-1 galleryImg">
                <svg xmlns="http://www.w3.org/2000/svg" class="ionicon" viewBox="0 0 512 512">
                  <title>Expand</title>
                  <path
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="32"
                    d="M432 320v112H320M421.8 421.77L304 304M80 192V80h112M90.2 90.23L208 208M320 80h112v112M421.77 90.2L304 208M192 432H80V320M90.23 421.8L208 304"
                  />
                </svg>
              </div>
              <div href="#gallerySection" class="img-2 galleryImg">
                <svg xmlns="http://www.w3.org/2000/svg" class="ionicon" viewBox="0 0 512 512">
                  <title>Expand</title>
                  <path
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="32"
                    d="M432 320v112H320M421.8 421.77L304 304M80 192V80h112M90.2 90.23L208 208M320 80h112v112M421.77 90.2L304 208M192 432H80V320M90.23 421.8L208 304"
                  />
                </svg>
              </div>
              <div href="#gallerySection" class="img-3 galleryImg">
                <svg xmlns="http://www.w3.org/2000/svg" class="ionicon" viewBox="0 0 512 512">
                  <title>Expand</title>
                  <path
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="32"
                    d="M432 320v112H320M421.8 421.77L304 304M80 192V80h112M90.2 90.23L208 208M320 80h112v112M421.77 90.2L304 208M192 432H80V320M90.23 421.8L208 304"
                  />
                </svg>
              </div>
              <div href="#gallerySection" class="img-4 galleryImg">
                <svg xmlns="http://www.w3.org/2000/svg" class="ionicon" viewBox="0 0 512 512">
                  <title>Expand</title>
                  <path
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="32"
                    d="M432 320v112H320M421.8 421.77L304 304M80 192V80h112M90.2 90.23L208 208M320 80h112v112M421.77 90.2L304 208M192 432H80V320M90.23 421.8L208 304"
                  />
                </svg>
              </div>
              <div href="#gallerySection" class="img-5 galleryImg">
                <svg xmlns="http://www.w3.org/2000/svg" class="ionicon" viewBox="0 0 512 512">
                  <title>Expand</title>
                  <path
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="32"
                    d="M432 320v112H320M421.8 421.77L304 304M80 192V80h112M90.2 90.23L208 208M320 80h112v112M421.77 90.2L304 208M192 432H80V320M90.23 421.8L208 304"
                  />
                </svg>
              </div>
              <div href="#gallerySection" class="img-6 galleryImg">
                <svg xmlns="http://www.w3.org/2000/svg" class="ionicon" viewBox="0 0 512 512">
                  <title>Expand</title>
                  <path
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="32"
                    d="M432 320v112H320M421.8 421.77L304 304M80 192V80h112M90.2 90.23L208 208M320 80h112v112M421.77 90.2L304 208M192 432H80V320M90.23 421.8L208 304"
                  />
                </svg>
              </div>
              <div href="#gallerySection" class="img-7 galleryImg">
                <svg xmlns="http://www.w3.org/2000/svg" class="ionicon" viewBox="0 0 512 512">
                  <title>Expand</title>
                  <path
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="32"
                    d="M432 320v112H320M421.8 421.77L304 304M80 192V80h112M90.2 90.23L208 208M320 80h112v112M421.77 90.2L304 208M192 432H80V320M90.23 421.8L208 304"
                  />
                </svg>
              </div>
              <div class="img-8 galleryImg">
                <svg xmlns="http://www.w3.org/2000/svg" class="ionicon" viewBox="0 0 512 512">
                  <title>Expand</title>
                  <path
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="32"
                    d="M432 320v112H320M421.8 421.77L304 304M80 192V80h112M90.2 90.23L208 208M320 80h112v112M421.77 90.2L304 208M192 432H80V320M90.23 421.8L208 304"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div id="lightBox"></div>
  </div>
</template>

<script>
export default {
  name: 'GallerySection',
  mounted() {
    this.lightBoxHandler();
  },
  methods: {
    lightBoxHandler() {
      const html = document.querySelector('html');
      const gallerySection = document.getElementById('gallerySection');
      const contactSection = document.getElementById('contactSection');
      const lightBox = document.getElementById('lightBox');

      const images = gallerySection.querySelectorAll('.galleryImg');
      images.forEach((image) => {
        image.addEventListener('click', () => {
          lightBox.classList.add('active');
          const img = document.createElement('img');
          let imgSrc = getComputedStyle(image).getPropertyValue('--imageSrc').replaceAll('\\', '');
          imgSrc = imgSrc.replace('url(', '').replace(')', '').replace(' ', '');
          img.src = imgSrc;
          img.style.maxWidth = '100%';
          while (lightBox.firstChild) {
            lightBox.removeChild(lightBox.firstChild);
          }
          contactSection.style.display = 'none';
          html.style.overflow = 'hidden';
          lightBox.appendChild(img);
        });
      });

      lightBox.addEventListener('click', (e) => {
        if (e.target !== e.currentTarget) return;
        contactSection.style.display = 'block';
        html.style.overflow = 'visible';
        lightBox.classList.remove('active');
      });
    },
  },
};
</script>

<style scoped>
#lightBox {
  position: fixed;
  z-index: 1000;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  display: none;
}

#lightBox.active {
  display: flex;
  justify-content: center;
  align-items: center;
}

.GallerySection {
  position: relative;
  z-index: 1;
  color: #fff;
}

.Section__masked {
  overflow: hidden;
}

.Section__backgroundMask {
  position: absolute;
  width: 100%;
  height: 100%;
  overflow: visible;
  z-index: -1;
}

.Section__background {
  position: relative;
  height: 115%;
  width: 100%;
  top: 0;
  left: 0;
  transform-origin: 100% 0;
  transform: skewY(6deg);
  background: #301934;
  overflow: hidden;
}

.GallerySection__container {
  max-width: var(--layoutWidth);
  margin: 0 auto;
}

.GallerySection__layout {
  max-width: calc(var(--columnPaddingNormal) * 2 + var(--layoutWidth));
  padding-inline: 32px;
  padding-bottom: 10vh;
}

.GallerySection__header {
  display: grid;
  row-gap: 32px;
}

.caption {
  font: 500 22px / 1.5 var(--fontFamily);
}

.title {
  font: 600 38px / 1.5 var(--fontFamily);
}

.GallerySection__galleryContainer {
  margin-top: 10vh;
}

.GallerySection__gallery {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: auto;
  gap: 24px;
  grid-template-areas:
    'img-1 img-2 img-3 img-3'
    'img-1 img-4 img-5 img-6'
    'img-7 img-7 img-8 img-6';
}

.GallerySection__gallery .galleryImg {
  width: 100%;
  height: 15rem;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
}

.GallerySection__gallery .galleryImg svg {
  width: 40px;
  aspect-ratio: 1;
  color: rgba(255, 255, 255, 0.6);
  position: relative;
  z-index: 100;
  opacity: 0;
  transition: opacity 0.2s ease-in;
}

.GallerySection__gallery .galleryImg::before {
  content: '';
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.8);
  opacity: 0;
  transition: opacity 0.2s ease-in;
}

.GallerySection__gallery .galleryImg:hover svg,
.GallerySection__gallery .galleryImg:hover::before {
  opacity: 1;
}

.galleryImg {
  cursor: pointer;
}

.img-1 {
  --imageSrc: url('./../../../../assets/img/img-1.jpg');
  grid-area: img-1;
  min-height: 31.5rem;
  background-image: var(--imageSrc);
}
.img-2 {
  --imageSrc: url('./../../../../assets/img/img-2.jpg');
  grid-area: img-2;
  background-image: var(--imageSrc);
}
.img-3 {
  --imageSrc: url('./../../../../assets/img/img-3.jpg');
  grid-area: img-3;
  background-image: var(--imageSrc);
}
.img-4 {
  --imageSrc: url('./../../../../assets/img/img-4.jpg');
  grid-area: img-4;
  background-image: var(--imageSrc);
}
.img-5 {
  --imageSrc: url('./../../../../assets/img/img-5.jpg');
  grid-area: img-5;
  background-image: var(--imageSrc);
}
.img-6 {
  --imageSrc: url('./../../../../assets/img/img-6.jpg');
  grid-area: img-6;
  min-height: 31.5rem;
  background-image: var(--imageSrc);
}
.img-7 {
  --imageSrc: url('./../../../../assets/img/img-7.jpg');
  grid-area: img-7;
  background-image: var(--imageSrc);
}
.img-8 {
  --imageSrc: url('./../../../../assets/img/img-8.jpg');
  grid-area: img-8;
  background-image: var(--imageSrc);
}

@media (max-width: 1100px) {
  .GallerySection__gallery {
    grid-template-areas:
      'img-1 img-1 img-2 img-2'
      'img-1 img-1 img-3 img-3'
      'img-4 img-4 img-5 img-5'
      'img-8 img-8 img-8 img-6'
      'img-7 img-7 img-7 img-7';
  }
  .img-6 {
    min-height: 15rem;
  }

  .Section__background {
    height: 110%;
  }
}

@media (max-width: 600px) {
  .GallerySection__gallery {
    grid-template-areas:
      'img-1 img-1 img-1 img-1'
      'img-2 img-2 img-2 img-2'
      'img-3 img-3 img-3 img-3'
      'img-4 img-4 img-4 img-4'
      'img-5 img-5 img-5 img-5'
      'img-6 img-6 img-6 img-6'
      'img-7 img-7 img-7 img-7'
      'img-8 img-8 img-8 img-8';
  }

  .img-1 {
    min-height: 15rem;
    --imageSrc: url('./../../../../assets/img/img-1-mobile.jpg');
  }

  .img-6 {
    --imageSrc: url('./../../../../assets/img/img-6-mobile.jpg');
  }

  .Section__background {
    height: 105%;
  }
}
</style>
