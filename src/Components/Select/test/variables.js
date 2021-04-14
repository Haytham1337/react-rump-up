export const createSelectProps = (required=false, warning=false, hasDefaultValue=false) => ({
	label: 'Libs',
	values: ['1', '2', '3'],
	required: required ? true : undefined,
	warning: warning ? true : undefined,
	hasDefaultValue: hasDefaultValue ? true : undefined,
	OnChangeSelect: () => null,
})
