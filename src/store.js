
import { create } from 'dva-core';
import createLoading from 'dva-loading';
import { createLogger } from 'redux-logger';

import appModel from '@/models/app'


const logerMiddleware = createLogger();

export const app = create(
  {
    onAction: [logerMiddleware],
  }
);

const models = [appModel];

models.forEach((o) => app.model(o));

app.use(createLoading());

app.start();

export default app._store;
