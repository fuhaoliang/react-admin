import A from '@/containers/A'
import A_1 from '@/containers/A_1'
import B from '@/containers/B'

const routes = [
  {
    path: '/a',
    component: A,
    routes: [
     {
      path: '/a/1',
      component: A_1
     }
    ]
  },
  {
    path: '/b',
    exact: true,
    component: B
  }
]

export default routes