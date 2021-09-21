const React = require('react')
const { ThemeProvider } = require('theme-ui')
const { deep } = require('@theme-ui/presets')
const { Provider } = require('./identity-context')

module.exports = ({ element }) => (
    <Provider>
        <ThemeProvider theme={deep} >{element}</ThemeProvider>
    </Provider>
)
