import { useState, useEffect } from 'react';
import yelp from '../api/yelp';

export default () => {
    const [results, setResults] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');
    console.log('useResult');
    //console.log(results);

    const searchApi = async (searchTerm) => {

        try {
            const response = await yelp.get('/search', {
                params: {
                    limit: 50, // search?limit=50.
                    term: searchTerm,
                    location: 'san jose'
                }
            });
            setResults(response.data.businesses);
        } catch (err) {
            setErrorMessage('Something went wrong');
        }
    };

    // Call SearchApi when component
    // is first rendered
    //   searchApi('food');
    //load onetime

    useEffect(() => {
        console.log('useEffect');
        searchApi('vietnam');
    }, []);


    return [searchApi, results, errorMessage];
}