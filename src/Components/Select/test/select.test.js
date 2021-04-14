import React from 'react'
import { render } from '@testing-library/react'
import Select from '../../Select'
import { createSelectProps } from './variables'

describe('Select test suit', () => {
	it('render Select component', () => {
		render(<Select {...createSelectProps()} />)
	})

	it('Select Should have required attribute ', () => {
		const { container } = render(
			<Select {...createSelectProps(true, false, true)} />
		)
		const select = container.querySelector('select')
		expect(select.hasAttribute('required')).toBe(true)
	})

	it('Select Should not have required attribute ', () => {
		const { container } = render(
			<Select {...createSelectProps(false, false, true)} />
		)
		const select = container.querySelector('select')
		expect(select.hasAttribute('required')).toBe(false)
	})
	it('Should render label', () => {
		const { container } = render(
			<Select {...createSelectProps(true, false, false)} />
		)
		const label = container.querySelector('label')
		expect(label.innerHTML).toBe(createSelectProps().label)
	})

	it('Should render warning paragraph', () => {
		const { container } = render(
			<Select {...createSelectProps(true, true, false)} />
		)
		const paragraph = container.querySelector('p')
		expect(paragraph).toBeDefined()
		expect(paragraph.innerHTML).toBe('This input cant be empty')
	})
	it('Should not render warning paragraph', () => {
		const { container } = render(
			<Select {...createSelectProps(true, false, false)} />
		)
		const paragraph = container.querySelector('p')
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
