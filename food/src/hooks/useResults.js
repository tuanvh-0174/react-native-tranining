import { useState, useEffect } from 'react';
import yelp from '../api/yelp';

export default () => {
    const [results, setResults] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');
    const [loading, setLoading] = useState(true);
    console.log('useResult');
    console.log(loading);

    const searchApi = async (searchTerm) => {
        try {
            setLoading(true);
            const response = await yelp.get('/search', {
                params: {
                    limit: 50, // search?limit=50.
                    term: searchTerm,
                    location: 'san jose'
                }
            })
            .then(response => {
                setResults(response.data.businesses);
                setLoading(false);
            })
            .catch(error => {
                alert(error);
                setLoading(false);
            });

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


    return [searchApi, results, errorMessage, loading];
}