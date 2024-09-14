import App from './App.tsx'
import store from './redux/store.ts'

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { MantineProvider } from '@mantine/core'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'

import './index.css'
import '@mantine/core/styles.css';
import themeOverride from './theme/overrideTheme.ts'



createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <Provider store={store}>
        <MantineProvider theme={themeOverride}>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </MantineProvider>
        </Provider>
    </StrictMode>,
)
