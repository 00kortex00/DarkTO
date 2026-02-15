import crxLogo from '@/assets/crx.svg'
import viteLogo from '@/assets/vite.svg'
import HelloWorld from '@/components/HelloWorld'
import './App.css'

export default function App() {
  return (
    <div>
      <a href="https://vite.dev" target="_blank" rel="noreferrer">
        <img src={viteLogo} className="logo" alt="Vite logo" />
      </a>
      <a href="https://crxjs.dev/vite-plugin" target="_blank" rel="noreferrer">
        <img src={crxLogo} className="logo crx" alt="crx logo" />
      </a>
      <HelloWorld msg="Vite + Preact + CRXJS" />
    </div>
  )
}
