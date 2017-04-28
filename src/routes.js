import React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

// Containers
import Full from './containers/Full/'
// import Simple from './containers/Simple/'

import Dashboard from './views/Dashboard/'

// Products
import Products from './views/Products/Products.js'
import UpdateProduct from './views/Products/UpdateProduct.js'
import DeleteProduct from './views/Products/DeleteProduct.js'

// Categories
import Categories from './views/Categories/Categories.js'
import UpdateCategory from './views/Categories/UpdateCategory.js'
import DeleteCategory from './views/Categories/DeleteCategory.js'

// Gendres
import Genders from './views/Genders/Genders.js'
import UpdateGender from './views/Genders/UpdateGender.js'
import DeleteGender from './views/Genders/DeleteGender.js'

// Families
import Families from './views/Families/Families.js'
import UpdateFamily from './views/Families/UpdateFamily.js'
import DeleteFamily from './views/Families/DeleteFamily.js'


export default (
  <Router history={hashHistory}>
    <Route path="/" name="Home" component={Full}>
      <IndexRoute component={Dashboard}/>
      <Route path="dashboard" name="Dashboard" component={Dashboard}/>
      <Route path="products/" name="Products">
        <IndexRoute component={Products}/>
        <Route path="products" name="Products" component={Products}/>
        <Route path="update-product" name="Update Product" component={UpdateProduct}/>
        <Route path="delete-product" name="Delete Product" component={DeleteProduct}/>
      </Route>
      <Route path="categories/" name="Categories">
        <IndexRoute component={Categories}/>
        <Route path="categories" name="Categories" component={Categories}/>
        <Route path="update-category" name="Update Category" component={UpdateCategory}/>
        <Route path="delete-category" name="Delete Category" component={DeleteCategory}/>
      </Route>
      <Route path="genders/" name="Genders">
        <IndexRoute component={Genders}/>
        <Route path="genders" name="Genders" component={Genders}/>
        <Route path="update-gender" name="Update Gender" component={UpdateGender}/>
        <Route path="delete-gender" name="Delete Gender" component={DeleteGender}/>
      </Route>
      <Route path="families/" name="Families">
        <IndexRoute component={Families}/>
        <Route path="families" name="Families" component={Families}/>
        <Route path="update-family" name="Update Family" component={UpdateFamily}/>
        <Route path="delete-family" name="Delete Family" component={DeleteFamily}/>
      </Route>

    </Route>
  </Router>
);
