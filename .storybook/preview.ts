import type { Preview } from '@storybook/react-vite'
import '../.generated/default.css'

const preview: Preview = {
  parameters: {
    layout: 'padded',
    docs: { canvas: { sourceState: 'shown' }, codePanel: true },
    options: {
      storySort: {
        order: [
          'React Bulma',
          'CSS Library',
          [
            'Elements',
            [
              'Block',
              'Box',
              'Button',
              'Content',
              'Delete',
              'Icon',
              'Image',
              'Notification',
              'Progress bars',
              'Table',
              'Tag',
              'Title',
            ],
            'Components',
            [
              'Breadcrumb',
              'Card',
              'Dropdown',
              'Menu',
              'Message',
              'Modal',
              'Navbar',
              'Pagination',
              'Panel',
              'Tabs',
            ],
            'Form',
            [
              'General',
              'Input',
              'Textarea',
              'Select',
              'Checkbox',
              'Radio',
              'File',
            ],
            'Columns',
            ['Basics', 'Sizes', 'Responsiveness', 'Nesting', 'Gap', 'Options'],
            'Grid',
            ['Smart Grid', 'Fixed Grid', 'Grid Cells'],
            'Layout',
            ['Container', 'Hero', 'Section', 'Level', 'Media Object', 'Footer'],
          ],
          'Features',
          ['Skeletons'],
        ],
      },
    },
  },
}
export default preview
