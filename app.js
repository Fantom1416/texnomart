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
        image: "https://p.turbosquid.com/ts-thumb/Jk/mXZxeb/2h/black00/jpg/1631827138/600x600/fit_q87/967bbd53349f8027095ef0ab240e56162dc7c47d/black00.jpg"
    },
]

const Container = document.querySelector(".container")
const sanoq = document.querySelector("#sanoq")

const boshquti = []


mahsulotlar.map(mahsulot => {
    const Box = document.createElement("div")
    Container.appendChild(Box)
    Box.className = "box"
    // boxning ichidagi elementlar

    const img = document.createElement("img")
    Box.appendChild(img)
    img.src = mahsulot.image

    const p = document.createElement("p")
    Box.appendChild(p)
    p.innerHTML = mahsulot.name + " / " + mahsulot.color + " / " + mahsulot.memory + "gb"
    const H3 = document.createElement("h3")
    Box.appendChild(H3)
    H3.innerHTML = "Narxi: " + mahsulot.price + "$ "

    const Button = document.createElement("button")
    Box.appendChild(Button)
    Button.className = "btn"

    const Icon = document.createElement("i")
    Button.appendChild(Icon)
    Icon.className = "fa-solid fa-cart-shopping"
    Button.innerHTML += 'Savatchaga'



    Button.addEventListener("click", () => {

        let check = false
        boshquti.filter(item => (item.id === mahsulot.id) ? check = true : check)

        console.log("check >>", check);
        console.log(mahsulot.id);

        if (check === true) {
            alert("bu mahsulot qo`shilgan")
        } else {
            boshquti.push(mahsulot)
        }


        sanoq.innerHTML = boshquti.length
        console.log("bosh quti >>", boshquti);

    })


})
let opens = false
const Open = () => {
    if (opens === false) {
        const rightSlider = document.querySelector(".rightSlider")
        rightSlider.style.transform = "translateY(0)"
        opens = true
    } else {
        const rightSlider = document.querySelector(".rightSlider")
        rightSlider.style.transform = "translateY(-500px)"
        opens = false

        // delete btn
        const DeleteBtn = document.createElement("button")
        Items.appendChild(DeleteBtn)
        DeleteBtn.innerHTML = "Delete mahsulot"
        DeleteBtn.className = "Delete btn"

        DeleteBtn.addEventListener("click", () => {
            boshquti.filter(FilterMahsulot => console.log(FilterMahsulot))
        })
    }

}
const Close = () => {
    const rightSlider = document.querySelector(".rightSlider")
    rightSlider.style.transform = "translateY(-500px)"
} 