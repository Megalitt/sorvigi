import cls from './Nostalgia.module.css'
import SliderNostalgie from './SliderNostalgie'
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Сорвижи / Ностальгия",
	description: "Сорвижи село Арбажский район Кировской области история Троицкая церковь",
	icons: {
    icon: [
      {
        url: "/N.svg", 
        href: "/N.svg",
      },
    ],
  },
};

export default function Nostalgia(){
	return (
		<div className={cls.flex}>
			<div className={cls.nostalgia}>
				
			</div>
			<SliderNostalgie/>
		</div>
		
	)
}