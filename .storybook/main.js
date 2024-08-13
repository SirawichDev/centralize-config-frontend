/** @type { import('@storybook/react-vite').StorybookConfig } */
const config = {
	stories: [
		"../src/libs/**/*.mdx",
		"../src/libs/components/**/*.stories.@(js|jsx|mjs|ts|tsx)",
	],
	addons: [
		"@storybook/addon-onboarding",
		"@storybook/addon-links",
		"@storybook/addon-essentials",
		"@chromatic-com/storybook",
		"@storybook/addon-interactions",
	],
	framework: {
		name: "@storybook/react-vite",
		options: {},
	},
};
export default config;
