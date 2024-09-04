import cls from './Village.module.css'
import { caveat} from '../ui/fonts/fonts'
import SliderVillage from './SliderVallage'
import type { Metadata } from "next"
import AutorPhoto from '@/components/AutorPhoto/AutorPhoto'

export const metadata: Metadata = {
  title: "Сорвижи / Село",
	description: "Сорвижи село Арбажский район Кировской области Троицкая церковь река Вятка",
	icons: {
    icon: [
      {
        url: "/favicon.ico", 
        href: "/favicon.ico",
      },
    ],
  },
};

export default function Village(){
	return (
		<div className={cls.flex}>
			<div className={`${cls.village} ${caveat.className}`}>
				<AutorPhoto
					name='Александр Архипкин'
					blog={{href:'https://photocentra.ru/author.php?id_auth=36073', description: 'Страница Александра Архипкина'}}
					vk={{href:'https://vk.com/landscapes_alexander_arkhipkin?from=search', description: 'ВК Александра Архипкина'}}
				/>
			</div>
			<SliderVillage/>
		</div>	
	)
}