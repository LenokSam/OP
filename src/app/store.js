import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import { calculateReducer } from '../redux/calculatedValues/calculateValuesReducer';
import { initialReducer} from '../redux/initial/reducer';

export const store = configureStore({
  reducer: {
    initialParametrs: initialReducer,
    calculatedValues: calculateReducer
  },
});
