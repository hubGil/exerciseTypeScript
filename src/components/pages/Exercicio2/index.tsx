import './index.scss'
function Exercicio2() {
	function hey() {
		alert('Clicked')
	}
	return (
		<button className='btn' type='button' onClick={hey}>
			Click me
		</button>
	)
}

export default Exercicio2
