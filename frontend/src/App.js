import './App.css';
import {Provider} from 'react-redux';
import {reduxStore} from '../src/store/store';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Rootlayout from './Components/Rootlayout/rootlayout';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import Products from './Components/Products/Products';
import AboutUs from './Components/AboutUs/AboutUs';
import Cart from './Components/Cart/Cart';
import PlaceOrder from './Components/PlaceOrder/PlaceOrder'
import MyOrders from './Components/MyOrderss/MyOrders';
import OrderRecieved from './Components/OrderRecieved/OrderRecieved';
function App() {
  let browserRouter=createBrowserRouter([
    {
      path:"",
      element:<Rootlayout/>,
      children:[
      {
        path:"",
        element:<Home/>,
      },
      {
        path:"/login",
        element:<Login/>
      },
      {
        path:"/products",
        element:<Products/>
      },
      {
        path:"/aboutus",
        element:<AboutUs/>
      },
      {
        path:'/cart',
        element:<Cart/>
      },
      {
        path:'/order',
        element:<PlaceOrder/>
      },
      {
        path:"/myorders",
        element:<MyOrders/>
      },
      {
        path:"/order-recieved",
        element:<OrderRecieved/>
      }
    ]
  }
]);
  return (
    
    <Provider store={reduxStore}>
          <div className="App">
      <RouterProvider router={browserRouter}/>
    </div>
    </Provider>
  
  );
}

export default App;
