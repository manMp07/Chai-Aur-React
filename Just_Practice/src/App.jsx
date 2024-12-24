import {Provider} from 'react-redux'
import store from './app/store';
import Calculate from './components/calculate'

function App() {

    return (
        <Provider store = {store}>
            <Calculate/>
        </Provider>
    );
}

export default App;
