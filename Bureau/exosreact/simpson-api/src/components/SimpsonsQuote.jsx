import React from 'react'

const SimpsonsQuote = ({ selectQuote }) => {
    return (
        <div className="SimpsonsQuote">
        <button onClick={selectQuote}>Get Quote</button>
        </div>
    )
}

export default SimpsonsQuote;