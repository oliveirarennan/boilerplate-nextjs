import Head from 'next/head'

type Props = {
  title: string
}

export default function Home({ title = 'React Avançado!' }: Props) {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>Hello World Nextjs</h1>
    </div>
  )
}
