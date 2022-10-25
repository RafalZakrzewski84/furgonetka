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
			<Spacing type="M" />
			<ModTitle type="right" texts={assets.texts.modTitle2} />
			<Spacing type="M" />
			<ModSmallIllustration
				image={assets.images.mod_small_img1}
				texts={assets.texts.modSmall1}
			/>
			<Spacing type="S" />
			<ModSmallIllustration
				type="left"
				image={assets.images.mod_small_img2}
				texts={assets.texts.modSmall2}
			/>
			<Spacing type="S" />
			<ModSmallIllustration
				image={assets.images.mod_small_img3}
				texts={assets.texts.modSmall3}
			/>
			<Spacing type="S" />
			<ModSmallIllustration
				type="left"
				image={assets.images.mod_small_img4}
				texts={assets.texts.modSmall4}
			/>
			<Spacing type="L" />
			<Spacing type="L" color="#f6fbff" />
			<ModTitle type="right" texts={assets.texts.modTitle3} color="#f6fbff" />
			<Spacing type="M" color="#f6fbff" />
			IKONY
			<Spacing type="S" color="#f6fbff" />
			IKONY
			<Spacing type="L" color="#f6fbff" />
			<ModTitle type="left" texts={assets.texts.modTitle4} color="#f6fbff" />
			<Spacing type="S" color="#f6fbff" />
			MOD-POINTS
			<Spacing type="L" color="#f6fbff" />
			<Spacing type="L" />
			<ModTitle type="right" texts={assets.texts.modTitle5} />
			<Spacing type="S" />
			LOGOS
			<Spacing type="L" />
			<Spacing type="L" />
			MOD-CTA
			<Spacing type="L" color="#f6fbff" />
			FORM
			<Spacing type="L" color="#f6fbff" />
			<Spacing type="L" color="#f6fbff" />
		</div>
	);
}

export default App;
