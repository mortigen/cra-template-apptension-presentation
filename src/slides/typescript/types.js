import React from 'react';
import { Slide, Heading, Text, CodePane, Appear, Image, FlexBox } from 'spectacle';

import typeVsInterface from '../../images/typescript-type-vs-interface.jpg';

export const types = [
  (
    <Slide>
      <Heading>Types & interfaces</Heading>
      <Heading fontSize="h2">Basics</Heading>

      <CodePane autoFillHeight>
        {`const a: string = 'example string';
const b: number = 123;
const c: string[] = ['one', 'two'];
const d: [string, number] = ['one', 2];

const e: object = { a: 1 };

let f: any = 'asd';
f = 123;
f = {foo: 'bar'};

const g: void = null;
`}
      </CodePane>
    </Slide>
  ),
  (
    <Slide>
      <Heading>Types & interfaces</Heading>
      <Heading fontSize="h2">Function types</Heading>

      <CodePane autoFillHeight>
        {`const doNothing = (): void => {
  console.log("I don't return anything");
};

const doSomething = (val: number): number => val + 1;
`}
      </CodePane>
    </Slide>
  ),
  (
    <Slide>
      <Heading>Types & interfaces</Heading>
      <Heading fontSize="h2">Type assertions</Heading>

      <CodePane autoFillHeight>
        {`let someValue: any = "this is a string";

let strLength: number = (someValue as string).length;`}
      </CodePane>
    </Slide>
  ),
  (
    <Slide>
      <Heading>Types & interfaces</Heading>
      <Heading fontSize="h2">Interfaces</Heading>

      <CodePane autoFillHeight>
        {`interface Person {
  name: string;
  age: number;
  occupation?: string;
}

const me: Person = {
  name: 'Me',
  age: 30,
  occupation: 'Programmer'
};

const you: Person = {
  name: 'You',
  age: 28
};`}
      </CodePane>
    </Slide>
  ),
  (
    <Slide>
      <Heading>Types & interfaces</Heading>
      <Heading fontSize="h2">Interfaces</Heading>

      <CodePane autoFillHeight>
        {`interface Programmer extends Person {
  experience: number;
}

const him: Programmer = {
  age: 30,
  experience: 8,
  name: "This guy"
};`}
      </CodePane>
    </Slide>
  ),
  (
    <Slide>
      <Heading>Types & interfaces</Heading>
      <Heading fontSize="h2">Types</Heading>

      <CodePane autoFillHeight>
        {`type Person = {
  name: string;
  age: number;
  occupation?: string;
}
`}
      </CodePane>

      <Appear elementNum={0}>
        <Text>But also</Text>
        <CodePane autoFillHeight>
          {`type Alias1 = string | number;

type Alias2 = 'key1' | 'key2';

type Alias3 = Person & { 'experience': number };`}
        </CodePane>
      </Appear>
    </Slide>
  ),
  (
    <Slide>
      <Heading>Types & interfaces</Heading>
      <Heading fontSize="h2">Aliases & unions</Heading>

      <CodePane autoFillHeight>
        {`type Name = string;
type NameResolver = () => Name;
type NameOrResolver = Name | NameResolver;
function getName(n: NameOrResolver): Name {
    if (typeof n === "string") {
        return n;
    }
    else {
        return n();
    }
}`}
      </CodePane>
    </Slide>
  ),
  (
    <Slide>
      <Heading>Types & interfaces</Heading>
      <Heading fontSize="h2">Comparison</Heading>

      <FlexBox>
        <Image src={typeVsInterface} height={450} />
      </FlexBox>
    </Slide>
  )
];
