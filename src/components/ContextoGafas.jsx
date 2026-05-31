import {useState, createContext, useEffect} from 'react'

export const ContextoGafas = createContext()

export function EnvoltorioContextoGafa(props){

	const [totCart, settotCart] = useState(0)

	useEffect(()=>{
		const keysStorage = Object.keys(sessionStorage)
		const getKeysArt = keysStorage.filter(onkey => onkey.startsWith('articulo')).map(onkey => parseInt(sessionStorage.getItem(onkey)) || 0)
		const laSumaTot = getKeysArt.reduce((val0, cantDos)=>{return val0 + cantDos},0)
		settotCart(laSumaTot)
	},[])


	const [secTotCart, setsecTotCart] = useState(totCart)

	const masTot = (eq1) => {
		const prevsecTotCart = totCart + eq1
		settotCart(prevsecTotCart)
	}
	const minTot = (eq1) => {
		const prevsecTotCart = totCart - eq1
		settotCart(prevsecTotCart)
	}

	const valorContextoGafas = {
		totCart,
		masTot,
		minTot,
	}

	return(
		<ContextoGafas.Provider value={valorContextoGafas}>
			{props.children}
		</ContextoGafas.Provider>
		)
}