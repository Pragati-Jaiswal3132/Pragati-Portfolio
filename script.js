var typed = new Typed(".text", {
    strings: ["Web Developer", "Python Developer", "Public Speaker", "Award-Winning Presenter"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    looped: true
})

function showSidebar() {
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'flex'
}
function hideSidebar() {
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'none'
}