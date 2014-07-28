var cluster = require('cluster')

//--------------------------------------------------------------------------------------------
// cluster
//--------------------------------------------------------------------------------------------

if (cluster.isMaster) {
  var clusterWorkerSize = 4;
  console.log("master pid %s", process.pid);
  for (var i = 0; i < clusterWorkerSize; i++) {
    cluster.fork();
  }
} 
else {


  console.log("worker pid %s", process.pid);
  //--------------------------------------------------------------------------------------------
  // Express
  //--------------------------------------------------------------------------------------------
  var express = require('express');
  var app = express();

  app.set('port', 3600);

  //--------------------------------------------------------------------------------------------
  // Kue
  //--------------------------------------------------------------------------------------------
  var kue = require('kue');
  var jobs = kue.createQueue();

  var promote_interval = 100;
  jobs.promote(promote_interval);

  jobs.process('testJob', 1, require('./jobs/testJob'));

  app.use(kue.app);

  app.listen(app.get('port'));


  // if(cluster.worker.id === 4) {
  //   var testJob = jobs.create('testJob', {
  //     title: 'TEST JOB',
  //   }).save();
  // }
  
}