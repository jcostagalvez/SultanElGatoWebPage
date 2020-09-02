<template>
    <div class="navButton" v-on:click="goBack" >
            <div class="navButton__close" ></div>
    </div>

</template>

<script>


    export default {

        methods: {
            goBack() {
               return this.$router.go(-1);
            }
        },
    }

</script>

<style>
.navButton{
width: 30px;
height: 25px;
cursor: pointer;
display: flex;
flex-direction: column;
justify-content: center;

}

.navButton__close{
animation: rotateBotton 0.5s ease-in-out;}

.navButton__close::before{
    content: ' ';
    position: absolute;
    width: 30px;
    height: 3px;
    background: #000000;
    transform: rotate(45deg);
    border-radius: 5px;

} 
.navButton__close::after{
    content: ' ';
    position: absolute;
    width: 30px;
    height: 3px;
    background: #000000;
    transform: rotate(-45deg);
    border-radius: 5px;

}

@keyframes rotateBotton {
    0%{transform: rotate(45deg);}
    100%{transform: rotate(360deg);}
}
</style>