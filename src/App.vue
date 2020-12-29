<template>
  <div :class="[darkmode ? 'darkmode' : 'lightmode']">
    <nav-bar
      @openModalProfileEvent="listenModalProfile"
      @openModalSettingsEvent="listenModalSettings"
    />
    <hello-world />
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
  </div>
</template>
<script>
export default {
  data() {
    return {
      darkmode: false,
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
  },
};
</script>
