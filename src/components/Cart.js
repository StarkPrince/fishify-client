import React from 'react'
import emailjs from 'emailjs-com'

function Cart({ products, items, setItems })
{
    const total = products.reduce((total, product) => total + product.price * items[product.id], 0)
    const addItem = (id, mx) =>
    {
        if (items[id] < mx) {
            setItems({ ...items, [id]: items[id] + 1 })
        }
    }
    const removeItem = (id) =>
    {
        setItems({ ...items, [id]: items[id] - 1 })
    }
    const onCheckout = async (e) =>
    {
        e.preventDefault();
        const { name, phone, email, address } = e.target;
        const serviceID = 'service_80cbsr6';
        const templateID = 'template_93gd4ar';
        const userID = 'user_lnfpXFGx7kDYfLOjtL3lf'
        var templateParams = {
            from_name: name.value,
            phone_no: phone.value,
            email: email.value,
            address: address.value,
        };
        var ctr = 1;
        for (let i = 0; i < products.length; i++) {
            if (items[products[i].id] > 0) {
                templateParams["pro" + (i + 1)] = (ctr + ". " + products[i].title + " : " + items[products[i].id] + "kg");
                ctr++;
            }
        }
        await emailjs.send(serviceID, templateID, templateParams, userID)
    }


    return (
        <main className="page shopping-cart-page">
            <section className="clean-block clean-cart dark">
                <div className="container">
                    <div className="block-heading">
                        <h2 className="text-info">Shopping Cart</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quam urna, dignissim nec auctor in,
                            mattis vitae leo.</p>
                    </div>
                    <div className="content">
                        <div className="row g-0">
                            <div className="col-md-12 col-lg-8">
                                <div className="items">
                                    {products.map(product =>
                                    {
                                        var img = product.image.formats.thumbnail.url
                                        return (
                                            <div key={product.id}>
                                                {items[product.id] > 0 ?
                                                    <div className="product">
                                                        <div className="row justify-content-center align-items-center">
                                                            <div className="col-md-3">
                                                                <div className="product-image"><img
                                                                    className="img-fluid d-block mx-auto image"
                                                                    src={img} /></div>
                                                            </div>
                                                            <div className="col-md-5 product-info"><a className="product-name"
                                                                href="#">{product.title}</a>
                                                                <div className="product-specs">
                                                                    <div><span>Price:&nbsp;</span><span className="value"> {product.price}/kg </span></div>
                                                                </div>
                                                            </div>
                                                            <div className="col-6 col-md-2 quantity"><label
                                                                className="form-label d-none d-md-block"
                                                                for="quantity">Quantity</label>
                                                                <div className="btn btn-success fs-6 fw-bold text-light">
                                                                    <span onClick={() => removeItem(product.id)}> - </span>
                                                                    <span >{items[product.id]} kg</span>
                                                                    <span onClick={() => addItem(product.id, product.Stock)}> + </span>
                                                                </div>
                                                            </div>
                                                            <div className="col-6 col-md-2 price"><span>₹{product.price * items[product.id]}</span></div>
                                                        </div>
                                                    </div> : null}

                                            </div>)
                                    })
                                    }

                                </div>
                            </div>
                            <div className="col-md-12 col-lg-4">
                                <div className="summary">
                                    <h3>Summary</h3>
                                    <h4><span className="text">Subtotal</span><span className="price">₹{total}</span></h4>
                                    <h4><span className="text">Discount</span><span className="price">₹0</span></h4>
                                    <h4><span className="text">Shipping</span><span className="price">₹0</span></h4>
                                    <h4><span className="text">Total</span><span className="price">₹{total}</span></h4><button
                                        className="btn btn-primary btn-lg d-block w-100" type="button">Checkout</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container-md">
                    <form className="bg-light mt-4 p-4 rounded form" onSubmit={onCheckout}>
                        <div className="mb-3">
                            <label htmlFor="name" className="form-label">Name*</label>
                            <input type="text" className="form-control" id="name" required />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="phone" className="form-label">Phone Number*</label>
                            <input type="number" className="form-control" id="phone" aria-describedby="phoneHelp" required />
                            <div id="phoneHelp" className="form-text">We'll never share your phone number with anyone else.</div>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email address</label>
                            <input type="email" className="form-control" id="email" aria-describedby="emailHelp" />
                            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="address" className="form-label">Address*</label>
                            <textarea type="address" className="form-control" id="address" required />
                        </div>
                        <div className="mb-3 form-check">
                            <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                            <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                        </div>
                        <button type="submit" className="btn btn-primary">Buy</button>
                    </form>
                </div>
            </section>
        </main >
    )
}

export default Cart
