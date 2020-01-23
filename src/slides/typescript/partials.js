import React from "react";
import { Slide, Heading, CodePane, Appear, Text } from "spectacle";

export const partials = (
  <Slide>
    <Heading>Partials</Heading>

    <CodePane
      lang={"javascript"}
      source={`type Example = {
  a: string;
  b: number;
}`}
    />

    <Appear>
      <div>
        <Text>Transformed with Partial</Text>
        <CodePane
          lang={"javascript"}
          source={`type PartialExample = Partial<Example>;

// equals

type PartialExample = {
  a?: string;
  b?: number;
}`}
        />
      </div>
    </Appear>
  </Slide>
);
