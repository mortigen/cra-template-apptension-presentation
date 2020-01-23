import {
  Appear,
  CodePane,
  Heading,
  Image,
  Slide,
  Text,
  Notes
} from "spectacle";
import React from "react";

import immer1 from "../images/immer1.png";
import immer2 from "../images/immer2.png";

export const immer = [
  <Slide>
    <Heading>Immer</Heading>

    <Text>Produces new object based on old one</Text>

    <CodePane
      lang={"javascript"}
      source={`const state = { foo: {a: 1}, bar: {b: 2} };

const newState = produce(state, draft => {
  draft.foo.a++;
});`}
    />

    <Appear order={0}>
      <div>
        <Text>Doesn't modify the old object</Text>
        <Image src={immer1} />
      </div>
    </Appear>

    <Appear order={1}>
      <div>
        <Text>
          Produces new instances of changed objects but keeps references for
          untouched values
        </Text>
        <Image src={immer2} />
      </div>
    </Appear>

    <Notes>
      <ol>
        <li>
          modify state object properties or return new state - don't do both
        </li>
      </ol>
    </Notes>
  </Slide>
];
