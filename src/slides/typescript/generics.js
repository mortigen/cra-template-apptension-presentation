import React from "react";
import {
  Slide,
  Heading,
  CodePane,
  Text,
  Appear,
  Image,
  Notes
} from "spectacle";

import genericsFail from "../../images/generics_fail.png";
import genericsFail2 from "../../images/generics_fail_2.png";

export const generics = [
  <Slide>
    <Heading>Generic types</Heading>

    <CodePane
      lang={"javascript"}
      source={`const duplicate = <T>(v: T): T[] => [v, v];`}
    />

    <Appear order={0}>
      <div>
        <Text>This will work:</Text>

        <CodePane
          lang={"javascript"}
          source={`const a: string[] = duplicate('test');`}
        />
      </div>
    </Appear>

    <Appear order={1}>
      <div>
        <Text>This won't work:</Text>

        <Image src={genericsFail} />
      </div>
    </Appear>

    <Notes>
      - we dont know exactly what type of input we get - but we know what output
      we get as soon as we know the input type - TS knows the result type as
      soon as we use pass parameter to the function
    </Notes>
  </Slide>,
  <Slide>
    <Heading>Generic types</Heading>

    <CodePane
      lang={"javascript"}
      source={`const createIdentityFn = <T>() => (param: T) => param;`}
    />

    <Appear order={0}>
      <div>
        <Text>This will work:</Text>

        <CodePane
          lang={"javascript"}
          source={`const fn1: (param: string) => string = createIdentityFn<string>();`}
        />
      </div>
    </Appear>

    <Appear order={1}>
      <div>
        <Text>This won't work:</Text>

        <CodePane
          lang={"javascript"}
          source={`const fn2: (param: number) => number = createIdentityFn<string>();`}
        />
        <Image src={genericsFail2} />
      </div>
    </Appear>

    <Notes>We can also explicitly pass the generic type</Notes>
  </Slide>
];
