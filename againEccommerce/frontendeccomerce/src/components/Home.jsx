import { Link } from "react-router-dom"
export const Home=()=>{


    return (<div>
        <Link to="/login"> Login</Link>
      <Link to="/signup">Signup</Link>
      <Link to="/product">Product</Link>
      <Link to="/brand">Brand</Link>
      <Link to="/address">Address</Link>
      <Link to="/reviews">Reviews</Link>
    </div>)
}