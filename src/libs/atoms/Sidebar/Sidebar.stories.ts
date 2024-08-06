import { Sidebar } from ".";
import TaskIcon from 'libs/assets/task.svg';
// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
export default {
  title: "Example/Sidebar",
  component: Sidebar,
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: "fullscreen",
  },
  argTypes: {

  },
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default = {
  args: {
    onClose: "Function () => true",
    open: true,
    LogoutModal: 'React Component <Modal />',
    onSidebarOpen: "Function () => true",
    logoImage: 'React Component <Image />',
    menuItems: [{ module: '', title: '', icon: '' }],
    xsSidebarContent: 'Content Menu <MobileSidebarContent />',
    lgSidebarContent: 'Content Menu <DesktopSidebarContent />',
  },
};
