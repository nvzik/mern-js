import React from 'react'

export const LinkCard = ({link}) => {
    return(
        <div style={{paddingLeft:'3rem'}}>
                <h2>
                    Link
                </h2>
                <p>
                    Your Link:  <a href={link.to} target='_blank' rel="noopener noreferrer"> {link.to} </a>
                </p>
            
                <p>
                    From:  <a href={link.from} target='_blank' rel="noopener noreferrer"> {link.from} </a>
                </p>

                <p>
                    Number of Clicks:  <strong>{link.clicks}</strong>
                </p>

                <p>
                    Date of Creation: <strong>{new Date(link.date).toLocaleDateString()}</strong>
                </p>
        </div>
    )
}