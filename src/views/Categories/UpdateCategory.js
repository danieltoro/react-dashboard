import React, { Component } from 'react';
//import { Button, ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

class UpdateCategory extends Component {
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
                <strong>Formulario de</strong> Actualizacion de Categorias
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
                    <label className="col-md-3 form-control-label" htmlFor="textarea-input">Descripcion</label>
                    <div className="col-md-9">
                      <textarea id="textarea-input" name="textarea-input" rows="9" className="form-control" placeholder="Ingrese una descripcion para el producto..."></textarea>
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

export default UpdateCategory;
