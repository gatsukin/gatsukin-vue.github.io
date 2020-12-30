<template>
  <!-- Панель навигации -->
  <nav-bar
    @openModalProfileEvent="listenModalProfile"
    @openModalSettingsEvent="listenModalSettings"
    @changeModeEvent="changeMode"
    :darkModeDefault="darkModeDefault"
  />
  <!-- Страница -->
  <hello-world :user="this.user" />
  <!-- Модалки -->
  <transition name="bounce">
    <profile-modal
      v-if="this.openProfile"
      @closeProfile="listenCloseProfile"
      :user="this.user"
    />
  </transition>
  <transition name="bounce">
    <settings-modal
      v-if="this.openSettings"
      @closeSettings="listenCloseSettings"
      :user="this.user"
      @saveNewUser="saveNewUserInfo"
    />
  </transition>
  <transition name="fadeBg">
    <div
      class="modal-background"
      v-if="this.openSettings || this.openProfile"
    ></div>
  </transition>
</template>
<script>
export default {
  data() {
    return {
      darkModeDefault: false,
      user: {
        name: null,
        age: null,
        gender: null,
      },
      openProfile: false,
      openSettings: false,
      newUserInfo: {},
    };
  },
  mounted() {
    this.changeMode(this.darkModeDefault);
  },
  methods: {
    // Модалка профиля
    listenModalProfile() {
      this.openProfile = true;
    },
    listenCloseProfile() {
      this.openProfile = false;
    },
    // Модалка настроек
    listenModalSettings() {
      this.openSettings = true;
    },
    listenCloseSettings() {
      this.openSettings = false;
    },
    saveNewUserInfo(data) {
      this.user = data.newUser;
    },
    changeMode(data) {
      let htmlElement = document.documentElement;

      if (data) {
        localStorage.setItem("data-app-theme", "dark");
        htmlElement.setAttribute("data-app-theme", "dark");
      } else {
        localStorage.setItem("data-app-theme", "light");
        htmlElement.setAttribute("data-app-theme", "light");
      }
    },
  },
};
</script>
