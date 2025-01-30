export const CounterModel = {
  state: {
    count: 0,
    autoIncrement: false,
    intervalId: null,
  },

  increment() {
    if (this.state.count < 98) {
      this.state.count++;
    }
  },

  decrement() {
    if (this.state.count > 0) {
      this.state.count--;
    }
  },

  reset() {
    this.state.count = 0;
    clearInterval(this.state.intervalId);
    this.state.autoIncrement = false;
    this.state.intervalId = null;
  },

  toggleAutoIncrement(updateView) {
    if (!this.state.autoIncrement) {
      this.state.autoIncrement = true;
      this.state.intervalId = setInterval(() => {
        if (this.state.count < 98) {
          this.increment();
          updateView();
        }
      }, 1100);
    } else {
      this.state.autoIncrement = false;
      clearInterval(this.state.intervalId);
      this.state.intervalId = null;
    }
    updateView();
  },
};
