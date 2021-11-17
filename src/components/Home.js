import StockEventsTable from './StockEventsTable'
import Header from './Header';
import Footer from './Footer';
import React from 'react';

function App({ products, items, setItems })
{
    return (
        <div >
            <Header />
            <div class="jumbotron bg-light text-dark">
                <div class="container">
                    <h1 class="display-3 sf-intro-hd m-1">सुशील फिश कार्ट में आपका स्वागत है।</h1>
                    <p>हमारे यहां सभी प्रकार की ताजी मछलियां मिलती है । शादी, विवाह और अन्य अवसरों पर ऑर्डर भी लिया जाता है, फ्री होम डिलीवरी की सुविधा भी  उपलब्ध है ।<br /> Note: खुदरा एवम थोक मछली के विक्रेता सुशील सहनी, सैद नगर मछली बाजार लहेरियासराय।</p>
                    <p><a class="btn btn-primary btn-lg" role="button">Learn more &raquo;</a></p>
                </div>
            </div>
            <StockEventsTable products={products} items={items} setItems={setItems} />

            <Footer />
        </div>
    );
}
export default App;
