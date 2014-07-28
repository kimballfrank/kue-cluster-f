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
  logMe('***************************************************');
  logMe('start ' + jobKey + ' pid ' + process.pid);
  logMe(job.data.title);


  setTimeout(function(){
    var log = 'finish ' + jobKey + ' pid ' + process.pid;
    console.log(log)
    job.log(log);
    done()
  }, 5000);

});
