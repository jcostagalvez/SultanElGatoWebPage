import lstcategories from '../js/mockInfo.js'

export default {
    state:{
        categories:[]
    },

    mutations:{
        SET_CATEGORIES(state, lstobjcategories){
            state.categories = lstobjcategories;
        }
    },

    actions:{
        getcategories({commit}){
            console.log(lstcategories.getCategories());
            commit('SET_CATEGORIES', lstcategories.getCategories());
            return lstcategories.getCategories()
        }
    },

    modules:{

    },

    getters:{
        getTodoById: (state) => (name) => {
            return state.categories.find(categorie => categorie.name === name)
          }
    },

}