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
                    <article class="hentry card m-auto mb-3 mt-3 shadow d-flex flex-column" style={{ width: '24rem', height: '38rem', backgroundColor: 'white', border: 'none', borderRadius: '5px' }}>
                        <header class="entry-header align-items-center">
                            <div class="entry-thumbnail">
                                <a href="portfolio-item.html"><img
                                    src={img}
                                    style={{ width: '22rem', height: '20rem' }}
                                    alt={product.title}
                                    className="m-3"
                                /></a>
                            </div>
                            <div className="align-items-center">
                                <h3 class="entry-title m-5 mb-0 mt-0">
                                    <a href="portfolio-item.html"><span >{product.title}</span>
                                        {product.Bestseller && <span >⭐</span>}</a>
                                </h3>
                                <h4 class="m-5 mb-2 mt-0">₹{product.price}/kg</h4>
                                <h5 class="m-5 mb-2 mt-0">{product.description}</h5>
                            </div>
                            <div className="align-items-center btn btn-success" style={{ position: 'absolute', bottom: '1.5rem', left: '6.5rem', height: '3rem' }}>
                                {items[product.id] === 0 ?
                                    <button className="btn" onClick={() => addItem(product.id)}>
                                        <span className="fw-bold m-1 text-light">Add to cart</span>
                                    </button>
                                    : <div >
                                        <button class=" btn" onClick={() => removeItem(product.id)}>
                                            <span className="fw-bold m-1 text-light ">-</span>
                                        </button>
                                        <span className="fw-bold m-1 text-light ">{items[product.id]} kg</span>
                                        <button class="btn" onClick={() => addItem(product.id)}>
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
