import LocaleChanger from './LocaleChanger'
import ThemeChanger from './ThemeChanger'

export default function TopBar() {
  return (
    <div className="flex items-center justify-between p-4">
      <h1 className="text-xl font-bold">Your App Name</h1>
      <div className="flex items-center space-x-4">
        <ThemeChanger />
        <LocaleChanger />
      </div>
    </div>
  )
}
