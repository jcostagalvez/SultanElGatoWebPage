<template>
    <div class="carousel__parent"> 
        <Header :typeOfColor="'black'"/>
        <div class="gallery">
            <h1> Ultimas publicaciones de sultan en Instagram</h1>
        </div>
        <div class="carrousel">
            <div class="carrousel__imgcontainer">
                <buttonLeft class="carrousel__imgcontainer__buttonLeft" v-on:previusImg="oldImg($event)" :count="count"/>
                <carouselImg class="carrousel__imgcontainer__Img" :Id="Id"/>
                <buttonRigth class="carrousel__imgcontainer__buttonRigth" v-on:fordwardImg="nextImg($event)" :count="count"/>
            </div>
        </div>
    </div>
</template>

<script>

import carouselImg from '../components/carousel/carouselDisplayImg';
import Header from '../components/header/Header';
import buttonLeft from '../components/carousel/auxCarouselButtonLeft'
import buttonRigth from '../components/carousel/auxCarouselButtonRigth'
import {mapState} from 'vuex';
    export default {

        components: {
            carouselImg,
            Header,
            buttonLeft,
            buttonRigth
        },

        beforeCreate() {   
            this.$store.dispatch('getPhotosId')
            .then(() => {
                console.log(this.photosId)
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
        }),
    },

    methods: {
        nextImg(fordwardImg) {
                this.count = fordwardImg;
                this.Id = this.photosId[this.count];
        },

        oldImg(previusImg){
            //get the count sum for the event of the button
                this.count = previusImg;
                this.Id = this.photosId[this.count];
        },
    },
}
</script>

<style>
.gallery{
    color: black;
    text-align: center;
    font-size: 94%;
    text-transform: uppercase;
}
.carrousel__btnContainer--back{
    display: flex;
    flex-direction: column;
    justify-content: center;
}
.carrousel__btnContainer--next{
    display: flex;
    flex-direction: column;
    justify-content: center;
}
.carrousel{
    display: flex;
    flex-direction: column;
    justify-content: center;
}
.carrousel__imgcontainer{
    align-self: center;
    display: flex;
    flex-direction: row;
    justify-content: center;
}
.carrousel__imgcontainer__Img{
    flex: 0.4;
    display: flex;
    flex-direction: column;
    justify-content: center;
}
.carousel__parent{
    height: 100%;
    display: flex;
    flex-direction: column;
}

</style>