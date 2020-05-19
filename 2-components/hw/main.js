const topApp = new Vue({
    el: '#app',
    components: {},
    data: {
        newsArr: [],
        num: 5,
        news: newsArr
    },
    computed: {
        filterNews() {
            return this.news.filter(item => item.img)
        }
    },
    // watch: {
    //   testingWatch: function(nVal, oVal) {
    //     console.log(nVal);
    //     console.log(oVal);
    //   }
    // },
    methods: {
        sendForm() {
            alert(this.myInput)
        },
        changeNews() {
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



