import './styles.css'

export const Select = ({
	label,
	values,
	required,
	showWarning,
	hasDefaultValue,
	onChangeSelect,
}) => {
	const selectProps = {
		onChange: onChangeSelect,
		required: required ? true : undefined,
	}
	const optionsItems = values.map((item, index) => {
		const optionProps = {
			key: item,
			value: item,
			name: item,
			selected: hasDefaultValue && index === 0 ? true : undefined,
		}
		return <option {...optionProps}>{item}</option>
	})

	const createOptionList = (hasDefaultValue, optionsItems) => {
		if (!hasDefaultValue) {
			return (
				<>
					<option key={'blank'} value='' selected disabled hidden></option>
					{optionsItems}
				</>
			)
		} else {
			return optionsItems
		}
	}
	return (
		<div className='selectWrapper'>
			<label className='label'>{label}</label>
			<select {...selectProps} className='selectInput'>
				{createOptionList(hasDefaultValue, optionsItems)}
			</select>
			{showWarning && (
				<p className='warningMsg'>{'This input cant be empty'}</p>
			)}
		</div>
	)
}
