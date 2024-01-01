const axios = require('axios');

axios.post('/getitem',{table:"pproducts",id:id})
        .then(res => {
            console.log(res)
            setName(res.data[0].title)
            setPrice(res.data[0].price)
            setImage(res.data[0].image)
            setQuantity(res.data[0].quantity)
        })
        .catch(err => console.log(err))