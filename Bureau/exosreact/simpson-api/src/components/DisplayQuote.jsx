import React from 'react'

const DisplayQuote = ({ quote }) => {
    return (
        <div className="DisplayQuote">
            <img src={quote.image} alt="simpson character" />
            <br />
            {quote.character}
            <br />
            {quote.quote}
        </div>
    )
}

export default DisplayQuote