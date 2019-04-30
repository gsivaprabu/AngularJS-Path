# Location Service

- Instead of using <a>[anchor] tag we use location.
- Using location we got below details

	console.log('absUrl   : ', $location.absUrl());
	console.log('protocol : ', $location.protocol());
	console.log('port     : ', $location.port());
	console.log('host     : ', $location.host());
	console.log('path     : ', $location.path());
	console.log('search   : ', $location.search());
	console.log('hash     : ', $location.hash());
	console.log('url      : ', $location.url());

- Using  $location.replace(); clear the history.

#QUIZ

1. What route property allows you to delay loading a view until you have finished a task such as loading data ?

**resolve** which expects you to return a promise indicating when it can proceed with loading the view.

2. How do you navigate to a new  view from code ?

***$location.url('newURL')***

3.How would you get access to the query string parameters on the URL ?

***$location.search()***