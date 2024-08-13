import { Navbar } from ".";
// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
export default {
	title: "Example/Navbar",
	component: Navbar,
	parameters: {
		// More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
		layout: "fullscreen",
	},
	argTypes: {
		backgroundColor: {
			default: '#00B8B3',
		},
	},
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default = {
	args: {
		backgroundColor: '#00B8B3',
		onSidebarOpen: "Function () => true",
		logoImage: 'React Component <Image />',
		popoverComponent: 'React Component <Popup />',
	},
};
