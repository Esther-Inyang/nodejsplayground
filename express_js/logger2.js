const secondLogger = (req,res,next) =>{
    const {user} = req.query; //user is the query key and john is the value. NOTE: always start a query with a question mark ?

    if(user === "john"){
        req.user = {name: 'John', id: 3}
        next()
    }else{
        res.status(401).send('unauthorized user')
    }
}

module.exports = secondLogger;
