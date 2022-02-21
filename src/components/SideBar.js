import React from "react";
import logo from "../assets/images/logo.png";
import ContentWrapper from "./ContentWrapper";
import TableCategories from "./TableCategories";
import UltimoProducto from "./UltimoProducto";
import ContentRowMovies from "./ContentRowMovies";
import ListadoProductos from "./ListadoProductos";
import SearchProducts from "./SearchProducts";
import NotFound from "./NotFound";
import { Link, Route, Switch } from "react-router-dom";

function SideBar() {
  return (
    <React.Fragment>
      {/*<!-- Sidebar -->*/}
      <ul
        className="navbar-nav sidebar bg-gradient-primary sidebar-dark accordion"
        id="accordionSidebar"
      >
        {/*<!-- Sidebar - Brand -->*/}
        <link
          className="sidebar-brand d-flex align-items-center justify-content-center"
          to="/"
        >
          <div className="sidebar-brand-icon">
            <img className="w-100" src={logo} alt="Digital House" />
          </div>
        </link>

        {/*<!-- Divider -->*/}
        <hr className="sidebar-divider bg-dark mt-5" />

        {/*<!-- Heading -->*/}
        <div className="sidebar-heading text-dark">Categorias</div>

        {/*<!-- Nav Item - Pages -->*/}
        <li className="nav-item">
          <Link className="nav-link" to="/categories">
            <i className="fas fa-fw fa-folder"></i>
            <span className="text-dark">Categorias</span>
          </Link>
        </li>

        {/*<!-- Nav Item - Charts -->*/}
        <li className="nav-item">
          <Link className="nav-link " to="/ultimoProducto">
            <i className="fas fa-fw fa-chart-area"></i>
            <span className="text-dark">Ultimo producto</span>
          </Link>
        </li>

        {/*<!-- Nav Item - Tables -->*/}
        <li className="nav-item nav-link">
          <Link className="nav-link" to="/listadoProductos">
            <i className="fas fa-fw fa-table"></i>
            <span className="text-dark">Listado de productos</span>
          </Link>
        </li>

        {/*<!-- Divider -->*/}
        <hr className="sidebar-divider bg-dark d-none d-md-block" />
        {/*<!-- Nav Item - Tables -->*/}
        <li className="nav-item nav-link">
          <Link className="nav-link" to="/SearchProducts">
            <i className="fas fa-fw fa-table"></i>
            <span className="text-dark">Buscar producto</span>
          </Link>
        </li>
      </ul>

      <Switch>
        <Route exact path="/">
          <ContentWrapper />
        </Route>
        <Route path="/categories">
          <TableCategories />
        </Route>
        <Route path="/ultimoProducto">
          <UltimoProducto />
        </Route>
        <Route path="/listadoProductos">
          <ListadoProductos />
        </Route>
        <Route path="/SearchProducts">
          <SearchProducts />
        </Route>
        <Route component={NotFound} />
      </Switch>
      {/*<!-- End Microdesafio 2 -->*/}
    </React.Fragment>
  );
}
export default SideBar;
