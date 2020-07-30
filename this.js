var inner = 'window'
function say() {
    console.log(inner)
    console.log(this.inner)
}
var obj1 = (function() {
    var inner = '1-1'
    return {
        inner: '1-2',
        say: function() {
            console.log(inner)
            console.log(this.inner)
        }
    }
})()
var obj2 = (function() {
    var inner = '2-1'
    return {
        inner: '2-2',
        say: function() {
            console.log(inner)
            console.log(this.inner)
        }
    }
})()

say() // 'window', 'window'(this 指向 window window.inner)
obj1.say() // '1-1' '1-2'(this 指向obj1)
obj1.say = say 
obj1.say() // 'window' '1-2'(this 指向obj1)
obj1.say = obj2.say
obj1.say() // '2-1'    '1-2'