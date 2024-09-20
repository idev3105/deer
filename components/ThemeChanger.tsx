'use client'

import { MoonIcon, SunIcon } from '@heroicons/react/24/solid'
import { useTheme } from 'next-themes'
import { ChangeEvent, useEffect, useState } from 'react'

export default function ThemeChanger() {
  const { theme, setTheme } = useTheme()
  const [isChecked, setIsChecked] = useState(theme === 'dark')

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newTheme = e.target.checked ? 'dark' : 'light'
    setTheme(newTheme)
    setIsChecked(e.target.checked)
  }

  useEffect(() => {
    setIsChecked(theme === 'dark')
  }, [theme])

  // Common icon props
  const iconProps = {
    width: 14,
    height: 14,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 2,
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
  }

  return (
    <label className="grid cursor-pointer place-items-center">
      <input
        type="checkbox"
        checked={isChecked}
        className="theme-controller toggle col-span-2 col-start-1 row-start-1 bg-base-content"
        onChange={onChange}
      />
      <SunIcon className="col-start-1 row-start-1 fill-base-100 stroke-base-100" {...iconProps} />
      <MoonIcon className="col-start-2 row-start-1 fill-base-100 stroke-base-100" {...iconProps} />
    </label>
  )
}
