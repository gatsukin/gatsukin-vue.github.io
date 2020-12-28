<template>
  <div :class="['modal', { open: open }]">
    <div class="modal-overlay">
      <div class="modal-content">
        <button class="modal-close" @click="CloseModalProfile()">x</button>
        <div class="profile-modal">
          <h3>Profile</h3>

          <div class="profile-modal--text">
            <b>
              Name:
            </b>
            <br />
            Sergey Chichalov
          </div>

          <div class="profile-modal--text">
            <b>
              Age:
            </b>
            <br />
            31 y.o
          </div>

          <div class="profile-modal--text">
            <b>
              gender:
            </b>
            <br />
            male
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["openProfile"],
  data() {
    return {
      open: false,
    };
  },
  watch: {
    openProfile: function() {
      if (this.openProfile == true) {
        this.open = true;
      } else {
        this.open = false;
      }
    },
  },
  methods: {
    CloseModalProfile() {
      this.$emit("closeProfile", false);
      console.log("closed");
    },
  },
};
</script>
