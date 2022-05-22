## Demo how to store authentication-data and use it for authentication 

This demo shows how to login manually into an application, save the authentication-data into a file and later use this file to login into the demo application using the stored authentication state. 
Do these steps
 
  1. Create a directory `demo-auth` 
  2. Download index.js, package.json and package-lock.json into `demo-auth`
  3. From inside `demo-auth` run `npm i`  
  4. Enter `$ npm run login` - this opens the demo-application in a browser 
  5. To authenticate manually enter any unsername in the demo-application and hit the `ENTER`-key. Close the browser. This will save `auth.json` for the next step to use.
  6.  Run `$ npm start`. Observe that you are already authenticated! You can run this repeatedly without logging in again!
 

The important bit is:

```js
  const context = await browser.newContext({
    storageState: './auth.json'
  });
```

in `index.js`.
