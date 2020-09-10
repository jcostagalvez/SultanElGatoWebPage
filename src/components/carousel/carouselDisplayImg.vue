<template>
    <div class="imgcarrouselcontainer">
        <img v-if="!isVideo" class="imgcarrouselcontainer__img" :src="Media.Url" alt="Imagen">
        <video v-if="isVideo" class="imgcarrouselcontainer__img" autoplay :src="Media.Url + '.mp4' ">
        </video>
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
            Media:{},
            isVideo:'',
            }
        },
        watch: {
            Id(newValue) {

                if (this.$store.getters.getUrlPhoto(newValue.id) === undefined){
                    this.$store.dispatch('getPhotoUrl',newValue.id)
                    .then(()=>{
                        this.Media = this.$store.getters.getUrlPhoto(newValue.id);
                        this.Media.Media == 'VIDEO' ? this.isVideo = true : this.isVideo = false;
                    })
                } else{
                    this.Media = this.$store.getters.getUrlPhoto(newValue.id);
                    this.Media.Media == 'VIDEO' ? this.isVideo = true : this.isVideo = false; 
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
.imgcarrouselcontainer{
    flex: 1;
    display: flex;
    flex-direction: row;
    justify-content: center;
}

.imgcarrouselcontainer__img{
    max-width: 430px;
    max-height: 430px;
}
</style>