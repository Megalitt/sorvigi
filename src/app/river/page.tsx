import cls from './River.module.css'
import type { Metadata } from "next"
import SliderRiver from './SliderRiver'

export const metadata: Metadata = {
  title: "Сорвижи / Река Вятка",
	description: "Сорвижи село Арбажский район Кировской области река Вятка",
	icons: {
    icon: [
      {
        url: "/12.svg", 
        href: "/12.svg", 
      },
    ],
  },
};

export default function River(){
	return (
		<div className={cls.flex}>
			<div className={cls.river}>
			</div>
			<SliderRiver/>
		</div>
	)
}