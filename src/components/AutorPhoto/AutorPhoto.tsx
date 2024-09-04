'use client'
import cls from './AutorPhoto.module.css';
import { caveat } from '@/app/ui/fonts/fonts';


export interface itemsAutor {
  name: string;
  text?: string;
	vk?: {
		href: string,
		description: string
	};
	blog?: {
		href?: string,
		description: string;
	};
} 

export default function AutorPhoto(props: itemsAutor){
  const {
    name,
    text,
		vk,
		blog
  } = props;

  return (
    <>
			<p className={`${cls.autorTitle} ${caveat.className}`}>Автор {name}</p>
      <div className={cls.blockAutor}>
      {text && <p className={`${cls.autor} ${caveat.className}`}>{text}</p>}
      {blog && (<a className={`${cls.autor} ${caveat.className}`} href={blog?.href} >{blog?.description} =&gt;</a>)}
      {vk && (<a className={`${cls.autor} ${caveat.className}`} href={vk?.href} >{vk?.description} =&gt;</a>) }
      </div>
    </> 
  );
}