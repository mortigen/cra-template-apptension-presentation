import React from 'react';
import { Slide, Heading, CodePane, Appear, Text } from 'spectacle';

export const partials = (
  <Slide>
    <Heading>Partials</Heading>

    <CodePane>
      {`type Example = {
  a: string;
  b: number;
}`}
    </CodePane>

    <Appear elementNum={0}>
      <Text>Transformed with Partial</Text>
      <CodePane>
        {`type PartialExample = Partial<Example>;

// equals

type PartialExample = {
  a?: string;
  b?: number;
}`}
      </CodePane>
    </Appear>
  </Slide>
);
