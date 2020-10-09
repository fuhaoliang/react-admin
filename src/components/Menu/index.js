import React, { useCallback } from 'react';
import { Menu } from 'antd';

import { useEffect, useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { matchRoutes } from "react-router-config";
import routes from '@/routes';

const { SubMenu } = Menu;

const AppMenu = () => {
  const history = useHistory()

console.info(routes[0])

  const menuArrInit = routes[0].routes[routes[0].routes.length - 1].routes || []

  const [menuArr, setMenuArr] = useState(menuArrInit)
  const [selectedKeys, setSelectedKeys] = useState('')
  const [openKeys, setOpenKeys] = useState([])

  const subMenuFn = useCallback(subObj => {
    return (
      <SubMenu key={subObj.path} title={subObj.title} icon={subObj.icon}>
        {
          subObj.routes.map(item => {
            const { hide, path, icon, title, routes = [] } = item

            const isExistRoutes = routes && routes.length > 0

            if(hide) return ''

            if(!isExistRoutes){
              return <Menu.Item key={path} icon={icon}><Link to={path}>{ title }</Link></Menu.Item>
            } else {
              return subMenuFn(item)
            }
          })
        }
      </SubMenu>
    )
  }, [])

  useEffect(()=> {

    const defaultBranch = matchRoutes(menuArr, history.location.pathname) || []
    const defaultSelectedKeys = defaultBranch[defaultBranch.length - 1].match.path
    const defaultOpenKeys = defaultBranch.map(item => item.match.path)

    setMenuArr(menuArr)
    setSelectedKeys(defaultSelectedKeys)
    setOpenKeys(defaultOpenKeys)

    console.info('---->', defaultBranch, defaultSelectedKeys,defaultOpenKeys )

  }, [history.location.pathname, menuArr])

  return(
    <div>
       <Menu
        selectedKeys={[selectedKeys]}
        openKeys={openKeys}
        mode="inline"
        theme="dark"
        onClick={ e =>  setSelectedKeys(e.key)}
        onOpenChange={ e => setOpenKeys(e) }
      >
      {
        menuArr.map(item => {
          const { hide, path, icon, title, routes = [] } = item
          const isExistRoutes  = routes && routes.length > 0

          if(hide) return ''

          if(!isExistRoutes){
            return <Menu.Item key={path} icon={icon}><Link to={path}>{ title }</Link></Menu.Item>
          } else {
            return subMenuFn(item)
          }
        })
      }
      </Menu>
    </div>
  )
}

export default AppMenu
