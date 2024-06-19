import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './App.jsx'

function MyApp(){
    return (
        <div>
            <h1>Custom APP !</h1>
        </div>
    )
}

// react argument ko parse karke iss type ka object banata hai.
/* const ReactElement = {
    type : 'a',
    props : {
        href : 'https://google.com',
        target : '_blanck',
    },
    children : 'Visit Google'
}; */

const anotherElement = (
    <a href='https://google.com' target='_blanck'>Visit Google</a>
)

const anotherUser = 'man patel'

const reactElement = React.createElement(
    'a',
    { href : 'https://leetcode.com/u/man_07/', target : '_blank' },
    'Leetcode Profile',

    // compilation ke time variables(evaluated expressions) last me inject hote hai. Isiliye hum if-else etc... nhi likh sakte (talked in App.jsx)
    anotherUser
)

ReactDOM.createRoot(document.getElementById('root')).render(
    <>
        <App /> <br />
        <MyApp />
    </>

    // reactElement

    // ReactElement(Hamne object banaya wo) : This should work, kyuki hamne sidha parsing karke hii object de diya. But this will not work because object's key name should be proper as it is in react compiler.

    // anotherElement
    // MyApp()
)