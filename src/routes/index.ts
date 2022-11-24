import { Router } from "express";
import { connectToDatabase } from "../../services/database.service";
import { favoriteRoutes } from "./favorite/favorite.routes";
import {mailRoutes} from "./mail/mail"
import { groupsRecuperation } from "./recuperation/recuperation.routes";
import { plainsRoutes } from "./plains/plains.routes";
import { paymentsRoutes } from "./plains/payments.routes";
import { CompanyRouter } from "./accounts/company.routes";
import { SchedulingRouter } from "./scheduling/scheduling.routes";
import { AccountClientRouter } from "./accounts/client.routes";
import { contactRoutes } from "./contact/contact.routes";
import { ViewPropertyRoutes } from "./viewProperty/viewProperty.routes";
import { BrokerRouter } from "./Broker/broker.routes";
import { PropertyRoutes } from "./property/property.routes";
import { MyPlainRoutes } from "./plains/myplain.routes";
import { MessagesRoutes } from "./message/messages.routes";
import { chatsRoutes } from "./message/chats.routes";
import { SessionClientRouter } from "./sessions/sessions.routes";
import { financerRoutes } from "./financer/financer.routes";
const router = Router();


connectToDatabase()
  .then(() => {
    router.use("/client", AccountClientRouter);
    router.use("/company", CompanyRouter);
    router.use("/session", SessionClientRouter);
    router.use("/property", PropertyRoutes);
    router.use("/scheduling", SchedulingRouter);
    router.use("/recuperation", groupsRecuperation);
    router.use("/favorite", favoriteRoutes);
    router.use("/contact", contactRoutes);
    router.use("/viewproperty", ViewPropertyRoutes);
    router.use("/broker", BrokerRouter);
    router.use("/mail", mailRoutes);
    router.use("/plains", plainsRoutes);
    router.use("/myplain", MyPlainRoutes);
    router.use("/payments", paymentsRoutes);
    router.use("/messages", MessagesRoutes);
    router.use("/chats", chatsRoutes);
    router.use("/financer", financerRoutes);
  }).catch((error: Error) => {
    console.error("Database connection failed", error);
    process.exit();
  });

export { router };