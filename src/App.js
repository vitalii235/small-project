import React from 'react';
import ContextWrapper from './Context';
import {MainRouter} from "./routes/Router";
import { ThemeProvider } from '@material-ui/core/styles';
import {Provider} from "react-redux";
import {store, persistor} from "./rdx/store";
import { PersistGate } from 'redux-persist/integration/react'
import theme from "./styles";

const App = () => {
  return (
      <Provider store={store}>
          <PersistGate persistor={persistor}>
              <ContextWrapper>
                  <ThemeProvider theme={theme}>
                      <MainRouter/>
                  </ThemeProvider>
              </ContextWrapper>
          </PersistGate>
      </Provider>
  )
}
export default App;
