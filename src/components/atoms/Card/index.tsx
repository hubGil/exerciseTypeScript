import './index.scss'

type CardProps = {
	title: string
	description: string
	id?: number
}

function Card({ title, id, description }: CardProps) {
	return (
		<div className='card'>
			<h2 className='card__title'>"What's the best thing about a Boolean?"</h2>
			<p className='card__description'>"Even if you're wrong, you're only off by a bit"</p>
		</div>
	)
}

export default Card
