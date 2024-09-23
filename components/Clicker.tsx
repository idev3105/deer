'use client'

import { useCounter } from '@/state/counter'
import { useTranslations } from 'next-intl'

export default function Clicker() {
  const t = useTranslations('example')

  const increase = useCounter((state) => state.increase)
  return (
    <div>
      <button className="btn btn-primary" onClick={(e) => increase(1)}>
        {t('clickMe')}!
      </button>
    </div>
  )
}
