import { createWebHistory, createRouter, RouteRecordRaw } from 'vue-router';
import { AllChatsPage, AuthPage, ChatPage } from '../pages';
import { useAuthGuard } from './guards/auth.guard';
import { RoutesConstants } from './routes.constants';

const routes: RouteRecordRaw[] = [
	{
		path: RoutesConstants.AUTH_ROUTE.route,
		meta: RoutesConstants.AUTH_ROUTE.options.meta || {},
		component: AuthPage,
	},
	{
		path: RoutesConstants.ALL_CHATS_ROUTE.route,
		meta: RoutesConstants.ALL_CHATS_ROUTE.options.meta || {},
		component: AllChatsPage,
	},
	{
		path: RoutesConstants.CHAT_ROUTE.route,
		meta: RoutesConstants.CHAT_ROUTE.options.meta || {},
		component: ChatPage,
	},
	{
		path: RoutesConstants.ERROR_ROUTE.route,
		meta: RoutesConstants.ERROR_ROUTE.options.meta || {},
		redirect: RoutesConstants.ALL_CHATS_ROUTE.route,
	},
];

const router = createRouter({
	history: createWebHistory(),
	routes,
});

router.beforeEach(useAuthGuard);

export { router };