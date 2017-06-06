const Counter = {
  //rootElement: '.counterApp',
  //count: 0,
  count: parseInt(localStorage.getItem('count')),
  start: function() {
    //alert(this.count);
    this.cacheDOM();
    this.bindEvents();
    if (!this.count) {
      this.count = 1;
    }
    this.render();
  },
  cacheDOM: function() {
    this.root = document.querySelector('.counterApp');
    this.buttonIncrement= document.querySelector('.counterIncrementButton');
    this.buttonDecrement= document.querySelector('.counterDecrementButton');
    this.output = document.querySelector('.counterOutput');
  },
  bindEvents: function() {
    console.log(this.count);
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
  },
  render: function() {
    this.output.textContent = this.count;
  }
};
Counter.start();
