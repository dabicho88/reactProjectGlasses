import { useState, createContext } from 'react'
export const ContextoGlass = createContext()


export function ContextoGlassEnvol(props){
let valorInicialStorage = localStorage.getItem('valorStorageInicial')
let valorIniciadorUseState
valorInicialStorage == null ? valorIniciadorUseState = 0 :(valorInicialStorage < 0? valorIniciadorUseState = 0 : valorIniciadorUseState = valorInicialStorage)

const [cantidadTotal, setCantidadTotal] = useState(parseInt(valorIniciadorUseState))
localStorage.setItem('valorStorageInicial', cantidadTotal)

const mostrarenBadge = () => {
    setCantidadTotal(cantidadTotal +1)
}
const quitardelBadge = () => {
   setCantidadTotal(cantidadTotal -1)
}
const borrarBadge = () => {
    setCantidadTotal(0)
}

    const valorEnContexto = {
        cantidadTotal:cantidadTotal,
        mostrarenBadge,
        quitardelBadge,
    }
    return(
            <ContextoGlass.Provider value={valorEnContexto}>
                {props.children}
            </ContextoGlass.Provider>
        )
}