import React from "react";
import { Slide, Heading, Text, CodePane, UnorderedList, ListItem } from "spectacle";

export const fixedBugs = (
  <Slide>
    <Heading>Fixed bugs and other improvements</Heading>

    <UnorderedList>
        <ListItem>Unsupported browser in google search fixed</ListItem>
        <ListItem>nock memory leak problem</ListItem>
        <ListItem>react-helmet-async instead react-helmet (because of react warnings)</ListItem>
        <ListItem>jest-styled-components</ListItem>
        <ListItem>react-router 5 (hooks!)</ListItem>
        <ListItem>styled-components 5</ListItem>
        <ListItem>storybook knobs</ListItem>
        <ListItem>hot reload supporting hooks</ListItem>
        <ListItem>Fixed deprecated babel polyfill</ListItem>
    </UnorderedList>

  </Slide>
);
