import React from 'react'
import { render } from '@testing-library/react'
import Form from '../../Form'

const formTestSelectProps = {
	firstVariant: {
		libSelect: {
			label: 'Library',
			values: ['momentJs', 'Date-fns'],
			required: false,
			showWarning: false,
			hasDefaultValue: true,
			onChangeSelect: () => null,
		},
		funcSelect: {
			label: 'Function',
			values: ['one', 'two', 'three'],
			required: false,
			showWarning: false,
			hasDefaultValue: true,
			onChangeSelect: () => null,
		},
	},
	secondVariant: {
		libSelect: {
			label: 'testlabel',
			values: ['Test1', 'Test2'],
			required: false,
			showWarning: false,
			hasDefaultValue: true,
			onChangeSelect: () => null,
		},
	},
}

describe('Form test suit', () => {
	it('render Form component', () => {
		render(
			<Form
				selectProps={formTestSelectProps.firstVariant}
				onBtnSubmit={() => null}
				togleBtnActive={{ disabled: false }}
			/>
		)
	})
	it('should render form with  different select inputs quantity', () => {
		let selectInputs
		const { container, rerender } = render(
			<Form
				selectProps={formTestSelectProps.firstVariant}
				onBtnSubmit={() => null}
				togleBtnActive={{ disabled: false }}
			/>
		)
		selectInputs = container.querySelectorAll('select')
		expect(selectInputs).toBeDefined()
		expect(selectInputs.length).toEqual(
			Object.keys(formTestSelectProps.firstVariant).length
		)
		rerender(
			<Form
				selectProps={formTestSelectProps.secondVariant}
				onBtnSubmit={() => null}
				togleBtnActive={{ disabled: false }}
			/>
		)
		selectInputs = container.querySelectorAll('select')
		expect(selectInputs).toBeDefined()
		expect(selectInputs.length).toEqual(
			Object.keys(formTestSelectProps.secondVariant).length
		)
	})
	it('should render button with disabled attribute or not ', () => {
		let button
		const { container, rerender } = render(
			<Form
				selectProps={formTestSelectProps.secondVariant}
				onBtnSubmit={() => null}
				togleBtnActive={{ disabled: false }}
			/>
		)
		button = container.querySelector('button')
		expect(button).toBeDefined()
		expect(button.innerHTML).toBe('Add func')
		rerender(
			<Form
				selectProps={formTestSelectProps.secondVariant}
				onBtnSubmit={() => null}
				togleBtnActive={{ disabled: true }}
			/>
		)
		expect(button).toBeDefined()
		expect(button.innerHTML).toBe('Add func')
		expect(button.hasAttribute('disabled')).toBe(true)
	})
})
