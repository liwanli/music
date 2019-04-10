import Vue from 'vue';

const Template = r => require.ensure([], () => r(require('@/components/template.vue')), 'template')
const Login = r => require.ensure([], () => r(require('@/components/login.vue')), 'login')
const Register = r => require.ensure([], () => r(require('@/components/register.vue')), 'register')
const Home = r => require.ensure([], () => r(require('@/pages/home')), 'home')



const Foo = { template: '<div>foo</div>' }
const routes = [
  {
    path: "/login",
    name: "登录",
    component: Foo,
    meta:{
      requiresAuth: false
    }
  },
  {
    path: "/register",
    name: "注册",
    component: Register,
    meta:{
      requiresAuth: false
    }
  },
  {
      path: '/',
      component: Template,
      children: [
        {
            path: '',
            name: '首页',
            component: Home,
            meta: {
                requiresAuth: false
            },
        }
      ]
  }
]



export default routes;

