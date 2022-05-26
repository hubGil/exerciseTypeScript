import { Card } from '@/components/atoms'
import animals from '@/services/data/animals.json'

function CardList() {
	console.log(animals)
	return (
		<>
			{animals.map((item) => (
				<Card title={item.setup} key={item.id} description={item.punchline} />
			))}
		</>
	)
}

export default CardList
