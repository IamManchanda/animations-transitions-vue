export default {
  data () {
    return {
      show: true,
      numbers: [1, 2, 3, 4, 5]
    };
  },
  methods: {
    addItem() {
      const pos = Math.floor(Math.random() * this.numbers.length);
      this.numbers.splice(pos, 0, this.numbers.length + 1);
      /*this.numbers.push(this.numbers.length + 1);*/
    },
    removeItem(index) {
      this.numbers.splice(index, 1);
    }
  }
};