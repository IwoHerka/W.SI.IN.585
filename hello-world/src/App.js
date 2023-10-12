import './App.css';

const list = [
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
];

function generateList(items) {
	return items.map(function (item) {
		return <li key={item.objectID}>
			<span>
				<a href={item.url}>{item.title}</a>
			</span>
			<span>
				{item.author}
			</span>
		</li>
	})
}

function App() {
  return (
	<div>
		<h1>Hello world</h1>

		{generateList(list)}
	</div>
  );
}

export default App;
