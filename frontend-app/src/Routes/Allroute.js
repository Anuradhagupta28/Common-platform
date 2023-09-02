import { Route, Routes } from "react-router-dom"
import ProductPage from "../Components/Product";
import Cart from "../Components/Cart"
function AllRoute(){
return(
    <div>
        <Routes>
        <Route path='/' element={<ProductPage/>}/>
   < Route path='/cart' element={<Cart/>}/>
          
        </Routes>
    </div>
)
}
export default AllRoute;