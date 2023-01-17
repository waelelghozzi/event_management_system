
process.on('exit',function(){
  //this is a callback function that get executed whenever we exit our app
})

module.exports.logInApp=log;
function log(mess){
    console.log(mess)
}
