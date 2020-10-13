// import { delay } from 'dva';

// const delay = (ms) => new Promise((resolve, reject) => setTimeout(resolve, ms));

export default {
  namespace: 'app',

  state: {
    username: '12345',
  },

  reducers: {
    setUserName(state, action) {
      return { ...state, ...action.payload };
    },
  },

  effects: {
    *getUserName({ payload }, { call, put }) {
      yield put({ type: 'setUserName', payload: { ...payload } });
    },
  },
};
