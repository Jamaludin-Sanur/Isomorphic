export default class HttpUtility{

    static req(url, options){
        return fetch(url, options)
        .then( result => {
            return result.json();
        })
        .then( result => {
            return result;
        })
        .catch(err => {
            console.log("FETCH ERROR : ", url, err);
            throw err;
        })
    }

}