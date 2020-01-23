import React from "react";
import { render } from 'react-dom';
import { Deck } from "spectacle";

import createTheme from "spectacle/lib/themes/default";

import { titleSlide } from "./slides/title";
import { craTemplateSlide } from "./slides/craTemplate";
import { optionalChainingSlide } from "./slides/optionalChaining";
import { typescriptSection } from "./slides/typescript";
import { links } from "./slides/links";
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
    primary: "#88B7B5",
    secondary: "#2F4858",
    tertiary: "#3B5249",
    quaternary: "#BEC5AD"
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
