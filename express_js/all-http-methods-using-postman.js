const express = require("express")
const app = express()

const {products} = require("./data.js")

app.get("/",(req,res)=>{
//    res.status(200).send("This is a GET request")
   res.status(200).json({success: true, data: products})
   console.log("Successful GET request")
})

app.post("/",(req,res)=>{
    console.log("Successful POST request")
    res.status(200).json({...products,
        data: {
        id: 5,
        name: "Femi Dora",
        position: 5,
        interest: "jogging"}
    })
})

app.put("/api/products/:id",(req,res)=>{
    const {id} = req.params;

    // Catch Error
    const sameId = products.find((product)=> product.id === Number(id))

    if(!sameId){
        return res.status(404).json({success:false,data:`ID ${id} not found!`})
    }
    
    // Update exisiting name of product
    const newProducts = products.map((product)=>{
        if(product.id === Number(id)){
            product.name = `'Jane Mark' replaced ${product.name}`
        }
        return product;
    })
    
    // Print result on postman
    res.status(200).json({success:true, data: newProducts})

    // Command line console message
    console.log("Successful PUT request")
})

app.delete("/api/products/:id",(req,res)=>{
    // Catch error
    // Check if the router ID is the same as the product ID
    const sameId = products.find((product)=>{
        return product.id === Number(req.params.id)
    })

    // if the IDs dont match, do this
    if(!sameId){
        return res.status(404).json({success:false,data:`sorry, no product with ID ${req.params.id}`})
    }

    // Delete or do not show the product that matches the router ID
    const remainingProducts = products.filter((product)=>{
       return product.id !== Number(req.params.id)
    })

    // print result on postman
    res.status(200).json({success: true, data: remainingProducts})

    // console message
    console.log("Successful DELETE request")
})

app.listen(8080, ()=>{
    console.log("App is listening on port 8080")
})