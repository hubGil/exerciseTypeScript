import './index.scss'
function Exercicio5() {
	const animals = ['dog', 'cat', 'chicken', 'cow', 'sheep', 'horse']

	return (
		<section className='animals'>
			<ul>
				{animals.map((animal, index) => (
					<li key={index}>{animal}</li>
				))}
			</ul>
		</section>
	)
}

export default Exercicio5
