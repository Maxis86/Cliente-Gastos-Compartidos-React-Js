import React, { useContext } from "react";

import gastosContext from "../context/gastos/gastosContext";

import swal from "sweetalert";
import Swal from 'sweetalert2'

import {
  LeadingActions,
  SwipeableList,
  SwipeableListItem,
  SwipeAction,
  TrailingActions,
} from 'react-swipeable-list';
import 'react-swipeable-list/dist/styles.css';

const MostrarGasto = ({ gasto }) => {
  const gastoContext = useContext(gastosContext);
  const { eliminarGasto, editarGasto, ano } = gastoContext;

  const eliminar = (id) => {

    Swal.fire({
      title: 'Estás seguro?',
      text: "Una vez eliminado no se podrá recuperar!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si',
      cancelButtonText: 'No'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Eliminado!',
          eliminarGasto(id),
          'success'
        )
      }
    })
  };

  const ver = () => {
    Swal.fire({
      title: `Datos`,
      html:
        `<h5>Cargado el ${gasto.dia} de ${gasto.mes} de ${gasto.ano} por ${gasto.usuarioCargado}</h5>`
    })

  };

  const editar = async (id, nombre, precio, mes) => {

    const { value: formValues } = await Swal.fire({
      title: 'Editar Gasto',
      html:
        `Nombre: <input value=${nombre} id="swal-input1" class="swal2-input">` +
        `Precio:  <input value=${precio} id="swal-input2" class="swal2-input">`,
      focusConfirm: false,
      preConfirm: () => {
        return [
          document.getElementById('swal-input1').value,
          document.getElementById('swal-input2').value
        ]
      }
    })

    if (formValues) {
      editarGasto(id, formValues[0], formValues[1], mes, ano)
    }
  };

  const leadingActions = () => (
    <LeadingActions>
      <SwipeAction onClick={() => editar(gasto._id, gasto.nombre, gasto.precio, gasto.mes)}>
        Editar
      </SwipeAction>
    </LeadingActions>
  );

  const trailingActions = () => (
    <TrailingActions>
      <SwipeAction
        // destructive={true}
        onClick={() => eliminar(gasto._id)}
      >
        Eliminar 
      </SwipeAction>
    </TrailingActions>
  );


  return (
    <>
      <div className="row">
        <SwipeableList>
          <SwipeableListItem
            leadingActions={leadingActions()}
            trailingActions={trailingActions()}
          >
            <div className="col-12 p-2">
              <div className="row contenido-gasto">
                <div className="col-12 d-flex">
                  <div className="descripcion-nombre">
                     {gasto.nombre}
                  </div>
                </div>
                <div className="col-3 d-flex justify-content-start">
                  <button
                    type="button"
                    className="btn btn-outline mb-6"
                    onClick={() => ver(gasto)}
                  >
                    <ion-icon color="primary" name="search-sharp"></ion-icon>{" "}
                  </button>
                </div>
                <div className="col-9 d-flex justify-content-end">
                  <div div className="descripcion-precio">
                    $ {gasto.precio}
                  </div>
                </div>
                
              </div>
            </div>

          </SwipeableListItem>
        </SwipeableList>
      </div>

    </>
  );
};

export default MostrarGasto;


// <div className="col-12">
//               <div className="row">
//                 <div className="col-12 d-flex">
//                   <h3>
//                     <b> {gasto.nombre}</b>
//                   </h3>
//                 </div>
//                 <div className="col-12 d-flex justify-content-end">
//                   <h3>$ {gasto.precio}</h3>
//                 </div>
//               </div>
//             </div>
//             <div className="col-1">
//               <button
//                 type="button"
//                 className="btn btn-outline m-6"
//                 onClick={() => ver(gasto)}
//               >
//                 <ion-icon color="primary" name="search-sharp"></ion-icon>{" "}
//               </button>
//             </div>
//             <div className="col-1">
//               <button
//                 type="button"
//                 className="btn btn-outline m-6"
//                 onClick={() => editar(gasto._id, gasto.nombre, gasto.precio, gasto.mes)}
//               >
//                 <ion-icon color="warning" name="create-sharp"></ion-icon>{" "}
//               </button>
//             </div>
//             <div className="col-1">
//               <button
//                 type="button"
//                 className="btn btn-outline m-6"
//                 onClick={() => eliminar(gasto._id)}
//               >
//                 <ion-icon name="trash"></ion-icon>{" "}
//               </button>
//             </div>