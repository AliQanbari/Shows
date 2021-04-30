<template>
    <div class="box-content w-64 h-128 show-box">
        <div class="flex flex-row">
            <div class="score-box" >{{show.score}}</div>
            <div class="flex flex-col justify-center"><h5 class="show-title">{{show.name}}</h5></div>
        </div>
        <img class="box-content w-56 h-80" :src="imageLink" />
    </div>
</template>
<script>
import Vue from 'vue';

export default Vue.extend({
    props : ['show'],
    computed: {
        imageLink(){
            return `/images/${this.show.slug}.jpg`;
        }
    }
})
</script>
<style scoped>
.show-box {
    background-color: #EC4899;
    margin: 0.5rem;
    width: 220px;
    border-radius: 4px;
}

.score-box {
    background-color: #FBCFE8;
    margin: 0.5rem;
    padding: 0.5rem 1rem;
    border-radius: 4px;
}
.show-title {
    text-align: start;
    text-overflow: clip;
    max-height: 4rem;
}
</style>
