import cls from './Footer.module.css'
import { allura, caveat, inter } from "@/app/ui/fonts/fonts";

export default function Footer(){
	return (
		<footer className={`${cls.footer} ${allura ? allura.className : caveat.className}`}>
			Связатся с нами <a href="mailto:sorvigi1974@mail.ru">sorvigi1974@mail.ru</a>
			<p>© 2024</p>
		</footer>
	)
}