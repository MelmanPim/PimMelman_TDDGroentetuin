const API_KEY = '236c65e7b21832cee46098a83c283fa9'

async function getData() {
    try {

        const apiUrl = ('https://api.themoviedb.org/3/genre/movie/list');
        let res = await fetch(apiUrl);
        let resJson = await res.json();
        console.log(resJson);

    } catch (err) {
        console.log(err);
    }

}