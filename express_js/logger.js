// Middleware are functions that executes during the request to the server
// Each middleware has access to the req and response object

// req => middleware => res

const logger = (req,res,next) =>{
    const method = req.method;
    const url = req.url;
    const time = new Date().getFullYear();
    console.log(method, url, time)

    next()           //always pass the middeway to the next function

    // res.send("Testing the middleware")
}

module.exports = logger;