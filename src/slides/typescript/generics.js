import React from "react";
import { Slide, Heading, CodePane, Text, Appear, Image } from "spectacle";

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
  </Slide>
];
