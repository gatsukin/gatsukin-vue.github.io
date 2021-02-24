<template>
  <div class="category">
    <h2>3 Этап - Лицензирование, хостинг и домен</h2>
    <div>
      <fieldset
        v-for="item in fieldsets"
        :name="item.name"
        :key="`fieldset-${item.name}`"
      >
        <radio-list-component
          :array="item.items"
          :name="item.name"
          @emitValue="elemValue"
          :key="`fieldset-${item.name}`"
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
        bitrix: {
          name: "Подбор лицензии 1С-Bitrix ",
          items: [
            {
              name: "«1С-Битрикс: Управление сайтом - Старт» ",
              price: 5400,
            },
            {
              name: "«1С-Битрикс: Управление сайтом - Стандарт» ",
              price: 15900,
            },
            {
              name: "«1С-Битрикс: Управление сайтом - Малый бизнес» ",
              price: 35900,
            },
            {
              name: "«1С-Битрикс: Управление сайтом - Бизнес» ",
              price: 72900,
            },
            {
              name: "«1С-Битрикс: Enterprise» ",
              price: 399000,
            },
            {
              name: "«1С-Битрикс24: Интернет-Магазин + CRM»  ",
              price: 99000,
            },
          ],
        },
        ssl: {
          name: "Подбор SSL-сертификата  ",
          items: [
            {
              name: "Comodo Essential ",
              price: 3083,
            },
            {
              name: "AlphaSSL Wildcard ",
              price: 8850,
            },
            {
              name: "Alpha SSL",
              price: 2300,
            },
            {
              name: "Comodo Instant SSL",
              price: 4111,
            },
            {
              name: "Comodo Positive SSL Wildcard ",
              price: 18245,
            },
          ],
        },
        host: {
          name: "Подбор хостинга ",
          items: [
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
        },
        domain: {
          name: "Регистрация домена",
          items: [
            {
              name: "В зоне RU, РФ ",
              price: 600,
            },
            {
              name: "В зоне COM, SU, NET ",
              price: 1500,
            },
          ],
        },
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
    },
  },
};
</script>
