'use client'
import cls from './Slider.module.css';
import { FcNext, FcPrevious } from "react-icons/fc";
import { lobster } from '@/app/ui/fonts/fonts';
import React, { useEffect, useRef, useState } from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { MdAddAPhoto } from "react-icons/md";

export interface itemsType {
  items: any[] | undefined;
} 

export default function Slider(props: itemsType){
  const [timer, setTimer] = useState(500)
  const carousel = useRef<AliceCarousel>(null);
  const {
    items
  } = props;

  useEffect(() => {
    setTimeout(() => {
      setTimer(1000000)
    }, 1000)
  }, [timer])

  return (
    <>
      <h1 className={`${lobster.className} ${cls.title}`}>Фотографии <MdAddAPhoto  /></h1>
		  <div className={cls.slider}>
        <AliceCarousel
          key="carousel" 
          disableDotsControls
          mouseTracking
          autoPlay
          autoPlayInterval={timer}
          disableButtonsControls
          ref={carousel}
          infinite
          items={items}
          autoHeight={true}
          autoWidth={true}
        />
        <div key="btns" className={`${cls['b-refs-buttons']} + ${cls.btn}`}>
          <button className={cls.prev} onClick={(e) => carousel?.current?.slidePrev(e)}>
            <FcPrevious className={cls.iconPrev}  />
          </button>
          <button className={cls.next} onClick={(e) => carousel?.current?.slideNext(e)}>
            <FcNext className={cls.iconNext}/>
          </button>
        </div>
      </div>
    </> 
  );
}

