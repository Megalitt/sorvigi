'use client'
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import cls from '../Header/Header.module.css'
import { caveat } from '@/app/ui/fonts/fonts'
import { links } from '../links'
// import type {GetStaticPaths} from 'next'
// import path from 'path'
// import { useSession } from 'next-auth/react'

// type Repo = {
//   name: string
//   stargazers_count: number
// }

// export const getStaticPaths = (async () => {
// 	const paths = links.map((link) => ({
// 		params: {href: link.href, name: link.name}
// 	}));
// 	return {
//     paths,
//     fallback: true,
//   }
// }) satisfies GetStaticPaths;	

export default function Navigation(){
	const activLink = usePathname()
	// const session = useSession()
	return (
		<nav className={`${cls.headerNav} ${caveat.className}`}>
			{links.map((link) => 
				<Link 
					className={activLink === link.href ? cls.activ : '' } 
					href={link.href}
					key={link.name}
				>
					{link.name}
				</Link>
			)}
		</nav>
	)
}