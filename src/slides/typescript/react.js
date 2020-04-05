import {
  Appear,
  CodePane,
  Heading,
  Image,
  Notes,
  Slide,
  Text
} from "spectacle";
import React from "react";

import hook from "../../images/hook.png";
import styled1 from "../../images/styled_1.png";
import styled2 from "../../images/styled_2.png";
import props1 from "../../images/props1.png";
import props2 from "../../images/props2.png";
import jsx from "../../images/jsx.png";

export const react = [
  <Slide>
    <Heading>Typing React</Heading>
  </Slide>,
  <Slide>
    <Heading>Hooks</Heading>
    <Text>With auto inference</Text>
    <Image src={hook} />

    <Appear>
      <div>
        <Text>With explicit types</Text>
        <CodePane
          lang={"javascript"}
          source={`const data = useMyHook<ReturnedType>();`}
        />
      </div>
    </Appear>
  </Slide>,
  <Slide>
    <Heading>Redux actions</Heading>

    <CodePane
      lang={"javascript"}
      source={`export const setLanguage = createAction<string>('SET_LANGUAGE');

dispatch(localesActions.setLanguage('pl'));
`}
    />
  </Slide>,
  <Slide>
    <Heading>Selectors</Heading>

    <CodePane
      lang={"javascript"}
      source={`export const selectLocalesLanguage = createSelector<GlobalState, LocalesState, string>(
  selectLocalesDomain,
  locales => locales.language
);`}
    />
  </Slide>,
  <Slide>
    <Heading>Reducers</Heading>

    <CodePane
      lang={"javascript"}
      source={`export type LocalesState = {
  language: string;
};

export const INITIAL_STATE: LocalesState = {
  language: null,
};

const handleSetLanguage = (state: LocalesState, { payload }: ReduxAction<string>) => {
  state.language = payload;
};

const HANDLERS = {
  ...actionHandler(localesActions.setLanguage, handleSetLanguage)
};

export const reducer = createReducer(INITIAL_STATE, HANDLERS);`}
    />

    <Notes>
      Everything is typed here, TS guards that: - [thanks to createReducer
      typings] all reducers accept actual LocalesState format in `state`
      variable - [thanks to actionHandler typings] handleSetLanguage accepts
      same payload type as setLangauge action
    </Notes>
  </Slide>,
  <Slide>
    <Heading>Sagas</Heading>

    <Text>
      TS will check if your handlers accepts same payload as is dispatched in
      your action
    </Text>
    <CodePane
      lang={"javascript"}
      source={`...takeLatest(localesActions.setLanguage, fetchUsers);...
       
function* setLanguage({ payload }: ReduxAction<string>) {...
        `}
    />

    <Appear>
      <div>
        <Text>And will fail for:</Text>
        <CodePane
          lang={"javascript"}
          source={`...takeLatest(localesActions.setLanguage, fetchUsers);...
       
function* setLanguage({ payload }: ReduxAction<number>) {...
        `}
        />
      </div>
    </Appear>

    <Notes>TS ensures</Notes>
  </Slide>,
  <Slide>
    <Heading>Global state type</Heading>

    <Text>(Autogenerated by plop)</Text>
    <CodePane
      lang={"javascript"}
      source={`export type GlobalState = {
  locales: LocalesState;
  startup: StartupState;
  users: UsersState;
};`}
    />
  </Slide>,
  <Slide>
    <Heading>StyledComponents & Theme</Heading>

    <Text>Enum constants</Text>
    <CodePane
      lang={"javascript"}
      source={`export enum Color {
  WHITE,
  BLACK,
  BORDER,
  DISABLED,
  PRIMARY,
  SECONDARY,
  ERROR,
}`}
    />
  </Slide>,
  <Slide>
    <Heading>StyledComponents & Theme</Heading>

    <Text>Typed theme</Text>
    <CodePane
      lang={"javascript"}
      source={`export interface DefaultTheme {
    colors?: ThemeMap<Color, string>;
    ...
  }`}
    />

    <Text>Accessible in styled components</Text>

    <Image width={`100%`} src={styled1} />
  </Slide>,

  <Slide>
    <Heading>StyledComponents & Theme</Heading>

    <Text>Styled components also support native props types</Text>

    <Image width={`100%`} src={styled2} />
  </Slide>,
  <Slide>
    <Heading>Props</Heading>

    <Text>No propTypes!</Text>
    <Text>Typescript typings instead</Text>
    <Image width={"100%"} src={props1} />
  </Slide>,
  <Slide>
    <Heading>Props</Heading>
    <Heading fontSize="h2">Using native props</Heading>

    <Image width={"100%"} src={props2} />
  </Slide>,
  <Slide>
    <Heading>Props</Heading>
    <Heading fontSize="h2">Validated inside JSX</Heading>

    <Image width={"100%"} src={jsx} />
  </Slide>
];