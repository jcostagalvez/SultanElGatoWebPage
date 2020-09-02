<template>
    <div class="initPageContainer">
            <Header/>
        <div class="body_container">
            <h1 class="body_container__title"> La vida de un gato feliz</h1>
            <span class="body_container__title--line"></span>
        </div>   
    </div>
</template>

<script>
import Header from '../components/header/Header';
export default {
    components:{  
        Header 
    }
}
</script>

<style>
.initPageContainer{
    background-image: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4) ), url('../../resource/Imagenes/Sultan_portada.png');
    background-size: cover;
    height: 100%;
    display: flex;
    flex-direction: column;}

.body_container{
    flex:1;
    display: flex;
    flex-direction: column;
    justify-content: center;
}
.body_container__title{
    font-size: 40px;
    color: white;
    font-family: none;
    text-transform: uppercase;
    text-align: center;
}
.body_container__title--line{
content: '';
    background-color: white;
    width: 43%;
    margin-top: -22px;
    height: 5px;
    align-self: center;
}
</style>