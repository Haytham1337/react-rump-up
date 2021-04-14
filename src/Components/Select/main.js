import './styles.css'

export const Select = ({
	label,
	values,
	required,
	warning,
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
		<>
			<label>{label}</label>
			<select {...selectProps}>
				{createOptionList(hasDefaultValue, optionsItems)}
			</select>
			{warning && <p>{'This input cant be empty'}</p>}
		</>
	)
}
