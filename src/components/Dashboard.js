import { Flex, Link, NavLink, Label, Input, Button, Checkbox } from '@theme-ui/components'
import React, { useReducer, useRef, useState } from 'react'
import { IdentityContext } from '../../identity-context'


const todosReducer = (state, action) => {
    switch (action.type) {
        case "addTodo":
            return [{ done: false, value: action.payload }, ...state]

        case "toggleTodo":
            const newState = [...state]
            newState[action.payload] = {
                done: !state[action.payload].done,
                value: state[action.payload].value,
            }
            return newState
    }
}

let Dash = () => {
    const { user, identity: NetlifyIdentity } = React.useContext(IdentityContext)
    const inputRef = useRef(null)
    const [todos, dispatch] = useReducer(todosReducer, [])
    console.log("🚀 ~ file: Dashboard.js ~ line 9 ~ Dash ~ todos", todos)
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
                    <NavLink onClick={() => {
                        NetlifyIdentity.logout();
                    }}>Log out :  {user.user_metadata.full_name} </NavLink>
                )}
            </Flex>
            <Flex as="form" onSubmit={(e) => {
                e.preventDefault()
                dispatch({ type: "addTodo", payload: inputRef.current.value })
                inputRef.current.value = ""

            }}>
                <Label>Add Todo
                    <Input ref={inputRef} />
                </Label>
                <Button type="submit" >Submit</Button>
            </Flex>
            <Flex sx={{ flexDirection: 'column' }} >
                <ul style={{ listStyle: 'none' }} >
                    {todos?.map((todo,i) => (
                        <Flex  onClick={(e)=>dispatch({type:"toggleTodo",payload:i})}  as="li">
                            <Checkbox checked={todo.done} />
                            <span>{todo.value}</span>
                        </Flex>
                    ))}
                </ul>
            </Flex>
        </>
    )
}

export default Dash
