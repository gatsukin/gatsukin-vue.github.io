<template>
  <div class="modal">
    <div class="modal-content">
      <button class="modal-close" @click="CloseModalSettings()">x</button>
      <div class="settings-modal">
        <h3>
          Settings
        </h3>
        <settings-form
          :user="this.user"
          @newUserData="listenNewUserData"
          @closeModal="CloseModalSettings()"
        />
      </div>
    </div>
  </div>
</template>
<script>
import SettingsForm from "../SettingsForm.vue";

export default {
  components: { SettingsForm },
  props: ["openSettings", "user"],
  data() {
    return {
      open: false,
      newUserData: {},
    };
  },
  watch: {
    openSettings: function() {
      if (this.openSettings == true) {
        this.open = true;
      } else {
        this.open = false;
      }
    },
  },
  methods: {
    CloseModalSettings() {
      this.$emit("closeSettings", false);
      console.log("Closing modal...");
    },
    listenNewUserData(data) {
      this.$emit("saveNewUser", data);
    },
  },
};
</script>
