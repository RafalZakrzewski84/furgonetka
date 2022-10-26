/** @format */

import assets from './assets/index';
import './App.less';

import MenuBar from './components/MenuBar/MenuBar';
import Spacing from './components/Spacing/Spacing';
import HeaderBasic from './components/HeaderBasic/HeaderBasic';
import ModTitle from './components/ModTitle/ModTitle';
import ModSmallIllustration from './components/ModSmallIllustration/ModSmallIllustration';
import ModIcons from './components/ModIcons/ModIcons';
import ModPoints from './components/ModPoints/ModPoints';
import ModLogos from './components/ModLogos/ModLogos';
import ModCTA from './components/ModCTA/ModCTA';
import ModContactForm from './components/ModContactForm/ModContactForm';

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
			<ModIcons
				icons={assets.images.mod_icons1}
				iconsTexts={assets.texts.modIcons1}
			/>
			<Spacing type="S" color="#f6fbff" />
			<ModIcons
				icons={assets.images.mod_icons2}
				iconsTexts={assets.texts.modIcons2}
			/>
			<Spacing type="L" color="#f6fbff" />
			<ModTitle type="left" texts={assets.texts.modTitle4} color="#f6fbff" />
			<Spacing type="S" color="#f6fbff" />
			<ModPoints
				images={assets.images.mod_points_images}
				texts={assets.texts.modPointsList}
			/>
			<Spacing type="L" color="#f6fbff" />
			<Spacing type="L" />
			<ModTitle type="right" texts={assets.texts.modTitle5} />
			<Spacing type="S" />
			<ModLogos logos={assets.images.mod_logos} />
			<Spacing type="L" />
			<Spacing type="L" />
			<ModCTA images={assets.images.mod_CTA_img1} texts={assets.texts.modCTA} />
			<Spacing type="L" color="#f6fbff" />
			<ModContactForm texts={assets.texts.modContactForm} />
			<Spacing type="L" color="#f6fbff" />
			<Spacing type="L" color="#f6fbff" />
		</div>
	);
}

export default App;
