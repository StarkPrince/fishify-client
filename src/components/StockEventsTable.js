import React from 'react'

function StockEventsTable({ products, items, setItems }) 
{
    const addItem = (id) =>
    {
        setItems({ ...items, [id]: items[id] + 1 })
    }
    const removeItem = (id) =>
    {
        setItems({ ...items, [id]: items[id] - 1 })
    }
    return (
        <div className="container d-flex align-content-around flex-wrap">
            {console.log(items)}
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
                    <div className="card m-auto mb-2 mt-2" key={product.id} style={{ width: '20rem', height: '28rem' }}>
                        <div className="m-auto p-auto">
                            <img
                                src={img}
                                style={{ width: '20rem', height: '20rem' }}
                                alt={product.title}
                            />
                            <div className="d-flex flex-column align-items-center">
                                <div className="align-items-md-center">
                                    <h4>
                                        <span className="m-1">{product.title}</span>
                                        {/* className="badge bg-warning mr-4" */}
                                        {product.Bestseller && <span >⭐</span>}
                                    </h4>
                                </div>
                                <div className="align-items-md-center">
                                    <h5>Price: ₹{product.price}</h5>
                                </div>
                                <div className="align-items-md-center btn btn-success" style={{ height: '3rem' }}>
                                    {items[product.id] === 0 ?

                                        <button className="btn" onClick={() => addItem(product.id)}>
                                            <span className="fw-bold m-1 text-light">Add to cart</span>
                                        </button>
                                        : <div >
                                            <button class=" btn" onClick={() => removeItem(product.id)}>
                                                <span className="fw-bold m-1 text-light ">-</span>
                                            </button>
                                            <span className="fw-bold m-3 text-light ">{items[product.id]} kg</span>
                                            <button class="btn " onClick={() => addItem(product.id)}>
                                                <span className="fw-bold m-1 text-light">+</span>
                                            </button>
                                        </div>
                                    }
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
