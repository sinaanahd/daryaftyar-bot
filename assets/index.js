//temp


// user needed data
const user = {
    name: 'سینا اناهید',
    amount: 4000,
    days_left: 17,
}


// making sample publishers

const pub1 = {
    name: "مبتکران",
    id: 1
}
const pub2 = {
    name: "گاج",
    id: 2
}
const pub3 = {
    name: "الگو",
    id: 3
}
const pub4 = {
    name: "قلم چی",
    id: 4
}
const pub5 = {
    name: "خیلی سبز",
    id: 5
}
const pub6 = {
    name: "مهر و ماه",
    id: 6
}


// making a sample publisher array 

const publishers = [pub1, pub2, pub3, pub4, pub5, pub6];

const by1 = {
    name: " دهم",
    id: 1
}
const by2 = {
    name: " یازدهم",
    id: 2
}
const by3 = {
    name: " دوازدهم",
    id: 3
}
// making a sample book year array 
const book_years = [by1, by2, by3];


const sub1 = {
    name: "ریاضی",
    id: 1
}
const sub2 = {
    name: "تجربی",
    id: 2
}
const sub3 = {
    name: "انسانی",
    id: 3
}
const sub4 = {
    name: "هنر",
    id: 4
}
// making a sample subjects array
const subjects = [sub1, sub2, sub3, sub4];


// making sample book items
const book1 = {
    name: "اسم کتاب درسی",
    quantity_in_cart: 2,
    publisher: "گاج",
    price: 240000,
    img_url: "./assets/images/book-img-1.jpg"
}
const book2 = {
    name: "اسم کتاب درسی",
    quantity_in_cart: 2,
    publisher: "قلم چی",
    price: 240000,
    img_url: "./assets/images/book-img-2.jpg"
}
const book3 = {
    name: "اسم کتاب درسی",
    quantity_in_cart: 2,
    publisher: "گاج",
    price: 240000,
    img_url: "./assets/images/book-img-1.jpg"
}
const book4 = {
    name: "اسم کتاب درسی",
    quantity_in_cart: 2,
    publisher: "راه اندیشه",
    price: 240000,
    img_url: "./assets/images/book-img-2.jpg"
}

// an array filled with book 
// the main use of this array for now is to render books in the book page
const books = [book1, book2, book3, book4];

// an array for cart items
const cart_items = [book1, book2, book3];



// variables

// the html element which all the datas are located
const main_area = document.querySelector('.main-area');

// footer menu for checkout btn
const footer_btn_checkout = document.querySelector('.footer-menu.it-1');

// footer menu for accssesing the home btn
const footer_btn_home = document.querySelector('.footer-menu.it-2');

// footer menu for cart btn
const footer_btn_cart = document.querySelector('.footer-menu.it-3');

// variable to know where where you lastly (probable delete)!
let address_to_here = "home/";

// the variable for accssesing the wallet amount increasing
let increase_amount = [];

// home page btn which leads to the books page
let books_btn = [];

// home page btn which leads to the classes page
let classes_btn = [];

// html element which contains the book-item and the main place for renderign books
let books_wrapper = [];

// the book page back btn (for now)
let back_btn = [];

// filter in book page about publishers
let book_publisher = [];

// filter in book page about subject of books
let book_subjects = [];

// filter in book page about paye
let book_year_of_study = [];

// btn in the book page for sorting 
let sort_by_btn = [];

// books main content element
let books_main_content = [];

//publishers dom element
let publishers_DOM = [];

//book year dom element
let book_years_DOM = []

//subjects dom element
let subjects_DOM = []

// clicked publisher for filters
let clicked_publishers = [];

// clicked book year for filter
let clicked_book_years = [];

// clicked book year for filter
let clicked_subjects = [];


// classes

// events
document.addEventListener("DOMContentLoaded", () => {
    render_first_page();
    //render_books(books);
});

// rendring first page via menu btn
footer_btn_home.addEventListener('click', () => {
    render_first_page();
})
footer_btn_cart.addEventListener('click', () => {
    clearPage();
    render_shopping_cart(cart_items);
})
footer_btn_checkout.addEventListener('click', () => {
    render_coming_soon_page();
    //console.log(address_to_here);
})

// functions


// function which clears the main area 
function clearPage() {
    main_area.innerHTML = " ";
}

// render first page
function render_first_page() {
    address_to_here = "home/"
    clearPage();
    const firstPageHTML = `
        <div class="first-page">
            <div class="greetings">
                <div class="user-info">
                    سلام 
                    <span class="usersName-wrapper">
                        ${user.name}
                    </span>
                </div>
                <div class="greeting-messsage">
                    <p>
                        <bdi>
                            به فروشگاه دریافت یار خوش امدید!
                        </bdi>
                    </p>
                </div>
            </div>
            <div class="wallet-wrapper">
                <div class="wallet-title-wrapper">
                    <div class="wallet-title">
                        اعتبار کیف پول
                    </div>
                    <div class="wallet-info">
                        <div class="wallet-amount-wrapper">
                            <span class="wallet-amount">
                                ${user.amount}
                            </span>
                            <span class="wallet-curency">
                                تومان 
                            </span>
                        </div>
                        <span class="sperator">|</span>
                        <div class="wallet-exprie-details-wrapper">
                            <span class="expire-date">
                                ${user.days_left} 
                            </span>
                            <span class="wallet-expire-text">
                                روز مهلت تا استفاده
                            </span>
                        </div>
                    </div>
                </div>
                <div class="increase-wallet-wrapper">
                    <span class="wallet-increase-text">
                        افزایش
                    </span>
                    <span class="wallet-increase-icon">
                        <i class="fa fa-caret-left"></i>
                    </span>
                </div>
            </div>
            <div class="books-class-wrapper">
                <div class="book-class-btns books">
                    کتاب ها
                </div>
                <div class="book-class-btns classes">
                    کلاس ها
                </div>
            </div>
        </div>
        `;
    main_area.innerHTML = firstPageHTML;

    // fill the amount btn

    increase_amount = document.querySelector('.increase-wallet-wrapper');
    // adding event listener to increase btn
    increase_amount.addEventListener('click', () => {
        // some function 
        render_coming_soon_page();
    });


    // fill the books btn
    books_btn = document.querySelector('.book-class-btns.books');
    // adding event listener to books btn
    books_btn.addEventListener('click', () => {
        render_books(books);
    });

    // fill the books btn
    classes_btn = document.querySelector('.book-class-btns.classes');
    // adding event listener to classes btn
    classes_btn.addEventListener('click', () => {
        // some function 
        render_coming_soon_page();
    });
}

//render book page
function render_books(books) {
    //map address
    address_to_here += "book/"



    const static_contents = `
     <div class="books-wrapper">
            <div class="books-header">
                <div class="back">
                    <i class="fa fa-caret-right"></i>
                </div>
                <div class="books-page-title">
                    کتاب ها
                </div>
            </div>
            <div class="book-order">
                <div class="order-by-wrapper">
                    مرتب سازی بر اساس :
                    <span class="ordered-by">
                        هیچکدام
                    </span>
                </div>
                <div class="filter-opener">
                    <i class="fa fa-caret-left"></i>
                </div>
            </div>
            <div class="filters-wrapper">
                    <span class="filters fil-1">
                        انتشارات 
                        <span class="sub-filter">
                            (همه)
                        </span>
                    </span>
                    <span class="filters fil-2">
                        رشته 
                        <span class="sub-filter">
                            (همه)
                        </span>
                    </span>
                    <span class="filters fil-3">
                        پایه
                        <span class="sub-filter">
                            (همه)
                        </span>
                    </span>
                </div>
            <div class="main-content">
                
                <div class="books">
                   
                </div>
            </div>
        </div>
    `;
    main_area.innerHTML = static_contents;

    books_wrapper = document.querySelector('.books');
    books_main_content = document.querySelector('.main-content')

    // activating back btn
    back_btn = document.querySelector('.back');
    back_btn.addEventListener('click', () => {
        map_handler(address_to_here);
    });

    //activating publishers filter
    book_publisher = document.querySelector('.fil-1');
    book_publisher.addEventListener("click", () => {
        clear_stage(books_main_content);
        publisher_filter(publishers);
        //render_coming_soon_page();
    })

    //activating subjects filter
    book_subjects = document.querySelector('.fil-2');
    book_subjects.addEventListener("click", () => {
        //render_coming_soon_page();
        clear_stage(books_main_content);
        subject_filter(subjects);
    })


    //activating paye filter
    book_year_of_study = document.querySelector('.fil-3');
    book_year_of_study.addEventListener("click", () => {
        clear_stage(books_main_content);
        book_year_filter(book_years);
        //render_coming_soon_page();
    })

    //activating sort by btn
    sort_by_btn = document.querySelector('.filter-opener');
    sort_by_btn.addEventListener('click', () => {
        render_coming_soon_page();
    })

    books.forEach((book) => {
        const book_HTML = `
                <div class="book-item">
                        <img src="${book.img_url}" alt="" class="book-img" />
                        <div class="publisher">
                            انتشارات : 
                            <span class="publisher-name">
                                ${book.publisher}
                            </span>
                        </div>
                        <div class="book-name">
                            ${book.name}
                        </div>
                        <div class="book-price">
                            <span class="dynamic-price">
                                ${book.price}
                            </span>
                            تومان
                        </div>
                        <div class="action-btns">
                            <span class="add-book">
                                <i class="fa fa-plus"></i>
                            </span>
                            <span class="book-quantity">
                                ${book.quantity_in_cart}
                            </span>
                            <span class="decrment-book">
                                <i class="fa fa-minus"></i>
                            </span>
                        </div>
                    </div>
        `;
        books_wrapper.innerHTML += book_HTML;
    });

}

// render publisher filter 
function publisher_filter(publishers) {

    publishers.forEach((publisher) => {
        const publisher_HTML = `
            <span class="publisher-item" id="publisher-${publisher.id}">
                ${publisher.name}
            </span>
        `;
        books_main_content.innerHTML += publisher_HTML;
    });
    publishers_DOM = [...document.querySelectorAll('.publisher-item')];
    publishers_DOM.forEach(el => {
        el.addEventListener('click', (e) => {
            clicked_publishers_identifier(e);
        });
    });
    address_to_here = "home/book/filter/";
    //console.log(address_to_here);

}


// render book year filter 
function book_year_filter(book_years) {

    book_years.forEach((book_year) => {
        const book_year_HTML = `
            <span class="book-year-item" id="bookyear-${book_year.id}">
                ${book_year.name}
            </span>
        `;
        books_main_content.innerHTML += book_year_HTML;
    });
    book_years_DOM = [...document.querySelectorAll('.book-year-item')];
    book_years_DOM.forEach(el => {
        el.addEventListener('click', (e) => {
            clicked_book_years_identifier(e);
        });
    });
    address_to_here = "home/book/filter/";
    //console.log(address_to_here);

}


// render subjects filter 
function subject_filter(subjects) {

    subjects.forEach((subject) => {
        const subject_HTML = `
            <span class="subject-item" id="subject-${subject.id}">
                ${subject.name}
            </span>
        `;
        books_main_content.innerHTML += subject_HTML;
    });
    subjects_DOM = [...document.querySelectorAll('.subject-item')];
    subjects_DOM.forEach(el => {
        el.addEventListener('click', (e) => {
            clicked_subjects_identifier(e);
        });
    });
    address_to_here = "home/book/filter/";
    //console.log(address_to_here);

}

// funnction for storing clicked publishers
function clicked_publishers_identifier(e) {
    const clicked_publisher = parseInt(e.target.id.split("publisher-")[1]);
    if (clicked_publishers.includes(clicked_publisher)) {
        clicked_publishers = clicked_publishers.filter(p => {
            return p != clicked_publisher;
        })
    }
    else {
        clicked_publishers.push(clicked_publisher);
    }
    //console.log(clicked_publishers);
}

// funnction for storing clicked book years
function clicked_book_years_identifier(e) {
    const clicked_book_year = parseInt(e.target.id.split("bookyear-")[1]);
    if (clicked_book_years.includes(clicked_book_year)) {
        clicked_book_years = clicked_book_years.filter(p => {
            return p != clicked_book_year;
        })
    }
    else {
        clicked_book_years.push(clicked_book_year);
    }
    //console.log(clicked_book_years);
}

// funnction for storing clicked subjects
function clicked_subjects_identifier(e) {
    const clicked_subject = parseInt(e.target.id.split("subject-")[1]);
    if (clicked_subjects.includes(clicked_subject)) {
        clicked_subjects = clicked_subjects.filter(p => {
            return p != clicked_subject;
        })
    }
    else {
        clicked_subjects.push(clicked_subject);
    }
    //console.log(clicked_subjects);
}


// function to make book page ready for filters
function clear_stage(element) {
    element.innerHTML = "";
    //return element;
}

// function to render shopping cart
function render_shopping_cart(cart) {
    const shopping_cart_HTML = `
        <div class="cart-wrapper">
            <div class="cart-header">
                <div class="back">
                    <i class="fa fa-caret-right"></i>
                </div>
                <div class="cart-page-title">
                    سبد خرید
                </div>
            </div>
            <div class="cart-main-content">
                <div class="cart-is-empty">
                    <div class="empty-text">
                        سبد خرید شما خالی است!!!
                    </div>
                    <div class="go-to-book-page">
                        رفتن به صفحه فروشگاه
                    </div>
                </div>
                <div class="cart-items">
                </div>
                <div class="totalprice-wrapper">
                    <div class="label">
                        مجموع :
                    </div>
                    <div class="total-price">
                        <span class="price">
                        </span>
                        تومان
                    </div>
                </div>
            </div>
        </div>
    `;

    main_area.innerHTML = shopping_cart_HTML;

    const cart_item_wrapper = document.querySelector('.cart-items');
    // to get total price wrapper
    const total_price_HTML = document.querySelector('.price');
    // a variable for calculating total price
    let total_price_amount = 0;
    // adding items in cart
    cart.forEach(item => {
        const cart_item_content = `
        <div class="cart-item" id="cart-item-${item.id}">
            <img src="./assets/images/book-img-1.jpg" alt="">
            <div class="details">
                <div class="cart-item-name">
                    ${item.name}
                </div>
                <div class="cart-item-price">
                    <span class="price">
                        ${item.price}
                    </span>
                    تومان
                </div>
            </div>
            <div class="cart-item-actions">
                <span class="more">
                    <i class="fa fa-plus"></i>
                </span>
                <span class="quantity">
                    ${item.quantity_in_cart}
                </span>
                <span class="less">
                    <i class="fa fa-minus"></i>
                </span>
            </div>
        </div>
        `;
        total_price_amount += item.quantity_in_cart * item.price;
        cart_item_wrapper.innerHTML += cart_item_content;
    });
    total_price_HTML.innerHTML = total_price_amount;

    // updating curent place for map_handler method
    stop_repeatation_in_addres("cart", address_to_here) ? address_to_here += "cart/" : address_to_here = address_to_here;

    const back_btn = document.querySelector('.back');
    back_btn.addEventListener('click', () => {
        map_handler(address_to_here);
    })
}


// function for redirecting the user to the required page
function map_handler() {
    let address = address_to_here.split("/");
    //console.log(address);

    let len = address.length - 2;
    // if we are in book page
    if (address[len] === "book" && address[len - 1] === "home") {
        render_first_page();
        address_to_here = "home/"
    }
    // if we are in filters and book page
    else if (address[len] === "filter" && address[len - 1] === "book") {
        render_books(books);
        address_to_here = "home/book/";
    }
    // if we are in cart page from home
    else if (address[len] === "cart" && address[len - 1] === "home") {
        render_first_page(cart_items);
        address_to_here = "home/";
    }
    // if we are in cart page from home
    else if (address[len] === "cart" && address[len - 1] === "book") {
        render_books(books);
        address_to_here = "home/book/";
    }
    //console.log(address_to_here);
}

// coming soon
function render_coming_soon_page() {
    const coming_soon_content = `
    در حال ساختن این پارت می باشیم کمی صبور باشید ;)
    `;
    main_area.innerHTML = coming_soon_content;
}
// function for rendering the loading page
function render_loading() {
    const loading_HTML = `
    <div class="loading">
        <i class="fa fa-spinner"></i>
    </div>
    `;
    main_area.innerHTML = loading_HTML;
}

// a function to prevent multiple repeat in address
function stop_repeatation_in_addres(word, my_string) {
    const arr = my_string.split('/');
    return !arr.includes(word);
}
// etc