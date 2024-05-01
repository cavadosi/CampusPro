// Define la base de la URL
const baseUrl = 'https://example.com/api';

let mode = 1;


if (mode === 1){
    baseUrl = 'https://campus-pro.vercel.app/'
}else{
    baseUrl = 'http://localhost/3000'

}

module.exports = baseUrl;
