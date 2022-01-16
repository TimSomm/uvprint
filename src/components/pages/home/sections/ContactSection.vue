<template>
  <section class="ContactSection">
    <div class="ContactSection__container">
      <div class="ContactSection__layout">
        <div class="ContactSection__contentGrid">
          <div class="ContactSection__infoGrid">
            <h2 class="ContactSection__title">Lépjünk kapcsolatba</h2>
            <h4 class="ContactSection__description">
              Ha további kérdése akadt, bátran keressen alábbi elérhetőségeim egyikén, vagy küldjön
              üzenetet!
            </h4>
            <div class="ContactSection__contactInfoContainer">
              <div class="ContactSection__contactInfo">
                <div class="ContactSection__contactLogo">
                  <img src="./../../../../assets/img/phone.svg" alt="phone" />
                </div>
                <div class="ContactSection__contactLabel">
                  <p>+36 20 9411 843</p>
                </div>
              </div>
              <div class="ContactSection__contactInfo">
                <div class="ContactSection__contactLogo">
                  <img src="./../../../../assets/img/email.svg" alt="email" />
                </div>
                <div class="ContactSection__contactLabel">
                  <p>info@uvprint.hu</p>
                </div>
              </div>
              <div class="ContactSection__contactInfo">
                <div class="ContactSection__contactLogo">
                  <img src="./../../../../assets/img/home.svg" alt="home" />
                </div>
                <div class="ContactSection__contactLabel">
                  <p>7150 Bonyhád, Perczel utca 80.</p>
                  <p>9700 Szombathely, Rauscher M. utca 33.</p>
                </div>
              </div>
              <div class="ContactSection__contactInfo">
                <div class="ContactSection__contactLogo">
                  <img src="./../../../../assets/img/skype.svg" alt="skype" />
                </div>
                <div class="ContactSection__contactLabel">
                  <p>uvprintkft</p>
                </div>
              </div>
            </div>
          </div>
          <form action="#" class="ContactSection__form">
            <div class="ContactSection__sendMailInputContainer">
              <label for="fullname" class="ContactSection__sendMailLabel">Név</label>
              <input
                type="text"
                name="fullname"
                id="fullname"
                placeholder="írja be a teljes nevét"
                class="ContactSection__sendMailInput"
                required
              />
            </div>
            <div class="ContactSection__sendMailInputContainer">
              <label for="email" class="ContactSection__sendMailLabel">E-mail</label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="írja be az e-mail címét"
                class="ContactSection__sendMailInput"
                required
              />
            </div>
            <div class="ContactSection__sendMailInputContainer">
              <label for="subject" class="ContactSection__sendMailLabel">Tárgy</label>
              <input
                type="text"
                name="subject"
                id="subject"
                placeholder="írja be az e-mail tárgyát"
                class="ContactSection__sendMailInput"
              />
            </div>
            <div class="ContactSection__sendMailInputContainer">
              <label for="message" class="ContactSection__sendMailLabel">Üzenet</label>
              <textarea
                rows="4"
                cols="50"
                name="message"
                id="message"
                placeholder="írja be az üzenetet"
                class="ContactSection__sendMailInput"
                required
              />
            </div>
            <button type="submit" class="ContactSection__sendMailBtn">Küldés</button>
          </form>
          <div class="ContactSection__map">
            <google-map
              :center="{ lat: 10, lng: 10 }"
              :zoom="7"
              style="width: 100%; height: 100%"
            ></google-map>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ContactSection',
  data() {
    return {
      coordinates: {
        lat: 0,
        lng: 0,
      },
    };
  },
  created() {
    this.$getLocation({})
      .then((coordinates) => {
        this.coordinates = coordinates;
      })
      .catch((err) => {
        alert(err);
      });
  },
};
</script>

<style scoped>
.ContactSection {
  position: relative;
  z-index: 1;
}

.ContactSection__container {
  display: flex;
  justify-content: center;
}

.ContactSection__layout {
  max-width: calc(var(--columnPaddingNormal) * 2 + var(--layoutWidth));
  padding-inline: 32px;
  padding-bottom: 10vh;
  margin-top: 200px;
}

.ContactSection__contentGrid {
  display: grid;
  grid: auto/repeat(3, 1fr);
  gap: 16px;
}

.ContactSection__infoGrid {
  display: grid;
  row-gap: 32px;
  padding: 16px;
}

.ContactSection__title {
  font: 600 30px / 1.5 var(--fontFamily);
}

.ContactSection__description {
  font-style: italic;
}

.ContactSection__contactInfo {
  display: flex;
  align-items: center;
  margin-top: 10px;
}

.ContactSection__contactLabel {
  margin-left: 16px;
}

.ContactSection__form {
  display: grid;
  row-gap: 32px;
  padding: 16px;
}

.ContactSection__sendMailInputContainer {
  display: flex;
  flex-direction: column;
}

.ContactSection__sendMailLabel {
  margin-bottom: 16px;
}

.ContactSection__sendMailInput {
  border-color: #000;
  border-top: none;
  border-left: none;
  border-right: none;
  min-height: 50px;
}

textarea {
  height: 100px;
}

.ContactSection__contactLogo {
  width: 40px;
  aspect-ratio: 1;
}

.ContactSection__sendMailBtn {
  background: linear-gradient(to bottom right, #ef4765, #ff9a5a);
  border: 0;
  border-radius: 12px;
  color: #ffffff;
  cursor: pointer;
  display: inline-block;
  font-family: -apple-system, system-ui, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
  font-size: 16px;
  font-weight: 500;
  line-height: 2.5;
  outline: transparent;
  padding: 0 1rem;
  text-align: center;
  text-decoration: none;
  transition: all 300ms cubic-bezier(0.23, 1, 0.32, 1);
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  white-space: nowrap;
}

.ContactSection__sendMailBtn:not([disabled]):focus {
  box-shadow: 0 0 0.25rem rgba(0, 0, 0, 0.5), -0.125rem -0.125rem 1rem rgba(239, 71, 101, 0.5),
    0.125rem 0.125rem 1rem rgba(255, 154, 90, 0.5);
}

.ContactSection__sendMailBtn:not([disabled]):hover {
  box-shadow: 0 0 0.25rem rgba(0, 0, 0, 0.5), -0.125rem -0.125rem 1rem rgba(239, 71, 101, 0.5),
    0.125rem 0.125rem 1rem rgba(255, 154, 90, 0.5);
}

img {
  width: inherit;
  height: inherit;
}
</style>
