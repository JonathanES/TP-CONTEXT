import React from 'react';

const ImageLoading = () => (
    <div>
        <div>        
            Loading...
        </div>
        <img src={ require('../images/dale-waiting.gif') } alt="Loading..." />
    </div>
);

export default ImageLoading;