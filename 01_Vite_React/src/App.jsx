import Chai from "./Chai"

function App() {
    const userName = 'man_07';
    return (
        <>
            <h1>Let's learn React.JS | userName : {userName}</h1>
            {/* Here userName is Evaluated Expression, isme if-else etc... nhi likh skte */}
            
            <Chai/>
        </>
    )
}

export default App