<template>
  <div>
    <div class="row">
      <p>{{album.about}}</p>
      <div v-for="composition in album.compositions" class="col-lg-3">
          <h4>{{composition.name}} {{composition.duration}}</h4>
        <p>
          {{composition.about}}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      id: {
        type: [Number, String],
        required: true
      },
      item_id: {
        type: [Number, String],
        required: true
      },
      album: {
        type: [Object, Array],
        required: true
      }
    }
  }
</script>