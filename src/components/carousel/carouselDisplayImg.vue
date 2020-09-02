<template>
    <div>

        <img class="imgCarrousel" :src="url.Url" alt="Imagen">
        <video src=""></video>
    </div>
</template>

<script>

import {mapState} from 'vuex';

    export default {
        props: {
            Id: {
                type: Object
            },
        },
        data() {
            return {
            url: ''
            }
        },
        watch: {
            Id(newValue) {
                if (this.$store.getters.getUrlPhoto(newValue.id) === undefined){

                    this.$store.dispatch('getPhotoUrl',newValue.id)
                    .then(()=>{
                        this.url = this.$store.getters.getUrlPhoto(newValue.id);   
                    })

                } else{

                    this.url = this.$store.getters.getUrlPhoto(newValue.id); 

                }
            }
        },
        computed: {
            ...mapState({
                urlMedia: state => state.instagramStore.photosPath,
            }),
        },
    }
</script>

<style>
.imgCarrousel{
    width:100vh;
}
</style>