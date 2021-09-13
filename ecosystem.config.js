module.exports = {
  apps: [
    {
      name: 'react-vite-h5',
      script: 'react-vite-h5-server.js'
    },
  ],
  deploy: {
    production: {
      user: 'root',
      host: '106.75.87.103',
      ref: 'origin/master',
      repo: 'https://github.com/yj666/react-vite-h5.git',
      path: '/home/react-vite-h5',
      'post-deploy': 'git reset --hard && git checkout master && git pull && npm i --production=false && npm run build && pm2 startOrReload ecosystem.config.js', // -production=false 下载全量包
      env: {
        NODE_ENV: 'production' 
      }
    }
  }
}