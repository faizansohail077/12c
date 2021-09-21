const React = require('react')
const NetlifyIdentity = require('netlify-identity-widget')

const IdentityContext = React.createContext({})

exports.IdentityContext = IdentityContext;

const Provider = ({ children }) => {
    const [user, setUser] = React.useState()

    React.useEffect(() => {
        NetlifyIdentity.init({})
    })

    NetlifyIdentity.on("login", (user) => {
        NetlifyIdentity.close();
        setUser(user)
    })

    NetlifyIdentity.on("logout", () => {
        NetlifyIdentity.close();
        setUser()
    }
    )

    return (
        <IdentityContext.Provider value={{ identity: NetlifyIdentity, user: user }}>
            {children}
        </IdentityContext.Provider>
    )
}

exports.Provider = Provider