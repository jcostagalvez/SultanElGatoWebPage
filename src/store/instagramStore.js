
import instagramservices from '@/js/services/instagramservices.js'

export default {
    state: {
        photosId:[],
        photosPath: [],
        photosIdToGet: 5,
    },

    mutations: {

        SET_PHOTOS_ID(state, Ids) {
            state.photosId = Ids.slice(0, state.photosIdToGet);
        },

        SET_PHOTOS_URL(state, url){
            state.photosPath.push(url);
        }
    },

    actions: {
       async getPhotosId({commit}) {
            return instagramservices.getPostsId()
            .then( response => response.json()
              ).then(data => {
                console.log('Inicia la funcion')
                commit('SET_PHOTOS_ID', data.data);
              })
            .catch(err => {
                console.log(err);
            });       
        },

        getPhotoUrl({commit}, Id){
           return instagramservices.getPostUrl(Id)
            .then(result => result.json())
            .then(data => {
                const photo = {Id: Id, Url:data.media_url, Media:data.media_type, permalink: data.permalink};
                commit('SET_PHOTOS_URL', photo)
                return photo
            })
        }
    },

    getters: {
        getUrlPhoto: state => Id => {
            return state.photosPath.find(photo => photo.Id === Id);
        }
    }
};
