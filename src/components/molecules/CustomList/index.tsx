import './index.scss'

type CustomListProp = {
	data: Array<{
		emoji: string
		animal: string
	}>
}

function CustomList({ data }: CustomListProp) {
	return (
		<ul className='customList'>
			{data.map((item, index) => (
				<li className='customList__item' key={index}>
					{item.emoji && <span className='customList__text'>{item.emoji}</span>}
					<span className='customList__text'>{item.animal}</span>
				</li>
			))}
		</ul>
	)
}

export default CustomList
