'use client'
import AutorPhoto from '@/components/AutorPhoto/AutorPhoto'
import Slider from '@/components/Slider/Slider'
import cls from './River.module.css'

const handleDragStart = (e:any) => e.preventDefault();

const items = [
	<div className={cls.autorWrap}>
		<AutorPhoto
			name='неизвестен'
			blog={{href:'mailto:sorvigi1974@mail.ru', description: 'Мы не смогли определить автора. Если вы автор или он вам знаком, напишите нам'}}
		/>
		<img src="/river/26174544.webp" onDragStart={handleDragStart}/>
	</div>,
	<div className={cls.autorWrap}>
		<AutorPhoto
			name='неизвестен'
			blog={{href:'mailto:sorvigi1974@mail.ru', description: 'Мы не смогли определить автора. Если вы автор или он вам знаком, напишите нам'}}
		/>
		<img src="/river/26174572.webp" onDragStart={handleDragStart}/>
	</div>,
	<div className={cls.autorWrap}>
		<AutorPhoto
			name='неизвестен'
			blog={{href:'mailto:sorvigi1974@mail.ru', description: 'Мы не смогли определить автора. Если вы автор или он вам знаком, напишите нам'}}
		/>
		<img src="/river/28324647.webp" onDragStart={handleDragStart}/>
	</div>,
	<div className={cls.autorWrap}>
		<AutorPhoto
			name='неизвестен'
			blog={{href:'mailto:sorvigi1974@mail.ru', description: 'Мы не смогли определить автора. Если вы автор или он вам знаком, напишите нам'}}
		/>
		<img src="/river/83037658.webp" onDragStart={handleDragStart}/>
	</div>,
	<div className={cls.autorWrap}>
		<AutorPhoto
			name='неизвестен'
			blog={{href:'mailto:sorvigi1974@mail.ru', description: 'Мы не смогли определить автора. Если вы автор или он вам знаком, напишите нам'}}
		/>
		<img src="/river/239928044(4).jpg" onDragStart={handleDragStart}/>
	</div>,
	<div className={cls.autorWrap}>
		<AutorPhoto
			name='неизвестен'
			blog={{href:'mailto:sorvigi1974@mail.ru', description: 'Мы не смогли определить автора. Если вы автор или он вам знаком, напишите нам'}}
		/>
		<img src="/river/river.jpg" onDragStart={handleDragStart}/>
	</div>,
	<div className={cls.autorWrap}>
		<AutorPhoto
			name='неизвестен'
			blog={{href:'mailto:sorvigi1974@mail.ru', description: 'Мы не смогли определить автора. Если вы автор или он вам знаком, напишите нам'}}
		/>
		<img src="/river/IMG20220825182310.webp" onDragStart={handleDragStart}/>
	</div>,
	<div className={cls.autorWrap}>
		<AutorPhoto
			name='неизвестен'
			blog={{href:'mailto:sorvigi1974@mail.ru', description: 'Мы не смогли определить автора. Если вы автор или он вам знаком, напишите нам'}}
		/>
		<img src="/river/IMG20220825181502.webp" onDragStart={handleDragStart}/>
	</div>,
	<div className={cls.autorWrap}>
		<AutorPhoto
			name='неизвестен'
			blog={{href:'mailto:sorvigi1974@mail.ru', description: 'Мы не смогли определить автора. Если вы автор или он вам знаком, напишите нам'}}
		/>
		<img src="/river/IMG20220825181118.webp" onDragStart={handleDragStart}/>
	</div>,
	<div className={cls.autorWrap}>
		<AutorPhoto
			name='неизвестен'
			blog={{href:'mailto:sorvigi1974@mail.ru', description: 'Мы не смогли определить автора. Если вы автор или он вам знаком, напишите нам'}}
		/>
		<img src="/river/IMG20220825180800.webp" onDragStart={handleDragStart}/>
	</div>,
	<div className={cls.autorWrap}>
		<AutorPhoto
			name='Алина Шастина'
			blog={{href:'https://t.me/l_hope_l', description: 'Телеграмм Алины Шастиной'}}
			vk={{href:'https://vk.com/l__hope_l', description: 'ВК Алины Шастиной '}}
		/>
		<img src="/river/DSC_1503.JPG" onDragStart={handleDragStart}/>
	</div>,
	<div className={cls.autorWrap}>
		<AutorPhoto
			name='неизвестен'
			blog={{href:'mailto:sorvigi1974@mail.ru', description: 'Мы не смогли определить автора. Если вы автор или он вам знаком, напишите нам'}}
		/>
		<img src="/river/photo_2024-03-21_20-46-46.jpg" onDragStart={handleDragStart}/>
	</div>,
	<div className={cls.autorWrap}>
		<AutorPhoto
			name='неизвестен'
			blog={{href:'mailto:sorvigi1974@mail.ru', description: 'Мы не смогли определить автора. Если вы автор или он вам знаком, напишите нам'}}
		/>
		<img src="/river/photo_2024-03-21_20-52-08.jpg" onDragStart={handleDragStart}/>
	</div>,
	<div className={cls.autorWrap}>
		<AutorPhoto
			name='неизвестен'
			blog={{href:'mailto:sorvigi1974@mail.ru', description: 'Мы не смогли определить автора. Если вы автор или он вам знаком, напишите нам'}}
		/>
		<img src="/river/photo_2024-03-21_20-52-27.jpg" onDragStart={handleDragStart}/>
	</div>,
	<div className={cls.autorWrap}>
		<AutorPhoto
			name='Алина Шастина'
			blog={{href:'https://t.me/l_hope_l', description: 'Телеграмм Алины Шастиной'}}
			vk={{href:'https://vk.com/l__hope_l', description: 'ВК Алины Шастиной '}}
		/>
		<img src="/river/DSC_1331.webp" onDragStart={handleDragStart}/>
	</div>,
	<div className={cls.autorWrap}>
		<AutorPhoto
			name='Алина Шастина'
			blog={{href:'https://t.me/l_hope_l', description: 'Телеграмм Алины Шастиной'}}
			vk={{href:'https://vk.com/l__hope_l', description: 'ВК Алины Шастиной '}}
		/>
		<img src="/river/DSC_1329.webp" onDragStart={handleDragStart}/>
	</div>,
	<div className={cls.autorWrap}>
		<AutorPhoto
			name='Алина Шастина'
			blog={{href:'https://t.me/l_hope_l', description: 'Телеграмм Алины Шастиной'}}
			vk={{href:'https://vk.com/l__hope_l', description: 'ВК Алины Шастиной '}}
		/>
		<img src="/river/DSC_1322.webp" onDragStart={handleDragStart}/>
	</div>,
	<div className={cls.autorWrap}>
		<AutorPhoto
			name='Алина Шастина'
			blog={{href:'https://t.me/l_hope_l', description: 'Телеграмм Алины Шастиной'}}
			vk={{href:'https://vk.com/l__hope_l', description: 'ВК Алины Шастиной '}}
		/>
		<img src="/river/DSC_1279.webp" onDragStart={handleDragStart}/>
	</div>,
	<div className={cls.autorWrap}>
		<AutorPhoto
			name='Алина Шастина'
			blog={{href:'https://t.me/l_hope_l', description: 'Телеграмм Алины Шастиной'}}
			vk={{href:'https://vk.com/l__hope_l', description: 'ВК Алины Шастиной '}}
		/>
		<img src="/river/DSC_1357.webp" onDragStart={handleDragStart}/>
	</div>,
	<div className={cls.autorWrap}>
		<AutorPhoto
			name='неизвестен'
			blog={{href:'mailto:sorvigi1974@mail.ru', description: 'Мы не смогли определить автора. Если вы автор или он вам знаком, напишите нам'}}
		/>
		<img src="/river/photo_2024-03-21_21-09-16.jpg" onDragStart={handleDragStart}/>
	</div>,
];

export default function SliderRiver(){
	return (
		<>
			<Slider items={items}/>
		</>
	)
}