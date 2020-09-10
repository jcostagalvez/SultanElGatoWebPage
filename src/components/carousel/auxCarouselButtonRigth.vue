<template>
    <div class="buttonContainer">
         <font-awesome-icon @click="forwardImg" class="iconButton" icon="chevron-circle-right"/>
    </div>
</template>

<script>
import {mapState} from 'vuex';

    export default {
        props: {
            count: {type: Number},
        }, 
    data() {
        return { countresult: '' }
    },
       methods: {
            forwardImg() {
                this.countresult = this.count;
                this.countresult ++;
                if(this.countresult > this.limitPhotosDisplay - 1){
                    this.countresult = 0;
                } 
                this.$emit('fordwardImg',this.countresult);
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
 
.iconButton{
    margin-left: -120%;
    cursor: pointer;
    color:rgba(255, 255, 255, 0.403);
    font-size: 40px;
}

.iconButton:hover{
    color:white;
}

</style>