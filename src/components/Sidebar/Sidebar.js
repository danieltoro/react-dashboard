import React, { Component } from 'react';
import { Link } from 'react-router'

class Sidebar extends Component {

  handleClick(e) {
    e.preventDefault();
    e.target.parentElement.classList.toggle('open');
  }

  activeRoute(routeName) {
    return this.props.location.pathname.indexOf(routeName) > -1 ? 'nav-item nav-dropdown open' : 'nav-item nav-dropdown';
  }

  // secondLevelActive(routeName) {
  //   return this.props.location.pathname.indexOf(routeName) > -1 ? "nav nav-second-level collapse in" : "nav nav-second-level collapse";
  // }

  render() {
    return (

      <div className="sidebar">
        <nav className="sidebar-nav">
          <ul className="nav">
            <li className="nav-item">
              <Link to={'/dashboard'} className="nav-link" activeClassName="active"><i className="icon-speedometer"></i> Inicio </Link>
            </li>

            {/* Productos */}
            <li className={this.activeRoute("/products")}>
              <a className="nav-link nav-dropdown-toggle" href="#" onClick={this.handleClick.bind(this)}><i className="icon-star"></i> Productos</a>
              <ul className="nav-dropdown-items">
                <li className="nav-item">
                  <Link to={'/products/products'} className="nav-link" activeClassName="active"><i className="icon-star"></i> Agregar producto</Link>
                </li>
                <li className="nav-item">
                  <Link to={'/products/update-product'} className="nav-link" activeClassName="active"><i className="icon-star"></i> Actualizar producto</Link>
                </li>
                <li className="nav-item">
                  <Link to={'/products/delete-product'} className="nav-link" activeClassName="active"><i className="icon-star"></i> Eliminar producto</Link>
                </li>
              </ul>
            </li>

            {/* Categorias */}
            <li className={this.activeRoute("/categories")}>
              <a className="nav-link nav-dropdown-toggle" href="#" onClick={this.handleClick.bind(this)}><i className="icon-star"></i> Categorias</a>
              <ul className="nav-dropdown-items">
                <li className="nav-item">
                  <Link to={'/categories/categories'} className="nav-link" activeClassName="active"><i className="icon-star"></i> Agregar categorias</Link>
                </li>
                <li className="nav-item">
                  <Link to={'/categories/update-category'} className="nav-link" activeClassName="active"><i className="icon-star"></i> Actualizar categorias</Link>
                </li>
                <li className="nav-item">
                  <Link to={'/categories/delete-category'} className="nav-link" activeClassName="active"><i className="icon-star"></i> Eliminar categorias</Link>
                </li>
              </ul>
            </li>

            {/* Generos */}
            <li className={this.activeRoute("/genders")}>
              <a className="nav-link nav-dropdown-toggle" href="#" onClick={this.handleClick.bind(this)}><i className="icon-star"></i> Generos</a>
              <ul className="nav-dropdown-items">
                <li className="nav-item">
                  <Link to={'/genders/genders'} className="nav-link" activeClassName="active"><i className="icon-star"></i> Agregar genero</Link>
                </li>
                <li className="nav-item">
                  <Link to={'/genders/update-gender'} className="nav-link" activeClassName="active"><i className="icon-star"></i> Actualizar genero</Link>
                </li>
                <li className="nav-item">
                  <Link to={'/genders/delete-gender'} className="nav-link" activeClassName="active"><i className="icon-star"></i> Eliminar genero</Link>
                </li>
              </ul>
            </li>

            {/* Familias */}
            <li className={this.activeRoute("/families")}>
              <a className="nav-link nav-dropdown-toggle" href="#" onClick={this.handleClick.bind(this)}><i className="icon-star"></i> Familias</a>
              <ul className="nav-dropdown-items">
                <li className="nav-item">
                  <Link to={'/families/families'} className="nav-link" activeClassName="active"><i className="icon-star"></i> Agregar familias</Link>
                </li>
                <li className="nav-item">
                  <Link to={'/families/update-family'} className="nav-link" activeClassName="active"><i className="icon-star"></i> Actualizar familias</Link>
                </li>
                <li className="nav-item">
                  <Link to={'/families/delete-family'} className="nav-link" activeClassName="active"><i className="icon-star"></i> Eliminar familias</Link>
                </li>
              </ul>
            </li>


            <li className="nav-item">
              <Link to={'/banners'} className="nav-link" activeClassName="active"><i className="icon-pie-chart"></i> Banners</Link>
            </li>
          </ul>
        </nav>
      </div>
    )
  }
}

export default Sidebar;
