import type { MetaFunction } from 'react-router';
import NotFoundContent from '@/components/layout/NotFoundContent';
import { pageMeta } from '@/lib/seo';

export const meta: MetaFunction = ({ location }) =>
    pageMeta({
        title: 'Page not found | Luis Henrique Abrantes',
        description: 'This page does not exist on luisabrantes.dev.',
        path: location.pathname,
        noindex: true
    });

const NotFound = () => <NotFoundContent />;

export default NotFound;
