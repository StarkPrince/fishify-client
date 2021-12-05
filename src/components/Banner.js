import React from 'react'

function Banner()
{
    return (
        <div>
            <section className="clean-block clean-hero"
                style={{ color: 'rgba(9, 162, 255, 0.85)' }}>
                {/* style="background-image:url(&quot;/assets/img/tech/image4.jpg&quot;);color:rgba(9, 162, 255, 0.85); */}
                <div className="text">
                    <h1 className="display-3 sf-intro-hd m-5">सुशील फिश कार्ट में आपका स्वागत है।</h1>
                    <p>हमारे यहां सभी प्रकार की ताजी मछलियां मिलती है । शादी, विवाह और अन्य अवसरों पर ऑर्डर भी लिया जाता है, फ्री होम डिलीवरी की सुविधा भी  उपलब्ध है । </p>
                    <p className="text-dark">Note: खुदरा एवम थोक मछली के विक्रेता सुशील सहनी, सैद नगर मछली बाजार लहेरियासराय।</p>
                    <button className="btn btn-outline-light btn-lg" type="button">Learn More</button>
                </div>
            </section>
        </div>
    )
}

export default Banner
