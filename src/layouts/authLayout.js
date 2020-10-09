import React from 'react'
import { Redirect } from 'react-router'
import { renderRoutes } from 'react-router-config';

const authLayout = ({ children }) => {
  console.info('children---->', children)
  return (
    <div>
      { renderRoutes(children) }
      {/* renderRoutes */}
      {/* <Redirect from="/*" to="/a/2"></Redirect> */}
    </div>
  )
}

export default authLayout
