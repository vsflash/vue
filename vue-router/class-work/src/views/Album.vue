<template>
    <div>
        <div class="row">
            <h3 class="center">{{album.name}}</h3>
            <p>{{album.about}}</p>
            <button class="center btn-success">Total time: {{totalTime}}</button>
            <div v-for="composition in album.compositions" class="col-lg-12">
                <h4 :key="composition.id">{{composition.id}} - {{composition.name}} {{composition.duration}}</h4>
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
        },
        computed: {
            /**
             * Get album total time.
             *
             * @returns {string}
             */
            totalTime: function () {
                let total = [];
                this.album.compositions.forEach((element) => {
                    let duration_array = element.duration.split(":");
                    total.push(parseInt(duration_array[1]) + parseInt(duration_array[0] * 60))
                });
                let second_time = total.reduce(function (total, num) {
                    return total + parseInt(num)
                }, 0);

                return Math.floor(second_time / 60) + ':' + second_time % 60;
            }
        }
    }
</script>

<style>
    .center {
        margin: 0 auto;
    }
</style>