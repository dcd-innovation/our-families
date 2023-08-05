import React,{Component} from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry';
import './App.css';

class App extends Component {
	constructor() {
		super()
		this.state = {
			familyList: [],
			searchfield: ''
		}
	}

	componentDidMount() {
		fetch('https://jsonplaceholder.typicode.com/users')
			.then(response => response.json())
			.then(users => this.setState({ familyList: users }));
	}
	onSearchChange = (event) => {
		this.setState({ searchfield: event.target.value });
	}

	render() {
		const { familyList, searchfield } = this.state;
		const filteredfamilyList = familyList.filter(familyList => {
			return familyList.name.toLowerCase().includes(searchfield.toLowerCase())
		})

		return !familyList.length ?
			<h1>Loading</h1>:
			(
				<div className='tc'>
					<h1 className='f1'>familyList</h1>
					<SearchBox searchChange={this.onSearchChange} />
					<Scroll>
							<ErrorBoundry>
							<CardList familyList={filteredfamilyList} />
							</ErrorBoundry>
					</Scroll>
				</div>
			);
		}
	}

export default App;
