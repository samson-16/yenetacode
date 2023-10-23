const ProductRoute = require("./productRouter")

const AllRoute =(app)=>{
    app.use("/api/products",ProductRoute)
}
module.exports =AllRoute