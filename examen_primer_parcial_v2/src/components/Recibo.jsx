import React from "react";

const precios = {
    "Hawaiana": 100,
    "Especial": 120,
    "Vegetariana": 150
};

const Recibo = ({ mostrarPedido }) => {
    if (!mostrarPedido){
        return(
            <div className="col-lg-4 col-md-4 col-sm-12 col-12 d-flex align-items-center justify-content-center">
                <div className="fondo row">
                    <h3 className="text-center">
                        Esperando Pedido
                    </h3>
                </div>
            </div>
        );
    }

    return(
        <div className="col-lg-4 col-md-4 col-sm-12 col-12 d-flex align-items-center justify-content-center">
            <div className="fondo row">
                <h3 className="text-center">
                    Pedido Recibido
                </h3>
                <p>
                    Cliente: { mostrarPedido.nombre }
                </p>
                <p>
                    Direccion: { mostrarPedido.direccion }
                </p>
                <p>
                    Telefono: { mostrarPedido.telefono }
                </p>
                <p>
                    Pizza: { mostrarPedido.pizza }
                </p>
                <p>
                    Número de Pizzas: { mostrarPedido.numeroPizzas }
                </p>
                <p>
                    Forma de Pago: { mostrarPedido.pago }
                </p>
                <p>
                    Total a pagar: ${ precios[mostrarPedido.pizza] * mostrarPedido.numeroPizzas }
                </p>
            </div>
        </div>
    );
}

export default Recibo;
