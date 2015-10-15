var api = {
    get(uri) {
        return fetch(`http://localhost:3000/api${uri}`)
            .then((res) => res.json() );
    }
};

module.exports = api;
