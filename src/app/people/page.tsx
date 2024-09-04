import cls from './People.module.css'
import SliderPeople from './SliderPeople'
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Сорвижи / Люди",
	description: "Сорвижи село Арбажский район Кировской области Кирил Лавров",
	icons: {
    icon: [
      {
        url: "/people.svg", 
        href: "/people.svg",
      },
    ],
  },
};

export default function People(){
	return (
		<div className={cls.flex}>
			<div className={cls.people}>
			
			</div>
			<SliderPeople/>
		</div>
	
	)
}