# Enabling HTML5 routing

- Inject the locationProvider
-  $locationProvider.html5Mode(true);

- rewrite the url in IIS or express.js

-  Define the base url also.

	 <base href="/"/>

- Here what the logic they used if you load any url that redirect to index.html then based on Angular router functionalities worked.



#QUIZ

1.How would you refresh a view without refreshing the entire app ?

**$route.reload()**

2.How do you enable HTML5 routing ?

**$locationProvider.html5Mode(true)**

3.Does HTML5 routing does require any server-side configuration ?

Yes