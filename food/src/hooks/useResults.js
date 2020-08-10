import { useState, useEffect } from 'react';
import yelp from '../api/yelp';

export default () => {
    const [results, setResults] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');

    const searchApi = async (searchTerm) => {
        console.log('Hi there !');
        try {
            const response = await yelp.get('/search', {
                params: {
                    limit: 50, // search?limit=50.
                    term: term,
                    location: 'san jose'
                }
            });
            setResults(response.data.businesses);
        } catch (err) {
            console.log(err);
            setErrorMessage('Something went wrong');
        }
    };

    // Call SearchApi when component
    // is first rendered
    //   searchApi('food');
    //load onetime

    useEffect(() => {
        searchApi('food');
    }, []);

    return [searchApi, results, errorMessage];

}