// const CracoAlias = require('craco-alias');
// plugins: [
//   {
//       plugin: CracoAlias,
//       options: {
//           source: 'jsconfig',
//           jsConfigPath: 'jsconfig.paths.json',
//       },
//   },
// ],

const path = require('path');

const resolve = arg => path.resolve(__dirname, arg);

module.exports = function () {
    return {
        webpack: {
            alias: {
                '@': resolve('src'),
            },
        },
    };
};
