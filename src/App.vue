<template>
  <nav-bar @listetModalProfile="openModalProfile" />
  <hello-world />
  <profile-modal :openProfile="openProfile" />
</template>
<script>
export default {
  data() {
    return {
      openProfile: false,
    };
  },
  methods: {
    listetModalProfile() {},
  },
};
</script>
