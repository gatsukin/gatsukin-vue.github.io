<template>
  <div>
    <h3>{{ name }}</h3>
    <ul class="list p-0">
      <li v-for="(item, index) in array" :key="`field-${index}`">
        <div class="item form-check d-flex align-items-center px-0">
          <div class="input-group">
            <label
              class="form-check-label d-flex align-items-center form-control p-0"
            >
              <div class="input-group-text me-2">
                <input
                  class="form-check-input mx-0"
                  type="radio"
                  v-model="pickedValue"
                  :name="name + item.price"
                  :id="item.name"
                  :value="item.price"
                />
              </div>
              {{ item.name }}
              <span class="item__price ms-auto" v-if="item.price"
                ><span class="price-str">{{ item.price }}</span> руб.</span
              >
            </label>
          </div>
        </div>
      </li>
    </ul>
  </div>
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
  mounted() {
    this.niceNumb();
  },
  methods: {
    niceNumb() {
      let strArr = document.querySelectorAll(".price-str");
      strArr.forEach((str) => {
        let strN = str.innerHTML;
        str.replaceWith(strN.toString().replace(/(\d)(?=(\d{3})+$)/g, "$1 "));
      });
    },
    emitPickedValue() {
      this.$emit("emitValue", {
        nameFieldset: this.name,
        price: this.pickedValue,
      });
    },
  },
};
</script>
