import React from 'react';
import {
	Appear,
	Code,
	Deck,
	Fill,
	Fit,
	Heading,
	Image,
	Layout,
	Slide,
	Text
} from 'spectacle';
import createTheme from 'spectacle/lib/themes/default';
import preload from 'spectacle/lib/utils/preloader';
import CodeSlide from 'spectacle-code-slide';

// Require CSS
require('normalize.css');

const images = {
	// Photo by Gerrie van der Walt on Unsplash
	airplane: require('../assets/airplane.jpg').replace('/', ''),
	driveCapital: require('../assets/drive-capital.png').replace('/', ''),
	eslint: require('../assets/eslint.svg'),
	networkThrottling: require('../assets/network-throttling.png').replace('/', ''),
	// Photo by Igor Ovsyannykov on Unsplash
	pizza: require('../assets/pizza.jpg').replace('/', ''),
	screenshotAnalyzer02: require('../assets/02-analyzer/analyzer.png').replace('/', ''),
	tbdbitl: require('../assets/tbdbitl.jpg').replace('/', '')
};
// Object.keys(images).forEach((key) => {
// 	images[key] = images[key].replace('/', '');
// });
preload(images);

const colors = {
	background: '#282C34',
	foreground: '#CFD8E6'
};

const theme = createTheme({
	primary: colors.background,
	secondary: colors.foreground,
	tertiary: colors.foreground,
	quarternary: colors.foreground
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

const DiagramBlock = ({ height = 100, name, width = 200, x, y }) => (
	<g transform={`translate(${x - width / 2}, ${y - height / 2})`}>
		<rect
			fill="none"
			height={height}
			stroke={colors.foreground}
			strokeWidth={4}
			width={width}
		/>
		<text
			fill={colors.foreground}
			fontFamily="Montserrat"
			fontSize={30}
			x={10}
			y={35}
		>
			{name}
		</text>
	</g>
);

const DiagramArrow = ({ from: [x0, y0], to: [x1, y1] }) => {
	const x = Math.min(x0, x1);
	const y = Math.min(y0, y1);

	return (
		<g tranform={`translate(${x}, ${y})`}>
			<circle cx={x0} cy={y0} r={8} fill={colors.foreground} />
			<line
				stroke={colors.foreground}
				strokeWidth={4}
				x1={x0} y1={y0} x2={x1} y2={y1}
			/>
		</g>
	);
};

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
				<Slide bgImage={images.tbdbitl} bgDarken={0.75}>
					<Heading bold={false} textSize="8em" style={{ margin: '-20px 0 120px' }}>
						Hi
					</Heading>
					<Layout style={{ marginTop: '80px' }}>
						<Fill><Image src={images.driveCapital} /></Fill>
						<Fill><Image height="70%" src={images.eslint} /></Fill>
					</Layout>
				</Slide>
				<Slide bgImage={images.pizza} bgDarken={0.75}>
					<Heading bold={false} textSize="8em">What?</Heading>
				</Slide>
				<Slide bgImage={images.airplane} bgDarken={0.75}>
					<Heading bold={false} textSize="8em">Why?</Heading>
				</Slide>
				<Slide>
					<Heading bold={false} textSize="8em">
						<a href="http://localhost:8001" target="_blank">
							Demo
						</a>
					</Heading>
				</Slide>
				<Slide>
					<svg height={500} width={600}>
						<DiagramBlock name="App" x={300} y={60} />
						<DiagramBlock name="Home" x={150} y={250} />
						<DiagramBlock name="Profile" x={450} y={250} />
						<DiagramBlock name="Map" x={150} y={440} />
						<DiagramBlock name="Chart" x={450} y={440} />
						<DiagramArrow from={[250, 90]} to={[210, 220]} />
						<DiagramArrow from={[350, 90]} to={[510, 220]} />
						<DiagramArrow from={[170, 280]} to={[170, 410]} />
						<DiagramArrow from={[390, 280]} to={[210, 410]} />
						<DiagramArrow from={[500, 280]} to={[500, 410]} />
					</svg>
				</Slide>
				<Slide>
					<Heading bold={false}>Network Tools</Heading>
					<Image src={images.networkThrottling} />
				</Slide>
				<Slide>
					<Heading bold={false} textSize="8em">
						<a href="http://localhost:8001" target="_blank">
							Demo
						</a>
					</Heading>
				</Slide>
				<CodeSlide
					lang="js"
					code={require('raw-loader!../assets/01-initial/webpack.config.js.example')}
					ranges={[
						{
							loc: [0, 999],
							title: <Heading bold={false}>Webpack config</Heading>
						},
						{ loc: [9, 10] },
						{ loc: [11, 17] },
						{ loc: [12, 15] },
						{ loc: [15, 16] }
					]}
				/>
				<CodeSlide
					lang="js"
					code={require('raw-loader!../assets/02-analyzer/webpack.config.js.example')}
					ranges={[
						{
							loc: [0, 999],
							title: <Heading bold={false}>Bundle analyzer</Heading>
						},
						{ loc: [2, 4] },
						{ loc: [6, 9] }
					]}
				/>
				<Slide>
					<iframe
						sandbox="allow-scripts"
						srcDoc={require('../assets/02-analyzer/analyzer.html')}
						style={{
							border: 'none',
							minHeight: 620,
							minWidth: 920
						}}
					/>
				</Slide>
				<CodeSlide
					lang="js"
					code={require('raw-loader!../assets/03-dynamic-import/dynamic-import.js.example')}
					ranges={[
						{
							loc: [0, 999],
							title: (
								<Heading bold={false} size={2}>
									Dynamic <Code textColor="inherit" textSize="inherit">import()</Code>
								</Heading>
							)
						},
						{ loc: [0, 1] },
						{ loc: [1, 4] }
					]}
				/>
				<CodeSlide
					lang="js"
					code={require('raw-loader!../assets/03-dynamic-import/webpack.config.js.example')}
					ranges={[
						{
							loc: [0, 999],
							title: (
								<Heading bold={false} size={2}>
									Babel Plugin
								</Heading>
							)
						},
						{ loc: [3, 9] },
						{ loc: [9, 12] }
					]}
				/>
				<CodeSlide
					lang="jsx"
					code={require('raw-loader!../assets/03-dynamic-import/async-component.js.example')}
					ranges={[
						{
							loc: [0, 999],
							title: (
								<Heading bold={false} size={2}>
									AsyncChart
								</Heading>
							)
						},
						{ loc: [7, 10] },
						{ loc: [22, 35] },
						{ loc: [23, 24] },
						{ loc: [25, 29] },
						{ loc: [12, 21] },
						{ loc: [13, 14] },
						{ loc: [14, 15] },
						{ loc: [15, 18] },
						{ loc: [23, 26] },
						{ loc: [29, 34] },
						{ loc: [38, 45] }
					]}
				/>
				<CodeSlide
					lang="jsx"
					code={require('raw-loader!../assets/04-react-loadable/react-loadable.js.example')}
					ranges={[
						{
							loc: [0, 999],
							title: (
								<Heading bold={false} size={2}>
									<Code textColor="inherit" textSize="inherit">
										react-loadable
									</Code>
								</Heading>
							)
						},
						{ loc: [0, 1] },
						{ loc: [1, 2] },
						{ loc: [3, 7] },
						{ loc: [4, 5] },
						{ loc: [5, 6] },
						{ loc: [8, 15] }
					]}
				/>
				<Slide>
					<svg height={500} width={600}>
						<DiagramBlock name="App" x={300} y={60} />
						<DiagramBlock name="Home" x={150} y={250} />
						<DiagramBlock name="Profile" x={450} y={250} />
						<DiagramBlock name="Map" x={150} y={440} />
						<DiagramBlock name="Chart" x={450} y={440} />
						<DiagramArrow from={[250, 90]} to={[210, 220]} />
						<DiagramArrow from={[350, 90]} to={[510, 220]} />
						<DiagramArrow from={[170, 280]} to={[170, 410]} />
						<DiagramArrow from={[390, 280]} to={[210, 410]} />
						<DiagramArrow from={[500, 280]} to={[500, 410]} />
					</svg>
				</Slide>
				<CodeSlide
					lang="jsx"
					code={require('raw-loader!../assets/04-react-loadable/home.js.example')}
					ranges={[
						{
							loc: [0, 999],
							title: (
								<Heading bold={false} size={2}>
									<Code textColor="inherit" textSize="inherit">
										home.js
									</Code>
								</Heading>
							)
						},
						{ loc: [2, 3] },
						{ loc: [6, 7] },
						{ loc: [8, 13] },
						{ loc: [27, 28] }
					]}
				/>
				<CodeSlide
					lang="jsx"
					code={require('raw-loader!../assets/04-react-loadable/profile.js.example')}
					ranges={[
						{
							loc: [0, 999],
							title: (
								<Heading bold={false} size={2}>
									<Code textColor="inherit" textSize="inherit">
										profile.js
									</Code>
								</Heading>
							)
						},
						{ loc: [3, 4] },
						{ loc: [6, 7] },
						{ loc: [8, 13] },
						{ loc: [13, 18] },
						{ loc: [24, 26] }
					]}
				/>
				<Slide>
					<iframe
						sandbox="allow-scripts"
						srcDoc={require('../assets/05-split/analyzer.html')}
						style={{
							border: 'none',
							minHeight: 620,
							minWidth: 920
						}}
					/>
				</Slide>
				<Slide>
					<Heading bold={false} textSize="8em">
						<a href="http://localhost:8002" target="_blank">
							Demo
						</a>
					</Heading>
				</Slide>
				<Slide>
					<div style={{ flex: 1, flexDirection: 'column' }}>
						<div style={{ flex: 1, margin: '180px 0 200px' }}>
							<Heading bold={false} textSize="8em">Q&A</Heading>
						</div>
						<Text textColor={colors.foreground}>
							@brandontmills
						</Text>
					</div>
				</Slide>
			</Deck>
		);
	}
}
