import { Store, createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { logger } from "./logger";
import { combineReducers } from "redux";
import { RootState } from "./state";
import { fretboardReducer, FretboardDispatchParam } from "../store/fretboard";
import { useDispatch } from "react-redux";
import { MetronomeDispatchParam, metronomeReducer } from "./metronome";

type DispatchParams = FretboardDispatchParam | MetronomeDispatchParam;
type Dispatch = <TReturnType>(action: DispatchParams) => TReturnType;
export const useTypedDispatch = () => useDispatch<Dispatch>();

export const rootReducer = combineReducers<RootState>({
  fretboard: fretboardReducer,
  metronome: metronomeReducer,
});
export function configureStore(initialState?: RootState): Store<RootState> {
  let middleware = applyMiddleware(logger);

  if (process.env.NODE_ENV !== "production") {
    middleware = composeWithDevTools(middleware);
  }

  const store = createStore(
    rootReducer as any,
    initialState as any,
    middleware
  ) as Store<RootState>;

  // if (module.hot) {
  //   module.hot.accept('app/reducers', () => {
  //     const nextReducer = require('app/reducers');
  //     store.replaceReducer(nextReducer);
  //   });
  // }

  return store;
}
