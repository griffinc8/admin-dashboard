const sidebar_items = ["Home", "Profile", "Messages", "History", "Tasks", "Communities"]
console.log(sidebar_items.length)

const left_sidebar_container = document.querySelector(".left-sidebar-container")
console.log(left_sidebar_container)

left_sidebar_container.setAttribute('style', "grid-template-rows: repeat(10, 60px)")