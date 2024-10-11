/** @jsxImportSource react */
import { Typography } from 'app/ui/typhography'
import { serverClient } from './_trpc/server-client'

export const dynamic = 'force-dynamic'

export default async function Home() {
  const data = await serverClient.hello.helloWorld.query()

  return (
    <Typography className="text-yellow-400" variant="h1">
      {data}
    </Typography>
  )
}
