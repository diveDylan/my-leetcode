/**
 * initialize your data structure here.
 */
var MinStack = function() {
  this.min = null
  this.stack = []
};

/** 
* @param {number} x
* @return {void}
*/
MinStack.prototype.push = function(x) {
  this.min = (this.min === null || x <= this.min) ? x : this.min
  console.log('min', this.min, x)
  this.stack.push(x)
};

/**
* @return {void}
*/
MinStack.prototype.pop = function() {
  const x = this.stack.pop()
  
  if (this.min === null || x <= this.min) {
      this.min = Math.min.apply(null, this.stack)
  }
};

/**
* @return {number}
*/
MinStack.prototype.top = function() {
  return this.stack[this.stack.length - 1]
};

/**
* @return {number}
*/
MinStack.prototype.getMin = function() {
  return this.min
};

/**
* Your MinStack object will be instantiated and called as such:
* var obj = new MinStack()
* obj.push(x)
* obj.pop()
* var param_3 = obj.top()
* var param_4 = obj.getMin()
*/