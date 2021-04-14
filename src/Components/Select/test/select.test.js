import React from 'react'
import { render } from '@testing-library/react'
import Select from '../../Select'

const createSelectProps = (
	required = false,
	showWarning = false,
	hasDefaultValue = false
) => ({
	label: 'Libs',
	values: ['1', '2', '3'],
	required: required ? true : undefined,
	showWarning: showWarning ? true : undefined,
	hasDefaultValue: hasDefaultValue ? true : undefined,
	OnChangeSelect: () => null,
})

describe('Select test suit', () => {
	it('render Select component', () => {
		render(<Select {...createSelectProps()} />)
	})

	it('Select Should render required attribute or not', () => {
		let select
		const { container, rerender } = render(
			<Select {...createSelectProps(true, false, true)} />
		)
		select = container.querySelector('select')
		expect(select.hasAttribute('required')).toBe(true)
		rerender(<Select {...createSelectProps(false, false, true)} />)
		select = container.querySelector('select')
		expect(select.hasAttribute('required')).toBe(false)
	})
	it('Should render label', () => {
		const { container } = render(
			<Select {...createSelectProps(true, false, false)} />
		)
		const label = container.querySelector('label')
		expect(label.innerHTML).toBe(createSelectProps().label)
	})

	it('Should render warning paragraph or not', () => {
		let paragraph
		const { container, rerender } = render(
			<Select {...createSelectProps(true, true, false)} />
		)
		paragraph = container.querySelector('p')
		expect(paragraph).toBeDefined()
		expect(paragraph.innerHTML).toBe('This input cant be empty')
		rerender(<Select {...createSelectProps(false, false, true)} />)
		paragraph = container.querySelector('p')
		expect(paragraph).toBe(null)
	})
	it('Should render options in select', () => {
		const { container } = render(
			<Select {...createSelectProps(false, false, true)} />
		)
		const options = container.querySelectorAll('option')
		expect(options).toBeDefined()
		expect(options.length).toEqual(3)
	})
})
