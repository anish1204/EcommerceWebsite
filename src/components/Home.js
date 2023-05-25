import React, { useEffect } from 'react'
import Navbar from './Navbar'
import { Route } from 'react-router-dom'
import {auth,fs} from '../config/config'
import { useState } from 'react'
import Products from './Products'
import {Link, Navigate,useNavigate } from 'react-router-dom';

export const Home = (props) => {

  //getting user id uid
  function GetUserUid(){
    const[uid,setUid]=useState(null);
    useEffect(()=>{
      auth.onAuthStateChanged(user=>{
        if(user)
        {
          setUid(user.uid);
        }
      })
    },[])
    return uid;
  }

  const uid = GetUserUid();

  //getting current user functions
  function GetCurrentUser(){
      const [user,setUser]=useState(null);
      useEffect(()=>{
        auth.onAuthStateChanged(user=>{
          if(user)
          {
              fs.collection('users').doc(user.uid).get().then(snapshot=>{
                setUser(snapshot.data().FullName);
              })
          }
          else
          {
            setUser(null);
          }
        })
      },[])
      return user;

  }

  const user = GetCurrentUser();
  // console.log(user);

  const [products,setProducts]=useState([]);




  //getting products function
  const getProducts = async()=>{
    const products= await fs.collection('Products').get();
    const productsArray = [];
    for(var snap of products.docs){
      var data= snap.data();
      data.ID = snap.id;
      productsArray.push({
        ...data
      })
      if(productsArray.length === products.docs.length){
          setProducts(productsArray);

      }

    }
  }

  useEffect(()=>{
      getProducts();
  },[])





  const navigate=useNavigate();

  let Product;


  const addToCart=(product)=>{
    if(uid!==null)
    {
      
      Product=product;
      // console.log('Hello '+product);
      Product['qty']=1;
      Product['TotalProductPrice']=Product.qty*Product.price;
      fs.collection('Cart '+uid).doc(product.ID).set(Product).then(()=>{
        console.log('successfully added item');
      })
    }
    else
    {
          navigate('/login');
      // <Route path="/login"/>
      // console.log('Cart added');
    }
    // console.log(product);
  }

  return (
    <>
    
      <Navbar user={user}/>
      {/* <Products/> */}
      <br></br>
      {products.length > 0 && (
        <div className='container-fluid'>
          <h1 className='text-center'>Products</h1>
          <div className='products-box'>
            <Products products={products} addToCart={addToCart}/>
          </div>
        </div>
      )}
      {products.length<1 && (
        <div className='container-fluid'>Please Wait......</div>
      ) }
    </>
  )
}

 export default Home
