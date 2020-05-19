const Preloader = {
  props: {
    name: {
      type: String,
      default: 'Click me'
    }
  },
  data() {
    return {
      num: 0
    }
  },
  methods: {
    setRandomNum() {
      this.num = Math.floor(Math.random() * Math.floor(100));
      alert(this.num)
    }
  },
  template: `<button type="button" @click="setRandomNum()">{{ name }}</button>`
};