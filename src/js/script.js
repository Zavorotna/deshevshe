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

    if (document.querySelector('.down-menu')) {
        //sub menu header
        const menuItems = document.querySelectorAll('.down-menu'),
            body = document.querySelector("#body"),
            listItemMain = document.querySelectorAll(".navigation-menu-catalog > li"),
            subMenuSecond = document.querySelectorAll(".sub-menu > li")
        //ховер при наведені на головній навігації
        const addHoverClass = (element, className) => element.classList.add(className),
            removeHoverClass = (element, className) => element.classList.remove(className)

        listItemMain.forEach(listItem => {
            listItem.addEventListener("mouseenter", function () {
                const link = this.querySelector("a"),
                    subMenu = this.querySelector(".sub-menu-main") || this.querySelector(".help-sub-menu")

                if (link) addHoverClass(link, "yellow-header-hover")
                if (subMenu) addHoverClass(subMenu, subMenu.classList.contains("sub-menu-main") ? "hover-sub-menu" : "hover-help-menu")
            })
            listItem.addEventListener("mouseleave", function () {
                const link = this.querySelector("a"),
                    subMenu = this.querySelector(".sub-menu-main") || this.querySelector(".help-sub-menu")

                if (link) removeHoverClass(link, "yellow-header-hover")
                if (subMenu) removeHoverClass(subMenu, subMenu.classList.contains("sub-menu-main") ? "hover-sub-menu" : "hover-help-menu")
            })
        })

        subMenuSecond.forEach(subMenuSecList => {
            subMenuSecList.addEventListener("mouseenter", function () {
                addHoverClass(this, "hover-sub-sub-a")
                const secondSubMenu = this.querySelector(".second-subMenu")
                if (secondSubMenu) addHoverClass(secondSubMenu, "subSecond-hover")
            })
            subMenuSecList.addEventListener("mouseleave", function () {
                removeHoverClass(this, "hover-sub-sub-a")
                const secondSubMenu = this.querySelector(".second-subMenu")
                if (secondSubMenu) removeHoverClass(secondSubMenu, "subSecond-hover")
            })
        })
        // ховер на фон
        // const toggleBodyOverflow = (toggle) => {
        //     if (toggle) {
        //         // body.style.height = "100vh"
        //         // body.style.overflowY = 'hidden'
        //     } else {
        //         // body.style.height = ''
        //         // body.style.overflow = ''
        //     }
        // }

        const toggleBlackFon = (blackFon, toggle) => {
            if (toggle) {
                blackFon.classList.add("black-fon-style")
                blackFon.style.display = 'block'
            } else {
                blackFon.classList.remove("black-fon-style")
                blackFon.style.display = 'none'
            }
        }

        menuItems.forEach(item => {
            const subMenu = item.nextElementSibling,
                blackFon = item.previousElementSibling,
                listItemMenu = blackFon.parentElement
            const showMenu = () => {
                // toggleBodyOverflow(true)
                toggleBlackFon(blackFon, true)
            }

            const hideMenu = () => {
                // toggleBodyOverflow(false)
                toggleBlackFon(blackFon, false)
            }

            item.addEventListener('mouseenter', showMenu)
            item.addEventListener('mouseleave', hideMenu)
            subMenu.addEventListener('mouseenter', showMenu)
            subMenu.addEventListener('mouseleave', hideMenu)
            listItemMenu.addEventListener('mouseenter', showMenu)
            listItemMenu.addEventListener('mouseleave', hideMenu)
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
                mobileMenu.style.top = "-62px"
                isMenuOpen = true
            })

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
                mobileMenu.style.top = "-62px"
                mobileMenu.style.overflowY = ""
                burger.style.left = "0"
            }
        }
    }
    if (document.querySelector(".sort-select")) {
        const selects = document.querySelectorAll('.select')

        selects.forEach(select => {
            const selectIn = select.querySelector('.select__in'),
                selectItems = select.querySelectorAll('.select__item'),
                thisInput = select.querySelector('.select__input'),
                event = new Event('change')

            selectIn.addEventListener('click', () => {
                selects.forEach(_select => {
                    if (_select !== select)
                        _select.classList.remove('is-opened')
                })
                select.classList.toggle('is-opened')
            })
            if (selectItems.length > 0) {
                const firstItem = selectItems[0]
                thisInput.value = firstItem.dataset.value
                // selectIn.innerHTML = firstItem.innerHTML
                firstItem.classList.add('is-active')
            }
            selectItems.forEach(item => {
                item.addEventListener('click', () => {
                    thisInput.value = item.dataset.value
                    thisInput.dispatchEvent(event)
                    selectIn.innerHTML = item.innerHTML
                    selectItems.forEach(_item => {
                        _item.classList.remove('is-active')
                    });
                    item.classList.add('is-active')
                    select.classList.remove('is-opened')
                })
            })
        })

        document.addEventListener('click', e => {
            if (!e.target.closest('.select')) {
                selects.forEach(select => {
                    if (select.classList.contains('is-opened'))
                        select.classList.remove('is-opened')
                })
            }
        })

        document.addEventListener('keyup', e => {
            if (e.key == 'Escape') {
                selects.forEach(select => {
                    if (select.classList.contains('is-opened'))
                        select.classList.remove('is-opened')
                })
            }
        })
    }
    //кастомний рендж цін
    if (document.querySelector('.slider-range')) {
        const slider = document.querySelector('.slider-range'),
            minHandle = document.querySelector('#min-handle'),
            maxHandle = document.querySelector('#max-handle'),
            range = document.querySelector('#range'),
            minPriceInput = document.querySelector('#min-price'),
            maxPriceInput = document.querySelector('#max-price'),
            minValueSpan = document.querySelector('#min-value'),
            maxValueSpan = document.querySelector('#max-value'),
            sliderWidth = slider.offsetWidth,
            handleWidth = minHandle.offsetWidth

        let minPrice = minValueSpan.getAttribute("data-value"),
            maxPrice = maxValueSpan.getAttribute("data-value")

        function updateRange() {
            const minPos = minHandle.offsetLeft,
                maxPos = maxHandle.offsetLeft

            range.style.left = minPos + 'px'
            range.style.width = (maxPos - minPos) + 'px'

            const minValue = Math.round(minPrice + (minPos / (sliderWidth - handleWidth)) * (maxPrice - minPrice)),
                maxValue = Math.round(minPrice + (maxPos / (sliderWidth - handleWidth)) * (maxPrice - minPrice))
            minPriceInput.value = minValue
            maxPriceInput.value = maxValue
            minValueSpan.textContent = minValue
            maxValueSpan.textContent = maxValue
        }

        function handleDrag(e, handle) {
            e.preventDefault()

            const handleStartX = e.clientX || e.touches[0].clientX
            const handleStartLeft = handle.offsetLeft

            const onMove = (moveEvent) => {
                const moveX = moveEvent.clientX || moveEvent.touches[0].clientX
                let newLeft = moveX - handleStartX + handleStartLeft

                if (handle === minHandle) {
                    newLeft = Math.max(0, Math.min(newLeft, maxHandle.offsetLeft - handleWidth))
                } else {
                    newLeft = Math.max(minHandle.offsetLeft + handleWidth, Math.min(newLeft, sliderWidth - handleWidth))
                }

                handle.style.left = newLeft + 'px'
                updateRange()
            }

            const onEnd = () => {
                document.removeEventListener('mousemove', onMove)
                document.removeEventListener('mouseup', onEnd)
                document.removeEventListener('touchmove', onMove)
                document.removeEventListener('touchend', onEnd)
            }

            document.addEventListener('mousemove', onMove)
            document.addEventListener('mouseup', onEnd)
            document.addEventListener('touchmove', onMove)
            document.addEventListener('touchend', onEnd)
        }

        minHandle.addEventListener('mousedown', (e) => handleDrag(e, minHandle))
        maxHandle.addEventListener('mousedown', (e) => handleDrag(e, maxHandle))
        minHandle.addEventListener('touchstart', (e) => handleDrag(e, minHandle))
        maxHandle.addEventListener('touchstart', (e) => handleDrag(e, maxHandle))

        updateRange()

    }
    // випадаючі категорії в каталозі
    function toggleVisibility(buttons, visibleClass, activeClass) {
        buttons.forEach((item) => {
            item.addEventListener("click", function (e) {
                e.preventDefault()
                const descriptionMore = item.nextElementSibling
                descriptionMore.classList.toggle(visibleClass)
                item.classList.toggle(activeClass)
            })
        })
    }

    const btnReadMore = document.querySelectorAll(".readmore")
    const menuReadMore = document.querySelectorAll(".readmore-menu")
    const menuReadMoreMain = document.querySelectorAll(".readmore-menu-main")

    toggleVisibility(btnReadMore, "visible", "readmore-active")
    toggleVisibility(menuReadMore, "visible-menu", "readmore-active-menu")
    toggleVisibility(menuReadMoreMain, "visible-menu", "readmore-active-menu-main")


    function slider() {
        const sliderContainer = document.querySelector('.carousel-card'),
            sliderImages = [...document.querySelectorAll('.carousel-item')],
            btnSlider = document.querySelectorAll(".btn")

        let imageHeight = sliderImages[0].offsetHeight

        let currentSlide = 0
        btnSlider.forEach(itemBtn => {
            if (sliderImages.length > 3) {
                itemBtn.style.display = "block"
            } else {
                itemBtn.style.display = "none"
            }
        })

        function nextSlide(e) {
            e.preventDefault()
            if (currentSlide > 0) {
                currentSlide--
                sliderContainer.style.transition = 'transform 0.3s ease-in-out'
                sliderContainer.style.transform = `translateY(-${currentSlide * imageHeight}px)`
            }
        }

        function prevSlide(e) {
            e.preventDefault()
            if (currentSlide < sliderImages.length - 3) {
                currentSlide++
                sliderContainer.style.transition = 'transform 0.3s ease-in-out'
                sliderContainer.style.transform = `translateY(-${currentSlide * imageHeight}px)`
            }
        }

        const nextButton = document.querySelector('.btn-next')
        if (nextButton) {
            nextButton.addEventListener('click', nextSlide)
        }

        const prevButton = document.querySelector('.btn-prev')
        if (prevButton) {
            prevButton.addEventListener('click', prevSlide)
        }

    }
    if (document.querySelector(".img-block")) {
        slider()
        window.addEventListener('resize', () => {
            slider()
        })
    }
    if (document.querySelector("#delivery")) {
        const buttons = document.querySelectorAll('.transparent-cta'),
            sections = document.querySelectorAll('.description-product, .haracteristic-block, .comment-card, .delivery-card')

        function hideAllSections() {
            sections.forEach(section => section.classList.remove('active'))
        }

        function deactivateAllButtons() {
            buttons.forEach(button => button.classList.remove('active'))
        }

        buttons.forEach(button => {
            button.addEventListener('click', function (event) {
                event.preventDefault();
                const target = button.getAttribute('data-target')

                hideAllSections()
                deactivateAllButtons()

                const sectionToShow = document.getElementById(target)
                if (sectionToShow) {
                    sectionToShow.classList.add('active')
                    button.classList.add('active')
                }
            })
        })

        hideAllSections()
        deactivateAllButtons()
        document.querySelector('.description-product').classList.add('active')
        document.querySelector('[data-target="about"]').classList.add('active')
    }

    if (document.querySelector(".popup-size-cta")) {
        const popupSize = document.querySelector(".popup-size-cta"),
            blackFonPOpup = document.querySelector(".black-fon-popup"),
            tablePopup = document.querySelector(".size-table-popup"),
            cancelPopupSize = document.querySelector(".cancel-size-popup")
        popupSize.addEventListener("click", function () {
            blackFonPOpup.classList.add("black-fon-style")
            tablePopup.style.display = "block"
            body.style.height = "100vh"
            body.style.overflow = "hidden"

        })
        cancelPopupSize.addEventListener("click", function () {
            blackFonPOpup.classList.remove("black-fon-style")
            tablePopup.style.display = "none"
            body.style.height = ""
            body.style.overflow = ""
        })
    }


    const cabinetCta = document.querySelector(".cabinet-cta"),
        blackFonReg = document.querySelector(".black-fon-popup"),
        popupCabinet = document.querySelector(".popup-cabinet"),
        cancelCabinetPopup = document.querySelector(".cancel-popup-cabinet"),
        eyeReg = document.querySelectorAll(".eye")

    cabinetCta.addEventListener("click", function (e) {
        e.preventDefault()
        console.log("+");
        popupCabinet.style.display = "block"
        blackFonReg.style.display = "block"
    })

    cancelCabinetPopup.addEventListener("click", function (e) {
        e.preventDefault()
        popupCabinet.style.display = "none"
        blackFonReg.style.display = "none"

    })

    eyeReg.forEach(eye => {
        eye.addEventListener('click', function (e) {
            e.preventDefault()
            const target = document.getElementById(this.getAttribute('data-target'))
            if (target.type === 'password') {
                target.type = 'text'
            } else {
                target.type = 'password'
            }
        })
    })
    const entryLink = document.querySelector('.d-flex.item-center.cta-reg .entry'),
        registrationLink = document.querySelector('.d-flex.item-center.cta-reg .registration'),
        entryForm = document.querySelector('.entry-form'),
        registrationForm = document.querySelector('.registration-form')

    entryLink.addEventListener('click', function () {
        entryLink.classList.add('active-link')
        registrationLink.classList.remove('active-link')
        entryForm.classList.add('active-form')
        registrationForm.classList.remove('active-form')
    })

    registrationLink.addEventListener('click', function () {
        registrationLink.classList.add('active-link')
        entryLink.classList.remove('active-link')
        registrationForm.classList.add('active-form')
        entryForm.classList.remove('active-form')
    })

    if (document.querySelector(".menu-help-item ")) {
        const ctaHelp = document.querySelectorAll(".menu-help-item a")

        ctaHelp.forEach(helpItem => {
            helpItem.addEventListener("mouseenter", function () {
                helpItem.classList.add("hover-cta-help")
            })
            helpItem.addEventListener("mouseleave", function () {
                helpItem.classList.remove("hover-cta-help")
            })
        })
        
        
    }
    const menuItems = document.querySelectorAll('.menu-help-item a'),
        contentSections = document.querySelectorAll('.help-content')

    function activateSection(target) {
        menuItems.forEach(i => i.classList.remove('active-cta-help'))

        const activeItem = Array.from(menuItems).find(i => i.getAttribute('data-href') === target)
        if (activeItem) {
            activeItem.classList.add('active-cta-help')
        }

        contentSections.forEach(section => {
            section.style.display = 'none'
            section.classList.remove('active-help')
        })

        const targetSection = document.getElementById(target)
        if (targetSection) {
            targetSection.style.display = 'block'
            targetSection.classList.add('active-help')
        }
    }

    if (menuItems.length > 0) {
        menuItems.forEach(item => {
            item.addEventListener('click', function(event) {
                event.preventDefault()
                const target = this.getAttribute('data-href')
                activateSection(target)
                history.pushState(null, '', `#${target}`)
            })
        })

        const hash = window.location.hash.substring(1)
        if (hash) {
            activateSection(hash)
        } else {
            const initialSection = document.getElementById(menuItems[0].getAttribute('data-href'))
            if (initialSection) {
                initialSection.style.display = 'block'
                initialSection.classList.add('active-help')
            }
        }

        window.addEventListener('hashchange', function() {
            const newHash = window.location.hash.substring(1)
            activateSection(newHash)
        })
    }
})
