import React from "react";
import { Slide, Heading, CodePane, Appear, Text } from "spectacle";

export const enums = [
  <Slide>
    <Heading>Enums</Heading>

    <CodePane
      lang={"javascript"}
      source={`export const BUTTON_TYPE_PRIMARY = 'primary';
export const BUTTON_TYPE_SECONDARY = 'secondary';

export const BUTTON_TYPES = [BUTTON_TYPE_PRIMARY, BUTTON_TYPE_SECONDARY];
`}
    />

    <Appear>
      <div>
        <Text>Becomes this:</Text>
        <CodePane
          lang={"javascript"}
          source={`export enum ButtonType {
  PRIMARY,
  SECONDARY,
}
`}
        />
      </div>
    </Appear>
  </Slide>,
  <Slide>
    <Heading>Enums</Heading>

    <Text>By default</Text>
    <CodePane
      lang={"javascript"}
      source={`export enum ButtonType {
  PRIMARY = 0,
  SECONDARY = 1,
}
`}
    />

    <Appear>
      <div>
        <Text>Custom values</Text>
        <CodePane
          lang={"javascript"}
          source={`enum ButtonType {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
}
`}
        />
      </div>
    </Appear>
  </Slide>,
  <Slide>
    <Heading>Enums</Heading>

    <Text>Usage</Text>
    <CodePane
      lang={"javascript"}
      source={`const fn = (v: ButtonType): boolean => true;
fn(ButtonType.PRIMARY);
`}
    />
  </Slide>
];
