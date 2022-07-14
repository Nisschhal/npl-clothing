// import logo from './logo.svg';
// import CategoryItem from "./components/category-item.component";
// import Directory from "./components/directory/directory.component";
// import CategoryItem from "./component/category-item.component";
import "./categories.style.scss";
import Home from "./routes/home/home.component"
import { Routes, Route } from 'react-router-dom';

import Navigation from "./routes/navigation/navigation.component"
import SignIn from "./routes/sign-in/sign-in.component";

const Shop = () => {
  return (<h1>ok i am in shop now.</h1>)
}



const App = () => {
  
  return (
    <Routes>
     <Route path="/" element={<Navigation/>}>
      {/* can also write only index but by default its value is true */}
     <Route index={true} element={<Home />}/>
      <Route path="shop" element={<Shop />} />
      <Route path="sign-in" element={<SignIn />} />
      </Route>
    </Routes>
    
  )
      
  ;
}

export default App;
