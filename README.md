kue-cluster-f
=============

There seems to be an issue with Kue where it processes a job multiple times when configured a certain way. 

## server.js
A nodejs cluster with 4 workers. Each worker is Kue wrapped in Express. The app is listening on port 3600

http://127.0.0.1:3600

## scheduler.js
schedule.js uses Kue JSON api to create a new testJob every 20 seconds.

## testJob.js
A barebones job that just logs the job.id and the pid as well as start and done. 


## Additional Info

Node Version: v0.10.29
NPM Version: 1.5.0-alpha-3
Redis server v=2.8.13 sha=00000000:0 malloc=libc bits=64 build=96319fcc2102d7fa

OSX Version 10.9.4 
2.3Ghz Intel Core i7