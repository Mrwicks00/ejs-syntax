const express = require('express');
const PORT = 5000;

const app = express();

app.set('view engine', 'ejs');



app.get('/',(req, res )=> {

    let data = [
         {name: 'pipslab', year: '2024', socials: 'twitter'},
         {name: 'novalab', year: 2023, socials: 'twitter'},
         {name: 'rebeldao', year: 2009, socials: 'twitter'}
        ]
    
        res.render('pages/index', {data: data})
})

app.get('/user', (req, res) => {
    fetch("https://api.github.com/users")
    .then((response) => {return response.json()})
    .then((data)=>{
        res.render('pages/github', {data: data})
    })
})


app.listen(PORT, () => {
   console.log(`Server is running under port ${PORT}`);
   
})