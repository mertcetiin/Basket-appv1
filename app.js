const searchDOM = document.querySelector('#search-filter');
const listItems = document.querySelectorAll('#list-item')

searchDOM.addEventListener('input', () => {
    const filter = searchDOM.value.toLowerCase();

    listItems.forEach((item) => {
        let text = item.textContent
        if (text.toLowerCase().includes(filter.toLowerCase())) {
            item.style.display = ''
        } else {
            item.style.display = 'none'
        }
    })
});

const AirpodsDOM = document.querySelector('#Airpods');
const PhoneDOM = document.querySelector('#Phone');
const KeyboardDOM = document.querySelector('#Keyboard');
const LaptopDOM = document.querySelector('#Laptop');
const WatchDOM = document.querySelector('#Watch');
const HeadsetDOM = document.querySelector('#Headset');
const MonitörDOM = document.querySelector('#Monitör');
const MouseDOM = document.querySelector('#Mouse');
const TabletDOM = document.querySelector('#Tablet');

const basketValueDOM = document.querySelector('#basket-value');

let count = 1

const counter = function () {
    basketValueDOM.textContent = count++
}

AirpodsDOM.addEventListener('click', () => {
    counter()
    setTimeout(() => {
        alert('Ürün Sepete Eklendi!')
    })
})

PhoneDOM.addEventListener('click', () => {
    counter()
})

KeyboardDOM.addEventListener('click', () => {
    counter()
})
LaptopDOM.addEventListener('click', () => {
    counter()
})

WatchDOM.addEventListener('click', () => {
    counter()
})

HeadsetDOM.addEventListener('click', () => {
    counter()
})

MonitörDOM.addEventListener('click', () => {
    counter()
})

MouseDOM.addEventListener('click', () => {
    counter()
})

TabletDOM.addEventListener('click', () => {
    counter()
})