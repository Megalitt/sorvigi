'use client'
import Slider from '@/components/Slider/Slider'
import cls from './Village.module.css'
import AutorPhoto from '@/components/AutorPhoto/AutorPhoto'

const handleDragStart = (e:any) => e.preventDefault();

const items = [
	<div className={cls.autorWrap}>
		<AutorPhoto
			name='Александр Архипкин'
			blog={{href:'https://photocentra.ru/author.php?id_auth=36073', description: 'Страница Александра Архипкина'}}
			vk={{href:'https://vk.com/landscapes_alexander_arkhipkin?from=search', description: 'ВК Александра Архипкина'}}
		/>
		<img src="/village/village.jpg" onDragStart={handleDragStart}/>
	</div>,
	<div className={cls.autorWrap}>
		<AutorPhoto
			name='Алина Шастина'
			blog={{href:'https://t.me/l_hope_l', description: 'Телеграмм Алины Шастиной'}}
			vk={{href:'https://vk.com/l__hope_l', description: 'ВК Алины Шастиной '}}
		/>
		<img src="/sundry/DSC_2811.JPG" onDragStart={handleDragStart}/>
	</div>,
	<div className={cls.autorWrap}>
		<AutorPhoto
			name='Алина Шастина'
			blog={{href:'https://t.me/l_hope_l', description: 'Телеграмм Алины Шастиной'}}
			vk={{href:'https://vk.com/l__hope_l', description: 'ВК Алины Шастиной '}}
		/>
		<img src="/village/DSC_1771.JPG" onDragStart={handleDragStart}/>
	</div>,
	<div className={cls.autorWrap}>
		<AutorPhoto
			name='Алина Шастина'
			blog={{href:'https://t.me/l_hope_l', description: 'Телеграмм Алины Шастиной'}}
			vk={{href:'https://vk.com/l__hope_l', description: 'ВК Алины Шастиной '}}
		/>
		<img src="/village/DSC_1807.JPG" onDragStart={handleDragStart}/>
	</div>,
	<div className={cls.autorWrap}>
		<AutorPhoto
			name='Алина Шастина'
			blog={{href:'https://t.me/l_hope_l', description: 'Телеграмм Алины Шастиной'}}
			vk={{href:'https://vk.com/l__hope_l', description: 'ВК Алины Шастиной '}}
		/>
		<img src="/sundry/DSC_3080.JPG" onDragStart={handleDragStart}/>
	</div>,
	<div className={cls.autorWrap}>
		<AutorPhoto
			name='неизвестен'
			blog={{href:'mailto:sorvigi1974@mail.ru', description: 'Мы не смогли определить автора. Если вы автор или он вам знаком, напишите нам'}}
		/>
		<img src="/village/photo_2024-03-21_21-06-27.jpg" onDragStart={handleDragStart}/>
	</div>,
	<div className={cls.autorWrap}>
		<AutorPhoto
			name='неизвестен'
			blog={{href:'mailto:sorvigi1974@mail.ru', description: 'Мы не смогли определить автора. Если вы автор или он вам знаком, напишите нам'}}
		/>
		<img src="/village/IMG20220917172655-1.webp" onDragStart={handleDragStart}/>
	</div>,
	<div className={cls.autorWrap}>
		<AutorPhoto
			name='неизвестен'
			blog={{href:'mailto:sorvigi1974@mail.ru', description: 'Мы не смогли определить автора. Если вы автор или он вам знаком, напишите нам'}}
		/>
		<img src="/sundry/239928044(3).jpg" onDragStart={handleDragStart}/>
	</div>,
	<div className={cls.autorWrap}>
		<AutorPhoto
			name='Алина Шастина'
			blog={{href:'https://t.me/l_hope_l', description: 'Телеграмм Алины Шастиной'}}
			vk={{href:'https://vk.com/l__hope_l', description: 'ВК Алины Шастиной '}}
		/>
		<img src="/sundry/9361.JPG" onDragStart={handleDragStart}/>
	</div>,
	<div className={cls.autorWrap}>
		<AutorPhoto
			name='Алина Шастина'
			blog={{href:'https://t.me/l_hope_l', description: 'Телеграмм Алины Шастиной'}}
			vk={{href:'https://vk.com/l__hope_l', description: 'ВК Алины Шастиной '}}
		/>
		<img src="/sundry/DSC_8640.JPG" onDragStart={handleDragStart}/>
	</div>,
	<div className={cls.autorWrap}>
		<AutorPhoto
			name='Алина Шастина'
			blog={{href:'https://t.me/l_hope_l', description: 'Телеграмм Алины Шастиной'}}
			vk={{href:'https://vk.com/l__hope_l', description: 'ВК Алины Шастиной '}}
		/>
		<img src="/sundry/DSC_8641.JPG" onDragStart={handleDragStart}/>
	</div>,
	<div className={cls.autorWrap}>
		<AutorPhoto
			name='неизвестен'
			blog={{href:'mailto:sorvigi1974@mail.ru', description: 'Мы не смогли определить автора. Если вы автор или он вам знаком, напишите нам'}}
		/>
		<img src="/sundry/sorvizhi1(1).jpg" onDragStart={handleDragStart}/>
	</div>,
	<div className={cls.autorWrap}>
		<AutorPhoto
			name='неизвестен'
			text='Автор фото неизвестен'
		/>
		<img src="/history/history.jpg" onDragStart={handleDragStart}/>
	</div>,
	<div className={cls.autorWrap}>
		<AutorPhoto
			name='сайта'
			blog={{href:'mailto:sorvigi1974@mail.ru', description: 'Написать нам'}}
		/>
		<img src="/village/xlBfJUzrPBk.jpg" onDragStart={handleDragStart}/>
	</div>,
];

export default function SliderVillage(){
	return (
		<>
			<Slider items={items}/>
		</>
	)
}
	
