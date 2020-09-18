import React from 'react'
import {renderRoutes} from 'react-router-config';

import { useSelector, useDispatch, } from 'react-redux'


const A = ({ route }) => {
  const app = useSelector(({ app }) => app)
  const dispatch = useDispatch()

  const setUserName = () => {
    dispatch({ type: 'app/getUserName', payload: { username: 2222 } });
  }

  return (
    <div>
      <h1>AAAAAA: { app.username }</h1>
      <h4 onClick={ () => setUserName() }>设置userName: 2222</h4>
      {renderRoutes(route.routes, { someProp: "these extra props are optional" })}
    </div>
  )
}

export default A
