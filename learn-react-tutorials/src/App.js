import React from 'react';
import ContactCard from './components/ContactCard';

function App() {
    return (
        <div>
            <ContactCard
                contact={{
                    name: "A",
                    imgUrl: "http://placekitten.com/400/200",
                    phone: "123456789",
                    email: "abc.bg"
                }}
            />

            <ContactCard
                contact={{
                    name: "b",
                    imgUrl: "https://i.redd.it/6rpqu3yg9s431.jpg",
                    phone: "567890098",
                    email: "abv.bg"
                }}
            />

            <ContactCard
                contact={{
                    name: "c",
                    imgUrl: "https://www.hillspet.com/content/dam/cp-sites/hills/hills-pet/en_us/exported/cat-care/new-pet-parent/images/kittens-on-blanket.jpg",
                    phone: "0987654321",
                    email: "abd.bg"
                }}
            />

            <ContactCard
                contact={{
                    name: "d",
                    imgUrl: "https://media.istockphoto.com/photos/small-orange-kitten-lie-on-the-bed-picture-id465257035?k=6&m=465257035&s=612x612&w=0&h=ao7AXh-3zDStrPYWZFbbp5kI-wpW8M1y2BHwYcXjvuA=",
                    phone: "0088997766",
                    email: "abf.bg"
                }}
            />


        </div>
    )
}

export default App;