module.exports = {
  apps: [
    {
      name: 'Azure.Wms.Api',
      script: 'yarn',
      args: 'start',
      interpreter: '/bin/bash',
      instances: 'max',
      exec_mode: 'cluster',
      autorestart: true,
    },
  ],
};
