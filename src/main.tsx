import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { store } from './redux/store'
import { StoreProvider, useStoreRehydrated } from 'easy-peasy'
import { ThemeProvider } from 'react-bootstrap'
import './styles/app.scss'
import Calendar from './components/calendar'

function WaitForStateRehydration({ children }: { children: React.ReactNode }) {
  const isRehydrated = useStoreRehydrated()
  return isRehydrated ? children : 'Loading...'
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
     <StoreProvider store={store}>
      <WaitForStateRehydration>
        <ThemeProvider>
          <Calendar />
        </ThemeProvider>
      </WaitForStateRehydration>
    </StoreProvider>
  </StrictMode>,
)
