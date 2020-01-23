// import React from 'react';
// import { render } from 'react-dom';

// import {
//   Deck,
//   FlexBox,
//   Box,
//   FullScreen,
//   Progress,
// } from 'spectacle';

// const theme = {};

// // const template = () => (
// //   <FlexBox
// //     justifyContent="space-between"
// //     position="absolute"
// //     bottom={0}
// //     width={1}
// //   >
// //     <Box padding="0 1em">
// //       <FullScreen />
// //     </Box>
// //     <Box padding="1em">
// //       <Progress />
// //     </Box>
// //   </FlexBox>
// // );

// // eslint-disable-next-line react/no-multi-comp
// const Presentation = () => (
//   <Deck autoLayout={false} loop theme={theme} template={template}>
//     {titleSlide}

//     {craTemplateSlide}

//     {optionalChainingSlide}

//     {immer}

//     {reduxTools}

//     {responsiveTheme}

//     {reactTestingLibrary}

//     {hooks}

//     {providerTesting}

//     {lazyLoading}

//     {fixtures}

//     {jsonServer}

//     {fixedBugs}

//     {typescriptSection}

//     {links}
//   </Deck>
// );

// render(<Presentation />, document.getElementById('root'));

import React from "react";
import { render } from 'react-dom';
import { Deck, Slide, Heading } from "spectacle";

import createTheme from "spectacle/lib/themes/default";

import { titleSlide } from "./slides/title";
import { craTemplateSlide } from "./slides/craTemplate";
import { optionalChainingSlide } from "./slides/optionalChaining";
import { typescriptSection } from "./slides/typescript";
import { links } from "./slides/links";
import { immer } from "./slides/immer";
import { reduxTools } from "./slides/reduxTools";
import { responsiveTheme } from "./slides/responsiveTheme";
import { reactTestingLibrary } from "./slides/reactTestingLibrary";
import { lazyLoading } from "./slides/lazyLoading";
import { fixtures } from "./slides/fixtures";
import { jsonServer } from "./slides/jsonServer";
import { hooks } from "./slides/hooks";
import { fixedBugs } from "./slides/fixedBugs";
import { providerTesting } from "./slides/providerTesting";

const theme = createTheme(
  {
    primary: "#686868",
    secondary: "#eeeeee",
    tertiary: "#03A9FC",
    quaternary: "#CECECE"
  },
  {
    primary: "Montserrat",
    secondary: "Helvetica"
  }
);

const Presentation = () => (
  <Deck transition={["slide"]} transitionDuration={500} theme={theme}>
    {titleSlide}

    {craTemplateSlide}

    {optionalChainingSlide}

    {immer}

    {reduxTools}

    {responsiveTheme}

    {reactTestingLibrary}

    {hooks}

    {providerTesting}

    {lazyLoading}

    {fixtures}

    {jsonServer}

    {fixedBugs}

    {typescriptSection}

    {links}
  </Deck>
);

render(<Presentation />, document.getElementById('root'));