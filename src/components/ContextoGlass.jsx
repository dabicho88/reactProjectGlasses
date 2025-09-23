import { useState, createContext } from 'react'

export const ContextoGlass = createContext()
export function ContextoGlassEnvol(props){

const [cantidadTotal, setCantidadTotal] = useState(0)

const mostrarenBadge = (elContador) => {
    // aquí me atoré porque me genera un bucle infinito con el que no puedo agregar el valor numérico al Carrito.jsx
    //setCantidadTotal(valorPrevio => valorPrevio + elContador)  
}
const quitardelBadge = () => {}
const borrarBadge = () => {
    setCantidadTotal(0)
}

    const valorEnContexto = {
        item: [],
        price: 0,
        cantidadTotal:cantidadTotal,
        mostrarenBadge,
        quitardelBadge,
        borrarBadge,
    }

    return(
            <ContextoGlass.Provider value={valorEnContexto}>
                {props.children}
            </ContextoGlass.Provider>
        )
}