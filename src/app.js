
let stopped = document.getElementById("looped_animation");
stopped.addEventListener("mouseover", function () {
    document.getElementById("looped_animation").className = "navbar-brand animate__animated animate__shakeY"
})
let move = document.getElementById("looped_animation");
move.addEventListener("mouseout", function () {
    document.getElementById("looped_animation").className = "navbar-brand animate__animated animate__shakeY animate__slower animate__infinite infinite"
})
