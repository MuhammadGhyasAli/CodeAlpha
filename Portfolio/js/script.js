console.log("hi this is correct")
document.querySelector('.cross').style.display = "none"
document.querySelector('.hamBurger').addEventListener("click", () => {
    document.querySelector('.sideBar').classList.toggle('sideBarGo')
    if (document.querySelector('.sideBar').classList.contains('sideBarGo')) {

        document.querySelector('.hamImg').style.display = "inline"

        document.querySelector('.cross').style.display = "none"
    }
    else {
        setTimeout(() => {

            document.querySelector('.cross').style.display = "inline"
        }, 300);
        document.querySelector('.hamImg').style.display = "none"

    }

})

