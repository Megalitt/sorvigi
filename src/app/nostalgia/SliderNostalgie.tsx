'use client'
import AutorPhoto from '@/components/AutorPhoto/AutorPhoto'
import Slider from '@/components/Slider/Slider'
import cls from './Nostalgia.module.css'

const handleDragStart = (e:any) => e.preventDefault();

	const items = [
	<div className={cls.autorWrap}>
		<AutorPhoto
			name='неизвестен'
			text='Старый дом культуры (год неизвестен)'
		/>
		<img src="/nostalgi/3_80.jpeg" onDragStart={handleDragStart}/>
	</div>,
	<div className={cls.autorWrap}>
		<AutorPhoto
			name='неизвестен'
			text='Совхохная контора 1970г (предположительно)'
		/>
		<img src="/nostalgi/3_81.jpeg" onDragStart={handleDragStart}/>
	</div>,
];

export default function SliderNostalgie(){
	return (
		<>
			<Slider items={items}/>
		</>
	)
}