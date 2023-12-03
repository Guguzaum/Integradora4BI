const profileButton = document.getElementById("change-profile-button")


let isFoto2=false

console.log(profileButton)


profileButton.addEventListener("click", (e)=> {
    console.log(e)
    const mudaFoto = document.getElementById("change-image")
    console.log("FOTO SRC",mudaFoto.attributes.src)

    mudaFoto.src ="Foto2.png"

    if(!isFoto2) {
        mudaFoto.src ="Foto2.png"
        isFoto2=true
    }
    else{
        mudaFoto.src ="Foto1.png"
        isFoto2=false
    }
    

})



