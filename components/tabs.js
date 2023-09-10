import { Tab, Tabs as MyTabs, TabList, TabPanel } from 'react-tabs'
import { css, Global } from '@emotion/react'

import {
  colors,
  fonts,
  fontSizes,
  fontWeights,
  letterSpacings,
  transitions
} from '@/theme'

const globalStyles = (
  <Global
    styles={css`
      .react-tabs {
        -webkit-tap-highlight-color: transparent;
      }

      .react-tabs__tab-list {
        border-bottom: 1px solid #aaa;
        margin: 0 0 10px;
        padding: 0;
      }

      .react-tabs__tab {
        display: inline-block;
        border: 1px solid transparent;
        border-bottom: none;
        bottom: -1px;
        position: relative;
        list-style: none;
        padding: 6px 12px;
        cursor: pointer;
      }

      .react-tabs__tab--selected {
        background: #fff;
        border-color: #aaa;
        color: black;
        border-radius: 5px 5px 0 0;
      }

      .react-tabs__tab--disabled {
        color: GrayText;
        cursor: default;
      }

      .react-tabs__tab:focus {
        outline: none;
      }

      .react-tabs__tab:focus:after {
        content: '';
        position: absolute;
        height: 5px;
        left: -4px;
        right: -4px;
        bottom: -5px;
        background: #fff;
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
