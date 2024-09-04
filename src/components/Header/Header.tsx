import Navigation from '../Navigation/Navigation'
import cls from './Header.module.css'

export default function Header(){
	return (
		<header className={cls.header}>
			<Navigation/>
		</header>
	)
}