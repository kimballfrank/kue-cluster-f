// --------------------------------------------------------------------------------------------
// Job Schedule (uses node-cron)
// --------------------------------------------------------------------------------------------

// '* * * * * *' - runs every second
// '*/5 * * * * *' - runs every 5 seconds
// '10,20,30 * * * * *' - run at 10th, 20th and 30th second of every minute
// '0 * * * * *' - runs every minute
// '0 0 * * * *' - runs every hour (at 0 minutes and 0 seconds)
// But also more complex schedules e.g.

// '00 30 11 * * 1-5' - Runs every weekday (Monday through Friday) at 11:30:00 AM. It does not run on Saturday or Sunday.
// Sample code: running job every 10 minutes:

// var cron = require('cron');
// var cronJob = cron.job("0 */10 * * * *", function(){
//     // perform operation e.g. GET request http.get() etc.
//     console.info('cron job completed');
// });
// cronJob.start();

var request = require('request')
  , _ = require('lodash')
  , moment = require('moment')
  , time = require('time')
  , cronJob = require('cron').CronJob



function sendTestJob(){
  console.log('sendTestJob....');
  var testJob = {
      method: 'POST'
    , url: 'http://127.0.0.1:3600/job'
    , json: {
      "type": "testJob",
      "data": { title: "send test job from scheduler" },
      "options" : {
        "attempts": 1
        // , "delay": 10000
      }
    }
  };

  request(testJob, function(error, response, body) {
    if (error) {
        console.log(error);
    }
    else {
      console.log(body);
    }
  });
};



var heartbeat = new cronJob({
  cronTime: '*/20 * * * * *', // send testjob every thirty seconds
  onTick: function() {
    console.log('');
    console.log('****************************************');
    console.log('heartbeat');
    console.log(moment().format('MMMM Do YYYY, h:mm:ss a'));
    console.log('****************************************');

    sendTestJob(); 

  },
  start: true

});


console.log('');
console.log('****************************************');
console.log('scheduler2.js started');
console.log(moment().format('MMMM Do YYYY, h:mm:ss a'));
console.log('****************************************');

