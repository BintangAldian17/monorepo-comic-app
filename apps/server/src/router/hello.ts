import { publicProcedure, router } from "../trpc";


export const hello = router({
    helloWorld: publicProcedure.query(() => {
        return "HELLO WORLD"
    })
})