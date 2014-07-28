var cluser = require('cluster')
, kue = require('kue')
, jobs = kue.createQueue();

exports = module.exports = (function(job, done){
  function logMe(msg){
    job.log(msg);
    console.log(msg);  
  }

  var jobKey = "job_" + job.id;
  logMe('');
  logMe('start ' + jobKey + ' pid ' + process.pid);

  setTimeout(function(){
    var log = 'done ' + jobKey + ' pid ' + process.pid;
    console.log(log)
    job.log(log);
    done()
  }, 5000);

});
