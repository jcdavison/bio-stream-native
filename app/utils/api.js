// var SERVER = 'http://localhost:3000'
var SERVER = 'https://biocloud.herokuapp.com'
var api = {
    get(uri) {
        return fetch(`${SERVER}/api${uri}`)
                    .then(res => res.json())
    },

    post(uri, data) {
        url = `${SERVER}/api${uri}`
        return fetch(url, {method: 'post', body: `bioEvent[info]=${data.info}`})
            .then((res) => res.json() );
    } 
};

module.exports = api;
