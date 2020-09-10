<template>
    <div class="buttonContainer">
        <font-awesome-icon @click="previusImg" class="buttonContainer__iconButton" icon="chevron-circle-left"/>
    </div>
</template>

<script>

import {mapState} from 'vuex';

    export default {
        props: {
            count: {type: Number},
        },

        data() {
            return {
                countresult:''
            }
        },
        methods: {
            previusImg(){
                this.countresult = this.count;
                this.countresult --;
                if(this.countresult < 0){
                    this.countresult = this.limitPhotosDisplay - 1;
                } 

                this.$emit('previusImg',this.countresult);
            },
    },
        computed: {
        ...mapState({
             limitPhotosDisplay: state => state.instagramStore.photosIdToGet
            }),
        },
    }
</script>

<style>
.buttonContainer{
    display: flex;
    flex-direction: column;
    justify-content: center;
    z-index: 1;
}
.buttonContainer__iconButton{
    margin-left: 120%;
    cursor: pointer;
    color:rgba(255, 255, 255, 0.403);
    font-size: 40px;
}

.buttonContainer__iconButton:hover{
    color:white;
}

</style>