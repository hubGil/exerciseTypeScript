import { CustomList } from '@/components/molecules'
import './index.scss'

type dataProp = Array<{
	emoji: string
	animal: string
}>

function Exercicio6() {
	const data: dataProp = [
		{
			emoji: '🐶',
			animal: 'dog'
		},
		{
			emoji: '🐱',
			animal: 'cat'
		},
		{
			emoji: '🐓',
			animal: 'chicken'
		},
		{
			emoji: '🐄',
			animal: 'cow'
		},
		{
			emoji: '🐏',
			animal: 'sheep'
		},
		{
			emoji: '🐴',
			animal: 'horse'
		}
	]

	return (
		<section className='listAnimals'>
			<CustomList data={data} />
		</section>
	)
}

export default Exercicio6
