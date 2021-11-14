import React from 'react'

function StockEventsTable({ products, events })
{
    return (
        <div className="container d-flex align-content-around flex-wrap">
            {products.map(product =>
            {
                var img = "https://sushil-fish-cart.herokuapp.com"
                if (product.image) {
                    if (product.image.formats.medium) {
                        img += product.image.formats.medium.url
                    }
                    else if (product.image.formats.small) {
                        img += product.image.formats.small.url
                    }
                    else {
                        img += product.image.formats.thumbnail.url
                    }
                }
                return (
                    <div className="card m-auto mb-2 mt-2" key={product.id} style={{ width: '20rem', height: '27rem' }}>
                        <div className="m-auto p-auto">
                            <img
                                src={img}
                                style={{ width: '20rem', height: '20rem' }}
                            />
                            <div className="d-flex flex-column align-items-center">
                                <div className="align-items-md-center">
                                    <h4>
                                        <span className="m-1">{product.title}</span>
                                        {product.Bestseller && <span className="badge bg-primary mr-4">Bestseller</span>}
                                    </h4>
                                </div>
                                <div className="align-items-md-center">
                                    <h5>Price: ₹{product.price}</h5>
                                </div>
                                <div className="align-items-md-center">
                                    <button className="btn btn-dark" >
                                        Add to cart
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default StockEventsTable
