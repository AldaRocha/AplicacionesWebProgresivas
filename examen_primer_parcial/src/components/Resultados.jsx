import React from "react";

const Resultados = ({ conteo }) => {
    const lenguajes = [
        {
            nombre: "Java",
            votos: conteo.Java
        },
        {
            nombre: "Python",
            votos: conteo.Python
        },
        {
            nombre: "Kotlin",
            votos: conteo.Kotlin
        }
    ];

    return(
        <div className="col-lg-6 col-md-6 col-sm-12 col-12 d-flex align-items-center justify-content-center">
            <div className="fondo row">
                <h3 className="text-center">
                    Resultados de la votación
                </h3>
                <div className="space-y-4">
                    {
                        lenguajes.map((lang) => (
                            <div key={lang.nombre}>
                                <div className="d-flex justify-content-between mb-1 text-sm font-medium text-gray-700">
                                    <span>
                                        { lang.nombre }
                                    </span>
                                    <span>
                                        { lang.votos }
                                    </span>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
}

export default Resultados