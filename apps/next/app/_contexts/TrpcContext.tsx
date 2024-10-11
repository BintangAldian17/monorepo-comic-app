'use client'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { httpBatchLink } from '@trpc/react-query'
import { createContext, PropsWithChildren, useContext, useState } from 'react'
import { trpc } from '../_trpc/client'

const trpcReactClient = trpc.createClient({
  links: [httpBatchLink({ url: 'http://localhost:8080/trpc' })]
})

interface TrpcContextState {
  trpc: typeof trpc
}

const TrpcContext = createContext<TrpcContextState>({
  trpc
})

export const TrpcProvider = ({ children }: PropsWithChildren) => {
  const [queryClient] = useState(() => new QueryClient())
  const [trpcClient] = useState(() => trpcReactClient)
  return (
    <TrpcContext.Provider
      value={{
        trpc
      }}
    >
      <trpc.Provider client={trpcClient} queryClient={queryClient}>
        <QueryClientProvider client={queryClient}>
          {children}
        </QueryClientProvider>
      </trpc.Provider>
    </TrpcContext.Provider>
  )
}

export const useTrpc = () => {
  const context = useContext(TrpcContext)
  if (typeof context === undefined) {
    throw new Error('useTrpc must be used within a TrpcProvider')
  }
  return context
}
