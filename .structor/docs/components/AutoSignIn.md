#### Component is designed to be a guard of account sign in process

* Placing this component somewhere on page you wil have the ability to track if user account is signed in.
* Setting property `routeAfterSignInFailed` will provide redirecting to specified route after component is mounted. Redirecting will occurred only if sign in process failed.

**Warning** 
    
> if you set `routeAfterSignInFailed` property you will not be able to open page where this comoponent is placed if you are not signed in.