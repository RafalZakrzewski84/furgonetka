/** @format */
import logo from './images/logo.svg';
import header_basic_img1 from './images/header-basic_img1.svg';
import header_basic_img2 from './images/header-basic_img2.svg';
import mod_small_img1 from './images/mod-small_img1.svg';
import mod_small_img2 from './images/mod-small_img2.svg';
import mod_small_img3 from './images/mod-small_img3.svg';
import mod_small_img4 from './images/mod-small_img4.svg';
import mod_icons_icon1 from './images/mod-icons_icon1.svg';
import mod_icons_icon2 from './images/mod-icons_icon2.svg';
import mod_icons_icon3 from './images/mod-icons_icon3.svg';
import mod_icons_icon4 from './images/mod-icons_icon4.svg';
import mod_icons_icon5 from './images/mod-icons_icon5.svg';
import mod_points_img1 from './images/mod-points_img1.svg';
import mod_points_list_icon from './images/mod-points_list-icon.svg';
import mod_logos_img1 from './images/mod-logos_img1.svg';
import mod_logos_img2 from './images/mod-logos_img2.svg';
import mod_CTA_img1 from './images/mod-CTA_img1.svg';

const assets = {
	images: {
		menuBar: logo,
		headerBasicImages: { marker: header_basic_img1, image: header_basic_img2 },
		mod_small_img1: mod_small_img1,
		mod_small_img2: mod_small_img2,
		mod_small_img3: mod_small_img3,
		mod_small_img4: mod_small_img4,
		mod_icons1: [mod_icons_icon1, mod_icons_icon2, mod_icons_icon3],
		mod_icons2: [mod_icons_icon4, mod_icons_icon5],
		mod_points_images: [mod_points_img1, mod_points_list_icon],
		mod_logos: [mod_logos_img1, mod_logos_img2],
		mod_CTA_img1: mod_CTA_img1,
	},
	texts: {
		headerBasic: {
			topCaption: 'Furgonetka',
			h1Text: 'Przesyłki krajowe',
			h1Span: ' z Furgonetką',
			headerText:
				'Nadawaj przesyłki krajowe o różnych gabarytach ze sprawdzonymi przewoźnikami – z dostawą pod drzwi, do punktów odbioru i automatów paczkowych.',
			buttonText: 'NADAJ PRZESYŁKĘ',
		},
		modTitle1: {
			h2Text: ' przesyłki krajowe',
			h2Span: 'Wybierz tanie i szybkie',
			pText:
				'Wyceniaj i wysyłaj tanie paczki krajowe bez podpisywania umowy i określania minimum logistycznego. U nas płacisz tylko za nadane przesyłki. Nie pobieramy abonamentu za prowadzenie konta czy korzystanie z dostępnych narzędzi.',
		},
		modTitle2: {
			h2Text: 'Szeroki wybór',
			h2Span: ' przesyłek krajowych',
			pText: '',
		},
		modTitle3: {
			h2Text: 'Narzędzia',
			h2Span: ' do wysyłki',
			pText:
				'Na platformie Furgonetka.pl nie tylko nadasz tanie przesyłki kurierskie, ale także skorzystasz z bezpłatnych narzędzi, które pozwolą Ci pożegnać czasochłonne czynności. Wysyłkę ułatwią Ci m.in.:',
		},
		modTitle4: {
			h2Text: 'czas dostawy',
			h2Span: 'Dogodny ',
			pText:
				'Jeśli zależy Ci na czasie, możesz przyspieszyć transport zleconej paczki. Z Furgonetką nadasz najszybsze przesyłki krajowe. Wystarczy, że dobierzesz odpowiednią usługę dodatkową w zależności od przewoźnika:',
		},
		modTitle5: {
			h2Text: 'Przesyłki krajowe –',
			h2Span: ' DHL, FedEx, DPD, InPost i inni',
			pText:
				'Za pośrednictwem Furgonetki nadasz przesyłki krajowe z DHL, FedEx, DPD, InPost, UPS, GLS, Pocztex, ORLEN Paczka, Ambro Express, DeliGoo, Xpress Delivery i PallEx. Porównuj oferty najtańszych kurierów krajowych i wybierz usługę, którą potrzebujesz.',
		},
		modTitle6: {
			h2Text: 'Furgonetka – tu znajdziesz',
			h2Span: ' najtańsze przesyłki krajowe',
			pText:
				'Skorzystaj z bezpłatnego formularza i zamów wysyłkę swojej paczki w niskiej cenie.',
		},
		modTitle7: {
			h2Text: 'Zapytaj o',
			h2Span: ' ofertę indywidualną',
			pText:
				'Nadajesz dużo przesyłek kurierskich krajowych? Napisz do nas, a oddzwonimy, żeby porozmawiać o indywidualnej ofercie.',
		},
		modSmall1: {
			h3Text: 'Przesyłki standardowe',
			pText:
				'Nadajesz przesyłki drobnicowe krajowe do różnych miast w Polsce? Wysyłaj koperty DOX (np. z dokumentami) i przesyłki kurierskie (nawet do 70 kg) – prywatnie i biznesowo za pomocą naszego serwisu.',
		},
		modSmall2: {
			h3Text: 'Wysyłka palet',
			pText:
				'Potrzebujesz przetransportować duże gabaryty lub ładunki złożone z wielu mniejszych elementów? Nadawaj przesyłki paletowe krajowe. W naszej ofercie znajdziesz wysyłkę europalet i półpalet euro, a także palet i półpalet przemysłowych.',
		},
		modSmall3: {
			h3Text: 'Przesyłki miejskie',
			pText:
				'Chcesz skorzystać z usługi dostawy paczki na terenie swojego miasta? Nadawaj przesyłki ekspresowe w kilkudziesięciu miejscowościach w Polsce z doręczeniem nawet w 40 minut. Współpracujemy z dwoma przewoźnikami miejskimi.',
		},
		modSmall4: {
			h3Text: 'Przesyłki nietypowe',
			pText:
				'Masz do wysłania coś nietypowego (np. meble, części samochodowe, motor, sprzęt AGD)? Zlecaj przesyłki gabarytowe krajowe i korzystaj z usług firm transportowych z całej Polski za pośrednictwem platformy Furgonetka Giełda.',
		},
		modIcons1: [
			'Śledzenie przesyłek',
			'Książka adresowa',
			'Szablony przesyłek',
		],
		modIcons2: [
			'Inne dane na etykiecie',
			'Zamówienie paczki bez zlecania podjazdu kuriera',
		],
		modPointsList: [
			'Paczka w Weekend',
			'Doręczenie przesyłki w sobotę',
			'Doręczenie do danej godziny',
			'Doręczenie na drugi dzień',
			'Doręczenie we wskazany dzień',
			'Przesyłka ekspresowa',
		],
	},
};

export default assets;
