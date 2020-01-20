import React from 'react';
import { render } from 'react-dom';

import {
  Deck,
  FlexBox,
  Box,
  FullScreen,
  Progress,
} from 'spectacle';

import { titleSlide } from './slides/title'
import { craTemplateSlide } from './slides/craTemplate';
import { optionalChainingSlide } from './slides/optionalChaining';
import { typescriptSection } from './slides/typescript';
import { links } from './slides/links';
import { immer } from './slides/immer';
import { reduxTools } from './slides/reduxTools';
import { responsiveTheme } from './slides/responsiveTheme';
import { reactTestingLibrary } from './slides/reactTestingLibrary';
import { lazyLoading } from './slides/lazyLoading';
import { fixtures } from './slides/fixtures';
import { jsonServer } from './slides/jsonServer';
import { hooks } from './slides/hooks';
import { fixedBugs } from './slides/fixedBugs';

const theme = {};

const template = () => (
  <FlexBox
    justifyContent="space-between"
    position="absolute"
    bottom={0}
    width={1}
  >
    <Box padding="0 1em">
      <FullScreen />
    </Box>
    <Box padding="1em">
      <Progress />
    </Box>
  </FlexBox>
);


// eslint-disable-next-line react/no-multi-comp
const Presentation = () => (
  <Deck autoLayout={false} loop theme={theme} template={template}>
    {titleSlide}

    {craTemplateSlide}

    {optionalChainingSlide}

    {immer}

    {reduxTools}

    {responsiveTheme}

    {reactTestingLibrary}

    {lazyLoading}

    {fixtures}

    {jsonServer}

    {hooks}

    {fixedBugs}

    {typescriptSection}

    {links}
  </Deck>
);

render(<Presentation />, document.getElementById('root'));
