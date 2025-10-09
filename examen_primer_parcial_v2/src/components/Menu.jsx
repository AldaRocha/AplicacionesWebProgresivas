import React from "react";
import { useState } from "react";

const Menu = ({ pedido }) => {
    const [pizza, setPizza] = useState(null);
    const [nombre, setNombre] = useState(null);
    const [direccion, setDireccion] = useState(null);
    const [numeroPizzas, setNumeroPizzas] = useState(null);
    const [telefono, setTelefono] = useState(null);
    const [pago, setPago] = useState(null);

    const EnviarPedido = (e) => {
        e.preventDefault();
        if (pizza && nombre && direccion && numeroPizzas && telefono && pago){
            pedido({
                "pizza": pizza,
                "nombre": nombre,
                "direccion": direccion,
                "numeroPizzas": numeroPizzas,
                "telefono": telefono,
                "pago": pago
            })
        } else{
            alert("Al menos un dato esta vacio");
        }
    }

    return(
        <div className="col-lg-8 col-md-8 col-sm-12 col-12 d-flex align-items-center justify-content-center">
            <div className="fondo row">
                <form onSubmit={ EnviarPedido }>
                    <div className="row text-center align-items-center justify-content-center">
                        <div className="col-lg-4 col-md-4 col-sm-12 col-12">
                            <h3>
                                Elige tu Pizza:
                            </h3>
                            <select className="form-select" name="tipoPizza" id="tipoPizza" onChange={ (e) => setPizza(e.target.value) }>
                                <option value="Hawaiana">
                                    Hawaiana $100
                                </option>
                                <option value="Especial">
                                    Especial $120
                                </option>
                                <option value="Vegetariana">
                                    Vegetariana $150
                                </option>
                            </select>
                            <div className="mb-3">
                                <label htmlFor="nombre" className="form-label">
                                    Nombre
                                </label>
                                <input className="form-control" id="nombre" placeholder="Nombre" type="text" onChange={ (e) => setNombre(e.target.value) }/>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="direccion" className="form-label">
                                    Direccion
                                </label>
                                <input className="form-control" id="direccion" placeholder="Direccion" type="text" onChange={ (e) => setDireccion(e.target.value) }/>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-12 col-12">
                            <h3>
                                Número de Pizzas:
                            </h3>
                            <input className="form-control mb-3" id="numero" placeholder="Numero de pizzas" type="number" min="1" onChange={ (e) => setNumeroPizzas(e.target.value) }/>
                            <div className="mb-3">
                                <label htmlFor="telefono" className="form-label">
                                    Telefono
                                </label>
                                <input className="form-control" id="telefono" placeholder="Telefono" type="text" onChange={ (e) => setTelefono(e.target.value) }/>
                            </div>
                            <button className="btn btn-primary w-100">
                                Enviar Pedido
                            </button>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-12 col-12">
                            <h3>
                                Forma de Pago:
                            </h3>
                            <div>
                                <input type="radio" id="pagoTar" value="Tarjeta" checked={ pago === "Tarjeta" } onChange={ (e) => setPago(e.target.value) }/>
                                <label htmlFor="pagoTar">
                                    Tarjeta de Crédito
                                </label>
                            </div>
                            <div>
                                <input type="radio" id="pagoPay" value="PayPal" checked={ pago === "PayPal" } onChange={ (e) => setPago(e.target.value) }/>
                                <label htmlFor="pagoPay">
                                    PayPal
                                </label>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Menu