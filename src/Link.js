import React from 'react';

const Link = () => {
        const href = 'https://github.com/smakosh/react-todolist'
        return (
            <div className="center-text link">
                <a href={href} className="title" target="_blank">Check the code on Github!</a>
            </div>
        );
}

export default Link;