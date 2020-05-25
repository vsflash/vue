<template>
    <div class="container">
        <h3>Artists</h3>
        <div class="row">
                <div v-for="artist in artists" class="col-lg-2">
                    <router-link
                            :key="artist.index"
                            :to="{name:'Item', params: {item_id: artist.name.replace(' ', '_'), artist: artist}}"
                    >
                        {{artist.name}}
                    </router-link>
                </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                artists: []
            }
        },
        beforeRouteEnter(to, from, next) {
            next(vm => {
                setTimeout(function() {
                    fetch("http://www.json-generator.com/api/json/get/cuKKbBWWXm?indent=2")
                        .then(resp => {
                            return resp.json();
                        })
                        .then(result => {
                            vm.artists = result;
                        });
                }, 100)
            })
        }
    }
</script>
