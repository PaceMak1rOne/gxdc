const CracoLessPlugin = require('craco-less');
// 修改主题色
module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: { '@primary-color': '#dda0dd' },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};