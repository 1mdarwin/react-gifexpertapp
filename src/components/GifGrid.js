import React, { useState, useEffect } from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs';
// import { getGifs } from '../helpers/GetGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({category}) => {
    // const [images, setImages] = useState([]); // array like argument
    const { data:images, loading} = useFetchGifs( category );    
    
    
    // useEffect( () => {
    //     getGifs(category)
    //     .then( setImages )
    // }, [ category ]);
    
    // getGif();

    return (
        <>
            <h3 className="animate__animated animate__flash">{category}</h3>
            {loading && <p>Cargando...</p>}
            <div className="card-grid  ">              
                { 
                    images.map( img => (
                        <GifGridItem 
                            key={img.id} 
                            {...img}
                        /> 
                    ))
                }
            </div>
        </>
        
    )
}
