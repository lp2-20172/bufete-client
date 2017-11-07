import { Content } from './app/AppContent'
import { Home, Bus, Cart, About, Sandwiches }
  from './app/AppContent'
import CategoriaList from './catalogo/categorias/List'
import CategoriaForm from './catalogo/categorias/Form'
import OficinaList from './catalogo/oficinas/List'
import OficinaForm from './catalogo/oficinas/Form'
import TipoTrabajadorList from './catalogo/tipoTrabajadores/List'
import TipoTrabajadorForm from './catalogo/tipoTrabajadores/Form'
import TrabajadorList from './catalogo/trabajadores/List'
import TrabajadorForm from './catalogo/trabajadores/Form'
import Login from './Login'

const routese = [
  {
    path: '/login',
    title: 'Login!',
    icon: 'home',
    component: Login
  }
]
////////////////////////////////////////////////////////////
// then our route config
const routes = [
  {
    path: '/home',
    title: 'Home',
    icon: 'home',
    exact: true,
    component: Home
  },
 
  {
    path: '/catalogo',
    title: 'Catalogo',
    icon: 'list',
    component: Content,
    routes: [
      {
        path: '/catalogo/categorias/list',
        exact: true,
        title: 'Categorias',
        icon: 'send',
        component: CategoriaList
      },
      {
        path: '/catalogo/categorias/new',
        exact: true,
        title: 'Categoria New!',
        icon: 'send',
        component: CategoriaForm,
        novisible: true
      },
      {
        path: '/catalogo/categorias/edit/:id',
        exact: true,
        title: 'Categoria Edit!',
        icon: 'send',
        component: CategoriaForm,
        novisible: true
      },
      {
        path: '/catalogo/oficinas/list',
        exact: true,
        title: 'Oficinas',
        icon: 'send',
        component: OficinaList
      },
      {
        path: '/catalogo/oficinas/new',
        exact: true,
        title: 'Oficina New!',
        icon: 'send',
        component: OficinaForm,
        novisible: true
      },
      {
        path: '/catalogo/oficinas/edit/:id',
        exact: true,
        title: 'Oficina Edit!',
        icon: 'send',
        component: OficinaForm,
        novisible: true
      },
      {
        path: '/catalogo/tipoTrabajadores/list',
        exact: true,
        title: 'TipoEmpleado',
        icon: 'send',
        component: TipoTrabajadorList
      },
      {
        path: '/catalogo/tipoTrabajadores/new',
        exact: true,
        title: 'Trabajador New!',
        icon: 'send',
        component: TipoTrabajadorForm,
        novisible: true
      },
      {
        path: '/catalogo/tipoTrabajadores/edit/:id',
        exact: true,
        title: 'Trabajador Edit!',
        icon: 'send',
        component: TipoTrabajadorForm,
        novisible: true
      },
      {
        path: '/catalogo/trabajadores/list',
        exact: true,
        title: 'Trabajador',
        icon: 'send',
        component: TrabajadorList
      },
      {
        path: '/catalogo/trabajadores/new',
        exact: true,
        title: 'Trabajador New!',
        icon: 'send',
        component: TrabajadorForm,
        novisible: true
      },
      {
        path: '/catalogo/trabajadores/edit/:id',
        exact: true,
        title: 'Trabajador Edit!',
        icon: 'send',
        component: TrabajadorForm,
        novisible: true
      },
    ]
    
  },
  
]

export { routes, routese }