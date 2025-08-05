export async function getProductos() {
    const request = await fetch("https://jsonplaceholder.typicode.com/photos", {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    })
    const response = await request.json()
    return response
}

export function cargarProductos() {
    //Inserto los productos en la caja productos de html


    const caja_productos = document.getElementsByClassName("productos container")[0]
    const fragMentOferCard = document.createDocumentFragment()
    for (let i = 0; i < 10; i++) {
        const divFather = document.createElement("div")
        const divImg = document.createElement("div")
        const img = document.createElement("img")
        const divTxt = document.createElement("div")
        const h3 = document.createElement("h3")
        const a = document.createElement("a")
        getProductos().then((res) => {
            console.log(res[i])
            img.setAttribute("src", `https://boringapi.com/api/v1/static/photos/${i + 1}.jpeg`)
            h3.innerText = res[i].title
            a.innerText = "Informacion"

        })

        divImg.append(img)
        divTxt.append(h3)
        divTxt.append(a)
        divImg.append(divTxt)
        divFather.append(divImg)

        fragMentOferCard.append(divFather)

        divFather.setAttribute("class", "ofert-card")
        divImg.setAttribute("class", "ofert-img")
        divTxt.setAttribute("class", "ofert-txt")
        a.setAttribute("class", "btn-2")
        fragMentOferCard.append(divFather)

    }
    caja_productos.append(fragMentOferCard)
}

