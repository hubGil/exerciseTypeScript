import { ExerciseLink } from '@/components/atoms'
import './index.scss'

function Nav() {
	const rotas = [
		{
			link: '/',
			page: 'Home'
		},
		{
			link: '#',
			page: 'Exercicios'
		},
		{
			link: '/exercicio1',
			page: 'Exercicio1'
		},
		{
			link: '/exercicio2',
			page: 'Exercicio2'
		},
		{
			link: '/exercicio3',
			page: 'Exercicio3'
		},
		{
			link: '/exercicio4',
			page: 'Exercicio4'
		},
		{
			link: '/exercicio5',
			page: 'Exercicio5'
		},
		{
			link: '/exercicio6',
			page: 'Exercicio6'
		},
		{
			link: '/exercicio7',
			page: 'Exercicio7'
		},
		{
			link: '/exercicio8',
			page: 'Exercicio8'
		},
		{
			link: '/exercicio9',
			page: 'Exercicio9'
		}
	]
	return (
		<nav className='navigation'>
			<ul className='navigation_list'>
				{rotas.map((rota, index) => (
					<li className='navigation_item' key={index}>
						<ExerciseLink link={rota.link} page={rota.page} />
					</li>
				))}
			</ul>
		</nav>
	)
}

export default Nav
