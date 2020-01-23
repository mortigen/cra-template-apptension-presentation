import { Appear, CodePane, Heading, Slide, Text } from "spectacle";
import React from "react";
import { immer } from "./immer";

export const reduxTools = [
  <Slide>
    <Heading>Redux Toolkit</Heading>
    <Heading style={{ textDecoration: "line-through" }}>redux-sauce</Heading>

    <CodePane
      lang={"javascript"}
      source={`const createAction = actionCreator('LOCALES');

export const setLanguage = createAction('SET_LANGUAGE');`}
    />

    <Appear>
      <div>
        <Text>Usage</Text>

        <CodePane
          lang={"javascript"}
          source={`dispatch(setLanguage('pl'));
          
setLanguage.toString() === 'LOCALES/SET_LANGUAGE';
      
//in sagas
takeLatest(setLanguage, handleSetLanguage)]
                `}
        />
      </div>
    </Appear>
  </Slide>,
  ...immer,
  <Slide>
    <Heading>Redux Toolkit + Immer</Heading>

    <Text>Redux toolkit uses Immer internally for reducers</Text>
    <CodePane
      lang={"javascript"}
      source={`import { createReducer } from 'redux-toolkit';

export const reducer = createReducer(INITIAL_STATE, HANDLERS);`}
    />

    <Appear>
      <div>
        <Text>
          And using like regular reducer - all magic happens underneath
        </Text>

        <CodePane
          lang={"javascript"}
          source={`const handleSetLanguage = (state, { payload }>) => {
  state.language = payload;
};`}
        />
      </div>
    </Appear>
  </Slide>
];
