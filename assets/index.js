//temp

// user needed data
// let user = {
//     name: 'سینا اناهید',
//     amount: 4000,
//     days_left: 17,
//     year: "دهم",
//     subject: "ریاضی",
// };
let user = {};

// making sample book items
// const book1 = {
//     id: 1,
//     name: "1 اسم کتاب درسی",
//     quantity_in_cart: 4,
//     subject: 'هنر',
//     book_year: "دهم",
//     publisher: {
//         clicked: false,
//         name: "مبتکران",
//         id: 1
//     },
//     price: 240000,
//     img_url: "./assets/images/book-img-1.jpg",
//     author: "هامون سبطی",
//     page_count: 120,
//     details: [' مناسب برای همه ی رشته ها', 'مناسب برای همه پایه ها', 'به همراه کنکور 1400', ' با همکاری امیر محمد دهقان'],
// }
// const book2 = {
//     id: 2,
//     name: "2 اسم کتاب درسی",
//     quantity_in_cart: 0,
//     subject: 'ریاضی',
//     book_year: "دهم",
//     publisher: {
//         clicked: false,
//         name: "گاج",
//         id: 2
//     },
//     price: 240000,
//     img_url: "./assets/images/book-img-2.jpg",
//     author: "هامون سبطی",
//     page_count: 100,
//     details: [' مناسب برای همه ی رشته ها', 'مناسب برای همه پایه ها', 'به همراه کنکور 1400', ' با همکاری امیر محمد دهقان'],
// }
// const book3 = {
//     id: 3,
//     name: "3 اسم کتاب درسی",
//     quantity_in_cart: 2,
//     subject: 'هنر',
//     book_year: "یازدهم",
//     publisher: {
//         clicked: false,
//         name: "الگو",
//         id: 3
//     },
//     price: 240000,
//     img_url: "./assets/images/book-img-1.jpg",
//     author: "هامون سبطی",
//     page_count: 10,
//     details: [' مناسب برای همه ی رشته ها', 'مناسب برای همه پایه ها', 'به همراه کنکور 1400', ' با همکاری امیر محمد دهقان'],
// }
// const book4 = {
//     id: 4,
//     name: "4 اسم کتاب درسی",
//     quantity_in_cart: 1,
//     subject: 'انسانی',
//     book_year: "یازدهم",
//     publisher: {
//         clicked: false,
//         name: "خیلی سبز",
//         id: 4
//     },
//     price: 240000,
//     img_url: "./assets/images/book-img-2.jpg",
//     author: "هامون سبطی",
//     page_count: 20,
//     details: [' مناسب برای همه ی رشته ها', 'مناسب برای همه پایه ها', 'به همراه کنکور 1400', ' با همکاری امیر محمد دهقان'],
// }
// const book5 = {
//     id: 5,
//     name: "5 اسم کتاب درسی",
//     quantity_in_cart: 4,
//     subject: 'تجربی',
//     book_year: "دوازدهم",
//     publisher: {
//         clicked: false,
//         name: "مبتکران",
//         id: 1
//     },
//     price: 240000,
//     img_url: "./assets/images/book-img-1.jpg",
//     author: "هامون سبطی",
//     page_count: 120,
//     details: [' مناسب برای همه ی رشته ها', 'مناسب برای همه پایه ها', 'به همراه کنکور 1400', ' با همکاری امیر محمد دهقان'],
// }
// const book6 = {
//     id: 6,
//     name: "6 اسم کتاب درسی",
//     quantity_in_cart: 4,
//     subject: 'ریاضی',
//     book_year: "دوازدهم",
//     publisher: {
//         clicked: false,
//         name: "مبتکران",
//         id: 1
//     },
//     price: 240000,
//     img_url: "./assets/images/book-img-2.jpg",
//     author: "هامون سبطی",
//     page_count: 120,
//     details: [' مناسب برای همه ی رشته ها', 'مناسب برای همه پایه ها', 'به همراه کنکور 1400', ' با همکاری امیر محمد دهقان'],
// }

// an array filled with book 
// the main use of this array for now is to render books in the book page
let books = [];

// making a sample book year array 
const grades = [
    {
        id: 10,
        clicked: false,
        name: "دهم"
    },
    {
        id: 11,
        clicked: false,
        name: "یازدهم"
    },
    {
        id: 12,
        clicked: false,
        name: "دوازدهم"
    },
    {
        id: 0,
        clicked: false,
        name: "فارغ التحصیل"
    }
];
var cart = [];
let cart_items = [];

// variable for filtered book
let filtered_book = [];


// making  subjects array
const subjects = [
    {
        id: 0,
        clicked: false,
        name: "ریاضی"
    },
    {
        id: 1,
        clicked: false,
        name: "تجربی"
    },
    {
        id: 2,
        clicked: false,
        name: "انسانی"
    },
    {
        id: 3,
        clicked: false,
        name: "هنر"
    }
];

// making  publisher array 
let publishers = [];


//books according to users data
let needed_books = [];

// variables

// the html element which all the datas are located
const main_area = document.querySelector('.main-area');

// footer menu for checkout btn
const footer_btn_checkout = document.querySelector('.footer-menu.it-1');

// footer menu for accssesing the home btn
const footer_btn_home = document.querySelector('.footer-menu.it-2');

// footer menu for cart btn
const footer_btn_cart = document.querySelector('.footer-menu.it-3');

//cart count wrapper
const footer_cart_wrapper_HTML = document.querySelector('.cart-item-number');


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
let grades_DOM = []

//subjects dom element
let subjects_DOM = []

// clicked publisher for filters
let clicked_publishers_ids = [];

// clicked book year for filter
let clicked_grades = [];

// clicked book year for filter
let clicked_subjects = [];

//
let pay_btn_wrapper = [];

// events

//documnet load to render first page
document.addEventListener("DOMContentLoaded", () => {
    //RENDER LOADING till the main pages be loaded
    render_loading();
    axios
        .get("https://daryaftyar.ir/storeV2/user/341393410")
        .then((res) => {
            //console.log("user :", res.data);
            user = res.data;
            render_first_page();
        })
        .catch((err) => console.log(err));
    axios
        .get("https://daryaftyar.ir/storeV2/cart/341393410")
        .then((res) => {
            cart = res.data;
            cart_items = cart.cart_details;
            footer_cart_wrapper_HTML.innerHTML = cart_items.length;
            // unnessecary value update 
            cart.cart_items_ids = cart.cart_items_ids.map(id => parseInt(id));
            console.log(cart);
        })
        .catch((err) => console.log(err));
    axios
        .get("https://daryaftyar.ir/storeV2/books")
        .then((res) => {
            //console.log("book :", res.data[2], res.data.length);
            books = res.data;
            needed_books = books.filter(b => ((b.subject === user.subject) && (b.book_year === user.year)));
            //render_books(books);
            //console.log(needed_books);
        })
        .catch((err) => console.log(err));
    axios
        .get("https://daryaftyar.ir/storeV2/pubs")
        .then((res) => {
            //console.log("publishers :", res.data);
            // publishers = res.data;
            res.data.forEach(p => {
                publishers.push({ ...p, clicked: false });
            });
        })
        .catch((err) => console.log(err));
});

// rendring first page via menu btn
footer_btn_home.addEventListener('click', () => {
    render_first_page();
});
//rendering cart via menu btn
footer_btn_cart.addEventListener('click', () => {
    clearPage();
    render_shopping_cart(cart_items);
    if (cart_items.length === 0) {
        const total_price_HTML = document.querySelector('.price');
        update_total(total_price_HTML);
    }
});
//render checkout page via menu btn
footer_btn_checkout.addEventListener('click', () => {
    render_coming_soon_page();
    // books.forEach(b => {
    //     if (b.publisher === "-") {
    //         publsihers_from_books.push(b);
    //     }
    // });
    // console.log(publsihers_from_books);
});

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
        //render_coming_soon_page();
        render_wallet(user);
    });


    // fill the books btn
    books_btn = document.querySelector('.book-class-btns.books');
    // adding event listener to books btn
    books_btn.addEventListener('click', () => {
        render_books(needed_books);
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
        grade_filter(grades);
        //console.log(grades)
        //render_coming_soon_page();
    })

    //activating sort by btn
    sort_by_btn = document.querySelector('.filter-opener');
    sort_by_btn.addEventListener('click', () => {
        render_coming_soon_page();
    })

    books.forEach((book) => {
        const book_HTML = `
                <div class="book-item" id="book-${book.id}">
                        <img src="${book.img_url}" alt="" class="book-img" id="book-img-${book.id}"/>
                        <div class="publisher">
                            انتشارات : 
                            <span class="publisher-name">
                                ${book.publisher}
                            </span>
                        </div>
                        <div class="book-name" id="book-name-${book.id}">
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
                            </span><span class="book-quantity">
                                ${el_by_id(cart_items, book.id).count_in_user_cart || 0}
                            </span><span class="decrment-book">
                                <i class="fa fa-minus"></i>
                            </span>
                        </div>
                    </div>
        `;
        books_wrapper.innerHTML += book_HTML;
    });
    const books_HTML = [...document.querySelectorAll('.book-item')];
    // books_HTML.forEach(book => {
    //     book.addEventListener('click', (e) => {
    //         book_clicked(e);
    //     });
    // });

    books_HTML.forEach(item => {
        item.addEventListener('click', (e) => {
            book_clicked(e);
        });
        // handling more btn in book page
        const add_book_btn = item.querySelector('.add-book');
        add_book_btn.addEventListener('click', (e) => {
            const classes = [...e.target.classList];
            if (classes[classes.length - 1] === "add-book") {
                const quantity_wrapper = e.target.nextElementSibling;
                quantity_wrapper.innerHTML = parseInt(quantity_wrapper.innerHTML) + 1;

                // changing the array quantity
                const id_string = e.target.parentElement.parentElement.id;
                const id = parseInt(id_string.split("-")[1]);
                update_quantity('book', id, "+");
                //update_total(total_price_HTML);
            }
            else if (classes[classes.length - 1] === "fa-plus") {
                const quantity_wrapper = e.target.parentElement.nextElementSibling;
                quantity_wrapper.innerHTML = parseInt(quantity_wrapper.innerHTML) + 1;

                // changing the array quantity
                const id_string = e.target.parentElement.parentElement.parentElement.id;
                const id = parseInt(id_string.split("-")[1]);
                update_quantity('book', id, "+");
                //update_total(total_price_HTML);
            }
        });
        // decreament items in book page
        const less_btn = item.querySelector('.decrment-book');
        less_btn.addEventListener('click', (e) => {
            const classes = [...e.target.classList];
            if (classes[classes.length - 1] === "decrment-book") {
                const quantity_wrapper = e.target.previousSibling;
                const id_string = e.target.parentElement.parentElement.id;
                const id = parseInt(id_string.split("-")[1]);
                update_quantity('cart', id, "-");
                if (parseInt(quantity_wrapper.innerHTML) === 0) {
                    quantity_wrapper.innerHTML = 0;
                }
                else {
                    quantity_wrapper.innerHTML = parseInt(quantity_wrapper.innerHTML) - 1;
                    // changing the array quantity
                }
                //update_total(total_price_HTML);
            }
            else if (classes[classes.length - 1] === "fa-minus") {
                const quantity_wrapper = e.target.parentElement.previousSibling;
                const id_string = e.target.parentElement.parentElement.parentElement.id;
                const id = parseInt(id_string.split("-")[1]);
                update_quantity('cart', id, "-");
                if (parseInt(quantity_wrapper.innerHTML) === 0) {
                    quantity_wrapper.innerHTML = 0;
                }
                else {
                    quantity_wrapper.innerHTML = parseInt(quantity_wrapper.innerHTML) - 1;
                    // changing the array quantity
                }
                //update_total(total_price_HTML);
            }
        });

    });

}

// render publisher filter 
function publisher_filter(publishers) {

    publishers.forEach((publisher) => {
        const publisher_HTML = `
            <span class="publisher-item ${!publisher.clicked ? "disabled" : " "}" id="publisher-${publisher.id}">
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
function grade_filter(grades) {

    grades.forEach((grade) => {
        const grade_HTML = `
            <span class="book-year-item ${!grade.clicked ? "disabled" : " "}" id="bookyear-${grade.id}">
                ${grade.name}
            </span>
        `;
        books_main_content.innerHTML += grade_HTML;
    });
    grades_DOM = [...document.querySelectorAll('.book-year-item')];
    grades_DOM.forEach(el => {
        el.addEventListener('click', (e) => {
            clicked_grades_identifier(e);
        });
    });
    address_to_here = "home/book/filter/";
    //console.log(address_to_here);

}


// render subjects filter 
function subject_filter(subjects) {

    subjects.forEach((subject) => {
        const subject_HTML = `
            <span class="subject-item ${!subject.clicked ? "disabled" : " "}" id="subject-${subject.id}">
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
    if (![...e.target.classList].includes("disabled")) {
        e.target.classList.add('disabled');
    }
    else {
        e.target.classList.remove('disabled');
    }
    const clicked_publisher = parseInt(e.target.id.split("publisher-")[1]);
    if (clicked_publishers_ids.includes(clicked_publisher)) {
        clicked_publishers_ids = clicked_publishers_ids.filter(p => {
            return p != clicked_publisher;
        });
    }
    else {
        clicked_publishers_ids.push(clicked_publisher);
    }
    //console.log(clicked_publishers_ids);
    adjust_books("pub");
}

// funnction for storing clicked subjects
function clicked_subjects_identifier(e) {
    if (![...e.target.classList].includes("disabled")) {
        e.target.classList.add('disabled');
    }
    else {
        e.target.classList.remove('disabled');
    }
    const clicked_subject = parseInt(e.target.id.split("subject-")[1]);
    if (clicked_subjects.includes(clicked_subject)) {
        clicked_subjects = clicked_subjects.filter(p => {
            return p != clicked_subject;
        })
    }
    else {
        clicked_subjects.push(clicked_subject);
    }
    adjust_books("sub");
    //console.log(clicked_subject);
}

// funnction for storing clicked book years
function clicked_grades_identifier(e) {
    if (![...e.target.classList].includes("disabled")) {
        e.target.classList.add('disabled');
    }
    else {
        e.target.classList.remove('disabled');
    }
    const clicked_grade = parseInt(e.target.id.split("bookyear-")[1]);
    if (clicked_grades.includes(clicked_grade)) {
        clicked_grades = clicked_grades.filter(p => {
            return p != clicked_grade;
        })
    }
    else {
        clicked_grades.push(clicked_grade);
    }
    adjust_books("year");
    //console.log(clicked_grades);
}

// function to make book page ready for filters
function clear_stage(element) {
    element.innerHTML = "";
    //return element;
}

// function to render shopping cart
function render_shopping_cart(cart1) {

    // creating content for the shopping cart (HTML template)
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
            <div class="cart-next-step">
                <span class="label">
                    مرحله بعد
                </span>
                <i class="fa fa-caret-left"></i>
            </div>
        </div>
    `;

    //appending the main text to the dom
    main_area.innerHTML = shopping_cart_HTML;

    //activating next step btn
    const next_step_btn = document.querySelector('.cart-next-step');
    // click action for cart next step
    next_step_btn.addEventListener('click', () => {
        // render final stage with cart items and dicount amount
        let discount = cart.cart_summary.total_discount_of_items;
        render_final_stage_cart(cart_items, discount);
    });

    // activating go to book page btn 
    const back_to_shop_btn = document.querySelector('.go-to-book-page');
    back_to_shop_btn.addEventListener("click", () => {
        render_books(books);
        address_to_here = "home/books/";
    });


    const cart_item_wrapper = document.querySelector('.cart-items');
    // to get total price wrapper
    const total_price_HTML = document.querySelector('.price');
    // a variable for calculating total price
    let total_price_amount = 0;
    // adding items in cart
    cart1.forEach(item => {
        const cart_item_content = `
        <div class="cart-item" id="cart-item-${item.id}">
            <img src="${item.img_url}" alt="">
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
                </span><span class="quantity">
                    ${item.count_in_user_cart}
                </span><span class="less">
                    <i class="fa fa-minus"></i>
                </span>
            </div>
        </div>
        `;
        total_price_amount += item.count_in_user_cart * item.price;
        cart_item_wrapper.innerHTML += cart_item_content;
    });
    total_price_HTML.innerHTML = total_price_amount;


    // get all the items in the cart for making events in the more or less
    const all_cart_items = [...document.querySelectorAll('.cart-item')];
    all_cart_items.forEach(item => {
        // handling more btn in cart
        const more_btn = item.querySelector('.more');
        more_btn.addEventListener('click', (e) => {
            const classes = [...e.target.classList];
            if (classes[classes.length - 1] === "more") {
                const quantity_wrapper = e.target.nextElementSibling;
                quantity_wrapper.innerHTML = parseInt(quantity_wrapper.innerHTML) + 1;

                // changing the array quantity
                const id_string = e.target.parentElement.parentElement.id;
                const id = parseInt(id_string.split("-")[2]);
                update_quantity('cart', id, "+");
                update_total(total_price_HTML);
            }
            else if (classes[classes.length - 1] === "fa-plus") {
                const quantity_wrapper = e.target.parentElement.nextElementSibling;
                quantity_wrapper.innerHTML = parseInt(quantity_wrapper.innerHTML) + 1;

                // changing the array quantity
                const id_string = e.target.parentElement.parentElement.parentElement.id;
                const id = parseInt(id_string.split("-")[2]);
                update_quantity('cart', id, "+");
                update_total(total_price_HTML);
            }
        });
        // decreament items in cart
        const less_btn = item.querySelector('.less');
        less_btn.addEventListener('click', (e) => {
            const classes = [...e.target.classList];
            if (classes[classes.length - 1] === "less") {
                const quantity_wrapper = e.target.previousSibling;
                const id_string = e.target.parentElement.parentElement.id;
                const id = parseInt(id_string.split("-")[2]);
                update_quantity('cart', id, "-");
                if (parseInt(quantity_wrapper.innerHTML) === 1) {
                    e.target.parentElement.parentElement.remove();
                }
                else {
                    quantity_wrapper.innerHTML = parseInt(quantity_wrapper.innerHTML) - 1;
                    // changing the array quantity
                }
                update_total(total_price_HTML);
            }
            else if (classes[classes.length - 1] === "fa-minus") {
                const quantity_wrapper = e.target.parentElement.previousSibling;
                const id_string = e.target.parentElement.parentElement.parentElement.id;
                const id = parseInt(id_string.split("-")[2]);
                update_quantity('cart', id, "-");
                if (parseInt(quantity_wrapper.innerHTML) === 1) {
                    e.target.parentElement.parentElement.parentElement.remove();
                }
                else {
                    quantity_wrapper.innerHTML = parseInt(quantity_wrapper.innerHTML) - 1;
                    // changing the array quantity
                }
                update_total(total_price_HTML);
            }
        });

    });

    // updating curent place for map_handler method
    stop_repeatation_in_addres("cart", address_to_here) ? address_to_here += "cart/" : address_to_here = address_to_here;

    const back_btn = document.querySelector('.back');
    back_btn.addEventListener('click', () => {
        map_handler(address_to_here);
    });
}


// function to render wallet page
function render_wallet(user) {
    const wallet_content = `
        <div class="wallet-page-wrapper">
            <div class="wallet-header">
                <div class="back">
                    <i class="fa fa-caret-right"></i>
                </div>
                <div class="wallet-page-title">
                    کیف پول
                </div>
            </div>
            <div class="main-content">
                <div class="wallet-title">
                    اعتبار کیف پول
                </div>
                <div class="wallet-info">
                    <div class="wallet-amount">
                        <span class="price">
                            ${user.amount}
                        </span>
                        تومان
                    </div>
                    <div class="seprator">
                        |
                    </div>
                    <div class="wallet-days-left">
                        <span class="days">${user.days_left}</span>
                        روز مهلت استفاده
                    </div>
                </div>
                <div class="increase-title">
                    راه های افزایش اعتبار کیف پول
                </div>
                <div class="way-to-increase-wrapper">
                    <div class="way-to-increase-title">
                        دوست خوبم تو از راه های زیر میتونی اعتبار کسب کنی و در خرید از این فروشگاه ازش استفاده کنی :
                    </div>
                    <div class="ways-to-increase">
                        <p>
                            1- با هربار جواب صحیح دادن به سوال دوستات در پرسشکده ربات ، میتونی 500 تومان اعتبار جمع کنی !
                        </p>
                    </div>
                </div>
            </div>
        </div>
    `;
    main_area.innerHTML = wallet_content;
    const back_btn = document.querySelector('.back');
    address_to_here = "home/wallet/";
    back_btn.addEventListener('click', () => {
        map_handler();
    });

}

// function to render single book page
function render_single_book(book) {
    const single_book_content = `
        <div class="single-prod-wrapper">
            <div class="single-prod-header">
                <div class="back">
                    <i class="fa fa-caret-right"></i>
                </div>
                <div class="single-prod-page-title">
                    ${book.name}
                </div>
            </div>
            <div class="main-content">
                <div class="details">
                    <div class="publisher-wrapper">
                        نویسنده : 
                        <span class="publisher">
                            ${book.author}
                        </span>
                    </div>
                    <div class="pages-details-wrapper">
                        تعداد صفحات :
                        <span class="pages-count">
                            ${book.pages_count}
                        </span>
                        صفحه
                    </div>
                    <div class="full-details-wrapper">
                        توضیحات :
                        <ul class="book-details-ul">
                            
                        </ul>
                    </div>
                </div>
                <div class="book-img-price-wrapper">
                    <img src="${book.img_url}" alt="">
                    <div class="price-wrapper">
                        <span class="price">
                            ${book.price}
                        </span>
                        تومان
                    </div>
                </div>
            </div>
            <div class="single-prod-footer">
                <span class="more">
                    <i class="fa fa-plus"></i>
                </span><span class="quantity">
                    ${el_by_id(cart_items, book.id).count_in_user_cart || 0}
                </span><span class="less">
                    <i class="fa fa-minus"></i>
                </span>
            </div>
        </div>
    `;
    main_area.innerHTML = single_book_content;
    const details_DOM = document.querySelector('.book-details-ul');
    // details bug
    book.details.forEach(d => {
        const book_detail_content = `
            <li>
                ${d}
            </li>
        `;
        details_DOM.innerHTML += book_detail_content;
    });

    //const single_book_footer = document.querySelectorAll('.single-prod-footer')
    const more_btn = document.querySelector('.more');
    more_btn.addEventListener('click', (e) => {
        const classes = [...e.target.classList];
        if (classes[classes.length - 1] === "more") {
            const quantity_wrapper = e.target.nextElementSibling;
            quantity_wrapper.innerHTML = parseInt(quantity_wrapper.innerHTML) + 1;

            // changing the array quantity
            //const id_string = e.target.parentElement.parentElement.id;
            const id = book.id;
            update_quantity('book', id, "+");
            //update_total(total_price_HTML);
        }
        else if (classes[classes.length - 1] === "fa-plus") {
            const quantity_wrapper = e.target.parentElement.nextElementSibling;
            quantity_wrapper.innerHTML = parseInt(quantity_wrapper.innerHTML) + 1;

            // changing the array quantity
            //const id_string = e.target.parentElement.parentElement.parentElement.id;
            const id = book.id;
            update_quantity('book', id, "+");
            //update_total(total_price_HTML);
        }
    });
    const less_btn = document.querySelector('.less');
    less_btn.addEventListener('click', (e) => {
        const classes = [...e.target.classList];
        if (classes[classes.length - 1] === "less") {
            const quantity_wrapper = e.target.previousSibling;
            //const id_string = e.target.parentElement.parentElement.id;
            const id = book.id;
            update_quantity('cart', id, "-");
            if (parseInt(quantity_wrapper.innerHTML) === 0) {
                //e.target.parentElement.parentElement.remove();
                quantity_wrapper.innerHTML = 0;
            }
            else {
                quantity_wrapper.innerHTML = parseInt(quantity_wrapper.innerHTML) - 1;
                // changing the array quantity
            }
            //update_total(total_price_HTML);
        }
        else if (classes[classes.length - 1] === "fa-minus") {
            const quantity_wrapper = e.target.parentElement.previousSibling;
            //const id_string = e.target.parentElement.parentElement.parentElement.id;
            const id = book.id;
            update_quantity('cart', id, "-");
            if (parseInt(quantity_wrapper.innerHTML) === 0) {
                //e.target.parentElement.parentElement.parentElement.remove();
                quantity_wrapper.innerHTML = 0;
            }
            else {
                quantity_wrapper.innerHTML = parseInt(quantity_wrapper.innerHTML) - 1;
                // changing the array quantity
            }
            //update_total(total_price_HTML);
        }
    });

    const back_btn = document.querySelector('.back');
    address_to_here = "home/book/single-book/";
    back_btn.addEventListener('click', () => {
        map_handler();
    })
}

//function to render final stage of cart
function render_final_stage_cart(cart_items, discount) {
    let total_price = 0;
    cart_items.forEach(c => {
        total_price += c.count_in_user_cart * c.price;
    });
    const pay_amount = total_price - (user.amount + discount)
    const final_cart_stage_content = `
    <div class="cart-final-stage-wrapper">
                    <div class="cart-header">
                        <div class="back">
                            <i class="fa fa-caret-right"></i>
                        </div>
                        <div class="cart-page-title">
                            سبد خرید
                        </div>
                    </div>
                    <div class="main-content">
                        <div class="cart-details">
                            <div class="prods-incart-text">
                                <span class="number">
                                    ${cart_items.length}
                                </span>
                                محصول در سبد خرید شما موجود است :
                            </div>
                            <div class="view-btn">
                                مشاهده
                            </div>
                        </div>
                        <div class="cart-notice">
                            <p>
                                <span class="notice">
                                    نکته مهم :
                                </span>
                                شما باید قبلا در ربات و از بخش اطلاعات پستی ، اطلاعات حقیقی خود را ثبت
                                کرده باشید تا ما بتونیم محصولات رو برای شما ارسال کنیم ؛ اگر این کار را نکرده باشید ، اجازه پرداخت
                                نخواهید داشت .
                            </p>
                        </div>
                        <div class="cart-items-details">
                            <div class="cart-total-price">
                                <span class="label">
                                    مجموع مبلغ سبد خرید شما :
                                </span>
                                <span class="total-price">
                                    <span class="price">
                                        ${total_price}
                                    </span>
                                    تومان
                                </span>
                            </div>
                            <div class="cart-discount">
                                <span class="label">
                                    تخفیف :
                                </span>
                                <span class="total-price">
                                    <span class="price">
                                        ${discount}
                                    </span>
                                    تومان
                                </span>
                            </div>
                            <div class="cart-wallet">
                                <span class="label">
                                    اعتبار کیف پول :
                                </span>
                                <span class="total-price">
                                    <span class="price">
                                        ${user.amount}
                                    </span>
                                    تومان
                                </span>
                            </div>
                            <div class="cart-final-pay">
                                <span class="label">
                                    قابل پرداخت :
                                </span>
                                <span class="total-price">
                                    <span class="price">
                                        ${pay_amount}
                                    </span>
                                    تومان
                                </span>
                            </div>
                        </div>
                        <div class="pay-btn-wrapper">
                            <div class="pay-amount">
                                پرداخت
                                <span class="amount">
                                    ${pay_amount}
                                </span>
                                <span class="curency">
                                    تومان
                                </span>
                            </div>
                            <span class="pointer">
                                <i class="fa fa-caret-left"></i>
                            </span>
                        </div>
                    </div>
                </div>
    `;
    main_area.innerHTML = final_cart_stage_content;

    const back_btn = document.querySelector('.back');
    address_to_here += "finalStage/";
    back_btn.addEventListener('click', () => {
        map_handler();
    });
    pay_btn_wrapper = document.querySelector('.pay-btn-wrapper');
    pay_btn_wrapper.addEventListener('click', () => {
        axios
            //.post("https://daryaftyar.ir/storeV2/cart/341393410", JSON.stringify(cart))
            .patch('https://daryaftyar.ir/storeV2/cart/341393410', {
                cart_details: cart_items,
                cart_items_ids: cart.cart_items_ids,
                cart_summary: cart.cart_summary
            })
            .then(res => {
                console.log(res);
            })
            .catch(err => console.log(err));

    })
    const view_btn = document.querySelector('.view-btn');
    view_btn.addEventListener("click", () => {
        map_handler();
    })
}


// function to render sort by filter 
function render_sort_by_filter() {
    const sort_by_filter_content = `

    `;

    books_main_content.innerHTML += " ";
}

// function for redirecting the user to the required page
function map_handler() {
    let address = address_to_here.split("/");

    let len = address.length - 2;
    // if we are in book page
    if (address[len] === "book" && address[len - 1] === "home") {
        render_first_page();
        address_to_here = "home/"
    }
    // if we are in filters and book page
    else if (address[len] === "filter" && address[len - 1] === "book") {
        render_books(filtered_book);
        address_to_here = "home/book/";
    }
    // if we are in cart page from home
    else if (address[len] === "cart" && address[len - 1] === "home") {
        render_first_page(cart_items);
        address_to_here = "home/";
    }
    // if we are in cart page from home
    else if ((address[len] === "cart" && address[len - 1] === "book") || (address[len] === "cart" && address[len - 1] === "single-book")) {
        render_books(needed_books);
        address_to_here = "home/book/";
    }
    // if we are in wallet page from home
    else if (address[len] === "wallet" && address[len - 1] === "home") {
        render_first_page();
        address_to_here = "home/"
    }
    // if we were in single book page
    else if (address[len] === "single-book" && address[len - 1] === "book") {
        //render_loading();
        render_books(needed_books);
        address_to_here = "home/book/";
    }
    // if we were in single book page
    else if (address[len] === "finalStage" && address[len - 1] === "cart") {
        render_shopping_cart(cart_items);
        address_to_here = "home/cart/";
    }
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


//book clicked
function book_clicked(e) {
    let clicked_book = "";
    if (e.target.id.includes("book-")) {
        const splited = e.target.id.split("-")
        const id = parseInt(splited[splited.length - 1]);
        clicked_book = books.find(book => {
            return book.id === id;
        });
        render_single_book(clicked_book);
    }
}

// update quantity
function update_quantity(type, id, sign) {
    let item = [];

    if (!cart.cart_items_ids.includes(id)) {
        item = books.find(c => {
            return c.id === id;
        });
        // cart_items.push({ ...item, count_in_user_cart: 1 });
        // cart.cart_items_ids.push(id);
    }
    else {
        item = cart_items.find(c => {
            return c.id === id;
        });
        // cart.cart_items_ids.push(id);
    }
    if ((type === "cart") && (sign === "+")) {
        item.count_in_user_cart += 1;
    }
    else if ((type === "cart") && (sign === "-")) {
        if (item.count_in_user_cart === 1) {
            item.count_in_user_cart -= 1;
            const index = cart_items.indexOf(item);
            cart_items.splice(index, 1);
            cart.cart_items_ids = cart.cart_items_ids.filter(ci => parseInt(ci) !== id);
        }
        // else if (item.count_in_user_cart === 0) {
        //     item.count_in_user_cart = 0;
        // }
        else {
            item.count_in_user_cart -= 1;
            if (cart.cart_items_ids.includes(id)) {
                cart.cart_items_ids.splice(cart.cart_items_ids.indexOf(id), 1);
            }
        }

    }
    else if ((type === "book") && (sign === "+")) {
        // if (item.count_in_user_cart === 0) {
        //     cart_items.push(item);
        // }
        if (!cart.cart_items_ids.includes(id)) {
            cart_items.push({ ...item, count_in_user_cart: 1 });
            cart.cart_items_ids.push(id);
        }
        else {
            cart.cart_items_ids.push(id);
        }
        item.count_in_user_cart += 1;
    }
    footer_cart_wrapper_HTML.innerHTML = cart_items.length;
    console.log(cart_items, cart.cart_items_ids);
}
//function to update total price
function update_total(el) {
    let sum = 0;
    const cart_empty_HTML = document.querySelector('.cart-is-empty');
    const cart_main_content = document.querySelector('.cart-main-content');
    cart_items.forEach(c => {
        sum += c.count_in_user_cart * c.price;
    });
    if (sum != 0) {
        cart_empty_HTML.style.display = "none";
        el.innerHTML = sum;
    }
    else {
        el.innerHTML = sum;
        cart_main_content.innerHTML = '';
        cart_main_content.appendChild(cart_empty_HTML);
        cart_empty_HTML.style.display = "flex";
    }
    cart.cart_summary.total_price_of_items = sum;
    //console.log(cart);
}

// function for applying filters on books
function adjust_books(state) {

    filtered_book = [];
    let filterd_by_pubs = []
    let filterd_by_sub = []
    let filtered_by_year = [];
    publishers.map(p => p.clicked = false);
    subjects.map(s => s.clicked = false);
    grades.map(s => s.clicked = false);
    clicked_publishers_ids.forEach(cp => {
        filterd_by_pubs = filterd_by_pubs.concat(books.filter(b => b.publisher === el_by_id(publishers, cp).name));
        let cliked_pub = publishers.filter(p => p.id == cp);
        cliked_pub.map(t => t.clicked = true);
    });
    clicked_subjects.forEach(sub => {
        filterd_by_sub = filterd_by_sub.concat(books.filter(b => b.subject === el_by_id(subjects, sub).id));
        let clicked_sub = subjects.filter(s => s.id == sub);
        clicked_sub.map(t => t.clicked = true);
    });
    clicked_grades.forEach(sub => {
        filtered_by_year = filtered_by_year.concat(books.filter(b => b.book_year === el_by_id(grades, sub).id));
        let clicked_sub = grades.filter(s => s.id == sub);
        clicked_sub.map(t => t.clicked = true);
    });
    let ids_by_pub = [];
    filterd_by_pubs.forEach(b => ids_by_pub.push(b.id));
    let ids_by_sub = [];
    filterd_by_sub.forEach(b => ids_by_sub.push(b.id));
    let ids_by_year = [];
    filtered_by_year.forEach(b => ids_by_year.push(b.id));

    // operates as or
    let final_ids = ids_by_pub.concat(ids_by_sub, ids_by_year);
    //operating as and
    if ((((ids_by_pub.length !== 0) && (ids_by_sub.length !== 0)) && (ids_by_year.length !== 0))) {
        // const set = new Set(final_ids);
        // final_ids = final_ids.filter(item => {
        //     if (set.has(item)) {
        //         set.delete(item);
        //     } else {
        //         return item;
        //     }
        // });
        // final_ids.forEach(id => {
        //     filtered_book = filtered_book.concat(books.filter(b => b.id === id));
        // });
        const my_count = {};
        final_ids.map(id => toString(id));
        final_ids.forEach(element => {
            my_count[element] = (my_count[element] || 0) + 1;
        });
        let obj_id = [];
        for (const key in my_count) {
            if (my_count[key] === 3) {
                obj_id.push(key);
            }
        }
        obj_id = obj_id.map(id => parseInt(id));
        obj_id.forEach(id => {
            filtered_book = filtered_book.concat(books.filter(b => b.id === id));
        })
    }
    else {
        if (
            ((ids_by_pub.length !== 0) && (ids_by_sub.length !== 0))
            ||
            ((ids_by_year.length !== 0) && (ids_by_pub.length !== 0))
            ||
            ((ids_by_year.length !== 0) && (ids_by_sub.length !== 0))
        ) {
            const my_count = {};
            final_ids.map(id => toString(id));
            final_ids.forEach(element => {
                my_count[element] = (my_count[element] || 0) + 1;
            });
            let obj_id = [];
            for (const key in my_count) {
                if (my_count[key] === 2) {
                    obj_id.push(key);
                }
            }
            obj_id = obj_id.map(id => parseInt(id));
            //console.log(obj_id);
            obj_id.forEach(id => {
                filtered_book = filtered_book.concat(books.filter(b => b.id === id));
            })
        }
        else if ((ids_by_pub.length !== 0) || (ids_by_sub.length !== 0) || (ids_by_year.length !== 0)) {
            final_ids.forEach(id => {
                filtered_book = filtered_book.concat(books.filter(b => b.id === id));
            });
        }
    }

    // if (state === "pub") {
    //     publishers.map(p => p.clicked = false);
    //     // console.log(publishers);
    //     clicked_publishers_ids.forEach(cp => {
    //         //console.log(el_by_id(publishers, cp).name);
    //         filtered_book = filtered_book.concat(books.filter(b => b.publisher === el_by_id(publishers, cp).name));
    //         let cliked_pub = publishers.filter(p => p.id == cp);
    //         cliked_pub.map(t => t.clicked = true);
    //     });
    //     //console.log(filtered_book);
    // }
    // else if (state === "sub") {
    //     subjects.map(s => s.clicked = false);
    //     clicked_subjects.forEach(sub => {
    //         filtered_book = filtered_book.concat(books.filter(b => b.subject === el_by_id(subjects, sub).id));
    //         let clicked_sub = subjects.filter(s => s.id == sub);
    //         clicked_sub.map(t => t.clicked = true);
    //     });
    //     console.log(filtered_book);
    // }
    // else if (state === "year") {
    //     grades.map(s => s.clicked = false);
    //     clicked_grades.forEach(sub => {
    //         filtered_book = filtered_book.concat(books.filter(b => b.book_year === el_by_id(grades, sub).id));
    //         let clicked_sub = grades.filter(s => s.id == sub);
    //         clicked_sub.map(t => t.clicked = true);
    //     });
    //     console.log(filtered_book);
    // }
    console.log(filtered_book);
}

// function to get el by id 
function el_by_id(arr, id) {
    let my_return = "sina";
    arr.forEach(a => {
        if (a.id === id)
            my_return = a;
    });
    return my_return;
}

// etc


