import React from 'react'
import { Router, Link } from '@reach/router'
import { IdentityContext } from '../../identity-context'
import { Button, Flex, NavLink } from '@theme-ui/components'
import Dash from '../components/Dashboard'


const Dashlogout = () => {
    const { user, identity: NetlifyIdentity } = React.useContext(IdentityContext)

    return (
        <>
            <Flex as="nav">
                <NavLink as={Link} to="/" p={2}>
                    Home
                </NavLink>
                <NavLink as={Link} to="/app" p={2}>
                    Dashboard
                </NavLink>
                {user && (
                    <NavLink> {user.user_metadata.full_name} </NavLink>
                )}
            </Flex>
            <h1>Logout Dashboard</h1>
            <Button onClick={() => NetlifyIdentity.open()} >Log In</Button>
        </>
    )
}

const Routes = () => {
    const { user } = React.useContext(IdentityContext)

    if (!user) {
        return (
            <Router>
                <Dashlogout path="/app" />
            </Router>
        )
    }

    return (
        <Router>
            <Dash path="/app" />
        </Router>
    )
}

export default Routes