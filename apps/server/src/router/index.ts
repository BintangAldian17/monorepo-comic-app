import { inferRouterOutputs } from "@trpc/server";
import { router } from "../trpc";
import { hello } from "./hello";

export const appRouter = router({
    hello
})

export type AppRouter = typeof appRouter
export type AppRoterType = inferRouterOutputs<AppRouter>