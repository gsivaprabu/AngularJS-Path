#Create and using Angular Services

What is Service ?

- The term service is overloaded.
- We Service / WCF Service
- Service is a just worker Object.
- Not necessarily Over-The-Wire
- Services or stateless
- Built-In custom Services in Angularjs

* Services allow you to encapsulate reusable business logic.
 - Reusable
 - SRP (Single Responsibility Principle)
 	- [https://en.wikipedia.org/wiki/SOLID_(object-oriented_design)](https://en.wikipedia.org/wiki/SOLID_(object-oriented_design))
 - Dependency Injection
 - Testable

### QUIZ

1. In Angular, the term "Service" refers to an over-the-network service like a restful web service.

False, Because ANgular service is not over the network, it is local client Object

2. Why do we need services ?

Reusable, SRP, Testability (Due to DI)

3.  How is an Angular Service different than any other Service ?

It is registered with Angular so that Angular can inject it.