//temp


// user needed data
const user = {
    name: 'سینا اناهید',
    amount: 4000,
    days_left: 17,
}


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
let prev_page = "home";

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




// classes

// events
document.addEventListener("DOMContentLoaded", () => {
    render_first_page();
});

// rendring first page via menu btn
footer_btn_home.addEventListener('click', () => {
    render_first_page();
})
footer_btn_cart.addEventListener('click', () => {
    render_coming_soon_page();
})
footer_btn_checkout.addEventListener('click', () => {
    render_coming_soon_page();
})

// functions


// function which clears the main area 
function clearPage() {
    main_area.innerHTML = " ";
}

// render first page
function render_first_page() {
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
        render_books();
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
function render_books() {
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
            <div class="main-content">
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
                <div class="books">
                   
                </div>
            </div>
        </div>
    `;
    main_area.innerHTML = static_contents;

    books_wrapper = document.querySelector('.books');


    // activating back btn
    back_btn = document.querySelector('.back');
    back_btn.addEventListener('click', () => {
        map_handler('book');
    });

    //activating publishers filter
    book_publisher = document.querySelector('.fil-1');
    book_publisher.addEventListener("click", () => {
        render_coming_soon_page();
    })

    //activating subjects filter
    book_subjects = document.querySelector('.fil-2');
    book_subjects.addEventListener("click", () => {
        render_coming_soon_page();
    })


    //activating paye filter
    book_year_of_study = document.querySelector('.fil-3');
    book_year_of_study.addEventListener("click", () => {
        render_coming_soon_page();
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
                                ${book.name}
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

// function for rendering the loading page
function render_loading() {
    const loading_HTML = `
    <div class="loading">
        <i class="fa fa-spinner"></i>
    </div>
    `;
    main_area.innerHTML = loading_HTML;
}


// function for redirecting the user to the required page
function map_handler(location) {
    if ("book") {
        render_first_page();
        prev_page = "home";
    }
}

// coming soon
function render_coming_soon_page() {
    const coming_soon_content = `
        در حال ساختن این پارت می باشیم کمی صبور باشید ;)
    `;
    main_area.innerHTML = coming_soon_content;
}



// etc