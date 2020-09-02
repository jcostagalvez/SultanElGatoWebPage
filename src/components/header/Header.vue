<template>
    <div class="navBar_content">
        <div class="navBar_Logo_Container">
            <img :src="setIconColor" alt="gato-icon" class="navBaar_Logo">
            <p class="title" :style="titleColorStyle">Sultan el gato</p>
        </div>
            <div class="navBar_options">
                <component :is="setNavButton"></component>
            </div>
    </div>
</template>

<script>
import buttonNavOptions from './buttonNavOptions';
import buttonNavOptionsIndex from './buttonNavOptionsIndex';

    export default {
        components:{ 
           buttonNavOptions,
           buttonNavOptionsIndex
        },
        props: {
            typeOfColor: {
                    type: String,
                    default:'white', 
                },
            },
        data() {
            return {
                component: '',
            }
        },
        computed: {
            
            setNavButton() {
                return this.$route.name === 'indexPage'? 'buttonNavOptionsIndex' : 'buttonNavOptions';
            },

            setIconColor(){
                if(this.typeOfColor === 'black'){
                    return require("../../../resource/Icono/gato-negro.png") 
                }else {
                    return require("../../../resource/Icono/gato-blanco.png")
                   
                }
            },

            titleColorStyle(){
                 if(this.typeOfColor === 'black'){
                    return {color: 'black'}
                }else {
                    return {color: 'white'}   
                }
            },


        },
    }

</script>
    import
<style>
    .navBar_content{
        height: 10%;
        margin-top: 2%;
        display: flex;
        justify-content: space-around;
    }

.navBar_Logo_Container{
    flex:3;
    display: flex;

}
    .navBaar_Logo{
        margin-left: 5%;
        width: 50px;
        height: 50px;
        justify-self: self-start;
        color: white;
    }
    .title{
        align-self:center;
        margin-left: 8%;
        font-size: 20px;
        text-transform: uppercase;
        font-family: cursive;
    }
    .navBar_options{
        margin-right: 5%;
        flex: 1;
        justify-self: self-start;
        align-self: center;
        display: flex;
        justify-content: flex-end;
    }

</style>