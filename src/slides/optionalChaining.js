import React from "react";
import { Slide, Heading, Text, CodePane } from "spectacle";

const optionalChainingExample = `const street = user?.address?.street`;

const oldWayExample = `const street = user && user.address && user.address.street

// OR

const street = R.path(['address', 'street'], user)`;

export const optionalChainingSlide = (
  <Slide>
    <Heading>Optional chaining and Nullish Coalescing Operators</Heading>

    <Text>Optional chaining:</Text>
    <CodePane>{optionalChainingExample}</CodePane>
    <Text>Old way:</Text>
    <CodePane>{oldWayExample}</CodePane>
  </Slide>
);
