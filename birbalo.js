const mahsulotlar = [
    {
        id: 1,
        name: "Iphone 11 pro",
        price: 1500,
        color: "white",
        memory: 64,
        image: "https://avatars.mds.yandex.net/get-mpic/4568822/img_id8722282494131908693.png/orig"
    },
    {
        id: 2,
        name: "Iphone 12 pro",
        price: 1650,
        color: "gray",
        memory: 128,
        image: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/refurb-iphone-12-pro-graphite-2020?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1635202842000"
    },
    {
        id: 3,
        name: "Iphone 13 pro",
        price: 1800,
        color: "black",
        memory: 256,
        image: "https://kwingy.com/wp-content/uploads/2022/06/apple-iphone-13-01.jpg"
    },

]
const Constainer = document.querySelector(".container")
console.log("array>>", mahsulotlar);
const sanoq = document.querySelector("#sanoq")

const boshquti = []


mahsulotlar.map(mahsulot => {
    const Box = document.createElement("div")
    Constainer.appendChild(Box)
    Box.className = "box"

    const img = document.createElement("img")
    Box.appendChild(img)
    img.src = mahsulot.image

    const p = document.createElement("p")
    Box.appendChild(p)
    p.innerHTML = mahsulot.name + " / " + mahsulot.color + " / " + mahsulot.memory + "gb"

    const H3 = document.createElement("h3")
    Box.appendChild(H3)
    H3.innerHTML = "Narxi: " + mahsulot.price + "$"

    const Button = document.createElement("button")
    Box.appendChild(Button)
    Button.className = "btn"

    const Icon = document.createElement("i")
    Button.appendChild(Icon)
    Icon.className = "fa-solid fa-cart-shopping"
    Button.innerHTML += 'Savatchaga'
    // Button.className = 

    Button.addEventListener("click", () => {

        boshquti.push(mahsulot)
        sanoq.innerHTML = boshquti.length
        console.log("bosh quti", boshquti);

    })
})