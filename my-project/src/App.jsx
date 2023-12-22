
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navigation } from "./Components/Navigation/Navigation";
import { Cart } from "./Components/Cart/Cart";
import { Whishlist } from "./Components/Whishlist/Whishlist";
import { Account } from "./Components/Account/Account";

import { Home } from "./Components/Home/Home";
import { About } from "./Components/About/About";


import { Shop } from "./Components/Shop/Shop";
import { Provider } from "react-redux";
import { Store } from "./Store/Store";
import { DetailsProduct } from "./Components/Home/DetailProduct/DetailsProduct";




import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Login} from "./Components/User/Login";
import { SignUpForm } from "./Components/User/SignUpForm";

function App() {
  return (
    <>
    <Provider store={Store} >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigation />}>
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUpForm />} />

            <Route path="/whishlist" element={<Whishlist />} />
            <Route index element={<Home />} />

            <Route path="/about" element={<About />} />

            <Route path="/shop" element={<Shop />} />
<Route path="/detailsproduct" element={<DetailsProduct/>}/>
     
        
          

            <Route path="/cart" element={<Cart />} />
            <Route path="/" element={<Account />} />
          </Route>
        </Routes>
      </BrowserRouter>
      </Provider>
      <ToastContainer />
    </>
  );
}

export default App;