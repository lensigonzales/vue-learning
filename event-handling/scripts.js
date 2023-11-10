Vue.createApp({
  data() {
    return {
      x: 12,
      y: 4,
      fruitBasket: [
        "🍏 Apple",
        "🍌 Banana",
        "🍉 Melon",
        "🫐 Blueberry",
        "🍓 Strawberry",
        "🍍 Ananas",
        "🥭 Mango",
      ],
    };
  },
  methods: {
    getCoordinates(event) {
      this.x = event.x;
      this.y = event.y;
    },
    removeFromList(removedEl) {
      this.fruitBasket = this.fruitBasket.filter((fruit) => fruit != removedEl);
    },
  },
}).mount("#app");
