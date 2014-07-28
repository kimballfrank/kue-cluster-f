kue-cluster-f
=============

There seems to be an issue with Kue where it processes a job multiple times when configured a certain way. 


## Install
1) install redis / nodejs / npm
2) git clone https://github.com/kimballfrank/kue-cluster-f.git
3) cd kue-cluster-f
4) npm install

## Run
1) redis-server
2) server.js
3) scheduler.js

## About

### server.js
A nodejs cluster with 4 workers. Each worker is Kue wrapped in Express. The app is listening on port 3600

http://127.0.0.1:3600

### scheduler.js
scheduler.js uses Kue JSON api to create a new testJob every 10 seconds, every other job is delayed to test if delayed jobs are contributing to the issue. 

### testJob.js
A barebones job that just logs the job.id and the pid at start and at done. 


## Additional Info

Node Version: v0.10.29
NPM Version: 1.5.0-alpha-3
Redis server v=2.8.13 sha=00000000:0 malloc=libc bits=64 build=96319fcc2102d7fa

Kue Version: 0.8.3

OSX Version: 10.9.4 
2.3Ghz Intel Core i7