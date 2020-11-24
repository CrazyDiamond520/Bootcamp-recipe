const express = require('express')
const path = require('path')
const app = express()
const urllib = require('urllib')

app.use(express.static(path.join(__dirname, 'dist')))
app.use(express.static(path.join(__dirname, 'node_modules')))

app.get('/sanity', function(req, res){
        console.log("OK")
        res.send("OK")
})

app.get('/recipes/:ingredient', function(req,res){
    const {ingredient} = req.params
    urllib.request(`https://recipes-goodness.herokuapp.com/recipes/${ingredient}`, function(err, data){
        const recipes = JSON.parse(data.toString())
        const {results} = recipes
        const finalData = results.map((i) => {return{
            ingredients: i.ingredients,
            title: i.title,
            thumbnail: i.thumbnail,
            href: i.href
        }})

        res.send(finalData)
    })
})


const port = 8080
app.listen(port, function(){
    console.log("server is up and running !")
})