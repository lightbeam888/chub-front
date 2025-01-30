module.exports = {
  apps: [
    {
      name: 'a3-trending-scrapper-new-front',
      script: 'npm',
      args: 'run start',
      interpreter: '/root/.nvm/versions/node/v20.16.0/bin/node', // Explicit Node.js version
      cwd: '/root/trending-scrapper/chub-front', // Set the correct working directory
      env: {
        NODE_ENV: 'production',
        PATH: '/root/.nvm/versions/node/v20.16.0/bin:$PATH', // Ensure npm works with the correct Node.js
      },
      env_development: {
        NODE_ENV: 'development',
        PATH: '/root/.nvm/versions/node/v20.16.0/bin:$PATH',
      },
    }
  ],
};