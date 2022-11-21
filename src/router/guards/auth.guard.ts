import { NavigationGuardWithThis } from "vue-router";
import { useAuthStore } from './../../store/auth.store';
import { RoutesConstants } from './../routes.constants';

const useAuthGuard: NavigationGuardWithThis<undefined> = (to, from, next) => {
    if (to.matched.some((record) => record.meta.requiresAuth)) {
        const isAuthed = useAuthStore().isAuthed;
        if (isAuthed) return next();
        next(RoutesConstants.AUTH_ROUTE.route);
    } else {
        next();
    }
};

export { useAuthGuard };