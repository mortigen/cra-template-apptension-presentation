import React from "react";
import { Slide, Heading, Text, Quote, Notes } from "spectacle";

export const craTemplateSlide = (
  <Slide>
    <Heading>CRA 3.3</Heading>
    <Text>New way to create app</Text>
    <Quote>npx create-react-app [app-name] --template apptension</Quote>
    <Notes>
      <ol>
        <li>easier to remember</li>
        <li>we can't add custom scripts</li>
        <li>we can't change webpack config, babel, etc.</li>
      </ol>
    </Notes>
  </Slide>
);
