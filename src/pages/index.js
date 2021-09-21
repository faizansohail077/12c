import { Button } from "@theme-ui/components"
import * as React from "react"
import NetlifyIdentity from 'netlify-identity-widget'


// markup
const IndexPage = () => {
  React.useEffect(() => {
    NetlifyIdentity.init({})
  })
  return (
    <div style={{ marginLeft: '10%' }}>
      <h1>our site</h1>
      <Button onClick={() => NetlifyIdentity.open()} >Log In</Button>
      <Button onClick={() => console.log(NetlifyIdentity.currentUser())} >User</Button>
    </div>
  )
}

export default IndexPage
