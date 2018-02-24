// Import React
import React from "react";

// Import Spectacle Core tags
import {
	BlockQuote,
	Cite,
	Deck,
	Heading,
	ListItem,
	List,
	Quote,
	Slide,
	Text
} from "spectacle";

// Import theme
import createTheme from "spectacle/lib/themes/default";

import preload from "spectacle/lib/utils/preloader";

// Require CSS
require("normalize.css");

const theme = createTheme({
	primary: "#1F2022",
	secondary: "white",
	tertiary: "#03A9FC",
	quarternary: "#CECECE"
}, {
	primary: "Montserrat",
	secondary: "Helvetica"
});

const images = {
	// Photo by Igor Ovsyannykov on Unsplash
	splash: require("../assets/splash.jpg").replace("/", "")
};

preload(images);

export default class Presentation extends React.Component {
	render() {
		return (
			<Deck
				theme={theme}
				transition={["zoom", "slide"]}
				transitionDuration={500}
			>
				<Slide transition={["zoom"]} bgColor="primary" /*bgImage={images.splash} bgDarken={0.6}*/>
					<Heading size={1} fit lineHeight={1} textColor="secondary">
						Code-Splitting a React App
					</Heading>
					{/* <Text margin="10px 0 0" textColor="tertiary" size={1} fit bold>
						open the presentation/index.js file to get started
					</Text> */}
				</Slide>
				<Slide transition={["fade"]} bgColor="tertiary">
					<Heading size={6} textColor="primary" caps>Typography</Heading>
					<Heading size={1} textColor="secondary">Heading 1</Heading>
					<Heading size={2} textColor="secondary">Heading 2</Heading>
					<Heading size={3} textColor="secondary">Heading 3</Heading>
					<Heading size={4} textColor="secondary">Heading 4</Heading>
					<Heading size={5} textColor="secondary">Heading 5</Heading>
					<Text size={6} textColor="secondary">Standard text</Text>
				</Slide>
				<Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
					<Heading size={6} textColor="secondary" caps>Standard List</Heading>
					<List>
						<ListItem>Item 1</ListItem>
						<ListItem>Item 2</ListItem>
						<ListItem>Item 3</ListItem>
						<ListItem>Item 4</ListItem>
					</List>
				</Slide>
				<Slide transition={["fade"]} bgColor="secondary" textColor="primary">
					<BlockQuote>
						<Quote>Example Quote</Quote>
						<Cite>Author</Cite>
					</BlockQuote>
				</Slide>
			</Deck>
		);
	}
}
