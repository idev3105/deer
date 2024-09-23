'use client'

import { useCounter } from '@/state/counter'
import { useMessages, useTranslations } from 'next-intl'

export default function Counter() {
  const t = useTranslations('example')
  const counter = useCounter((state) => state.counter)

  return (
    <div>
      <span>{t('numberClick')}: </span>
      <span>{counter}</span>
    </div>
  )
}
