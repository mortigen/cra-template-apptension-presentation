import { Appear, CodePane, Heading, Slide, Text } from 'spectacle';
import React from 'react';

export const reduxTools = [
  (
    <Slide>
      <Heading>Redux Toolkit</Heading>
      <Heading style={{ textDecoration: 'line-through' }}>redux-sauce</Heading>

      <CodePane>
        {`const createAction = actionCreator('LOCALES');

export const setLanguage = createAction('SET_LANGUAGE');`}
      </CodePane>

      <Appear elementNum={0}>
        <Text>Usage</Text>
        <CodePane>
          {`dispatch(setLanguage('pl'));
          
setLanguage.toString() === 'LOCALES/SET_LANGUAGE';

//in sagas
takeLatest(setLanguage, handleSetLanguage)]
          `}
        </CodePane>
      </Appear>
    </Slide>
  ),
  (
    <Slide>
      <Heading>Redux Toolkit + Immer</Heading>

      <Text>Redux toolkit uses Immer internally for reducers</Text>
      <CodePane>
        {`import { createReducer } from 'redux-toolkit';

export const reducer = createReducer(INITIAL_STATE, HANDLERS);`}
      </CodePane>

      <Appear elementNum={0}>
        <Text>And using like regular reducer - all magic happens underneath</Text>
        <CodePane>
          {`const handleSetLanguage = (state, { payload }>) => {
  state.language = payload;
};`}
        </CodePane>
      </Appear>
    </Slide>
  ),
];
