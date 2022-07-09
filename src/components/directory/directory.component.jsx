import CategoryItem from "../category-item/category-item.component";


import "./directory.style.scss";

const Directory = ({ categories }) => { 
  return (
    <div className="directory-container">
        {/* <CategoryItem key={category.id} category={category} /> */}
      {/* {categories.map((category) => (
        ))} */}
        {categories.map((category) => (
            <CategoryItem key={category.id}  category={category} />
     
       ))} 
    </div>
  );
};

export default Directory;
