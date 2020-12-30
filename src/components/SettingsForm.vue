<template>
  <div class="settings">
    <div class="settings__box">
      <input
        type="text"
        required
        v-model="UserInfo.name"
        @keypress.enter="checkForm"
      />
      <span class="bar"></span>
      <label class="placeholder">Name / Nickname</label>
    </div>
    <div class="settings__box">
      <div class="settings__box--line">
        <span class="checkbox-name">Age:</span>
        <input
          type="number"
          required
          v-model="UserInfo.age"
          @keypress.enter="checkForm"
        />
      </div>
      <input type="range" min="0" max="100" step="1" v-model="UserInfo.age" />
    </div>
    <div class="settings__box">
      <span class="checkbox-name">Gender:</span>
      <div class="checkbox-choose">
        <label class="checkbox-label">
          <input
            type="radio"
            name="gender"
            value="male"
            hidden
            v-model="UserInfo.gender"
          />
          <div>
            Male
          </div>
        </label>
        <label class="checkbox-label">
          <input
            type="radio"
            name="gender"
            value="female"
            hidden
            v-model="UserInfo.gender"
          />
          <div>
            Female
          </div>
        </label>
      </div>
    </div>
    <div class="settings__save">
      <input type="submit" @click="checkForm" value="Save" />
    </div>
  </div>
</template>
<script>
export default {
  props: ["user"],
  data() {
    return {
      UserInfo: {
        name: this.user.name,
        age: this.user.age,
        gender: this.user.gender,
      },
    };
  },
  methods: {
    checkForm() {
      this.$emit("newUserData", {
        newUser: this.UserInfo,
      });
      this.$emit("closeModal");
    },
  },
};
</script>
