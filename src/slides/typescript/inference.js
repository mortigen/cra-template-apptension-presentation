import React from 'react';
import { CodePane, Heading, Slide, Text } from 'spectacle';

export const inference = (
  <Slide>
    <Heading>Type Inference</Heading>

    <Text>TS can do pretty good even without explicit types and infer the type based on the context.</Text>

    <CodePane>
      {`const x = 1;  // const x: number = 1;
const s: string = x;  // fails with "type number is not assignable to variable type string"

const increase = (x: number) => x + 1;  // const increase = (x: number) => number;

const y = increase(10); // const y: number = increase(10);`}
    </CodePane>
  </Slide>
);
