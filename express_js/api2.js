const express = require("express");
const app = express();
const {products} = require("./data")

app.get("/", (req, res) =>{
    res.send("<h1>Application User Interface</h1><a href='/api/products'>Products</a>")
})

app.get("/api/products", (req, res)=>{
    const newProducts = products.map((product)=>{
        const {id,name,position} = product
        return {id, name, position}
    })

    res.json(newProducts)
})

app.get("/api/products/:productID", (req, res)=>{
    const {productID} = req.params
    console.log(productID)

    const productOne = products.find((product)=>{
        return product.id === Number(productID);
    })

    if(!productOne){
        return res.status(404).send("Product does not exist")
    }

    return res.json(productOne)
})

app.get('/api/products/:productID/reviews/:reviewID', (req, res)=>{
    console.log(req.params)
    res.send('hello world!')
})

app.get("/api/v1/query",(req,res)=>{
    // console.log(req.query)
    // res.send("Hello Query!")

    const { search, limit} = req.query
    let sortedProducts = [...products]

    if(search){
        sortedProducts = sortedProducts.filter((product)=>{
            return product.name.startsWith(search)
        })
    }

    if(limit){
        return sortedProducts = sortedProducts.slice(0,Number(limit))
    }

    if(sortedProducts.length < 1){
        // res.status(200).send("No product matched your search")
        return res.status(200).json({success: true, data: []})
    }

    res.status(200).json(sortedProducts)
})


// app.get("*", (req,res)=>{
//     res.status(404).send("server not found")
// })

app.listen(8080, () =>{
    console.log('Server is listening on Port 8080')
})

