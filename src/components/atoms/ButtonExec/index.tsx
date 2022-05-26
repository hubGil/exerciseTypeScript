type ButtonProp = {
	content?: string
	children?: React.ReactNode
}

function ButtonExec({ content, children }: ButtonProp) {
	function hey() {
		alert(content ? content : children)
	}
	return (
		<button type='button' onClick={hey}>
			{content ? content : children}
		</button>
	)
}

export default ButtonExec
