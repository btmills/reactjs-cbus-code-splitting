import React from 'react';
import {
	Deck,
	Heading,
	Slide,
	Text
} from 'spectacle';
import createTheme from 'spectacle/lib/themes/default';
import preload from 'spectacle/lib/utils/preloader';
import CodeSlide from 'spectacle-code-slide';

// Require CSS
require('normalize.css');

const images = {
	// Photo by Igor Ovsyannykov on Unsplash
	splash: require('../assets/splash.jpg').replace('/', '')
};
preload(images);

const theme = createTheme({
	primary: '#282C34',
	secondary: '#CFD8E6',
	tertiary: '#CFD8E6',
	quarternary: '#CFD8E6'
	// primary: 'white',
	// secondary: '#1F2022',
	// tertiary: '#03A9FC',
	// quarternary: '#CECECE'
	// primary: '#011627',
	// secondary: '#B7CECE',
	// tertiary: '#B7CECE'
}, {
	primary: 'Montserrat',
	secondary: 'Helvetica'
});

export default class Presentation extends React.Component {
	render() {
		return (
			<Deck
				progress="none"
				theme={theme}
				transition={['fade']}
				transitionDuration={250}
			>
				<Slide>
					<Heading
						bold={false}
						lineHeight={1.3}
					>
						Code-Splitting a React App
					</Heading>
				</Slide>
				<CodeSlide
					lang="js"
					code={require('raw-loader!../assets/webpack.example')}
					ranges={[
						{ loc: [0, 999], title: <Heading bold={false}>Webpack config</Heading> },
						{ loc: [5, 8] },
						{ loc: [8, 13] },
						{ loc: [13, 32] },
						{ loc: [15, 16] },
						{ loc: [16, 17] },
						{ loc: [18, 19] },
						{ loc: [21, 26] },
						{ loc: [26, 27] }
					]}
				/>
			</Deck>
		);
	}
}
