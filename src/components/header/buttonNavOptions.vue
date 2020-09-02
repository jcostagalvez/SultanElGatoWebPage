<template>
    <div class="navButton" v-on:click="redirect" >
            <div class="navButton__burguer" ></div>
    </div>

</template>

<script>


    export default {
        methods: {
            redirect() {
                this.$router.push('/index');
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

.navButton__burguer{
    width: 30px;
    height: 3px;
    background: #ffffff;
    border-radius: 5px;
}

.navButton__burguer::after, 
.navButton__burguer::before{
    opacity:1;
    content: ' ';
    position: absolute;
    width: 30px;
    height: 3px;
    background: #ffffff;
    border-radius: 5px;
    transition: all 0.5s ease-in;

}

.navButton__burguer::after{
    transform: translateY(10px);
}

.navButton__burguer::before{
    transform: translateY(-10px);
}

.navButton:hover .navButton__burguer::before{
    transform: rotate(90deg);
    
}

.navButton:hover .navButton__burguer::after{
    transform: rotate(90deg);
}
</style>