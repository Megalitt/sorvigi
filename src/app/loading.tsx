import cls from './page.module.css'

export default function Loading(){
	return (
		<div className={cls.load}>
			<img src='/three-dots.svg' alt='Загрузка...'/>
		</div>
	)
}