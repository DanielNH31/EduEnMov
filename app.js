let stop = document.getElementById("looped_animation");
looped_animation.addEventListener("mouseover", function () {
    document.getElementById("looped_animation").className = "navbar-brand animate__animated animate__shakeY"
})
let move = document.getElementById("looped_animation");
looped_animation.addEventListener("mouseout", function () {
    document.getElementById("looped_animation").className = "navbar-brand animate__animated animate__shakeY animate__slower animate__infinite	infinite"
})
$(function(){
    let navbar = "";
    navbar += '<nav class="navbar navbar-expand-xl navbar-dark bg-dark fixed-top">';
    navbar += '<div class="container-fluid">' 
    navbar += '<h4 class="navbar-brand animate__animated animate__shakeY animate__slower animate__infinite infinite" id="looped_animation">'
    navbar += '<a class="nav-link bg-transparent" href="#">Educando en movimiento</a>'
    navbar += '</h4>'
    navbar += '<div class="collapse navbar-collapse justify-content-around" id="navbarSupportedContent">'
    navbar += '<ul class="navbar-nav me-auto mb-2 mb-lg-0">'
    navbar += '<li class="navbar-item">'
    navbar += '<a class="nav-link active" aria-current="page" href="index.html">Inicio</a>'
    navbar += '</li>'
    navbar += '<li class="navbar-item">'
    navbar += '<a class="nav-link" href="us.html">Nosotros</a>'
    navbar += '</li>'
    navbar += '<li class="navbar-item">'
    navbar += '<a class="nav-link" href="what-is.html">¿Que es el trastorno?</a>'
    navbar += '</li>'
    navbar += '<li class="navbar-item">'
    navbar += '<a class="nav-link" href="experts.html">¿Que dicen los expertos?</a>'
    navbar += '</li>'
    navbar += '<li class="navbar-item">'
    navbar += '<a class="nav-link" href="educative_models.html">Modelos educativos</a>'
    navbar += '</li>'
    navbar += '<li class="navbar-item">'
    navbar += '<a class="nav-link" href="#">Datos adicionales</a>'
    navbar += '</li>'
    navbar += '</ul>'
    navbar += '</div>'
    navbar += '<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" '
    navbar += '<span class="navbar-toggler-icon">'
    navbar += '</span>'
    navbar += '</button>'
    navbar += '</div>'
    navbar += '</nav>'
})

$(function(){
    $("#nav-placeholder").load(navbar)
})
