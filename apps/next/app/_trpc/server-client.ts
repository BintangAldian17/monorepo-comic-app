import { createTRPCProxyClient, httpBatchLink } from '@trpc/client'
import { headers } from 'next/headers';
import { AppRouter } from 'server/src/router'

export const serverClient = createTRPCProxyClient<AppRouter>({
    links: [
        httpBatchLink({
            url: 'http://localhost:8080/trpc',
            headers() {
                const heads = new Map(headers());
                heads.set('x-trpc-source', 'rsc');
                return Object.fromEntries(heads);
            },
            fetch(url, options) {
                return fetch(url, {
                    ...options,
                    credentials: 'include'
                })
            }
        })
    ],
})
