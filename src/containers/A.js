import React from 'react'
import {renderRoutes} from '@/plugins/react-router-config';

import { useSelector, useDispatch, } from 'react-redux'

import { Button } from 'antd';


const A = ({ route }) => {
  const app = useSelector(({ app }) => app)
  const dispatch = useDispatch()

  const setUserName = () => {
    dispatch({ type: 'app/getUserName', payload: { username: 2222 } });
  }

  return (
    <div>
      <Button>111</Button>
      <h1>AAAAAA: { app.username }</h1>
      <h4 onClick={ () => setUserName() }>设置userName: 2222</h4>
      {renderRoutes(route.routes, { someProp: "these extra props are optional" })}
    </div>
  )
}

export default A
