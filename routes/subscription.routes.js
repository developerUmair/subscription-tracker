import { Router } from "express";
import { createSubscription, getUserSubscriptions } from "../controllers/subscription.controller.js";
import authorize from "../middlewares/auth.middleware.js";

const subscriptionRouter = Router()

subscriptionRouter.get('/', (req, res) => {res.send({title: "GET all subscriptions"})});
subscriptionRouter.post('/', authorize, createSubscription)

subscriptionRouter.get('/:id', (req, res) => res.send({title: "GET subscription details."}))
subscriptionRouter.put('/:id', (req, res) => res.send({title: "UPDATE subscription."}))
subscriptionRouter.delete('/:id', (req, res) => res.send({title: "DELETE subscription."}))

subscriptionRouter.get('/user/:id', authorize, getUserSubscriptions)
subscriptionRouter.put('/:id/cancel', (req, res) => res.send({title: "CANCEL subscription."}))

subscriptionRouter.get('/upcoming-renewals', (req, res) => res.send({title: "GET upcoming renewals ."}))

export default subscriptionRouter;