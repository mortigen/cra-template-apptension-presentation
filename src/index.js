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
import { titleRefinedSlide } from './slides/titleRefined';

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

    {titleRefinedSlide}

    {craTemplateSlide}

    {optionalChainingSlide}

    {typescriptSection}
  </Deck>
);

render(<Presentation />, document.getElementById('root'));
