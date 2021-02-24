<template>
  <div class="category">
    <h2>Дизайн</h2>
    <div>
      <h4>Варианты дизайна</h4>

      <fieldset
        v-for="(value, name) in fieldsets"
        :name="name"
        :key="`fieldset-${name}`"
      >
        <radio-list-component
          :array="value"
          :name="name"
          @emitValue="elemValue"
          :key="`fieldset-${name}`"
        >
          <!-- component item -->
        </radio-list-component>
      </fieldset>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      totalCost: {},
      fieldsets: {
        type: [
          {
            name: "Лендинг",
            price: 10000,
          },
          {
            name: "Сайт-визитка",
            price: 30000,
          },
          {
            name: "Корпоративный сайт",
            price: 60000,
          },
          {
            name: "Интернет-магазин",
            price: 90000,
          },
        ],
        name: [
          {
            name: "Ходинг",
            price: 10,
          },
          {
            name: "Ворнинг",
            price: 20,
          },
          {
            name: "Лундинг",
            price: 30,
          },
          {
            name: "Безысходность",
            price: 40,
          },
        ],
        sad: [
          {
            name: "Ходинг",
            price: 1,
          },
          {
            name: "Ворнинг",
            price: 2,
          },
          {
            name: "Лундинг",
            price: 3,
          },
          {
            name: "Безысходность",
            price: 4,
          },
        ],
      },
    };
  },
  watch: {
    totalCost: {
      handler: "calcTotalCost",
      deep: true,
    },
  },
  mounted() {
    // Object.keys(this.fieldsets).forEach((key) => (this.totalCost[key] = 0));
  },
  computed: {},
  methods: {
    calcTotalCost(newVal) {
      let sums = 0;
      Object.values(newVal).forEach((price) => (sums += price));

      this.$emit("updateSumPrice", sums);
    },
    elemValue(obj) {
      this.$set(this.totalCost, obj.nameFieldset, obj.price);
      console.log(obj);
    },
  },
};
</script>
