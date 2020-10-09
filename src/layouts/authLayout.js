import React from 'react'
import { renderRoutes } from 'react-router-config';

const authLayout = ({ route }) => {
  console.info('children---->', route)
  return (
    <div>
      {  renderRoutes(route.routes) }
      {/* {
        1 ? renderRoutes(route.routes) : <div>无权限</div>
      } */}
    </div>
  )
}

export default authLayout
