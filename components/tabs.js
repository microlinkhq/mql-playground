import { Tab, Tabs as MyTabs, TabList, TabPanel } from 'react-tabs'
import { space, colors, fontSizes } from '@/theme'
import { css, Global } from '@emotion/react'

const globalStyles = (
  <Global
    styles={css`
      .react-tabs {
        -webkit-tap-highlight-color: transparent;
      }

      .react-tabs__tab-list {
        border-bottom: 1px solid ${colors.gray2};
        margin: 0;
        padding: 0;
      }

      .react-tabs__tab {
        text-transform: uppercase;
        font-size: ${fontSizes[1]};
        display: inline-block;
        border: 1px solid transparent;
        border-bottom: none;
        position: relative;
        list-style: none;
        padding: ${space[2]} ${space[3]};
        cursor: pointer;
        color: ${colors.gray6};
      }

      .react-tabs__tab--selected {
        color: ${colors.black};

        &::before {
          content: '';
          display: block;
          position: absolute;
          height: 0;
          left: -1px;
          right: -1px;
          bottom: 0;
          border-bottom: 2px solid;
        }
      }

      .react-tabs__tab--disabled {
        color: GrayText;
        cursor: default;
      }

      .react-tabs__tab:focus {
        outline: none;
      }

      .react-tabs__tab-panel {
        display: none;
      }

      .react-tabs__tab-panel--selected {
        display: block;
      }
    `}
  />
)

const Tabs = props => (
  <>
    {globalStyles}
    <MyTabs {...props} />
  </>
)

Tabs.Tab = Tab
Tabs.TabList = TabList
Tabs.TabPanel = TabPanel

export default Tabs
