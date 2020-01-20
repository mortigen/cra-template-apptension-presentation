import React from "react";
import { Slide, Heading, Text, CodePane, UnorderedList, ListItem } from "spectacle";

export const fixedBugs = (
  <Slide>
    <Heading>Fixed bugs</Heading>

    <Text>There has been some bug fixes and other improvements</Text>

    <UnorderedList>
        <ListItem>Unsupported browser in google search</ListItem>
        <ListItem>nock memory leak problem</ListItem>
    </UnorderedList>

  </Slide>
);
