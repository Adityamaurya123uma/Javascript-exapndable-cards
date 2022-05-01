const panels = document.querySelectorAll('.panel')

panels.forEach((panel) => {
    panel.addEventListener('click', () => {
        removeActiverClasses()
        panel.classList.add('active')
    })
})

function removeActiverClasses() {
    panels.forEach((panel) => {
        panel.classList.remove('active')
    })
}