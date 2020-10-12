import { Menu } from 'antd';
import {
  AppstoreOutlined,
  PieChartOutlined,
  DesktopOutlined,
  ContainerOutlined,
  MailOutlined,
} from '@ant-design/icons';
import { useEffect, useState } from 'react'
import { connect } from 'dva'
import { Link } from 'react-router-dom'
import { matchRoutes } from "@/plugins/react-router-config";
import { routes } from '../../router.js'

const { SubMenu } = Menu;

const AppMenu = ({ route, location, global }) => {

  const [menuRender, setMenuRender] = useState('')
  // const [defaultSelectedKeys, setDefaultSelectedKeys] = useState('')
  // const [defaultOpenKeys, setDefaultOpenKeys] = useState([])

  const pageRoutes = routes[0].routes
  const pathName = location.pathname
  console.info('route---->', routes, pathName)      
  console.info('routes---->', routes)

  const branch = matchRoutes(route.routes, location.pathname) || []
  const defaultSelectedKeys = branch[branch.length - 1].match.path
  const defaultOpenKeys = branch.map(item => item.match.path)

  console.info('branch---------------->', branch)
  // console.info('global----------->', global.branch)



  useEffect(()=> {
    setMenuRender(MenFn(pageRoutes))
  }, [MenFn, pageRoutes, route])

  // useEffect(()=> {
  //   console.info('route, location', route, location, global)
  //   const branch = matchRoutes(route.routes, location.pathname) || []
  //   setDefaultSelectedKeys(branch[branch.length - 1].match.path)
  //   setDefaultOpenKeys(branch.map(item => item.match.path))
  //   // const defaultSelectedKeys = branch[branch.length - 1].match.path
  //   // const defaultOpenKeys = branch.map(item => item.match.path)
  //   setMenuRender(MenFn(pageRoutes))
  //   // const MenuRender = MenFn(pageRoutes)
  //   console.info('defaultSelectedKeys---->', defaultSelectedKeys)
  //   console.info('setDefaultOpenKeys----->', defaultOpenKeys)
  // }, [])

  const subMenuFn = subObj => {
    return (
      <SubMenu key={subObj.path} title={subObj.title} icon={subObj.icon}>
        {
          subObj.routes.map(item => {
            const { hide, path, icon, title, routes = [] } = item

            const isExistRoutes = routes && routes.length > 0

            if(hide) return

            if(!isExistRoutes){
              return <Menu.Item key={path} icon={icon}><Link to={path}>{ title }</Link></Menu.Item>
            } else {
              return subMenuFn(item)
            }
          })
        }
      </SubMenu>
    )
  }


  const MenFn = (menuArr) => {
    console.info('666666666666666', )
    return (
      <Menu
        defaultSelectedKeys={[defaultSelectedKeys]}
        defaultOpenKeys={defaultOpenKeys}
        mode="inline"
        theme="dark"
      >
      {
        menuArr.map(item => {
          const { hide, path, icon, title, routes = [] } = item
          const isExistRoutes  = routes && routes.length > 0

          if(hide) return

          if(!isExistRoutes){
            return <Menu.Item key={path} icon={icon}><Link to={path}>{ title }</Link></Menu.Item>
          } else {
            return subMenuFn(item)
          }
        })
      }
      </Menu>
    )
  }

  // const menuRender = MenFn(pageRoutes)

  return(
    <div>
      {
        menuRender
      }
    </div>
  )
}

export default connect(({ global }) => ({ global }))(AppMenu)
