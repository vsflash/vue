const AnimeCard = {
    props: {
        news: {
            type: Object,
            required: true
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
    template: `<div class="card" style="width: 18rem;">
            <img class="card-img-top" :src="news.img" alt="Card image cap">
            <div class="card-body">
              <h5 class="card-title">{{ news.title }}</h5>
              <p class="card-text">{{ news.desc }}</p>
              <a :href="news.link" class="btn btn-primary">Open</a>
            </div>
        </div>`
};