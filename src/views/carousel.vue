<template>
    <div> 
        <carouselImg :Id="Id"/>
        <button  @click="oldImg"> old Img  </button>
        <button @click="nextImg"> next Img </button>
    </div>
</template>

<script>

import carouselImg from '../components/carousel/carouselDisplayImg';

import {mapState} from 'vuex';
    export default {

        components: {
            carouselImg,
        },

        beforeCreate() {   
            this.$store.dispatch('getPhotosId')
            .then(() => {
                this.Id = this.photosId[0]
            })
        },

    data() {
        return {
            count: 0,
            Id:{}
        }
    },
    
    computed: {
        ...mapState({
             photosId: state => state.instagramStore.photosId,
             limitPhotosDisplay: state => state.instagramStore.photosIdToGet
        }),
    },

    methods: {
        nextImg() {

            this.count ++;

            if(this.count > this.limitPhotosDisplay){
                this.count = 0; 
                this.Id = this.photosId[this.count];

            } else{
                this.Id = this.photosId[this.count];
            }

            console.log(this.count);
        },

        oldImg(){
            this.count --; 
            if(this.count < 0){
               this.count = this.limitPhotosDisplay;

                this.Id = this.photosId[this.count];
            } else{
                this.Id = this.photosId[this.count];
            }
            console.log(this.count);
        },
    },
}
</script>

<style lang="scss" scoped>

</style>