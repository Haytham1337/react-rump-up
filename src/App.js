import './App.css'
import Select from './Components/Select'

function App() {
	const onChangeSelect = (e) => {
		console.log(e.target.value)
	}
	const onNewFuncAdd = (e) => {
		e.preventDefault()
	}
	return (
		<div className='App'>
			<form onSubmit={onNewFuncAdd}>
				<Select
					label={'lib'}
					values={[1, 2, 4]}
					required={true}
					warning={true}
					hasDefaultValue={true}
					onChangeSelect={onChangeSelect}
				/>
				<input value={'Ok'} type='submit'></input>
			</form>
		</div>
	)
}

export default App
