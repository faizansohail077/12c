import * as React from "react"
import { Button, Flex, NavLink } from "@theme-ui/components"
import { Link } from "gatsby"
import { IdentityContext } from "../../identity-context"


// markup
const IndexPage = () => {

  const { user ,identity:NetlifyIdentity} = React.useContext(IdentityContext)
 

  return (
    <div style={{ marginLeft: '10%' }}>

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

      <h1>our site</h1>

      <Button onClick={() => NetlifyIdentity.open()} >Log In</Button>
      <Button onClick={() => console.log(NetlifyIdentity.currentUser())} >User</Button>
    </div>
  )
}

export default IndexPage
