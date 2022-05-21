import fs from 'fs';

const globalSetup = async () => {
  if (fs.existsSync('auth.json')) {
    if (!fs.existsSync('./auth.json')) {
      console.error([
        "Please run:",
        "",
        "   $ npm run login",
        "",
        "so you are already authenticated before this script runs!",
      ].join('\n'));
      throw new Error('not yet logged in');
    }
  }
};
export default globalSetup;
