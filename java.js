const btnFacebook = document.querySelector("#Facebook")
const btnWhatsapp = document.querySelector("#Whatsapp")
const btnCorreo = document.querySelector("#Correo")
const btnInstagram = document.querySelector("#Instagram")
const btnTikTok = document.querySelector("#Tiktok")
const Pagina = document.querySelector("#Pagina")
const Catalogo = document.querySelector("#Catalogo")



btnFacebook.addEventListener("click", ()=>{
    window,open('https://www.facebook.com/grupocabrera85/')
})


btnWhatsapp.addEventListener("click", ()=>{
    window,open('https://api.whatsapp.com/send?phone=529991749247')
})

btnCorreo.addEventListener("click", ()=>{
    window,open('mailto:deivy_cabrera@hotmail.com')
})

btnInstagram.addEventListener("click", ()=>{
    window,open('https://www.instagram.com/grupo_tecnocab/')
})

btnTikTok.addEventListener("click", ()=>{
    window,open('https://www.tiktok.com/@grupotecnocab?lang=es')
})

Pagina.addEventListener("click", ()=>{
    window,open('https://www.grupotecnocab.com/')
})

Catalogo.addEventListener("click", ()=>{
    window,open('https://alumnosuady-my.sharepoint.com/:b:/g/personal/a20201353_alumnos_uady_mx/ETHv162ugpFJvaFrX7h1RLYBmp_ipN9Qtdm2I2vU1ZhMwA?e=Pv8Ubx')
})
