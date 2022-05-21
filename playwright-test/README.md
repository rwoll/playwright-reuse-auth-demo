## Install Deps

```
$ npm i
```

## Manually Perform Login/MFA

Log in to your site and complete the MFA flow:

```
$ npm run login
```

Once you're authenticated, close the browser. This will save `auth.json` for the next step to use.

## Run Your Tests

Your tests will run in a browser that is pre-authenticated! You can run this repeatedly without logging in again!

```
$ npm test
```


The important bit is:

```ts
  use: {
    storageState: './auth.json'
  },
```

in `playwright.config.ts`
