import React from "react";
import Card from "./Card";

const Cards = () => {
    const data = [
        {
            "lang": "Python",
            "url": "https://cdn.svgporn.com/logos/python.svg",
            "fcolor": "#00c3ff",
            "scolor": "#ffff1c"
        },
        {
            "lang": "Java",
            "url": "https://cdn.svgporn.com/logos/java.svg",
            "fcolor": "#D31027",
            "scolor": "#EA384D"
        },
        {
            "lang": "React",
            "url": "https://cdn.svgporn.com/logos/react.svg",
            "fcolor": "#000428",
            "scolor": "#004e92"
        },
        {
            "lang": "Perl",
            "url": "https://cdn.svgporn.com/logos/perl.svg",
            "fcolor": "#cc2b5e",
            "scolor": "#753a88"
        }
    ]; 

    return(
        <React.Fragment>
            {/* Usando la función map para iterar los datos y crear los Card */}
            {
                data.map(({ lang, url, fcolor, scolor }) => {
                    return (
                        <Card
                            key={ lang }
                            lang={ lang }
                            img={ url }
                            fcolor={ fcolor }
                            scolor={ scolor }
                        />
                    );
                })
            }
        </React.Fragment>
    )
}

export default Cards