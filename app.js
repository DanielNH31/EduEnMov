let stop = document.getElementById("looped_animation");
looped_animation.addEventListener("mouseover", function () {
    document.getElementById("looped_animation").className = "navbar-brand animate__animated animate__shakeY"
})
let move = document.getElementById("looped_animation");
looped_animation.addEventListener("mouseout", function () {
    document.getElementById("looped_animation").className = "navbar-brand animate__animated animate__shakeY animate__slower animate__infinite	infinite"
})
