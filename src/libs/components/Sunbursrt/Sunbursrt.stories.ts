import { SunburstChart } from '.';
import { MOCK_SUNBURST_DATA, MOCK_SUNBURST_LAYOUT } from './__MOCK__';
// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
export default {
  title: 'Example/SunburstChart',
  component: SunburstChart,
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'fullscreen'
  },
  argTypes: {}
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default = {
  args: {
    data: MOCK_SUNBURST_DATA,
    layout: MOCK_SUNBURST_LAYOUT
  }
};
