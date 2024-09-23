import type {} from '@redux-devtools/extension'
import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'

interface CounterState {
  counter: number
  increase: (by: number) => void
}

const useCounter = create<CounterState>()(
  devtools(
    persist(
      (set) => ({
        counter: 0,
        increase: (by) => {
          set((state) => ({ counter: state.counter + by }))
        },
      }),
      { name: 'counter-storage' },
    ),
  ),
)

export { useCounter }
