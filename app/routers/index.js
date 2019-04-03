import Vue from 'vue';

// import Template from '@/components/Template.vue'
const Template = r => require.ensure([], () => r(require('../components/template.vue')), 'template')
const Login = r => require.ensure([], () => r(require('../components/login.vue')), 'login')
const Register = r => require.ensure([], () => r(require('../components/register.vue')), 'register')


console.log(Template)
return 
const routers = [
	{
		name: "登录",
		path: "/login",
		compontent: Login,
		meta:{
			requiresAuth: false
		}
	},
	{
		name: "注册",
		path: "/register",
		compontent: Register,
		meta:{
			requiresAuth: false
		}
	},
	{
	    path: '/',
	    component: Template,
	    children: [
	        // index,
	        // helpCenter,
	        // debtList,
	        // saleClaim,
	        // wearelooking,
	        // aboutUs,
	        // personalCenter
	    ]
	}
]



export default routers;

