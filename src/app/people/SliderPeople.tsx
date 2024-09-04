'use client'
import AutorPhoto from '@/components/AutorPhoto/AutorPhoto'
import Slider from '@/components/Slider/Slider'
import cls from './People.module.css'

const handleDragStart = (e:any) => e.preventDefault();

	const items = [
	<div className={cls.autorWrap}>
		<AutorPhoto
			name='неизвестен'
			blog={{href:'mailto:sorvigi1974@mail.ru', description: 'Мы не смогли определить автора. Если вы автор или он вам знаком, напишите нам'}}
		/>
		<img src="/people/239928044(2).jpg" onDragStart={handleDragStart}/>
	</div>,
	<div className={cls.autorWrap}>
		<AutorPhoto
			name='неизвестен'
			blog={{href:'mailto:sorvigi1974@mail.ru', description: 'Мы не смогли определить автора. Если вы автор или он вам знаком, напишите нам'}}
		/>
		<img src="/people/smertina-biography-13.jpg" onDragStart={handleDragStart}/>
	</div>,
	<div className={cls.autorWrap}>
		<AutorPhoto
			name='неизвестен'
			blog={{href:'mailto:sorvigi1974@mail.ru', description: 'Мы не смогли определить автора. Если вы автор или он вам знаком, напишите нам'}}
		/>
		<img src="/people/tatyana.jpg" onDragStart={handleDragStart}/>
	</div>,
];

export default function SliderPeople(){
	return (
		<>
			<Slider items={items}/>
		</>
	)
}