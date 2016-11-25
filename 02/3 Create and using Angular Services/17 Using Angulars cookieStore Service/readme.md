# Using Angulars cookieStore Service

- Cookie store is the different Angular Module
- Add Angular cookies module
- Add to app.js folder as **bgCookies**

- In Template add the the buttons for

	- saveEventToCookie(event)
	- getEventFromCookie()
	- removeEventCookie()

- Then create a controller

- Three methods in Angular
		* $cookieStore.put
		* $cookieStore.get
		* $cookieStore.remove

## Like **(Key,Value)** pair

- $cookieStore.put('event', event);
- console.log($cookieStore.get('event'));
- $cookieStore.remove('event');


## Cookie Expiry Date

- You set the expiry date means use third party library or write your own.