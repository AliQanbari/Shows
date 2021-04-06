<template>
    <div>
        <img :src="imageLink" />
        <h5>{{show.name}}</h5>
    </div>
</template>
<script>
import Vue from 'vue';

export default Vue.extend({
    props : ['show'],
    computed: {
        imageLink(){
            return `/images/'${this.show.slug}.jpg`;
        }
    }
})
</script>
