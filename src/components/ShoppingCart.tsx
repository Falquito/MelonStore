const ShoppingCart = () => {
  return (
    <div>
      <ul>
        <li className="submenu">
          <span className="material-symbols-outlined">
            shopping_cart
          </span>
          <div id="carrito">
            <table id="lista-carrito">
              <thead>
                <tr>
                  <th>Imagen</th>
                  <th>Nombre</th>
                  <th>Precio</th>
                  <th></th>
                </tr>
              </thead>
              <tbody></tbody>
            </table>
            <a href="#" id="vaciar-carrito" className="btn-2">Vaciar Carrito</a>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default ShoppingCart;
