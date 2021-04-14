import { tr } from 'date-fns/locale'
import './App.css'
import Select from './Components/Select'

function App() {
	const OnChangeSelect = (e) => {
		console.log(e.target.value)
	}
	const onNewFuncAdd = (e) => {
		e.preventDefault()
	}
	return (
		<div className='App'>
			<h1>Hello World!</h1>
			<form onSubmit={onNewFuncAdd}>
				<Select
					label={'lib'}
					values={[1, 2, 4]}
					required={true}
					warning={true}
					hasDefaultValue={true}
					OnChangeSelect={OnChangeSelect}
				/>
				<input value={'Ok'} type='submit'></input>
			</form>
		</div>
	)
}

export default App
