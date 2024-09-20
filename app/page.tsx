import { getTranslations } from 'next-intl/server'

export default async function Home() {
  const t = await getTranslations('example')

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="mb-4 text-4xl font-bold">{t('hello')}</h1>
    </main>
  )
}