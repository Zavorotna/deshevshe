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
    const menuItems = document.querySelectorAll('.down-menu'),
        body = document.querySelector("#body")

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
    const subMenuItems = document.querySelectorAll('.item');

    // Цикл для кожного пункту підменю
    subMenuItems.forEach(item => {
        // Знаходження дочірнього меню
        const subMenu = document.querySelector('.default-menu');

        // Додавання події для наведення миші
        item.addEventListener('mouseenter', function () {
            // Сховати дочірнє меню, якщо воно є
            if (subMenu) {
                subMenu.style.display = 'none';
            }
        });
        item.addEventListener('mouseleave', function () {
            // Сховати дочірнє меню, якщо воно є
            if (subMenu) {
                subMenu.style.display = 'flex';
            }
        });
    });


})