import './App.css'
import React from 'react'

const stories = [
	{
		title: 'React',
		url: 'https://reactjs.org/',
		author: 'Jordan Walke',
		num_comments: 3,
		points: 4,
		objectID: 0,
	},
	{
		title: 'Redux',
		url: 'https://redux.js.org/',
		author: 'Dan Abramov, Andrew Clark',
		num_comments: 2,
		points: 5,
		objectID: 1,
	},
	{
		title: 'NPM',
		url: 'https://redux.js.org/',
		author: 'Dan Abramov, Andrew Clark',
		num_comments: 2,
		points: 5,
		objectID: 2,
	}
];

const List = (props) => {
	return (
		<ul>
		{props.list.map(function(item) {
			return (
				<li key={item.objectID}>
					<span><a href={item.url}>{item.title}</a></span>
					<span>{item.author}</span>
					<span>{item.num_comments}</span>
					<span>{item.points}</span>
				</li>
			)
		})}
		</ul>
	)
}

const Search = () => {
	const [searchText, setSearchText] = React.useState("")

	const handleChange = (event) => {
		setSearchText(event.target.value)
	}

	return (
		<div>
			<label htmlFor="search">Search: </label>
			<input value={searchText} id="search" type="text" onChange={handleChange} />
		</div>
	)
}

const App = () => {
  return (
	  <div>
		<h1>Hacker News</h1>

		<Search />

		<hr />

		<List list={stories} />
	  </div>
  );
}

export default App;
