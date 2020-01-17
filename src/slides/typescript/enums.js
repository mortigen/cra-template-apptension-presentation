import React from 'react';
import { Slide, Heading, CodePane, Appear, Text } from 'spectacle';

export const enums = [
  (
    <Slide>
      <Heading>Enums</Heading>

      <CodePane>
        {`export const BUTTON_TYPE_PRIMARY = 'primary';
export const BUTTON_TYPE_SECONDARY = 'secondary';

export const BUTTON_TYPES = [BUTTON_TYPE_PRIMARY, BUTTON_TYPE_SECONDARY];
`}
      </CodePane>

      <Appear elementNum={0}>
        <Text>Becomes this:</Text>
        <CodePane>
          {`export enum ButtonType {
  PRIMARY,
  SECONDARY,
}
`}
        </CodePane>
      </Appear>
    </Slide>
  ),
  (
    <Slide>
      <Heading>Enums</Heading>

      <Text>By default</Text>
      <CodePane>
        {`export enum ButtonType {
  PRIMARY = 0,
  SECONDARY = 1,
}
`}
      </CodePane>

      <Appear elementNum={0}>
        <Text>Custom values</Text>
        <CodePane>
          {`enum ButtonType {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
}
`}
        </CodePane>
      </Appear>
    </Slide>
  ),
  (
    (
      <Slide>
        <Heading>Enums</Heading>

        <Text>Usage</Text>
        <CodePane>
          {`const fn = (v: ButtonType): boolean => true;
fn(ButtonType.PRIMARY);
`}
        </CodePane>
      </Slide>
    )
  )
];
