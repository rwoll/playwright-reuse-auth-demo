# playwright-reuse-auth-demo

Demo code for https://github.com/microsoft/playwright/issues/14312.

https://rwoll.github.io/playwright-reuse-auth-demo/index.html is a fake "authenticated" app page.

Until you've "authenticated" on https://rwoll.github.io/playwright-reuse-auth-demo/login.html,
https://rwoll.github.io/playwright-reuse-auth-demo/index.html will always bounce you back to the login page.
When you do "login", it will set a Local Storage item and the app will consider you "authenticated".

The Playwright code here applies to scenerios where you must perform your first login manually (e.g. for MFA), but subsequent runs do not require the manual login step.

If you're using Playwright Test, see the README.md in the playwright-test folder.

If you're using Playwright as a Library, see the README.md in the playwright-library folder.

Both the above strategies rely on saving authentication state from a manual run to disk, so subsequent automated runs can pick up and use it.
Be sure to .gitignore your auth state!

> **Warning**
> Don't look at the implemenation in /docs; it's not relevant nor secure!
