import React from "react";
import { useState } from "react";

const Formulario = ({ votar }) => {
    const [seleccion, setSeleccion] = useState("");

    const SeleccionarLenguaje = (e) =>{
        e.preventDefault();
        if (seleccion){
            votar({ "seleccion": seleccion })
        } else{
            alert("Debes seleccionar un lenguaje para votar.");
        }
    }

    const ManejarCambio = (e) => {
        setSeleccion(e.target.value);
    }

    return(
        <div className="col-lg-6 col-md-6 col-sm-12 col-12 d-flex align-items-center justify-content-center">
            <div className="fondo row">
                <h3 className="text-center">
                    ¿Cuál es tu lenguaje de programación favorito?
                </h3>
                <form onSubmit={ SeleccionarLenguaje }>
                    <div className="row text-center align-items-center justify-content-center">
                        <div className="col-lg-4 col-md-4 col-sm-12 col-12">
                            <label className="d-block cursor-pointer">
                                <input className="d-none" type="radio" name="lenguaje" value="Java" checked={ seleccion === "Java" } onChange={ ManejarCambio }/>
                                <img className={ `img-fluid p-2 ${seleccion === "Java" ? 'border border-primary border-3 rounded' : ''}` } src="https://i0.wp.com/unaaldia.hispasec.com/wp-content/uploads/2016/01/8912d-java-logo.png?ssl=1" alt="Imagen de Java" />
                                <p>
                                    Java
                                </p>
                            </label>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-12 col-12">
                            <label className="d-block cursor-pointer">
                                <input className="d-none" type="radio" name="lenguaje" value="Python" checked={ seleccion === "Python" } onChange={ ManejarCambio }/>
                                <img className={ `img-fluid p-2 ${seleccion === "Python" ? 'border border-primary border-3 rounded' : ''}` } src="https://blog.vermiip.es/wp-content/uploads/2023/10/Python-Symbol_0.png" alt="Imagen de Python" />
                                <p>
                                    Python
                                </p>
                            </label>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-12 col-12">
                            <label className="d-block cursor-pointer">
                                <input className="d-none" type="radio" name="lenguaje" value="Kotlin" checked={ seleccion === "Kotlin" } onChange={ ManejarCambio }/>
                                <img className={ `img-fluid p-2 ${seleccion === "Kotlin" ? 'border border-primary border-3 rounded' : ''}` } src="https://developer.android.com/static/codelabs/basic-android-kotlin-compose-first-program/img/840cee8b164c10b.png?hl=es-419" alt="Imagen de Kotlin" />
                                <p>
                                    Kotlin
                                </p>
                            </label>
                        </div>
                        <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                            <button className="btn btn-primary w-100">
                                Votar
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Formulario