import { EggPlugin } from 'egg';

const plugin: EggPlugin = {
  // static: true,
  // nunjucks: {
  //   enable: true,
  //   package: 'egg-view-nunjucks',
  // },
  axios: {
    enable: true,
    package: 'egg-axios-plus',
  },
};


export default plugin;
