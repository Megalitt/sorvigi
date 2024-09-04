import cls from './Sundry.module.css'
import type { Metadata } from "next"
import SliderSunry from './SliderSundry'
import AutorPhoto from '@/components/AutorPhoto/AutorPhoto'

export const metadata: Metadata = {
  title: "Сорвижи / Разное",
	description: "Сорвижи село Арбажский район Кировской области Троицкая церковь река Вятка",
	icons: {
    icon: [
      {
        url: "/rand.svg", 
        href: "/rand.svg",
      },
    ],
  },
};

export default function Sundry(){
	return (
		<div className={cls.flex}>
			<div className={cls.sundry}>
			<AutorPhoto
			name='Алина Шастина'
			blog={{href:'https://t.me/l_hope_l', description: 'Телеграмм Алины Шастиной'}}
			vk={{href:'https://vk.com/l__hope_l', description: 'ВК Алины Шастиной '}}
		/>
			</div>
			<SliderSunry/>
		</div>
			
	)
}