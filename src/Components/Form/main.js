import './styles.css'

import Select from '../Select'

export const Form = ({ selectProps, onBtnSubmit, togleBtnActive }) => {
	const selectItems = Object.keys(selectProps).map((item) => (
		<Select key={item} {...selectProps[item]} />
	))

	return (
		<div className='formWrapper'>
			<form>
				{selectItems}
				<button
					className='addfuncBtn'
					onClick={onBtnSubmit}
					{...togleBtnActive}
				>
					Add func
				</button>
			</form>
		</div>
	)
}
