const Counter = {
  count: parseInt(localStorage.getItem('count')),
  start: function() {
    this.cacheDOM();
    this.bindEvents();
    if (!this.count) {
      this.count = 0;
    }
    this.render();
  },
  cacheDOM: function() {
    this.root = document.querySelector('.counterApp');
    this.buttonIncrement = document.querySelector('.counterIncrementButton');
    this.buttonDecrement = document.querySelector('.counterDecrementButton');
    this.buttonReset = document.querySelector('.counterResetButton');
    this.output = document.querySelector('.counterOutput');
  },
  bindEvents: function() {
    this.buttonIncrement.addEventListener('click', () => {
      this.counterAmount = parseInt(document.getElementById('counterAmount').value);
      this.count = this.count += this.counterAmount;
      localStorage.setItem('count',this.count);
      this.render();
    });
    this.buttonDecrement.addEventListener('click', () => {
      this.counterAmount = parseInt(document.getElementById('counterAmount').value);
      this.count = this.count -= this.counterAmount;
      localStorage.setItem('count',this.count);
      this.render();
    });
    this.buttonReset.addEventListener('click', () => {
      this.count = 0;
      localStorage.setItem('count',this.count);
      this.render();
    });
  },
  render: function() {
    this.output.textContent = this.count;
  }
};
Counter.start();
