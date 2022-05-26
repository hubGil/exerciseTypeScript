import { useState } from 'react'
import './index.scss'

function Exercicio4() {
	const [countClick, setCountClick] = useState(0)

	function handleClick() {
		setCountClick(countClick + 1)
	}

	return (
		<section className='countNumber'>
			<h1 className='countNumber__title'>Button has been clicked: {countClick}</h1>
			<button className='countNumber__button' type='button' onClick={handleClick}>
				Click me
			</button>
		</section>
	)
}

export default Exercicio4
