import React from 'react';
import {useEffect, useState} from 'react';

function UseFetch(url) {

    const [data, setData] =useState();

    useEffect(() => {
        setTimeout(() => {
            fetch(url)
                .then((res) => {
                    if(!res.ok){
                        throw Error('Data no found');
                    }else{
                        return res.json();
                    }
                })
                .then((data) => {
                    setData(data);
                })
                .catch((err) => console.log(err.message));
            }, 1000);
        
    }, [url])

    return {data};
}

export default UseFetch
