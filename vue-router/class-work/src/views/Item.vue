<template>
  <div>
    <h3>{{artist.name}}</h3>
    <div class="row">
      <div v-if="artist.album" v-for="alb in artist.album" class="col-lg-4">
        <router-link
                :key="alb.index"
                :to="{name:'Album', params: {item_id: artist.name.replace(' ', '_'), id: alb.name.replace(' ', '_'), album: alb}}"
        >
          {{alb.name}} ({{alb.compositions.length}})
        </router-link>
      </div>
      <div v-else>Artist have not albums</div>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      item_id: {
        type: [Number, String],
        required: true
      },
      artist: {
        type: [Object, Array],
        required: true
      }
    },
    methods: {
      getArtist() {
        this.singleNews = fullNews.filter(item => item.id === parseInt(vm.$route.params.id))[0]
      }
    }
  }
</script>