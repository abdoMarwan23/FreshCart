

export default function RatingStars( {rating} ) {
    return (
        < div className="mb-5 flex items-center" >
            {/* <span className="text-teal-600 font-semibold"> */}
            {[1, 2, 3, 4, 5].map((rate, index) => {
                return <span key={index} style={{color: 'var(--text-color-title)' }} > <i className={rating >= rate ? `fas fa-star w-5 h-5 text-yellow-300` : `fas fa-star w-5 h-5 style={{color: 'var(--text-color-title)' }}`} /> </span>
            })}
            <span style={{ color: 'var(--text-color-pragraph)' }} className="ml-2   text-sm">34 reviews</span>
        {/* </span> */}
        </div>
    )
}
