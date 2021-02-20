<template>
  <form :name="name">
    <ul class="list">
      <li v-for="item in array" :key="item.id">
        <label class="item">
          <input
            type="radio"
            :name="name"
            v-model="pickedValue"
            :value="item.price"
            :id="item.name"
          />
          <span class="item__name">{{ item.name }}</span>
          <span class="item__price" v-if="item.price"
            >{{ item.price }} руб.</span
          >
        </label>
      </li>
    </ul>
  </form>
</template>
<script>
export default {
  props: ["name", "array"],
  data() {
    return {
      pickedValue: 0,
    };
  },
  watch: {
    pickedValue: function() {
      this.emitPickedValue();
    },
  },
  methods: {
    emitPickedValue() {
      this.$emit("emitValue", this.pickedValue);
    },
  },
};
</script>
