const axios = require('axios');

axios.post('https://sai-brothersbackend.onrender.com/allitem',{table:"pproducts"})
.then(res => {
    console.log(res.data);
})