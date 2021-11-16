import React from 'react'
import './Cart.css'
import emailjs from 'emailjs-com'

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
            pro1: products[0].title,
            pro2: products[1].title,
            pro3: products[2].title,
            pro4: products[3].title,
            pro5: products[4].title,
            pro6: products[5].title,
            pro7: products[6].title,
            pro8: products[7].title,
            pro9: products[8].title,
            pro10: products[9].title,
            cnt1: items[products[0].id],
            cnt2: items[products[1].id],
            cnt3: items[products[2].id],
            cnt4: items[products[3].id],
            cnt5: items[products[4].id],
            cnt6: items[products[5].id],
            cnt7: items[products[6].id],
            cnt8: items[products[7].id],
            cnt9: items[products[8].id],
            cnt10: items[products[9].id],
        };
        console.log(templateParams);
        const response = await emailjs.send(serviceID, templateID, templateParams, userID)
        console.log(response.status);
    }

    return (
        <div className="container-md cart">
            {products.map(product =>
            {
                var img = product.image.formats.thumbnail.url
                return (
                    <div key={product.id}>
                        {items[product.id] > 0 ?
                            <div className="hentry card m-auto mb-1 mt-1 shadow d-flex flex-row justify-content-around"
                                style={{ height: '12rem' }}>
                                <img
                                    src={img}
                                    style={{ width: '10rem' }}
                                    alt={product.title}
                                    className="m-3 rounded-1"
                                />
                                <div className="align-items-around m-3" style={{ width: '25rem' }}>
                                    <div className="card-body mb-0">
                                        <h3 className="card-title">{product.title}</h3>
                                        <h4>₹{product.price * items[product.id]}</h4>
                                    </div>
                                    <div className="btn btn-success mt-0">
                                        <button className="btn" onClick={() => removeItem(product.id)}>
                                            <span className="fw-bold m-0 text-light ">-</span>
                                        </button>
                                        <span className="fw-bold m-0 text-light ">{items[product.id]} kg</span>
                                        <button className={`btn ${items[product.id] >= product.Stock ? "disabled" : ""}`} onClick={() => addItem(product.id)}>
                                            <span className="fw-bold m-0 text-light">+</span>
                                        </button>
                                    </div>
                                </div>
                            </div> : null}
                    </div>)
            })
            }
            <div>
                <div className="hentry card m-auto mb-1 mt-1 shadow d-flex flex-row justify-content-around"
                    style={{ height: '6rem' }}>
                    <h4 className="m-auto">
                        <span className="fw-bold m-0 text-dark ">Total: ₹{products.reduce((total, product) => total + product.price * items[product.id], 0)}</span>
                    </h4>
                </div>
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
        </div>
    )
}

export default Cart
