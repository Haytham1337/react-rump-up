import './App.css'
import Form from './Components/Form'

function App() {
	const formProps = {
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
	}
	return (
		<div className='App'>
			<Form
				selectProps={formProps}
				onBtnSubmit={() => null}
				togleBtnActive={{ disabled: false }}
			/>
		</div>
	)
}

export default App
