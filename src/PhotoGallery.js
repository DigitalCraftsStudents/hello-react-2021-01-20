import React from 'react';
import PhotoCard from './PhotoCard';
/*
    The <></> JSX are short hand for:
    <React.Fragment></React.Fragment>
    This exists so you don't litter your DOM
    with a bunch of divs.
*/
/*
    Exercise:
        - add a title and description to each obj
        - render the title and description
            in each PhotoCard
*/
const data = [
    {
        title: "it's a cat",
        description: "you know, a cat",
        url: "/cat2.jpg"
    },
    // {
    //     title: "it's another cat",
    //     description: "you know, a cat",        
    //     url: "/cat4.jpg"
    // },
    // {    
    //     url: "/cat6.jpg"
    // }
];
function PhotoGallery() {
    // A React.Fragment is like an Array of Components
    // Also written as <></>
    return (
        <>
            <h2>The Gallery</h2>
            <div className="gallery">
                {
                   data.map(i => <PhotoCard 
                                    title={i.title}
                                    url={i.url}
                                    description={i.description}
                                />)
                }
            </div>
        </>
    );
}

export default PhotoGallery;