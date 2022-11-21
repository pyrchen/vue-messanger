import { RouteRecordRaw } from "vue-router";

class RouterConstant {
	constructor(
		public route: string,
		public name: string,
		public options: Partial<RouteRecordRaw>,
	) { }
}

export const RoutesConstants = {
	ALL_CHATS_ROUTE: new RouterConstant('/chats', 'Chats', {
		meta: { requiresAuth: true, title: 'Chats' },
	}),
	CHAT_ROUTE: new RouterConstant('/chats/:chatId', 'Chat', {
		meta: { requiresAuth: true, title: 'Chat' },
	}),
	AUTH_ROUTE: new RouterConstant('/auth', 'Authorization', {
		meta: { requiresAuth: false, title: 'Authorization' },
	}),
	ERROR_ROUTE: new RouterConstant('/:catchAll(.*)', 'Not Found', {
		meta: { requiresAuth: false, title: 'Not Found' },
	}),
};