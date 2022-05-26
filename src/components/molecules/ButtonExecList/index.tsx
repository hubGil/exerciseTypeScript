import { ButtonExec } from '@/components/atoms'
import './index.scss'
function ButtonExecList() {
	return (
		<section className='btn_list'>
			<ButtonExec content='Button 1' />
			<ButtonExec>Button 2</ButtonExec>
			<ButtonExec content='Button 3' />
		</section>
	)
}
export default ButtonExecList
