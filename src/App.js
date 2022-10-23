/** @format */

import assets from './assets/index';
import './App.less';

import MenuBar from './components/MenuBar/MenuBar';

function App() {
	return (
		<div className="App">
			<MenuBar logo={assets.images.menuBar} />
		</div>
	);
}

export default App;
