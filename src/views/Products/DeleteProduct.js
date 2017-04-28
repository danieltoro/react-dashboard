import React, { Component } from 'react';
//import { Button, ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

class UpdateProduct extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className="animated fadeIn">
        <div className="row">
          <div className="col-md-12">
            <div className="card">
              <div className="card-header">
                <strong>Formulario de</strong> Eliminacion de productos
              </div>
              <div className="card-block">
                <form action="" method="post" encType="multipart/form-data" className="form-horizontal">
                  <div className="form-group row">
                    <label className="col-md-3 form-control-label" htmlFor="text-input">Nombre</label>
                    <div className="col-md-9">
                      <input type="text" id="text-input" name="text-input" className="form-control" placeholder="Ingrese el nombre del producto"/>
                    </div>
                  </div>
                  <div className="form-group row">
                    <label className="col-md-3 form-control-label">SKU</label>
                    <div className="col-md-9">
                      <p className="form-control-static">123456</p>
                    </div>
                  </div>
                  {/* <div className="form-group row">
                    <label className="col-md-3 form-control-label" htmlFor="text-input">SKU</label>
                    <div className="col-md-9">
                      <input type="text" id="text-input" name="text-input" className="form-control" placeholder="Ingrese el SKU"/>
                    </div>
                  </div> */}
                  <div className="form-group row">
                    <label className="col-md-3 form-control-label" htmlFor="select">Categoria</label>
                    <div className="col-md-9">
                      <select id="select" name="select" className="form-control">
                        <option value="0">Seleccione una Categoria</option>
                        <option value="1">Option #1</option>
                        <option value="2">Option #2</option>
                        <option value="3">Option #3</option>
                      </select>
                    </div>
                  </div>
                  <div className="form-group row">
                    <label className="col-md-3 form-control-label" htmlFor="select">Familia</label>
                    <div className="col-md-9">
                      <select id="select" name="select" className="form-control">
                        <option value="0">Seleccione una Familia</option>
                        <option value="1">Option #1</option>
                        <option value="2">Option #2</option>
                        <option value="3">Option #3</option>
                      </select>
                    </div>
                  </div>
                  <div className="form-group row">
                    <label className="col-md-3 form-control-label" htmlFor="select">Genero</label>
                    <div className="col-md-9">
                      <select id="select" name="select" className="form-control">
                        <option value="0">Selecciones un Genero</option>
                        <option value="1">Option #1</option>
                        <option value="2">Option #2</option>
                        <option value="3">Option #3</option>
                      </select>
                    </div>
                  </div>

                  <div className="form-group row">
                    <label className="col-md-3 form-control-label" htmlFor="textarea-input">Descripcion</label>
                    <div className="col-md-9">
                      <textarea id="textarea-input" name="textarea-input" rows="9" className="form-control" placeholder="Ingrese una descripcion para el producto..."></textarea>
                    </div>
                  </div>
                  <div className="form-group row">
                    <label className="col-md-3 form-control-label" htmlFor="text-input">Precio</label>
                    <div className="col-md-9">
                      <div className="input-group">
                        <span className="input-group-addon"><i className="fa fa-dollar"></i></span>
                        <input type="text" id="input3-group1" name="input3-group1" className="form-control" placeholder="ingrese el precio"/>
                      </div>
                    </div>
                  </div>

                  <div className="form-group row">
                    <label className="col-md-3 form-control-label">Premiere</label>
                    <div className="col-md-9">
                      <label className="switch switch-3d switch-primary">
                        <input type="checkbox" className="switch-input" defaultChecked/>
                        <span className="switch-label"></span>
                        <span className="switch-handle"></span>
                      </label>
                    </div>
                  </div>
                  <div className="form-group row">
                    <label className="col-md-3 form-control-label">Oferta</label>
                    <div className="col-md-9">
                      <label className="switch switch-3d switch-primary">
                        <input type="checkbox" className="switch-input" defaultChecked/>
                        <span className="switch-label"></span>
                        <span className="switch-handle"></span>
                      </label>
                    </div>
                  </div>
                  <div className="form-group row">
                    <label className="col-md-3 form-control-label" htmlFor="file-multiple-input">Imagenes</label>
                    <div className="col-md-9">
                      <input type="file" id="file-multiple-input" name="file-multiple-input" multiple/>
                    </div>
                  </div>
                  <div className="form-group row">
                    <label className="col-md-3 form-control-label" htmlFor="text-input">Media</label>
                    <div className="col-md-9">
                      <input type="text" id="text-input" name="text-input" className="form-control" placeholder="Text"/>
                    </div>
                  </div>


                </form>
              </div>
              <div className="card-footer">
                <button type="submit" className="btn btn-sm btn-primary"><i className="fa fa-dot-circle-o"></i> Enviar</button>
                <button type="reset" className="btn btn-sm btn-danger"><i className="fa fa-ban"></i> Limpiar</button>
              </div>
            </div>

          </div>
        </div>
      </div>
    )
  }
}

export default UpdateProduct;
