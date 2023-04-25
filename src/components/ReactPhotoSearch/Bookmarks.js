import React from 'react';
import './style.css'


function Bookmarks ({bookmarked}) {
return (
    <div className = "main">
        <div className = 'container'>
        <div className='header'>
            <h1> Bookmarked Image</h1>
        </div>
        <div className = 'img-container'>
            {!bookmarked.length ?
            'No bookmarked images found'
            :
            bookmarked.map((imgUrl,idx) => {
                return <img
                key={idx}
                src={imgUrl}
                alt="bookmarked"
                />
            })
            }
            </div>
        </div>
    </div>
)
        }      
export default Bookmarks;