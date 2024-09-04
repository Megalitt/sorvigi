import { Metadata } from 'next'
import cls from "./page.module.css"
import { caveat, pacifico} from './ui/fonts/fonts'
import AutorPhoto from '@/components/AutorPhoto/AutorPhoto'

export const metadata: Metadata = {
  title: "Сорвижи село на берегу реки Вятка, Арбажский район, Кировсая область",
  description: "Сорвижи село Арбажский район Кировской области",
  openGraph: {
    url: 'https://sorvigi.ru/',
    type: 'website',
    title: "Сорвижи село Арбажский район Кировской области",
    description: "Сорвижи село Арбажский район Кировской области",
    images: '/village/DSC_1807.JPG',
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      {
        url: "/home.svg", 
        href: "/home.svg", 
      },
    ],
  },
};

export default function Home() {
  
  return (
    <main className={cls.main}>
      <div className={cls.media}>
        <video 
          className={cls.video}  
          src="./river.mp4"  
          autoPlay    
          muted 
          loop
        >    
        </video>
      </div>              
      <AutorPhoto
        name='видео Андрей Малыгин'
        vk={{href:'https://dzen.ru/amalagyn', description: 'Дзен Андрея Малыгина'}}
        blog={{href:'https://vk.com/russlandscape', description: 'ВК Андрея Малыгина'}}
      />
      
      <div className={cls.center}>
        <section>
          <div className={`${cls.loading} ${pacifico.className}`}>
            <span data-text="С">С</span>
            <span data-text="О">О</span>
            <span data-text="Р">Р</span>
            <span data-text="В">В</span>
            <span data-text="И">И</span>
            <span data-text="Ж">Ж</span>
            <span data-text="И">И</span>
          </div>
        </section>
      </div>
      <p className={`${cls.title} ${pacifico.className}`}>
        Село на берегу реки Вятка <br/>
      </p>
    </main>
  );
}
