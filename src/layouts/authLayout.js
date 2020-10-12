import React from 'react'
import { renderRoutes } from '@/plugins/react-router-config';

const authLayout = ({ route }) => {
  console.info('authLayout---->', route.routes)
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
