import { matchRoutes } from '@/plugins/react-router-config';
import routes from '@/routes'


export function handlerRouterExist(pathname) {
  const matchRoutesArr = matchRoutes(routes, pathname) || []
  console.info('matchRoutesArr--->', matchRoutesArr)
  return matchRoutesArr.filter(item => item.match.isExact).length > 0
} 