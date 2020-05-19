/* компоненты */

Vue.component('btn', {
  /* Свойства передаваемые с родительского компонента */
  props: {
    name: {
      type: String,
      default: 'Click me'
    }
  },
  /* в компонентах data должна быть функцией */
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
  // шаблон компонента
  template: `<button type="button" @click="setRandomNum()">{{ name }}</button>`
});