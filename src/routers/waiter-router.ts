import { Router } from 'express';

import { createOrderSchema, createUserSchema } from '@/schemas';
import { authenticateToken, validateBody } from '@/middlewares';
import { createOrder, findAllDishes, findAllOrdersByWaiter ,} from '@/controllers';

const waiterRouter = Router();

waiterRouter.all('/*', authenticateToken);

// waiterRouter.post('/', validateBody(createUserSchema), usersPost);
waiterRouter.post('/create-order/:tableId',validateBody(createOrderSchema), createOrder);
waiterRouter.get('/', findAllOrdersByWaiter);
waiterRouter.get('/dish', findAllDishes);

export { waiterRouter };
