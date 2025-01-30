import { CounterModel } from "../model/model";

export const counterIntent = (updateview) => ({
  onIncrement: () => {
    CounterModel.increment();
    updateview();
  },
  onDecrement: () => {
    CounterModel.decrement();
    updateview();
  },
  onReset: () => {
    CounterModel.reset();
    updateview();
  },
  onToggleAutoIncrement: () => {
    CounterModel.toggleAutoIncrement(updateview);
  },
});
