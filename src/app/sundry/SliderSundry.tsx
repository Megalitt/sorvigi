'use client'
// import AutorPhoto from '@/components/AutorPhoto/AutorPhoto'
// import Slider from '@/components/Slider/Slider'
import cls from './Sundry.module.css'
import { caveat } from '@/app/ui/fonts/fonts'

// const handleDragStart = (e:any) => e.preventDefault();

// const items = [
//   <div className={cls.autorWrap}>
// 		<AutorPhoto
// 			name='Алина Шастина'
// 			blog={{href:'https://t.me/l_hope_l', description: 'Телеграмм Алины Шастиной'}}
// 			vk={{href:'https://vk.com/l__hope_l', description: 'ВК Алины Шастиной '}}
// 		/>
// 		<img src="/sundry/9361.JPG" onDragStart={handleDragStart}/>
// 	</div>,
//   <img src="/sundry/239928044(3).jpg" onDragStart={handleDragStart}/>,
//   <div className={cls.autorWrap}>
//     <AutorPhoto
//       name='Алина Шастина'
//       blog={{href:'https://t.me/l_hope_l', description: 'Телеграмм Алины Шастиной'}}
//       vk={{href:'https://vk.com/l__hope_l', description: 'ВК Алины Шастиной '}}
//     />
//     <img src="/sundry/DSC_8640.JPG" onDragStart={handleDragStart}/>
//   </div>,
//   <div className={cls.autorWrap}>
//     <AutorPhoto
//       name='Алина Шастина'
//       blog={{href:'https://t.me/l_hope_l', description: 'Телеграмм Алины Шастиной'}}
//       vk={{href:'https://vk.com/l__hope_l', description: 'ВК Алины Шастиной '}}
//     />
//     <img src="/sundry/DSC_8641.JPG" onDragStart={handleDragStart}/>
//   </div>,
//   <div className={cls.autorWrap}>
//     <AutorPhoto
//       name='неизвестен'
//       blog={{href:'mailto:sorvigi1974@mail.ru', description: 'Мы не смогли определить автора. Если вы автор или он вам знаком, напишите нам'}}
//     />
//     <img src="/sundry/wr-960.webp" onDragStart={handleDragStart}/>
//   </div>,
//   <img src="/sundry/sorvizhi1(1).jpg" onDragStart={handleDragStart}/>,
//   <img src="/history/history.jpg" onDragStart={handleDragStart}/>,
// ];
export default function SliderSunry(){
	return (
		<>
			{/* <Slider items={items}/> */}
      <h1 className={`${cls.title} ${caveat.className}`}>
        Здесь будет информация
      </h1>
		</>
	)
}