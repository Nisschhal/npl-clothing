import { Fragment } from "react";
import CategoryItem from "../category-item/category-item.component";


import "./directory.style.scss";

const Directory = ({ categories }) => { 
  return (
    <Fragment>
      <div className="directory-container">
        {/* <CategoryItem key={category.id} category={category} /> */}
      {/* {categories.map((category) => (
        ))} */}
        {categories.map((category) => (
            <CategoryItem key={category.id}  category={category} />
     
       ))} 
    </div>
    </Fragment>
  );
};

export default Directory;
