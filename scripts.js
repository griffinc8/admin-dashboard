const sidebar_items = ["Home", "Profile", "Messages", "History", "Tasks", "Communities"]
const sidebar_length = sidebar_items.length

const left_sidebar_container = document.querySelector(".left-sidebar-container")
console.log(left_sidebar_container)

left_sidebar_container.setAttribute('style', `grid-template-rows: repeat(${sidebar_length}, 60px)`)

for (let i = 0; i < sidebar_length; i++) {
    console.log(i)
    const div = document.createElement('div')
    div.classList.add(`${sidebar_items[i]}`);
    div.textContent = `${sidebar_items[i]}`
    left_sidebar_container.appendChild(div)
}