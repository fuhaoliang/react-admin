
import { create } from 'dva-core';
import createLoading from 'dva-loading';
import { createLogger } from 'redux-logger';

import appModel from '@/models/app'



// export const history = createHashHistory({
//   basename: '/m',
// });

// const patchHistory = (history) => {
//   const oldListen = history.listen;
//   history.listen = (callback) => {
//     callback(history.location); // 初始值
//     return oldListen.call(history, callback);
//   };
//   return history;
// };

const logerMiddleware = createLogger();

const app = create(
  {
    onAction: [logerMiddleware],
  }
);

const models = [appModel];

models.forEach((o) => app.model(o));

app.use(createLoading());

app.start();

const store = app._store;

export default store;