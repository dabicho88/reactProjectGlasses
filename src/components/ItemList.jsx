import {useState, useContext} from 'react'
import {ContextoGafas} from './ContextoGafas'
import {UnLink} from './UnLink'

export function ItemList(props){

	const elValorContext = useContext(ContextoGafas)

	const cantidadStorage = sessionStorage.getItem(`articulo-${props.elId}`)?sessionStorage.getItem(`articulo-${props.elId}`) : 0
	const [cantidadUnidades, setcantidadUnidades] = useState(parseInt(cantidadStorage))

	

	const incrementaEnvol = () =>{
			const nuevaCantUnidades = cantidadUnidades + 1
			sessionStorage.setItem(`articulo-${props.elId}`, nuevaCantUnidades)
			setcantidadUnidades(nuevaCantUnidades)
			elValorContext.masTot(1)
	}

	const decrementaEnvol = ()=>{
			const nuevaCantUnidades = cantidadUnidades - 1
			setcantidadUnidades(nuevaCantUnidades)
			sessionStorage.setItem(`articulo-${props.elId}`, nuevaCantUnidades)
			elValorContext.minTot(1)
	}

	return(
		<div className='itemList'>
			<UnLink seccion={`/man/${props.elId}`}>
			<img src={props.laImagen}/>
			<h3>{props.eltitulo}</h3>
			<div className='elPrecio'><span>$</span>{props.elPrecio}</div>
		    </UnLink>
			<div className='contador'>
				{cantidadUnidades == 0? <div className='activeContador' onClick={incrementaEnvol}>Agregar</div>:
				<>
				<span className='unoMenos' onClick={cantidadUnidades == 0? undefined : decrementaEnvol}>-</span>
				<span className='totalPzas'>{cantidadUnidades == 10? cantidadUnidades : cantidadUnidades} {cantidadUnidades == 10? <span className='banderin'>Solo puedes agregar 10 artículos por artículo</span> : null}</span>
				<span className='unoMas' onClick={cantidadUnidades >= 10? undefined : incrementaEnvol}>+</span>
				</>
				}
			</div>
		</div>
		)
}

