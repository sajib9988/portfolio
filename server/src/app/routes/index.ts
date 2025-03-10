import { Router } from 'express';
import blogRoutes from '../modules/blogs/blog.route';
import projectRoutes from '../modules/projects/project.route';
import messageRoutes from '../modules/message/message.route';

const router = Router();
const moduleRoutes = [
  {
    path: '/blog',
    route: blogRoutes,
  },
  {
    path: '/project',
    route: projectRoutes,
  },
  {
    path: '/message',
    route: messageRoutes,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
