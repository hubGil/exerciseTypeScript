import { useState } from 'react'
import './index.scss'
function FormCustom() {
	const [firstName, setFirstName] = useState('')
	const [lastName, setLastName] = useState('')

	function handleSubmit(e: any) {
		e.preventDefault()

		setTimeout(() => {
			firstName === '' || lastName === '' ? alert('Preencha todos os campos') : alert(`Hello! ${firstName} ${lastName}`)
		}, 300)
	}

	function handleChangeFirstName(e: any) {
		setFirstName(e.target.value)
	}

	function handleChangeLastName(e: any) {
		setLastName(e.target.value)
	}

	return (
		<form onSubmit={handleSubmit} className='formCustom'>
			<input type='text' placeholder='First name' value={firstName} onChange={handleChangeFirstName} className='formCustom__input' />
			<input type='text' placeholder='Last name' value={lastName} onChange={handleChangeLastName} className='formCustom__input formCustom__input--space' />
			<button className='formCustom__button' type='submit'>
				GREET ME
			</button>
		</form>
	)
}

export default FormCustom
