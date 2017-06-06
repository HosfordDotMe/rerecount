const Counter = {
  //rootElement: '.counterApp',
  count: 0,
  start: function() {
    this.cacheDOM();
    this.bindEvents();
    this.render();
  },
  cacheDOM: function() {
    this.root = document.querySelector('.counterApp');
    this.buttonIncrement= document.querySelector('.counterButton');
    this.output = document.querySelector('.counterOutput');
  },
  bindEvents: function() {
    console.log('click');
    this.buttonIncrement.addEventListener('click', () => {
      this.count = this.count += 1;
      this.render();
    });
  },
  render: function() {
    this.output.textContent = this.count;
  }
};
Counter.start();
