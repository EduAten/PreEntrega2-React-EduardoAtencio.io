import React, { useEffect } from "react";

const Ayuda = () => {

    useEffect(() => {

        const clickear = () => {
            console.log("Click");
        }
        
        window.addEventListener("click", () => {
            console.log("Click", clickear)
        })

        return() => {
            window.removeEventListener("click", () => {
                console.log("Click", clickear)
            })
        }

    }, [])

    return (
        <div>
            <p>Hola</p>
        </div>
    )
}

export default Ayuda