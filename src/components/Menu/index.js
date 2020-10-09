/* eslint-disable react-hooks/exhaustive-deps */
import React, { useCallback } from 'react';
import { Menu } from 'antd';

import { createBrowserHistory } from 'history'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { matchRoutes } from "react-router-config";
import { routes } from '@/routes';

const { SubMenu } = Menu;

const AppMenu = () => {
  const [menuRender, setMenuRender] = useState()

  const location = createBrowserHistory().location
  const pageRoutes = routes
  const defaultBranch = matchRoutes(pageRoutes, location.pathname) || []

  console.info('defaultBranch--->', defaultBranch, location)

  const defaultSelectedKeys = defaultBranch[defaultBranch.length - 1].match.path
  const defaultOpenKeys = defaultBranch.map(item => item.match.path)

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

  const MenFn = useCallback((menuArr) => {
    return (
      <Menu
        defaultSelectedKeys={[defaultSelectedKeys]}
        defaultOpenKeys={defaultOpenKeys}
        mode="inline"
        // theme="dark"
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
    )
  }, [defaultOpenKeys, defaultSelectedKeys, subMenuFn])

  // const MenFn = (menuArr) => {
  //   return (
  //     <Menu
  //       defaultSelectedKeys={[defaultSelectedKeys]}
  //       defaultOpenKeys={defaultOpenKeys}
  //       mode="inline"
  //       // theme="dark"
  //     >
  //     {
  //       menuArr.map(item => {
  //         const { hide, path, icon, title, routes = [] } = item
  //         const isExistRoutes  = routes && routes.length > 0

  //         if(hide) return ''

  //         if(!isExistRoutes){
  //           return <Menu.Item key={path} icon={icon}><Link to={path}>{ title }</Link></Menu.Item>
  //         } else {
  //           return subMenuFn(item)
  //         }
  //       })
  //     }
  //     </Menu>
  //   )
  // }




  
  useEffect(()=> {
    console.info('---->', pageRoutes)
    setMenuRender(MenFn(pageRoutes))
  }, [])

  return(
    <div>
      {
        menuRender
      }
    </div>
  )
}

export default AppMenu
