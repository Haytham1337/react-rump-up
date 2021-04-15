import React from 'react'
import { render } from '@testing-library/react'
import Input from '../../Input'

describe('Input test suit', () => {
	it('render Input component', () => {
		render(<Input />)
	})

	it('Should render input with different type Attribute', () => {
		let input
		const { container, rerender } = render(<Input inputType={'number'} />)
		input = container.querySelector('input')
		expect(input.hasAttribute('type')).toBe(true)
		expect(input.getAttribute('type')).toBe('number')
		rerender(<Input inputType={'date'} />)
		input = container.querySelector('input')
		expect(input.hasAttribute('type')).toBe(true)
		expect(input.getAttribute('type')).toBe('date')
		rerender(<Input inputType={'text'} />)
		input = container.querySelector('input')
		expect(input.hasAttribute('type')).toBe(true)
		expect(input.getAttribute('type')).toBe('text')
	})

	it('Should render input with label or not', () => {
		let label
		const { container, rerender } = render(<Input label={'test Label'} />)
		label = container.querySelector('label')
		expect(label).toBeDefined()
		expect(label.innerHTML).toBe('test Label')
		rerender(<Input />)
		label = container.querySelector('label')
		expect(label).toBe(null)
	})
	it('Should render input name Attribute', () => {
		let input
		const { container, rerender } = render(<Input name={'name test 1'} />)
		input = container.querySelector('input')
		expect(input.hasAttribute('name')).toBe(true)
		expect(input.getAttribute('name')).toBe('name test 1')
		rerender(<Input name={'name test 2'} />)
		input = container.querySelector('input')
		expect(input.hasAttribute('name')).toBe(true)
		expect(input.getAttribute('name')).toBe('name test 2')
	})
})
