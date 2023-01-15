import React, { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import { LoginPage } from '../pages/login/LoginPage'
import { ProductPage } from '../pages/admin/ProductPage'
import { MainPage } from '../pages/customer/MainPage'
import { useDispatch, useSelector } from 'react-redux'
import { SearchProductPage } from '../pages/customer/SearchProductPage'
import { SelectedProductPage } from '../pages/customer/SelectedProductPage'
import { getCurrentCart } from '../store/cart/thunks'
import { CartItemsPage } from '../pages/customer/CartItemsPage'
import { setCurrentUser } from '../store/user/userSlice'


export const MainRouter = () => {

  const dispatch = useDispatch()
  const currentUser = useSelector((state) => state.users.currentUser);
  dispatch( getCurrentCart() )

  /*al momento de correr el app se va a verficar si hay algun usuario ingresado buscando en el local storage 
  si hay cuurentUser*/
   useEffect(()=>{
    if(localStorage.getItem("currentUser")){
        const currUSer=JSON.parse(localStorage.getItem("currentUser"));
       dispatch(setCurrentUser(currUSer));
       
    }
  },[])
   

  return (
    <div>

      {
        currentUser 
          ?
          <Routes>
            {/* Si esta logeado y es ADMIN */}
        
            {/* <Route path='/*' element={<ProductPage />} /> */}
            <Route path='/products' element={<ProductPage />} />
            {/* Si esta logeado y es CUSTOMER */}
            <Route path='/main' element={<MainPage />} />
            <Route path='/search' element={<SearchProductPage />} />
            <Route path='/product/:id' element={<SelectedProductPage />} />
            <Route path='/cart' element={<CartItemsPage />} />

          </Routes> :
          <Routes>
            <Route path='*' element={<LoginPage />} />
          </Routes>

      }

    </div>
  )
}
