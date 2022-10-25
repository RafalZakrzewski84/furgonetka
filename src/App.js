/** @format */

import assets from './assets/index';
import './App.less';

import MenuBar from './components/MenuBar/MenuBar';
import Spacing from './components/Spacing/Spacing';
import HeaderBasic from './components/HeaderBasic/HeaderBasic';
import ModTitle from './components/ModTitle/ModTitle';
import ModSmallIllustration from './components/ModSmallIllustration/ModSmallIllustration';

function App() {
	return (
		<div className="App">
			<MenuBar logo={assets.images.menuBar} />
			<Spacing type="L" />

			<HeaderBasic
				images={assets.images.headerBasicImages}
				texts={assets.texts.headerBasic}
			/>
			<Spacing type="L" />
			<Spacing type="M" color="#f6fbff" />
			<ModTitle type="left" texts={assets.texts.modTitle1} color="#f6fbff" />
			<Spacing type="M" color="#f6fbff" />
			<ModTitle type="right" texts={assets.texts.modTitle2} />
			<ModSmallIllustration
				image={assets.images.mod_small_img1}
				texts={assets.texts.modSmall1}
			/>
			<ModSmallIllustration
				type="left"
				image={assets.images.mod_small_img2}
				texts={assets.texts.modSmall2}
			/>
			<ModSmallIllustration
				image={assets.images.mod_small_img3}
				texts={assets.texts.modSmall3}
			/>
			<ModSmallIllustration
				type="left"
				image={assets.images.mod_small_img4}
				texts={assets.texts.modSmall4}
			/>
		</div>
	);
}

export default App;
