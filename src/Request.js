const key ="ea9fbdd3e3f7d52a8952c7a2f83fca18"

const requests={
    requestPopular:`https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=1`,
    requestTopRated:`https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&language=en-US&page=1`,
    requestTrending:`https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=2`,
    requestUpcoming:`https://api.themoviedb.org/3/movie/upcoming?api_key=${key}&language=en-US&page=2`,
    requestHorror:`https://api.themoviedb.org/3/search/movie?api_key=${key}&query=horror&include_adult=false&language=en-US&page=1`,
}

export default requests

