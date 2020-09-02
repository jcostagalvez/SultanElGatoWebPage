<template>
    <div class="indexPage">
        <Header :typeOfColor="'black'"/>        
        <div class="circle"></div>
        <div class="indexpage_body">
            <h1 class="indexpage_body_title">¿A donde quieres ir?</h1>
            <ul class="indexpage_body_elements">
                <li class="indexpage_body_element" v-for="categorie in categories" 
                :key="categorie.name"> <indexLine :category="categorie" /></li>
            </ul>
        </div>
    </div>
</template>
 
<script>

import Header from '../components/header/Header';
import indexLine from '../components/IndexPage/indexElement';

import {mapState} from 'vuex';

    export default { 
        components: {
            Header,
            indexLine
        },

        beforeCreate() {
            this.$store.dispatch('getcategories');
        },

        computed: {
            ...mapState({
                categories: state => state.indexstore.categories
            }),
        }, 
    }
</script>

<style>

.indexPage{
background: whitesmoke;
height: 100%;
display: flex;
flex-direction: column;
animation: transitionOpacity 2s ease-in;
}

.indexpage_body{
    flex:1;
    margin-top: 5%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    text-align: center;
}
.indexpage_body_elements{
    flex: 0.9;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-left: 25%;
    margin-right: 25%;
    margin-bottom: 5%;
}

.indexpage_body_element{
    color: black;
    font-family: sans-serif;
    font-size: 18px;
    font-weight: 700;
    cursor: pointer;
    padding: 1%;
    list-style: none;
}

.indexpage_body_element:hover{
    background: #dbb672;
}

@keyframes transitionOpacity{
    0%{clip-path: circle(150px at 100% -10%);
    background-color: rgba(0, 0, 0, 0.4);}
    100%{clip-path: circle( 1300px at 100% -10%);
    background-color: whitesmoke;}
}
</style>
