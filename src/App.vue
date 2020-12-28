<template>
  <nav-bar @openModalProfileEvent="listenModalProfile" />
  <hello-world />
  <profile-modal
    :openProfile="this.openProfile"
    @closeProfile="listenCloseProfile"
  />
</template>
<script>
export default {
  data() {
    return {
      openProfile: false,
    };
  },
  methods: {
    listenModalProfile() {
      this.openProfile = true;
    },
    listenCloseProfile() {
      this.openProfile = false;
    },
  },
};
</script>
