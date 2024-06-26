document.addEventListener("DOMContentLoaded", function () {
    //color to card
    const inputs = document.querySelectorAll('.color input[type="radio"]')
    inputs.forEach(input => {
        let color = input.value,
            label = input
        label.style.backgroundColor = color
        label.style.border = "1px solid"
        label.style.borderColor = color === 'white' ? '#ccc' : 'transparent'
    })

    //sub menu header
    const menuItems = document.querySelectorAll('.down-menu')
    body = document.querySelector("#body")
    console.log(window.innerWidth);
    menuItems.forEach(item => {
        const subMenu = item.nextElementSibling
        blackFon = item.previousElementSibling
        //hidden body
        item.addEventListener('mouseover', () => {
            body.style.height = "100vh"
            body.style.overflow = 'hidden'
            blackFon.style.display = 'block'
        })

        item.addEventListener('mouseout', () => {
            blackFon.style.display = 'none'
            body.style.overflow = ''
            body.style.height = ''
        })
        //return norm view
        subMenu.addEventListener('mouseover', () => {
            body.style.overflow = 'hidden'
            body.style.height = "100vh"
            blackFon.style.display = 'block'
        })

        subMenu.addEventListener('mouseout', () => {
            blackFon.style.display = 'none'
            body.style.overflow = ''
            body.style.height = ''
        })
    })
    // Отримання всіх пунктів підменю

    if (window.innerWidth < 1024) {
        const mobileMenuItem = document.querySelectorAll(".second-subMenu"),
            mobileParentSubMenu = document.querySelectorAll(".mobile-item")
        mobileParentSubMenu.forEach(item => {
            if (item.classList.contains("default-item")) {
                item.classList.remove("default-item")
            }
        })
        mobileMenuItem.forEach(item => {
            if (item.classList.contains("default-menu")) {
                item.classList.remove("default-menu")
            }
        })
        const mobileSubMenu = document.querySelectorAll(".mobile-item > a");
        mobileSubMenu.forEach(mobileItem => {
            mobileItem.addEventListener("click", function (e) {
                e.preventDefault()
                const mobileMenuItem = mobileItem.nextElementSibling;
                if (mobileMenuItem) {
                    mobileMenuItem.classList.toggle("d-block");
                }
            })
        })
    }
    const subMenuItems = document.querySelectorAll('.item')
    subMenuItems.forEach((item) => {
        const subMenu = document.querySelector('.default-menu')
        item.addEventListener('mouseenter', function () {
            if (subMenu) {
                subMenu.style.display = 'none'
            }
        })
        item.addEventListener('mouseleave', function () {
            if (subMenu) {
                if (window.matchMedia('(min-width: 1024px)').matches) {
                    subMenu.style.display = 'flex'
                } else {
                    subMenu.style.display = 'block'

                }
            }
        })
    })

    if (document.querySelector("#burger")) {
        const burger = document.querySelector(".burger"),
            mobileMenu = document.querySelector(".navigation-menu-catalog"),
            sections = document.querySelectorAll(".scrollBurger"),
            cancelMenu = document.querySelector(".cancel-menu"),
            headList = document.querySelectorAll(".head-subMenu"),
            itemMobile = document.querySelectorAll(".navigation-menu-catalog > li > a")

        let isMenuOpen = false
        headList.forEach(item => {
            item.addEventListener("click", function () {
                let subSubmenu = item.nextElementSibling
                console.log(item.nextElementSibling);
                subSubmenu.classList.toggle("d-block")
            })
        })

        burger.addEventListener('click', function () {
            burger.classList.add('active')
            mobileMenu.style.overflowY = "scroll"
            mobileMenu.style.left = "0"
            mobileMenu.style.top = "0"
            isMenuOpen = true
        })
        if (window.innerWidth < 1024) {
            itemMobile.forEach(item => {
                item.addEventListener("click", function (e) {
                    let subSubmenu = item.nextElementSibling;
                    if (subSubmenu && subSubmenu.classList.contains('sub-menu-main') || subSubmenu && subSubmenu.classList.contains('help-sub-menu')) {
                        if (subSubmenu.classList.contains('d-flex')) {
                            let downCta = document.querySelectorAll(".down-menu")
                            downCta.forEach(items => {
                                items.addEventListener("click", function () {
                                    items.style.color = "#F1E12F"
                                    let svgItem = items.querySelector("svg")
                                    svgItem.style.transform = "rotate(180deg)"
                                    svgItem.style.top = "40%"
                                    svgItem.querySelector("path").style.stroke = "#F1E12F"
                                })
                            })
                            subSubmenu.classList.remove('d-flex');
                            subSubmenu.style.display = 'none';
                        } else {
                            let downCta = document.querySelectorAll(".down-menu")
                            downCta.forEach(items => {
                                items.addEventListener("click", function () {
                                    items.style.color = "#fff"
                                    let svgItem = items.querySelector("svg")
                                    svgItem.style.transform = "rotate(0deg)"
                                    svgItem.querySelector("path").style.stroke = "#fff"
                                })
                            })
                            subSubmenu.classList.add('d-flex')
                            subSubmenu.style.display = 'block'
                        }
                    }
                })
            })
        }

        window.addEventListener('scroll', function () {
            sections.forEach(section => {
                const rect = section.getBoundingClientRect()

                if (rect.top <= 0 && rect.bottom >= 0) {
                    burger.classList.remove('active')
                    closeMenu()
                    isMenuOpen = false
                }
            })
        })
        cancelMenu.addEventListener("click", function () {
            closeMenu()
        })

        function closeMenu() {
            burger.classList.remove('active')
            burger.classList.add("noactive")
            mobileMenu.style.left = "-100%"
            mobileMenu.style.top = "0"
            mobileMenu.style.overflowY = ""
            burger.style.left = "0"
        }
    }

    // if(window.innerWidth >= 1024) {
    //     const subMenuMain = document.querySelector(".big-menu"),
    //         downMenu = document.querySelectorAll(".down-menu")
    //     downMenu.forEach(downMenuItem => {
    //         downMenuItem.addEventListener("mouseenter", function() {
    //             subMenuMain.classList.add("hover-subMenuMain")
    //         })
    //         downMenuItem.addEventListener("mouseleave", function() {
    //             subMenuMain.classList.remove("hover-subMenuMain")
    //         })
    //     })
    // }
})