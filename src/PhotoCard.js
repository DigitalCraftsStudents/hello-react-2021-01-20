import React from 'react';

/*
Work from the "inside-out",
and from the smallest to larest.

Do one before you do many.
*/
function PhotoCard(props) {
    console.log(props);
    return (
        <div className="card-frame">
            <img src={props.url} />
        </div>
    );
}

export default PhotoCard;