const exp=require('express')
const adminApp=exp.Router()
let productsCollection;
adminApp.use((req,res,next)=>{
  productsCollection=req.app.get('productsCollection');
  next()
})
const expressAsyncHandler=require('express-async-handler')

//get products by their productid
adminApp.get('/products/:id', (req, res) => {
    let id = Number(req.params.id);
    let product=user.find((userObj)=>userObj.id===id);
    if(product==undefined)
    {
      res.send({message:"No products "});
    }else{
      res.send({message:"a product found",payload:product})
    }
  });

//get all products
  adminApp.get('/products',(req,res)=>{
    res.send({message:'all products',payload:products})
  });

//admin adding new product 
  adminApp.post('/new-product',expressAsyncHandler(async(req,res)=>{
    //get new user obj
    const newproduct=req.body;
    console.log({newproduct})
    await productsCollection.insertOne(newArticle);
   res.send({message:"new product added"});
    
  }));
  

//edit products by admin
adminApp.put('/product',expressAsyncHandler(async(req,res)=>
{
  //get modified article
  const modifiedProduct=req.body;
  await productsCollection.updateOne({productid:modifiedProduct.productid},{$set:{...modifiedProduct}})
  res.send({message:"product modifed"})
}));

//deleting products by admin
adminApp.put('/product/:productid',expressAsyncHandler(async(req,res)=>{
  let product=req.body;
  await productsCollection.updateOne({productid:product.productid},{$set:{...product}})

  res.send({message:"Product deleted"})
}));


  module.exports=adminApp;