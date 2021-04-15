import './styles.css'

export const Input = ({
	inputType = 'string',
	name,
	value,
	onInputChange,
	label,
}) => {
	return (
		<div className='inputWrapper'>
			{label && <label>{label}</label>}
			<input
				type={inputType}
				name={name ? name : undefined}
				value={value}
				onChange={onInputChange}
			></input>
		</div>
	)
}
