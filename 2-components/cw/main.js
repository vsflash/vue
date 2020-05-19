const newsArr = [
  {
    id: 1,
    title: 'news 1',
    desc: 'description of news 1',
    img: 'https://media.wsls.com/photo/2017/04/24/Whats%20News%20Today_1493062809311_9576980_ver1.0_1280_720.png',
    link: '#'
  },
  {
    id: 2,
    title: 'news 2',
    desc: 'description of news 2',
    img: '',
    link: '#'
  },
  {
    id: 3,
    title: 'news 3',
    desc: 'description of news 3',
    img: 'https://www.ctvnews.ca/polopoly_fs/1.4344128.1553095687!/httpImage/image.png_gen/derivatives/landscape_620/image.png',
    link: '#'
  }
];

const newApp = new Vue({
  /* "точка" монтирования Vue, по селектору */
  el: '#app',
  /* Дочерные компоненты */
  components: {
  },

  /* Реактивные свойства */
  data: {
    newsArr,
    loremText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    num: 5,
    textWithHtml: '<p style="color: red">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>',
    attr: {
      name: 'data-tab',
      val: 'firstTab'
    },
    myInput: '',
    testingWatch: 1,
    news: newsArr
  },

  /* Вычесляемые свойства. Это также методы, они не должны быть сложными и возвращать результат.
  Результат кешируется и хранится до тех пор пока данные не изменятся. */
  computed: {
    filterNews() {
      /* фильтруем новости, сохраняем только те у которых есть картинка */
      return this.news.filter(item => item.img)
    }
  },

  /* объект в который добавляются методы наблюдения и реагирования. */
  watch: {
    testingWatch: function(nVal, oVal) {
      console.log(nVal);
      console.log(oVal);
    }
  },

  /* Хуки жизненного цикла - это функции вызываемые в определенный момент жизни приложения или компонента, например перед рендерингом компонента. */
  /* Все хуки имеют доступ к контексту экземпляра Vue, по этому данные, методы и вычисляемые свойства доступны */
  /* https://ru.vuejs.org/v2/guide/instance.html#%D0%94%D0%B8%D0%B0%D0%B3%D1%80%D0%B0%D0%BC%D0%BC%D0%B0-%D0%B6%D0%B8%D0%B7%D0%BD%D0%B5%D0%BD%D0%BD%D0%BE%D0%B3%D0%BE-%D1%86%D0%B8%D0%BA%D0%BB%D0%B0 */



  /* Методы - бызнес логика/функционал приложения */
  methods: {
    sendForm() {
      alert(this.myInput)
    },
    printFilteredNews() {
      console.log(this.filterNews)
    },
    changeNews() {
      // добавляем еще одну новость
      this.news.push({
        id: 4,
        title: 'news 4',
        desc: 'description of news 4',
        img: 'http://erasmusplus.org.ge/files/news/news-1.jpg',
        link: '#'
      })
    }
  }
});



