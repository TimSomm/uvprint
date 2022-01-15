<template>
  <section class="ContactSection">
    <div class="ContactSection__container">
      <div class="ContactSection__layout">
        <div class="ContactSection__contentGrid">
          <div class="ContactSection__infoGrid">
            <h3 class="ContactSection__title">Lépjünk kapcsolatba</h3>
            <h6 class="ContactSection__description">
              Ha további kérdése akadt, bátran keressen alábbi elérhetőségeim egyikén, vagy küldjön
              üzenetet!
            </h6>
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
          <div class="ContactSection__form">
            <h6 class="ContactSection__sendMailTitle"></h6>
            <form action="#">
              <div class="ContactSection__sendMailInputContainer">
                <label for="fullname" class="ContactSection__sendMailLabel"></label>
                <input type="text" name="fullname" id="fullname" placeholder="írja be a teljes nevét" class="ContactSection__sendMailInput" required>
              </div>
              <div class="ContactSection__sendMailInputContainer">
                <label for="email" class="ContactSection__sendMailLabel"></label>
                <input type="email" name="email" id="email" placeholder="írja be az e-mail címét" class="ContactSection__sendMailInput" required>
              </div>
              <div class="ContactSection__sendMailInputContainer">
                <label for="subject" class="ContactSection__sendMailLabel"></label>
                <input type="text" name="subject" id="subject" placeholder="írja be az e-mail tárgyát" class="ContactSection__sendMailInput">
              </div>
              <div class="ContactSection__sendMailInputContainer">
                <label for="message" class="ContactSection__sendMailLabel"></label>
                <input type="textarea" name="message" id="message" placeholder="írja be az üzenetet" class="ContactSection__sendMailInput">
              </div>
              <div class="ContactSection__sendMailInputContainer">
                <button type="submit">Küldés</button>
              </div>
            </form>
          </div>
          <div class="ContactSection__map"></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ContactSection',
};
</script>

<style scoped></style>
