const token = 'IGQVJVZAXk5bDJ3R2pjQWJqT1BtazJXUmUwZAnN1QjVxaDk1QmNYeDZAjUklfcWc2b211am9MUTNYVHNDanBhTW96TUxKU0JTd0dxSlJyMWNlNUZAweHk0YjY1MG13Q3NHN1BYZAm5pZADlFNmN5d2hKbTNVVAZDZD';
const options = {mode: 'cors', method: 'GET'};
const userId = '17841416535627013';

export default{
    getPostsId(){
        return fetch(`https://graph.instagram.com/${userId}/media?access_token=${token}`,options);
    },

    getPostUrl(mediaId){
        return fetch(`https://graph.instagram.com/${mediaId}?fields=id,media_type,media_url,username,timestamp&access_token=${token}`,options) 
    }
} 