'use client'
/** @jsxImportSource react */
import { Typography } from 'app/ui/typhography'
import { useTrpc } from '../contexts/TrpcContext'

export default function Home() {
  const { trpc } = useTrpc()
  const { data } = trpc.hello.helloWorld.useQuery()
  console.log(data)
  return (
    <Typography className="text-yellow-400" variant="h1">
      Nice
    </Typography>
  )
}
