const config = {
    navbar: {
        toggle_menu_class: 'collapse',
    }
};

const navbar_elements = document.getElementsByClassName('nav-item');
const nav_links = document.getElementsByClassName('nav-link');


const navbar = document.getElementsByClassName('js-navbar-to-collapse')[0];
const toggleMenu = () => {
    navbar.classList.toggle(config.navbar.toggle_menu_class);
};

const clickOnNavItem = () => {
};

const menuClickListenerInit = () => {
    Object.keys(navbar_elements).forEach((index) => {
        if (navbar_elements[index]) {
            navbar_elements[index].addEventListener('click', clickOnNavItem);
        }
    });
};

if (navbar) {
    document.addEventListener('click', toggleMenu);
}
menuClickListenerInit();

const website_section = document.getElementsByClassName('js-observe');


const setActiveMenuElement = (current_element) => {
    let class_name = current_element.getAttribute('data-nav_name');
    let active_object = document.getElementsByClassName('nav-active');

    if (active_object[0]) {
        active_object[0].classList.remove('nav-active');
    }

    Object.keys(nav_links).forEach((index) => {
        let element = nav_links[index];
        if (element) {
            let nav_data_attr = element.getAttribute('data-nav_name');
            if (nav_data_attr == class_name) {
                element.classList.add('nav-active');
            }
        }
    });

};

const observer_konca_strony = new IntersectionObserver( (item) => {
    item.some( (element) => {
        console.log(element);
        if (element.isIntersecting) {
            setActiveMenuElement(element.target);
        }
    });
});


Object.keys(website_section).forEach((index) => {
    observer_konca_strony.observe(website_section[index]);
});

// observer_konca_strony.observe(koniec_newsow[0]);



