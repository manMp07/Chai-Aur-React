import { useState } from 'react';
import {InputBox} from './components/index'
import useCurrencyInfo from './hooks/useCurrencyInfo'

function App() {
	const [from, setFrom] = useState("usd");
	const [to, setTo] = useState("inr");
	const [amount, setAmount] = useState(0);
	const [convertedAmount, setConvertedAmount] = useState(0);

    const currencyInfo = useCurrencyInfo(from);
	const options = Object.keys(currencyInfo);

	const convert = () => {
		setConvertedAmount(amount * currencyInfo[to])
	}

	const swap = () => {
		const oldFrom = from;
		setFrom(to);
		setTo(oldFrom);

		const oldAmount = amount;
		setAmount(convertedAmount);
		setConvertedAmount(oldAmount);
	}


    return (
        <div
            className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
			style={{
                	backgroundImage: `url('https://images.pexels.com/photos/257904/pexels-photo-257904.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')`
            }}
        >
            <div className="w-full">
                <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
                    <form
                        onSubmit={(e) => {
                            e.preventDefault();
							convert();
                        }}
                    >
                        <div className="w-full mb-1">
                            <InputBox
                                label="From"
								amount={amount}
								currencyOptions={options}
								onCurrencyChange={(currency) => setFrom(currency)}
								onAmountChange={setAmount}
								selectCurrency={from}
                            />
                        </div>

                        <div className="relative w-full h-0.5">
                            <button
                                type="button"
                                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
								onClick={swap}
                            >
                                swap
                            </button>
                        </div>

                        <div className="w-full mt-1 mb-4">
                            <InputBox
                                label="To"
								currencyOptions={options}
                                amount={convertedAmount}
								onCurrencyChange={(currency) => setTo(currency)}
								selectCurrency={to}
								amountDisable
                            />
                        </div>

                        <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg"
						>
                            Convert 
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default App;