import { createContext, useState, useEffect } from 'react';
import callApi from '../utils/callApi';

export const AppContext = createContext({})

const dataURL = 'https://randomuser.me/api?results=1';

const GlobalState = ({ children }) => {
	const [data, setData] = useState({ results: [] });
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		try {
			const loadData = async () => {
				setLoading(true);

				const payload = {}
				const data = await callApi(dataURL, payload);
				if (data) {
					setData(data?.results?.[0]);
					setLoading(false);
				}	
            }

			loadData();
		} catch (error) {
			console.error(error);
		}
	}, []);

	return (
		<AppContext.Provider value={{
			data,
			loading,
		}}>
			{children}
		</AppContext.Provider>
	);
};

export default GlobalState;