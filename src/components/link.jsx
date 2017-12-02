import React from 'react'

const Link = () =>  {
    const href = 'https://github.com/smakosh/react-todolist'
    return (
        <div className="center-text link">
            <a href={href} target="_blank">Check code on Github!</a>
        </div>
    )
}

export default Link