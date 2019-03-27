var eventList = {}
var eventCenter = {
  on: function(event, callback){
    if(!eventList[event]) eventList[event] = []
    eventList[event].push(callback)
  },
  fire: function(type) {
    eventList[type].forEach(function(callback){
      callback()
    })
  }
}

eventCenter.on('hi', function(){
  console.log('hi')
})

eventCenter.on('hello', function(){
  console.log('hello')
})



eventCenter.fire('hi')