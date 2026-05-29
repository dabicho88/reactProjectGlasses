import BannerMan from '../assets/img/man.png'
import BannerWoman from '../assets/img/woman.png'
import BannerRecent from '../assets/img/recently.png'
import {UnLink} from './UnLink'
import {useState,useContext} from 'react'
import {ContextoGafas} from './ContextoGafas'


export function SectionBanners(){


	const [sizeBanner, setsizeBanner] = useState(false)
	const elValorContext = useContext(ContextoGafas)

	return(
		<div className='daBanner'>
			<UnLink seccion='/man' clase={elValorContext.totCart > 0? 'solo3' : 'solo2'}><span style={{backgroundImage:`url(${BannerMan})`}}>Hombre</span><img src={BannerMan}/></UnLink>
			<UnLink seccion='/woman' clase={elValorContext.totCart > 0? 'solo3' : 'solo2'}><span style={{backgroundImage:`url(${BannerWoman})`}}>Mujer</span><img src={BannerWoman}/></UnLink>
			<UnLink seccion='/cart' clase={elValorContext.totCart > 0? 'solo3' : 'novisible'} ><span style={{backgroundImage:`url(${BannerRecent})`}}>Carrito</span><img src={BannerRecent}/></UnLink>
		</div>)
}