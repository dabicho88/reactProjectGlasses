import { useState, createContext } from 'react'

export const ContextoGlass = createContext()
export function ContextoGlassEnvol(props){

const [cantidadTotal, setCantidadTotal] = useState(0)

const mostrarenBadge = (elContador) => {
   const totalFinal = cantidadTotal + elContador
   setCantidadTotal(totalFinal)
}
const quitardelBadge = (elContador) => {
   const totalFinal = cantidadTotal - elContador
   setCantidadTotal(totalFinal)
}
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