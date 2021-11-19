import React from 'react'

function StockEventsTable({ products, items, setItems }) 
{
    const addItem = (id) => { setItems({ ...items, [id]: items[id] + 1 }) }
    const removeItem = (id) => { setItems({ ...items, [id]: items[id] - 1 }) }
    return (
        <div className="container d-flex align-content-around flex-wrap">
            {products.map(product =>
            {
                var img = ""
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
                    <article className="hentry card m-auto mb-3 mt-3 shadow d-flex flex-column" style={{ width: '24rem', height: '38rem', backgroundColor: 'white', border: 'none', borderRadius: '5px' }} key={product.id}>

                        <header className="entry-header align-items-center">
                            <div className="entry-thumbnail">
                                <a><img
                                    src={img}
                                    style={{ width: '90%', height: '21rem' }}
                                    alt={product.title}
                                    className="m-3"
                                /></a>
                            </div>
                            <div className="align-items-center">
                                <h3 className="entry-title m-5 mb-0 mt-0">
                                    <a><span >{product.title}</span>
                                    </a>
                                </h3>
                                <div className="d-flex flex-row">
                                    <h4 className="m-5 mb-2 mt-0">₹{product.price}/kg</h4>
                                    <div className="d-flex flex-column">
                                        <div className="m-3 mb-2 mt-0">
                                            <span className={`text-white m-0 p-1 rounded bg-${product.Stock < 1 ? "danger" : "success"} fs-6`}>
                                                {product.Stock < 1 ? "Out of Stock" : "In Stock"}
                                            </span>
                                        </div>
                                    </div>

                                </div>
                                <h5 className="m-5 mb-2 mt-0 fs-6">{product.description}</h5>
                            </div>
                            {product.Bestseller && <div class="label-top shadow-sm">Bestseller</div>}
                            <div className="align-items-center btn btn-success" style={{ position: 'absolute', bottom: '1.5rem', left: '6.5rem', height: '3rem' }}>
                                {items[product.id] === 0 ?
                                    <button className={`btn ${items[product.id] >= product.Stock ? "disabled" : ""}`} onClick={() => addItem(product.id)}>
                                        <span className="fw-bold m-1 text-light">Add to cart</span>
                                    </button>
                                    : <div >
                                        <button className="btn" onClick={() => removeItem(product.id)}>
                                            <span className="fw-bold m-1 text-light ">-</span>
                                        </button>
                                        <span className="fw-bold m-1 text-light ">{items[product.id]} kg</span>
                                        <button className={`btn ${items[product.id] >= product.Stock ? "disabled" : ""}`} onClick={() => addItem(product.id)}>
                                            <span className="fw-bold m-1 text-light">+</span>
                                        </button>
                                    </div>
                                }
                            </div>
                        </header>
                    </article>
                )
            })}
        </div>
    )
}

export default StockEventsTable
