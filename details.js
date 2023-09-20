let title = document.getElementsByTagName('h3')[0]
let body = document.querySelector('.body')
title.innerHTML = localStorage.getItem("todoTitle")
body.firstElementChild.innerHTML = localStorage.getItem("todoBody")