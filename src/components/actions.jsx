import React from 'react'

const Actions = ({onPrevious,onNext,currentImageIndex,totalImages}) => {
    return (
        <div className='actions'>
            <button onClick={onPrevious} disabled={currentImageIndex===0}>Previous</button>
            <button onClick={onNext} disabled={currentImageIndex===totalImages}>Next</button>
        </div>
    )
}

export default Actions