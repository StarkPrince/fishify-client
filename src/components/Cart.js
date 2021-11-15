import React from 'react'
import './Cart.css'

function Cart({ products, items, setItems })
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
        <div className="container-md cart">
            {products.map(product =>
            {
                var img = product.image.formats.thumbnail.url
                return (
                    <div>
                        {items[product.id] > 0 ?
                            <div class="card d-flex flex-row justify-content-around"
                                style={{ height: '12rem' }}>
                                <img
                                    src={img}
                                    style={{ width: '10rem', height: '10rem' }}
                                    alt={product.title}
                                    className="mt-auto mb-auto"
                                />
                                <div className="align-items-around" style={{ width: '25rem' }}>
                                    <div class="card-body mb-0">
                                        <h3 class="card-title">{product.title}</h3>
                                        <h4>₹{product.price * items[product.id]}</h4>
                                    </div>
                                    <div className="btn btn-success mt-0">
                                        <button class="btn" onClick={() => removeItem(product.id)}>
                                            <span className="fw-bold m-0 text-light ">-</span>
                                        </button>
                                        <span className="fw-bold m-0 text-light ">{items[product.id]} kg</span>
                                        <button class="btn" onClick={() => addItem(product.id)}>
                                            <span className="fw-bold m-0 text-light">+</span>
                                        </button>
                                    </div>
                                </div>
                            </div> : null}
                    </div>)
            })
            }
            <div>
                <div class="card d-flex flex-row justify-content-around"
                    style={{ height: '6rem' }}>
                    <h4 className="m-auto">
                        <span className="fw-bold m-0 text-dark ">Total: ₹{products.reduce((total, product) => total + product.price * items[product.id], 0)}</span>
                    </h4>
                </div>
                {/* take customer details in a form and mail the cart items */}
                <form className="bg-light mt-4 p-4 rounded form">
                    <div class="mb-3">
                        <label for="name" class="form-label">Name*</label>
                        <input type="text" class="form-control" id="name" required />
                    </div>
                    <div class="mb-3">
                        <label for="phone" class="form-label">Phone Number*</label>
                        <input type="number" class="form-control" id="phone" aria-describedby="phoneHelp" required />
                        <div id="phoneHelp" class="form-text">We'll never share your phone number with anyone else.</div>
                    </div>
                    <div class="mb-3">
                        <label for="email" class="form-label">Email address</label>
                        <input type="email" class="form-control" id="email" aria-describedby="emailHelp" />
                        <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div class="mb-3">
                        <label for="address" class="form-label">Address*</label>
                        <textarea type="address" class="form-control" id="address" required />
                    </div>
                    <div class="mb-3 form-check">
                        <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                        <label class="form-check-label" for="exampleCheck1">Check me out</label>
                    </div>
                    <button type="submit" class="btn btn-primary">Buy</button>
                </form>
            </div>
        </div>
    )
}

export default Cart
