
document.cookie = 'cookie2=value2; SameSite=None; Secure';
// * ids with telegram object
// filling the user via telegram object
const us_id = window.Telegram.WebApp.initData;
// spiliting data to find the id of the user
const final_id = us_id.split("%22")[2].split("3A")[1].split("%")[0];
//const final_id = "341393410";
// ! variables
// user global variable 
let user = {};
// the main use of this array is to have all the books from api
let books = [];
// making a book year array 
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
        id: 18,
        name: "کنکور"
    },
    {
        id: 0,
        clicked: false,
        name: "فارغ التحصیل"
    }
];
// for form
let data_user = [];
// cart varibale 
var cart = [];
// cart items variables
let cart_items = [];
// variable for filtered book
// when books been filtered by the main 3 filters in the book page the result would be shown here
let filtered_book = [];
// making subjects array for the books
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
// making courses array for books
const courses = [
    {
        id: 1,
        clicked: false,
        name: "ادبیات فارسی"
    },
    {
        id: 2,
        clicked: false,
        name: "عربی"
    },
    {
        id: 3,
        clicked: false,
        name: "دین و زندگی"
    },
    {
        id: 4,
        clicked: false,
        name: "زبان انگلیسی"
    },
    {
        id: 5,
        clicked: false,
        name: "زیست شناسی"
    },
    {
        id: 6,
        clicked: false,
        name: "ریاضیات تجربی"
    },
    {
        id: 7,
        clicked: false,
        name: "هندسه و گسسته"
    },
    {
        id: 8,
        clicked: false,
        name: "فیزیک"
    },
    {
        id: 9,
        clicked: false,
        name: "شیمی"
    },
    {
        id: 10,
        clicked: false,
        name: "فلسفه و منطق"
    },
    {
        id: 11,
        clicked: false,
        name: "مشاوره"
    },
    {
        id: 12,
        clicked: false,
        name: "زمین شناسی"
    },
    {
        id: 13,
        clicked: false,
        name: "علوم فنون ادبی"
    },
    {
        id: 14,
        clicked: false,
        name: "جامعه شناسی"
    },
    {
        id: 15,
        clicked: false,
        name: "اقتصاد"
    },
    {
        id: 16,
        clicked: false,
        name: "تاریخ و جغرافیا"
    },
    {
        id: 17,
        clicked: false,
        name: "روانشناسی"
    },
    {
        id: 18,
        clicked: false,
        name: "علوم اجتماعی"
    },
    {
        id: 19,
        clicked: false,
        name: "سوالات متفرقه"
    },
    {
        id: 20,
        clicked: false,
        name: "ریاضیات انسانی"
    },
    {
        id: 21,
        clicked: false,
        name: "حسابان"
    }
];
// making publisher array 
// an array to have all publishers stored in a place
let publishers = [];
//books according to users data
let needed_books = [];
// body html node
const body = document.querySelector('body');
// the html element which all the datas are located
const main_area = document.querySelector('.root');
// footer menu for checkout btn
const footer_btn_checkout = document.querySelector('.footer-col-3');
// footer menu for accssesing the home btn
const footer_btn_home = document.querySelector('.footer-col-2');
// footer menu for cart btn
const footer_btn_cart = document.querySelector('.footer-col-1');
//cart count wrapper
const footer_cart_wrapper_HTML = document.querySelector('.cart-item-number');
//pause html
const pause_wrapper = document.querySelector('.pause');
//a place holder for loading the modals
const modal_wrapper = document.querySelector('.modal-pacle-holder');
// the error wrapper place 
const error_modal = document.querySelector(".error-modal");
// variable to know where where you lastly
let address_to_here = "book/";
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
// a consatant for the search icon
let search_btn = [];
// filter in book page about publishers
let book_publisher = [];
// filter in book page about subject of books
let book_subjects = [];
// filter in book page about paye
let book_year_of_study = [];
// filter in book about course
let book_course = [];
// btn in the book page for sorting 
let sort_by_btn = [];
// books main content element
let books_main_content = [];
//publishers dom element
let publishers_DOM = [];
//book year dom element
let grades_DOM = [];
//subjects dom element
let subjects_DOM = [];
//subjects dom element
let courses_DOM = [];
// clicked publisher for filters
let clicked_publishers_ids = [];
// clicked book year for filter
let clicked_grades = [];
// clicked book year for filter
let clicked_subjects = [];
// clicked courses for filter
let clicked_courses = [];
// pay btn html
let pay_btn_wrapper = [];
//global error for test
let global_err = "I am empty for now";
// all filters is filled once (bad idea !)
let is_filled_pub = false;
let is_filled_sub = false;
let is_filled_year = false;
let is_filled_course = false;
// filter is activated
let filter_activated = false;
// search item is open
let is_search_open = false;
// page count
let curent_page = 1;
// html documnet for pagination
let pagination_HTML = [];
// sorted by status
let sorted_by = "هیچ کدام";
// the array of the first books un touched
let first_rendered_books = [];
// a variable for send request to buy
let chosen_coin_amount = 1;
// ! notice this method 
let let_the_cart = false;
// ! events
// ! loading complete method
//documnet load to render first page
document.addEventListener("DOMContentLoaded", () => {
    //RENDER LOADING till the main pages be loaded
    render_loading();
    //clearPage();
    //render_welcome()
    //render_buy_coin();
    // getting the user from api
    /*axios
        .get("https://daryaftyar.ir/storeV2/books30")
        .then((res) => {
            // filling the main books varibale
            needed_books = res.data;
            first_rendered_books = res.data;
            //needed_books = books.slice(0, 30);
        })
        .catch((err) => render_errors(err.message));*/
    axios
        .get("https://daryaftyar.ir/storeV2/books")
        .then((res) => {
            // filling the main books varibale
            books = res.data;
            needed_books = books.slice(0, 30);
            first_rendered_books = books.slice(0, 30);
            //clearPage();
            setTimeout(() => {
                render_books(needed_books);
            }, 200);
        })
        .catch((err) => render_errors(err.message));
    axios
        .get(`https://daryaftyar.ir/storeV2/user/${final_id}`)
        //.get(`https://daryaftyar.ir/storeV2/user/341393410`)
        .then((res) => {
            user = res.data;
            //console.log(user)
            render_welcome();
        })
        .catch((err) => render_errors(err.message));
    axios
        .get(`https://daryaftyar.ir/storeV2/cart/${final_id}`)
        //.get("https://daryaftyar.ir/storeV2/cart/341393410")
        .then((res) => {
            //filling the cart with the main object from back end
            cart = res.data;
            //filling the cart_items var with items in cart for rendering
            cart_items = cart.cart_details;
            //having the label in the footer the correct number
            footer_cart_wrapper_HTML.innerHTML = cart_items.length;
            // unnessecary value update (back end ids where not correcr)
            cart.cart_items_ids = cart.cart_items_ids.map(id => parseInt(id));
            //console.log(cart);
        })
        .catch((err) => render_errors(err.message));
    axios
        .get("https://daryaftyar.ir/storeV2/pubs")
        .then((res) => {
            res.data.forEach(p => {
                publishers.push({ ...p, clicked: false });
                //clicked_publishers_ids.push(p.id)
            });
        })
        .catch((err) => render_errors(err.message));
    axios
        .get(`https://daryaftyar.ir/storeV2/user_real_data/${final_id}`)
        .then((res) => {
            data_user = res.data;
            //console.log(data_user)
            //render_user_data_form();
        })
        .catch((err) => render_errors(err.message));
});
// rendring first page via menu btn
footer_btn_home.addEventListener('click', () => {
    if (is_search_open) {
        search_books_opener();
    }
    // activate_modal_single_book("disactive");
    disactive_modals();
    //render_first_page();
    render_books(needed_books);
});
//rendering cart via menu btn
footer_btn_cart.addEventListener('click', () => {
    // clear the main page for rendering shopping cart
    clearPage();
    // calling render shopping cart via cart items filled with back end data
    render_shopping_cart(cart_items);
    if (is_search_open) {
        search_books_opener();
    }
    // activate_modal_single_book("disactive");
    disactive_modals();
    // checking the cart items length and calling the update total method for adjusting the situtaion
    if (cart_items.length === 0) {
        const total_price_HTML = document.querySelector('.total-price .total-price-amount');
        const discounted_price_HTML = document.querySelector('.discounted-price');
        update_total(total_price_HTML, discounted_price_HTML);
    }
});
//render checkout page via menu btn
footer_btn_checkout.addEventListener('click', () => {
    // page is not ready so we have to render coming soon page
    disactive_modals();
    render_coming_soon_page();
    render_wallet(user);
});
// ! functions
// function for rendering the loading page
function render_loading() {
    const loading_HTML = `
    <div class="loading">
        <i class="fa fa-spinner"></i>
    </div>
    `;
    main_area.innerHTML = loading_HTML;
}
// function which clears the main area 
function clearPage() {
    if ([...body.classList].includes("welcome")) {
        body.classList.remove("welcome");
    }
    main_area.firstElementChild.style.transform = "scale(0)";
}
// function to animate rendering
function render_now(el) {
    setTimeout(() => {
        el.style.transform = "scale(1)";
    }, 100);
}
// function to render welcome page
function render_welcome() {
    clearPage();
    const welcome_content = `
        <div class="welcome-wrapper">
        <div class="welcome-text">
            <div class="welcome-info">
            <span>
                ${user.name}
            </span>
            ,
            سلام 
            </div>
               <div class="static-text">
                 به فروشگاه دریافت یار خوش اومدی
               </div>
            </div>
            <div class="gif-wrapper">
                <img src="./assets/images/welcome-photo.gif" alt="به ربات دریافت یار خوش آمدید" class="welcome-img">
            </div>
            <!--<div class="start-btn">
                <div class="content">
                    شروع
                </div>
            </div>-->
        </div>
    `;
    main_area.innerHTML = welcome_content;
    const welcome = document.querySelector(".welcome-wrapper");
    render_now(welcome);
    // const start_btn = document.querySelector(".start-btn");
    // start_btn.addEventListener("click", () => {
    //     render_first_page();
    // });
    body.classList.add("welcome");
}
// render first page
function render_first_page() {
    // using the address variable for having the map method
    address_to_here = "home/";
    //clearing the area for first page
    clearPage();
    // making first page html content
    // const firstPageHTML = `
    //     <div class="first-page">
    //         <div class="greetings">
    //             <div class="user-info">
    //                 سلام 
    //                 <span class="usersName-wrapper">
    //                     ${user.name}
    //                 </span>
    //             </div>
    //             <div class="greeting-messsage">
    //                 <p>
    //                     <bdi>
    //                         به فروشگاه دریافت یار خوش آمدید!
    //                     </bdi>
    //                 </p>
    //             </div>
    //         </div>
    //         <div class="wallet-wrapper">
    //             <div class="wallet-title-wrapper">
    //                 <div class="wallet-title">
    //                     اعتبار کیف پول
    //                 </div>
    //                 <div class="wallet-info">
    //                     <div class="wallet-amount-wrapper">
    //                         <span class="wallet-amount">
    //                             ${split_in_three(user.amount)}
    //                         </span>
    //                         <span class="wallet-curency">
    //                             تومان 
    //                         </span>
    //                     </div>
    //                     <span class="sperator">|</span>
    //                     <div class="wallet-exprie-details-wrapper">
    //                         <span class="expire-date">
    //                             ${split_in_three(user.days_left)} 
    //                         </span>
    //                         <span class="wallet-expire-text">
    //                             روز مهلت تا استفاده
    //                         </span>
    //                     </div>
    //                 </div>
    //             </div>
    //             <div class="increase-wallet-wrapper">
    //                 <span class="wallet-increase-text">
    //                     افزایش
    //                 </span>
    //                 <span class="wallet-increase-icon">
    //                     <i class="fa fa-caret-left"></i>
    //                 </span>
    //             </div>
    //         </div>
    //         <div class="books-class-wrapper">
    //             <div class="book-class-btns books">
    //                 کتاب ها
    //             </div>
    //             <div class="book-class-btns classes">
    //                 کلاس ها
    //             </div>
    //         </div>
    //     </div>
    //     `;
    const first_page_content = `
        <div class="main-page">
                <!--<div class="header">
                    <div class="user-wrapper">
                        سلام
                        <span class="user-name">
                            ${user.name}
                        </span>
                    </div>
                    <div class="welcome-to-shop">
                        به فروشگاه دریافت یار خوش اومدی
                    </div>
                </div>-->
                <div class="wallet-wrapper">
                    <div class="wallet-title">
                        اعتبار کیف پول
                    </div>
                    <div class="amount-wrapper">
                        <span class="amount">
                            ${split_in_three(user.amount)}
                        </span>
                        تومان اعتبار
                    </div>
                    <div class="days-left-wrapper">
                        <span class="days-left">
                            ${user.days_left}
                        </span>
                        روز مهلت استفاده
                    </div>
                </div>
                <div class="more-credit-wrapper">
                    <div class="plus-wrapper">
                        <span class="plus-vertical"></span>
                        <span class="plus-horizontal"></span>
                    </div>
                    <div class="credit-text">
                    افزایش اعتبار
                    </div>
                </div>
                <div class="books-and-class-btn-wrapper">
                    <div class="box-btn books-wrapper">
                        کتاب ها
                        <img src="./assets/images/box-icon-2.png" alt="" class="box-icon">
                    </div>
                    <div class="box-btn class-wrapper">
                        کلاس ها
                        <img src="./assets/images/box-icon-1.png" alt="" class="box-icon">
                    </div>
                </div>
                <div class="best-of-wrapper">
                    <div class="best-of-box best-of-1">
                            بهترین های 
                        <span class="best-of-title">
                            شیمی
                        </span>
                    </div>
                    <div class="best-of-box best-of-2">
                        بهترین های 
                        <span class="best-of-title">
                            ریاضی
                        </span>
                    </div>
                    <div class="best-of-box best-of-3">
                        بهترین های 
                        <span class="best-of-title">
                            ادبیات
                        </span>
                    </div>
                </div>
            </div>
    `;
    const first_page_new = `
        <div class="main-page-new-wrapper">
            <div class="header">
                <div class="coin-wrapper">
                    <img src="./assets/images/coin-icon.png" alt="coin-img" class="coin-img" loading="lazy">
                    <span class="coin-count">
                        ${user.coin}
                    </span>
                </div>
                <div class="wallet-wrapper">
                    <img src="./assets/images/wallet-icon.png" alt="wallet-img" class="wallet-img" loading="lazy">
                    <span class="wallet-count">
                        T
                        &nbsp;
                        <bdi>
                            ${user.amount}
                        </bdi>
                    </span>
                </div>
            </div>
            <div class="main-content">
                <div class="main-btn-wrapper">
                    <div class="item item-book">
                        <div class="title">
                            کتاب ها
                        </div>
                        <img src="./assets/images/main-page-book-icon.png" alt="">
                    </div>
                    <div class="item item-week-sale">
                        <div class="title">
                            پرفروش های هفته
                        </div>
                        <img src="./assets/images/main-page-other-icon.png" alt="">
                    </div>
                    <div class="item item-sale-1">
                        <div class="title">
                            پرفروش های شیمی
                        </div>
                        <img src="./assets/images/main-page-other-icon.png" alt="">
                    </div>
                    <div class="item item-sale-2">
                        <div class="title">
                            پرفروش های شیمی
                        </div>
                        <img src="./assets/images/main-page-other-icon.png" alt="">
                    </div>
                </div>
                <div class="special-offer-wrapper">
                    <div class="title">
                        پیشنهاد های ویژه
                    </div>
                    <div class="special-offer-btns-wrapper">
                        <div class="special-offer-box">
                            <div class="item-down item-1">
                                <div class="title-item">
                                    پرفروش های شیمی
                                </div>
                                <img src="./assets/images/main-page-other-icon.png" alt="">
                            </div>
                            <div class="item-down item-1">
                                <div class="title-item">
                                    پرفروش های شیمی
                                </div>
                                <img src="./assets/images/main-page-other-icon.png" alt="">
                            </div>
                            <div class="item-down item-1">
                                <div class="title-item">
                                    پرفروش های شیمی
                                </div>
                                <img src="./assets/images/main-page-other-icon.png" alt="">
                            </div>
                            <div class="item-down item-1">
                                <div class="title-item">
                                    پرفروش های شیمی
                                </div>
                                <img src="./assets/images/main-page-other-icon.png" alt="">
                            </div>
                            <div class="item-down item-1">
                                <div class="title-item">
                                    پرفروش های شیمی
                                </div>
                                <img src="./assets/images/main-page-other-icon.png" alt="">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
    // appending content of first page to the main area
    main_area.innerHTML = first_page_new;
    const main_page = document.querySelector('.main-page-new-wrapper');
    render_now(main_page);
    // fill the amount btn
    increase_amount = document.querySelector('.wallet-count');
    // adding event listener to increase btn
    increase_amount.addEventListener('click', () => {
        render_wallet(user);
    });
    // fill the books btn
    books_btn = document.querySelector('.item-book');
    // adding event listener to books btn
    books_btn.addEventListener('click', () => {
        // if filters are active the main page should be loaded with filtered books
        if (filter_activated) {
            render_books(needed_books.slice(0, 30));
        }
        else {
            render_books(needed_books);
        }
    });
    const coin_icon = document.querySelector('.coin-wrapper');
    coin_icon.addEventListener("click", () => {
        render_coin();
    })

    // fill the classes btn
    // classes_btn = document.querySelector('.class-wrapper');
    // // adding event listener to classes btn
    // classes_btn.addEventListener('click', () => {
    //     // some function 
    //     render_coming_soon_page();
    // });

    // const best_of_1 = document.querySelector(".best-of-1");
    // best_of_1.addEventListener("click", () => {
    //     render_coming_soon_page();
    // });
    // const best_of_2 = document.querySelector(".best-of-2");
    // best_of_2.addEventListener("click", () => {
    //     render_coming_soon_page();
    // });
    // const best_of_3 = document.querySelector(".best-of-3");
    // best_of_3.addEventListener("click", () => {
    //     render_coming_soon_page();
    // });
}
//render book page
function render_books(books1) {
    clearPage();
    disactive_modals();
    //map address
    address_to_here = stop_repeatation_in_addres("book", address_to_here) ? address_to_here + "book/" : address_to_here;
    //address_to_here += "book/";
    // creating static contents of the book page
    // const static_contents = `
    //  <div class="books-wrapper">
    //         <div class="books-header">
    //             <div class="back">
    //                 <i class="fa fa-caret-right"></i>
    //             </div>
    //             <div class="books-page-title">
    //                 کتاب ها
    //             </div>
    //             <div class="search-icon">
    //                 <i class="fa fa-search"></i>
    //             </div>
    //         </div>
    //         <div class="book-order">
    //             <div class="order-by-wrapper">
    //                 مرتب سازی بر اساس :
    //                 <span class="ordered-by">
    //                     ${sorted_by}
    //                 </span>
    //             </div>
    //             <div class="filter-opener">
    //                 <i class="fa fa-caret-left"></i>
    //             </div>
    //         </div>
    //         <div class="filters-wrapper">
    //                 <span class="filters fil-1">
    //                     انتشارات 
    //                     <span class="sub-filter">
    //                         ${(clicked_publishers_ids.length === 0) ? "( همه )" : (clicked_publishers_ids.length === publishers.length) ? "( همه )" : " ( " + clicked_publishers_ids.length + " ) "}    
    //                     </span>
    //                 </span>
    //                 <span class="filters fil-2">
    //                     رشته 
    //                     <span class="sub-filter">
    //                         ${(clicked_subjects.length === 0) ? "( همه )" : (clicked_subjects.length === subjects.length) ? "( همه )" : " ( " + clicked_subjects.length + " ) "}    
    //                     </span>
    //                 </span>
    //                 <span class="filters fil-3">
    //                     پایه
    //                     <span class="sub-filter">
    //                         ${(clicked_grades.length === 0) ? "( همه )" : (clicked_grades.length === grades.length) ? "( همه )" : " ( " + clicked_grades.length + " ) "}    
    //                     </span>
    //                 </span>
    //                 <span class="filters fil-4">
    //                     درس
    //                     <span class="sub-filter">
    //                         ${(clicked_courses.length === 0) ? "( همه )" : (clicked_courses.length === courses.length) ? "( همه )" : " ( " + clicked_courses.length + " ) "}    
    //                     </span>
    //                 </span>
    //             </div>
    //         <div class="main-content">

    //             <div class="books">

    //             </div>
    //         </div>
    //         <div class="page-count">
    //         </div>
    //     </div>
    // `;
    // const books_content = `
    //     <div class="books-page-wrapper">
    //         <div class="header">
    //             <div class="back">
    //                 <img src="./assets/images/back-forward-btn.png" alt="back-img" class="back-img" loading="lazy">
    //             </div>
    //             <div class="books-page-title">
    //                 کتاب ها
    //             </div>
    //             <div class="search-icon">
    //                 <i class="fa fa-search"></i>
    //             </div>
    //         </div>
    //         <div class="main-content">
    //             <div class="sort-by-wrapper">
    //                 <div class="content">
    //                     مرتب سازی بر اساس : 
    //                     <span class="ordered-by">
    //                         ${sorted_by}
    //                     </span>
    //                 </div>
    //                 <div class="go-to-sort-by">
    //                     <img src="./assets/images/back-forward-btn.png" alt="sort-by-img">
    //                 </div>
    //             </div>
    //             <div class="filters-wrapper">
    //                 <span class="filter fil-1">
    //                     انتشارات
    //                 </span>
    //                 <span class="filter fil-2">
    //                     رشته
    //                 </span>
    //                 <span class="filter fil-3">
    //                     پایه
    //                 </span>
    //                 <span class="filter fil-4">
    //                     درس
    //                 </span>
    //             </div>
    //             <div class="books-wrapper">

    //             </div>
    //             <div class="page-count">
    //             </div>
    //         </div>
    //     </div>
    // `;
    const books_content = `
        <div class="books-page-wrapper">
            <div class="header">
                <div class="coin-wrapper">
                    <img src="./assets/images/coin-icon.png" alt="coin-img" class="coin-img" loading="lazy">
                    <span class="coin-count">
                         ${user.coin}
                    </span>
                </div>
                <div class="books-page-title">
                    کتاب ها
                </div>
                <div class="wallet-wrapper">
                    <img src="./assets/images/wallet-icon.png" alt="wallet-img" class="wallet-img" loading="lazy">
                    <span class="wallet-count">
                        T
                        &nbsp;
                        <bdi>
                            ${split_in_three(user.amount)}
                        </bdi>
                    </span>
                </div>
            </div>
            <div class="main-content">
                <div class="search-back-wrapper">
                    <div class="search-wrapper">
                        <input type="text" class="search-books" placeholder="جستجو ..." />
                        <img src="./assets/images/magnifier-icon.png" alt="search-icon" class="search-icon">
                    </div>
                    <div class="back">
                        <img src="./assets/images/back-forward-btn.png" alt="back-btn" class="back-img">
                    </div>
                </div>
                <div class="sort-by-wrapper">
                    <div class="content">
                        دسته بندی  بر اساس
                        <!-- <span class="ordered-by">
                            ${sorted_by}
                        </span> -->
                    </div>
                    <div class="go-to-sort-by">
                        <img src="./assets/images/down-icon.png" alt="sort-by-img">
                    </div>
                </div>
                <div class="filters-wrapper">
                    <span class="filter fil-1">
                        انتشارات
                    </span>
                    <span class="filter fil-2">
                        رشته
                    </span>
                    <span class="filter fil-3">
                        پایه
                    </span>
                    <span class="filter fil-4">
                        درس
                    </span>
                </div>
                <div class="books-wrapper">
                </div>
                <div class="page-count">
                </div>
            </div>
        </div>
    `;
    // appending the static contents
    main_area.innerHTML = books_content;

    let search_input = document.querySelector('.search-books');
    search_input.addEventListener("focus", () => {
        search_books_opener();
    });
    // filling the books wrapper html
    books_wrapper = document.querySelector('.books-wrapper');
    // having the books page main content html
    books_main_content = document.querySelector('.main-content')

    // render wallet 
    const wallet_icon = document.querySelector('.wallet-wrapper');
    wallet_icon.addEventListener("click", () => {
        render_wallet(user);
    });
    // fill the pagination 
    const coin_icon = document.querySelector('.coin-wrapper');
    coin_icon.addEventListener("click", () => {
        render_coin();
    });
    pagination_HTML = document.querySelector('.page-count');
    if (filter_activated) {
        render_pagination(needed_books);
    }
    else {
        render_pagination(books);
    }
    // activating back btn
    back_btn = document.querySelector('.back');
    back_btn.addEventListener('click', () => {
        if (!is_search_open) {
            map_handler();
        }
        else {
            //console.log(is_search_open)
            search_books_opener();
            //map_handler();
        }
    });

    // use the search btn to open search
    search_btn = document.querySelector('.search-icon');
    search_btn.addEventListener('click', () => {
        search_books_opener();
        //address_to_here += "search/";
    });

    //activating publishers filter
    book_publisher = document.querySelector('.fil-1');
    book_publisher.addEventListener("click", () => {
        // clear the main content for having the place to load filters content
        clear_stage(books_wrapper);
        // calling the publisher filter render method
        publisher_filter(publishers);


        // hiding the pagination
        document.querySelector('.page-count').style.display = "none";

        //active-filter actions

        //selects all the filters and remove the active class
        [...document.querySelectorAll('.filters')].forEach(item => item.classList.remove('active-filter'));
        //adds active to only the clicked method
        book_publisher.classList.add('active-filter');
        //calling the method to fill the books acording to the active filters
        adjust_books("pub");
    });

    //activating subjects filter
    book_subjects = document.querySelector('.fil-2');
    book_subjects.addEventListener("click", () => {
        // clear the html node for new content
        clear_stage(books_wrapper);
        // calling the subjects render method
        subject_filter(subjects);

        // hiding the pagination
        document.querySelector('.page-count').style.display = "none";

        //selects all the filters and remove the active class
        [...document.querySelectorAll('.filters')].forEach(item => item.classList.remove('active-filter'));
        //adds active to only the clicked method
        book_subjects.classList.add('active-filter');
        //calling the method to fill the books acording to the active filters
        adjust_books("sub");
    });


    //activating paye filter
    book_year_of_study = document.querySelector('.fil-3');
    book_year_of_study.addEventListener("click", () => {

        // clearing html node content for the filters content
        clear_stage(books_wrapper);
        // calling render grade filter methods
        grade_filter(grades);

        // hiding the pagination
        document.querySelector('.page-count').style.display = "none";

        //selects all the filters and remove the active class
        [...document.querySelectorAll('.filters')].forEach(item => item.classList.remove('active-filter'));
        //adds active to only the clicked method
        book_year_of_study.classList.add('active-filter');
        //calling the method to fill the books acording to the active filters
        adjust_books("year");
    });

    book_course = document.querySelector('.fil-4');
    book_course.addEventListener("click", () => {

        // clearing html node content for the filters content
        clear_stage(books_wrapper);
        // calling render grade filter methods
        course_filter(courses);

        // hiding the pagination
        document.querySelector('.page-count').style.display = "none";

        //selects all the filters and remove the active class
        [...document.querySelectorAll('.filters')].forEach(item => item.classList.remove('active-filter'));
        //adds active to only the clicked method
        book_course.classList.add('active-filter');
        //calling the method to fill the books acording to the active filters
        adjust_books("course");
    });

    //activating sort by btn
    sort_by_btn = document.querySelector('.go-to-sort-by');
    sort_by_btn.addEventListener('click', () => {
        // this part is disactivated so ...
        //render_filter_by();
        open_filter_by("active");
    });
    // check if the books are empty or not ( because of an error or th filters )
    if (books1.length !== 0) {
        // read each book and render it to the app
        books1.forEach((book) => {
            // const book_HTML = `
            //         <div class="book-item" id="book-${book.id}">
            //                 <img src="${book.img_url}" alt="" class="book-img" id="book-img-${book.id}"/>
            //                 <div class="publisher">
            //                     انتشارات :
            //                     <span class="publisher-name">
            //                         ${book.publisher}
            //                     </span>
            //                 </div>
            //                 <div class="book-name" id="book-name-${book.id}">
            //                     ${book.name}
            //                 </div>
            //                 <div class="book-price">
            //                     <span class="dynamic-price ${(book.discounted_price !== book.price) ? "has-discount" : " "}">
            //                         <span class="normal-price">
            //                         ${split_in_three(book.price)}
            //                         </span>
            //                         <span class="disocounted-price">
            //                         ${split_in_three(book.discounted_price)}
            //                         </span>
            //                     </span>
            //                     تومان
            //                 </div>
            //                 <div class="action-btns">
            //                     <span class="add-book">
            //                         <i class="fa fa-plus"></i>
            //                     </span><span class="book-quantity">
            //                         ${el_by_id(cart_items, book.id).count_in_user_cart || 0}
            //                     </span><span class="decrment-book">
            //                         <i class="fa fa-minus"></i>
            //                     </span>
            //                 </div>
            //             </div>
            // `;
            // const book_content = `
            //         <div class="book" id="book-${book.id}">
            //             <div class="img-wrapper"  id="book-imgWrapper-${book.id}">
            //                 <img src="${book.img_url}" alt="${book.name}" id="book-img-${book.id}">
            //             </div>
            //             <div class="title" id="book-name-${book.id}">
            //                 ${book.name}
            //             </div>
            //             <div class="publisher">
            //                 ${book.publisher}
            //             </div>
            //             <div class="prices-wrapper ${(book.discounted_price !== book.price) ? "has-discount" : " "}" >
            //                 <span class="discounted">
            //                     ${split_in_three(book.discounted_price)}
            //                 </span>
            //                 <span class="price">
            //                     ${split_in_three(book.price)}
            //                 </span>
            //             </div>
            //             <div class="btns-wrapper ${cart.cart_items_ids.includes(book.id) ? " " : "quan-0"}">
            //                 <span class="add-book">
            //                     <i class="fa fa-plus"></i>
            //                 </span><span class="book-quantity">
            //                     ${el_by_id(cart_items, book.id).count_in_user_cart || 0}
            //                 </span><span class="decrment-book">
            //                     <i class="fa fa-minus"></i>
            //                 </span>
            //             </div>
            //         </div>
            // `;
            const book_content = `
                <div class="book  ${cart.cart_items_ids.includes(book.id) ? "quan-0" : " "}" id="book-${book.id}">
                        <div class="img-wrapper" id="book-imgWrapper-${book.id}">
                            <img src="${book.img_url}" alt="${book.name}" id="book-img-${book.id}">
                        </div>
                        <div class="title" id="book-name-${book.id}">
                            ${book.name}
                        </div>
                        <div class="publisher">
                            ${book.publisher}
                        </div>
                        <div class="prices-wrapper ${(book.discounted_price !== book.price) ? " has-discount" : " "}">
                            <span class="price">
                                ${split_in_three(book.price)}
                                 تومان
                            </span>
                            <span class="discounted">
                                ${split_in_three(book.discounted_price)}
                                تومان
                            </span>
                        </div>
                        <div class="btns-wrapper" id="add-${book.id}">
                            <img src="./assets/images/plus-white.png" alt="" id="img-${book.id}">
                        </div>
                        <span class="discount-label ${(book.discounted_price === book.price) ? "dis-none" : ""}">
                            ${calculate_discount(book.price, book.discounted_price)}%
                        </span>
                    </div>
            `;
            books_wrapper.innerHTML += book_content;
        });
        // storing all books for being clicked and other actions
        const books_HTML = [...document.querySelectorAll('.book')];
        // adding event listener for all books and identify every book to be clicked and rendered
        books_HTML.forEach(item => {
            item.addEventListener('click', (e) => {
                //calling the book clicked method for identifying which book is clicked for single book render method
                book_clicked(e);
            });
            // handling more btn in book page
            const add_book_btn = item.querySelector('.btns-wrapper');
            add_book_btn.addEventListener('click', ({ target }) => {
                // if (target.id.split('-')[0] === "img") {
                //     console.log("img");
                //     target.parentElement.classList.add('quan-0');
                // }
                // else if (target.id.split('-')[0] === "add") {
                //     console.log("item")
                //     target.classList.add('quan-0');
                // }
                let id = parseInt(target.id.split('-')[1]);
                document.querySelector(`#book-${id}`).classList.add('quan-0');
                update_quantity('book', id, "+");
                //reading the clicked class
                // const classes = [...e.target.classList];
                // // if the span is clicked
                // if (classes[classes.length - 1] === "add-book") {
                //     // reading quantity wrapper from HTML DOM
                //     const quantity_wrapper = e.target.nextElementSibling;
                //     // increase the amount of the html node
                //     quantity_wrapper.innerHTML = parseInt(quantity_wrapper.innerHTML) + 1;

                //     // changing the array quantity

                //     //finding the book id via wrapper element's id
                //     const id_string = e.target.parentElement.parentElement.id;
                //     //turn it into a number for use of id
                //     const id = parseInt(id_string.split("-")[1]);
                //     // calling the function for updating the quality
                //     update_quantity('book', id, "+");

                // }
                // // if you have clicked on the i tag instead of span
                // else if (classes[classes.length - 1] === "fa-plus") {
                //     // finding the quantity wrapper on the DOM
                //     const quantity_wrapper = e.target.parentElement.nextElementSibling;
                //     // increasing the quantity on the HTML Live view
                //     quantity_wrapper.innerHTML = parseInt(quantity_wrapper.innerHTML) + 1;

                //     // changing the array quantity

                //     // finding the modified book id from html
                //     const id_string = e.target.parentElement.parentElement.parentElement.id;
                //     //turn it to a number
                //     const id = parseInt(id_string.split("-")[1]);
                //     // call the update quantity for the modifications
                //     update_quantity('book', id, "+");

                // }
            });
            // decreament items in book page
            // const less_btn = item.querySelector('.decrment-book');
            // less_btn.addEventListener('click', (e) => {
            //     // geting all the class for checking
            //     const classes = [...e.target.classList];
            //     // if you clicked on the span tag
            //     if (classes[classes.length - 1] === "decrment-book") {
            //         // find quantity wrapper on the HTML
            //         const quantity_wrapper = e.target.previousSibling;
            //         //find id via wrappers id
            //         const id_string = e.target.parentElement.parentElement.id;
            //         // turn id to a number and delete the prefix
            //         const id = parseInt(id_string.split("-")[1]);
            //         // call the update method fot modifications
            //         update_quantity('cart', id, "-");
            //         // if items quantity is 0 this condition prevents the number to be a negative value
            //         if (parseInt(quantity_wrapper.innerHTML) === 0) {
            //             // make the item stays on zero not a negative number
            //             quantity_wrapper.innerHTML = 0;

            //         }
            //         else {
            //             // changing the array quantity
            //             quantity_wrapper.innerHTML = parseInt(quantity_wrapper.innerHTML) - 1;
            //         }

            //     }
            //     // if you have clicked on the i tag instead of span tag
            //     else if (classes[classes.length - 1] === "fa-minus") {
            //         // find quantity wrapper on the HTML
            //         const quantity_wrapper = e.target.parentElement.previousSibling;
            //         //find id via wrappers id
            //         const id_string = e.target.parentElement.parentElement.parentElement.id;
            //         // turn id to a number and delete the prefix
            //         const id = parseInt(id_string.split("-")[1]);
            //         // call the update method fot modifications
            //         update_quantity('cart', id, "-");
            //         // if items quantity is 0 this condition prevents the number to be a negative value
            //         if (parseInt(quantity_wrapper.innerHTML) === 0) {
            //             // make the item stays on zero not a negative number
            //             quantity_wrapper.innerHTML = 0;
            //         }
            //         else {
            //             quantity_wrapper.innerHTML = parseInt(quantity_wrapper.innerHTML) - 1;
            //             // changing the array quantity
            //         }

            //     }
            // });

        });
    }
    // if we had no book to show we render this message for user
    else {
        const empty_content = `
            <div class="books-empty">
                متاسفانه کتابی یافت نشد :(
                <br />
                فیلتر های انتخابی رو چک کنید و دوباره امتحان کنید :)
            </div>
        `;
        books_wrapper.innerHTML = empty_content;
    }
    const book_HTML = document.querySelector('.books-page-wrapper');
    render_width(book_HTML);
}
// render publisher filter 
function publisher_filter(publishers) {
    books_wrapper.classList.add("filters-are-activated");
    // render and read each publisher
    // check the clicked status
    publishers.forEach((publisher) => {
        const publisher_HTML = `
            <span class="publisher-item ${!publisher.clicked ? "disabled" : " "}" id="publisher-${publisher.id}">
                ${publisher.name}
            </span>
        `;
        // add the html content to the dom 
        books_wrapper.innerHTML += publisher_HTML;
    });
    // create a button to adjust the changes and returns to the books page
    const save_and_return_btn_content = `
            <span class="save_and_return_btn fixed-btn">
            ذخیره و بازگشت
            </span>
        `;
    // add the btn content to the bottom of the publishers
    books_wrapper.innerHTML += save_and_return_btn_content;
    // select all publishers
    publishers_DOM = [...document.querySelectorAll('.publisher-item')];
    // adding events for all the publishers clicks
    publishers_DOM.forEach(el => {
        el.addEventListener('click', (e) => {
            // calling the clicked publishers identifier method for doing the necessary actions for the clicked publsihers
            clicked_publishers_identifier(e);
        });
    });
    // updatign the addres to have users place 
    address_to_here = stop_repeatation_in_addres("filter", address_to_here) ? address_to_here + "filter/" : address_to_here;
    //address_to_here += "filter/";
    //activating save and return button 
    document.querySelector('.save_and_return_btn').addEventListener("click", () => {
        books_wrapper.classList.remove("filters-are-activated");
        map_handler();
    });
}
// render book year filter 
function grade_filter(grades) {
    books_wrapper.classList.add("filters-are-activated");
    // * actions are the same as publishers filter

    grades.forEach((grade) => {
        const grade_HTML = `
            <span class="book-year-item ${!grade.clicked ? "disabled" : " "}" id="bookyear-${grade.id}">
                ${grade.name}
            </span>
        `;
        books_wrapper.innerHTML += grade_HTML;
    });
    const save_and_return_btn_content = `
            <span class="save_and_return_btn">
            ذخیره و بازگشت
            </span>
        `;
    books_wrapper.innerHTML += save_and_return_btn_content;
    grades_DOM = [...document.querySelectorAll('.book-year-item')];
    grades_DOM.forEach(el => {
        el.addEventListener('click', (e) => {
            clicked_grades_identifier(e);
        });
    });
    address_to_here = stop_repeatation_in_addres("filter", address_to_here) ? address_to_here + "filter/" : address_to_here;
    //address_to_here += "filter/";
    document.querySelector('.save_and_return_btn').addEventListener("click", () => {
        books_wrapper.classList.remove("filters-are-activated");
        map_handler();
    });
}
// render subjects filter 
function subject_filter(subjects) {
    books_wrapper.classList.add("filters-are-activated");
    // * actions are the same as publishers filter

    subjects.forEach((subject) => {
        const subject_HTML = `
            <span class="subject-item ${!subject.clicked ? "disabled" : " "}" id="subject-${subject.id}">
                ${subject.name}
            </span>
        `;
        books_wrapper.innerHTML += subject_HTML;
    });
    const save_and_return_btn_content = `
            <span class="save_and_return_btn">
            ذخیره و بازگشت
            </span>
        `;
    books_wrapper.innerHTML += save_and_return_btn_content;
    subjects_DOM = [...document.querySelectorAll('.subject-item')];
    subjects_DOM.forEach(el => {
        el.addEventListener('click', (e) => {
            clicked_subjects_identifier(e);
        });
    });
    address_to_here = stop_repeatation_in_addres("filter", address_to_here) ? address_to_here + "filter/" : address_to_here;
    //address_to_here += "filter/";
    document.querySelector('.save_and_return_btn').addEventListener("click", () => {
        books_wrapper.classList.remove("filters-are-activated");
        map_handler();
    });
}
// render courses filter
function course_filter(courses) {
    books_wrapper.classList.add("filters-are-activated");
    // * actions are the same as publishers filter

    courses.forEach((course) => {
        const course_HTML = `
            <span class="course-item ${!course.clicked ? "disabled" : " "}" id="course-${course.id}">
                ${course.name}
            </span>
        `;
        books_wrapper.innerHTML += course_HTML;
    });
    const save_and_return_btn_content = `
            <span class="save_and_return_btn fixed-btn">
            ذخیره و بازگشت
            </span>
        `;
    books_wrapper.innerHTML += save_and_return_btn_content;
    courses_DOM = [...document.querySelectorAll('.course-item')];
    courses_DOM.forEach(el => {
        el.addEventListener('click', (e) => {
            clicked_courses_identifier(e);
        });
    });
    address_to_here = stop_repeatation_in_addres("filter", address_to_here) ? address_to_here + "filter/" : address_to_here;
    //address_to_here += "filter/";
    document.querySelector('.save_and_return_btn').addEventListener("click", () => {
        books_wrapper.classList.remove("filters-are-activated");
        map_handler();
    });
}
// funnction for storing clicked publishers
// * function gets clicked event as an argument
function clicked_publishers_identifier(e) {
    // check if the clicked item has disabled class or not ( toggle class action ) for css styles
    if (![...e.target.classList].includes("disabled")) {
        // if item doesn't have the class add it
        e.target.classList.add('disabled');
    }
    else {
        // otherwise remove the class
        e.target.classList.remove('disabled');
    }
    // getting publisher id from the html wrapper id
    const clicked_publisher = parseInt(e.target.id.split("publisher-")[1]);
    /* 
        if the clicked publisher ids which restores the all clicked item includes this clicked id
        it should be removed 
        * kind of toggle action
    */
    if (clicked_publishers_ids.includes(clicked_publisher)) {
        // filter the array and return all items except the given id
        clicked_publishers_ids = clicked_publishers_ids.filter(p => {
            return p != clicked_publisher;
        });
    }
    else {
        // otherwise push the id into the array 
        clicked_publishers_ids.push(clicked_publisher);
        /* 
         ? this is not the correct way I assume but this is for the rendering all word in the book page
         ? without having the force to fill the ids array
         ! maybe a refactor be necessary here
        */
        is_filled_pub = true;
    }
    // fill the paranteses next to filter label in the html with clicked items length
    //document.querySelector('.fil-1 .sub-filter').innerHTML = `( ${clicked_publishers_ids.length} )`;
    // pass the value for the adjust books and fill the filtered book method
    adjust_books("pub");
}
// funnction for storing clicked subjects
// * same as the clicked publishers identifier
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
        is_filled_sub = true;
    }
    //document.querySelector('.fil-2 .sub-filter').innerHTML = `( ${clicked_subjects.length} )`;
    adjust_books("sub");
}
// funnction for storing clicked book years
// * same as the clicked publishers identifier
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
        is_filled_year = true;
    }
    //document.querySelector('.fil-3 .sub-filter').innerHTML = `( ${clicked_grades.length} )`;
    adjust_books("year");
}
function clicked_courses_identifier(e) {
    if (![...e.target.classList].includes("disabled")) {
        e.target.classList.add('disabled');
    }
    else {
        e.target.classList.remove('disabled');
    }
    const clicked_course = parseInt(e.target.id.split("course-")[1]);
    if (clicked_courses.includes(clicked_course)) {
        clicked_courses = clicked_courses.filter(p => {
            return p != clicked_course;
        })
    }
    else {
        clicked_courses.push(clicked_course);
        is_filled_course = true;
    }
    //document.querySelector('.fil-4 .sub-filter').innerHTML = `( ${clicked_courses.length} )`;
    adjust_books("year");
}
// function to make book page ready for filters
function clear_stage(element) {
    element.innerHTML = "";
}
// function to render shopping cart
// ! the reason for the function value is cart1 is because of global variable with name of cart 
function render_shopping_cart(cart1) {
    address_to_here = stop_repeatation_in_addres("cart", address_to_here) ? address_to_here + "cart/" : address_to_here;
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
                    <div class="total-price ${cart.cart_summary.total_discount_of_items === 0 ? " " : "has-discount"}">
                        <span class="price">
                        </span>
                        <span class="discounted-price">
                        ${split_in_three(cart.cart_summary.final_price)}
                        </span>
                        تومان
                    </div>
                </div>
            </div>
            <div class="cart-next-step ${cart1.length === 0 ? "disabled" : " "}">
                <span class="label">
                    مرحله بعد
                </span>
                <i class="fa fa-caret-left"></i>
            </div>
        </div>
    `;
    const date = setDate();
    const shopping_cart_content = `
        <div class="cart-page-wrapper">
            <div class="cart-map-btns">
                <div class="clear-cart">
                    <img src="./assets/images/trash-icon-btn.png" class="clear-cart-img" alt="پاک کردن">
                </div>
                <div class="back">
                    <img src="./assets/images/back-forward-btn.png" class="back-btn-img" alt="بازگشت">
                </div>
            </div>
            <div class="page-title">
                سبد خرید
            </div>
            <div class="cart-items-wrapper ${cart1.length !== 0 ? "has-item" : " "}">
                    <div class="cart-is-empty">
                        <img src="./assets/images/empty-cart-vector.png" alt="سبد خرید خالی است">
                            <div class="empty-text">
                         سبد خرید شما خالی است
                            </div>
                        <div class="return-home">
                    بازگشت به خانه
                        </div>
            </div>
            </div>
            <div class="cart-footer">
                <div class="date">
                    <span class="year">
                        ${date[2]}
                    </span>
                    /
                    <span class="month">
                    ${month_declare(date[1])}
                    </span>
                    /
                    <span class="day">
                        ${date[0]}
                    </span>
                </div>
                <div class="total-price ${cart.cart_summary.total_discount_of_items === 0 ? " " : "has-discount"}">
                    <span class="title">
                        مجموع :
                    </span>
                    <div class="prices">
                        <span class="total-price-amount">
                        ${split_in_three(cart.cart_summary.total_price_of_items)}
                        </span>
                        <span class="discounted-price">
                        ${split_in_three(cart.cart_summary.final_price)}
                        </span>
                        <span class="toman">
                        تومان
                        </span>
                    </div>
                </div>
                <div class="checkout-btn">
                    ادامه فرآیند خرید
                </div>
            </div>
        </div>
    `;
    //appending the main text to the dom
    main_area.innerHTML = shopping_cart_content;

    //activating next step btn
    const next_step_btn = document.querySelector('.checkout-btn');
    // click action for cart next step
    next_step_btn.addEventListener('click', () => {
        // render final stage with cart items and dicount amount
        // check if the cart isn't empty ro render final stage cart
        if (cart1.length !== 0) {
            if (cart.cart_summary.pay_permission) {
                // fill the discount value from api
                let discount = cart.cart_summary.total_discount_of_items;
                // get the pay url for the final step btn
                load_pause('active');
                axios
                    .get(`https://daryaftyar.ir/storeV2/payrequest/${final_id}`)
                    //.get(`https://daryaftyar.ir/storeV2/payrequest/341393410`)
                    .then((res) => {
                        const url = res.data;
                        // render final stage cart with given parameters
                        render_final_stage_cart(cart_items, discount, url.url_to_pay);
                        load_pause("disactive");
                    })
                    .catch(err => {
                        // ? we need a better way to handle the errors :)
                        render_errors(err.message)
                    })
            }
            else {
                render_user_data_form();
            }
        }
    });

    // activating go to book page btn 
    // const back_to_shop_btn = document.querySelector('.go-to-book-page');
    // back_to_shop_btn.addEventListener("click", () => {
    //     // have the filter's results saved as an out come
    //     // if (filtered_book.length === 0) {
    //     //     render_books(needed_books);
    //     // }
    //     // else {
    //     //     render_books(filtered_book);
    //     // }
    //     //map_handler();
    //     if (filter_activated) {
    //         render_books(needed_books.slice(0, 30));
    //     }
    //     else {
    //         render_books(needed_books);
    //     }
    //     // have the address updated
    //     //address_to_here += "books/";
    // });


    const cart_item_wrapper = document.querySelector('.cart-items-wrapper');
    // to get total price wrapper
    const total_price_HTML = document.querySelector('.total-price .total-price-amount');
    const discounted_price_HTML = document.querySelector('.discounted-price');
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
                        ${split_in_three(item.price)}
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
        const cart_content = `
            <div class="cart-item" id="cart-item-${item.id}">
                    <div class="img-wrapper">
                        <img src="${item.img_url}"
                            alt="${item.name}">
                    </div>
                    <div class="prod-details">
                        <div class="prod-name">
                            ${item.name}
                        </div>
                        <div class="prod-price">
                            ${split_in_three(item.price)}
                        </div>
                        <div class="prod-btn-action">
                            <div class="add-btn">
                                <img src="./assets/images/plus-icon-orange.png" class="m more" alt="">
                            </div><div class="quantity">
                                ${item.count_in_user_cart}
                            </div><div class="decrement-btn quan-1">
                                <img src="./assets/images/trash-icon-btn-black.png" class="trash less" alt="">
                                <img src="./assets/images/minus-icon.png" class="line less" alt="">
                            </div>
                        </div>
                    </div>
                    <div class="remove-btn">
                        <img src="./assets/images/delete-icon-orange.png" alt="" id="${item.id}">
                    </div>
                </div>
        `;
        // calculate total pirce with the items in cart
        //total_price_amount += item.count_in_user_cart * item.price;
        cart_item_wrapper.innerHTML += cart_content;
    });
    total_price_HTML.innerHTML = split_in_three(cart.cart_summary.total_price_of_items);

    // get all remove btns in cart
    const all_remove_btns = [...document.querySelectorAll('.remove-btn')];
    all_remove_btns.forEach(r_btn => {
        r_btn.addEventListener('click', (e) => {
            let d_id = parseInt(e.target.id);
            delete_item(d_id);
        });
    });
    // get all the items in the cart for making events in the more or less
    const all_cart_items = [...document.querySelectorAll('.cart-item')];
    all_cart_items.forEach(item => {
        // handling more btn in cart
        // * same as more and less in the book page
        const more_btn = item.querySelector('.add-btn');
        more_btn.addEventListener('click', (e) => {
            const classes = [...e.target.classList];
            if (classes[classes.length - 1] === "add-btn") {
                const quantity_wrapper = e.target.nextElementSibling;
                quantity_wrapper.innerHTML = parseInt(quantity_wrapper.innerHTML) + 1;
                console.log(e)
                // changing the array quantity
                const id_string = e.target.parentElement.parentElement.parentElement.id;
                const id = parseInt(id_string.split("-")[2]);
                update_quantity('cart', id, "+");
                update_total(total_price_HTML, discounted_price_HTML);
            }
            else if (classes[classes.length - 1] === "more") {
                const quantity_wrapper = e.target.parentElement.nextElementSibling;
                quantity_wrapper.innerHTML = parseInt(quantity_wrapper.innerHTML) + 1;
                // changing the array quantity
                const id_string = e.target.parentElement.parentElement.parentElement.parentElement.id;
                const id = parseInt(id_string.split("-")[2]);
                update_quantity('cart', id, "+");
                update_total(total_price_HTML, discounted_price_HTML);
            }
        });
        // decreament items in cart
        const less_btn = item.querySelector('.decrement-btn');
        less_btn.addEventListener('click', (e) => {
            const classes = [...e.target.classList];
            if (classes[classes.length - 1] === "decrement-btn") {
                const quantity_wrapper = e.target.previousSibling;
                const id_string = e.target.parentElement.parentElement.parentElement.id;
                const id = parseInt(id_string.split("-")[2]);
                update_quantity('cart', id, "-");
                if (parseInt(quantity_wrapper.innerHTML) === 1) {
                    // remove the item from cart after quantity becomes 0
                    e.target.parentElement.parentElement.parentElement.remove();
                }
                else {
                    quantity_wrapper.innerHTML = parseInt(quantity_wrapper.innerHTML) - 1;
                    // changing the array quantity
                }
                update_total(total_price_HTML, discounted_price_HTML);
            }
            else if (classes[classes.length - 1] === "less") {
                const quantity_wrapper = e.target.parentElement.previousSibling;
                const id_string = e.target.parentElement.parentElement.parentElement.parentElement.id;
                const id = parseInt(id_string.split("-")[2]);
                update_quantity('cart', id, "-");
                if (parseInt(quantity_wrapper.innerHTML) === 1) {
                    e.target.parentElement.parentElement.parentElement.parentElement.remove();
                }
                else {
                    quantity_wrapper.innerHTML = parseInt(quantity_wrapper.innerHTML) - 1;
                    // changing the array quantity
                }
                update_total(total_price_HTML, discounted_price_HTML);
            }
        });

    });

    // updating curent place for map_handler method
    /* 
        ?  cause the cart item is accessible from all part of web app it needs to be stopped after 
        ? one add in the address to here so I used the stop repatation function
    */
    //stop_repeatation_in_addres("cart", address_to_here) ? address_to_here += "cart/" : address_to_here = address_to_here;
    const cart_page_wrapper = document.querySelector('.cart-page-wrapper');
    //render_now(cart_page_wrapper);
    render_width(cart_page_wrapper)
    // activating the back button
    const back_btn = document.querySelector('.back');
    back_btn.addEventListener('click', () => {
        map_handler();
    });
    const clear_cart_btn = document.querySelector('.clear-cart');
    clear_cart_btn.addEventListener('click', () => {
        clear_cart();
    });
}
//function to delete selected item from cart
function delete_item(id) {
    cart.cart_items_ids = cart.cart_items_ids.filter(c => c !== id);
    load_pause('active');
    axios
        .patch(`https://daryaftyar.ir/storeV2/cart/${final_id}`, cart.cart_items_ids)
        //.patch(`https://daryaftyar.ir/storeV2/cart/341393410`, ids)
        .then((res) => {
            cart = res.data;
            cart_items = cart.cart_details;
            load_pause('disactive');
            if (address_to_here.includes('cart/')) {
                const total_price_HTML = document.querySelector('.total-price .total-price-amount');
                const discounted_price_HTML = document.querySelector('.discounted-price');
                update_total(total_price_HTML, discounted_price_HTML);
            }
            footer_cart_wrapper_HTML.innerHTML = cart_items.length;
            modal_state();
            render_shopping_cart(cart_items);
        })
        .catch(err => {
            render_errors(err.message);
        });
}
// function for delete in cart modal
function delete_item_modal(id) {
    cart.cart_items_ids = cart.cart_items_ids.filter(c => c !== id);
    load_pause('active');
    axios
        .patch(`https://daryaftyar.ir/storeV2/cart/${final_id}`, cart.cart_items_ids)
        //.patch(`https://daryaftyar.ir/storeV2/cart/341393410`, ids)
        .then((res) => {
            cart = res.data;
            cart_items = cart.cart_details;
            load_pause('disactive');
            if (address_to_here.includes('cart-modal')) {
                const total_price_HTML = document.querySelector('.total-price .total-price-amount');
                const discounted_price_HTML = document.querySelector('.discounted-price');
                update_total(total_price_HTML, discounted_price_HTML);
            }
            footer_cart_wrapper_HTML.innerHTML = cart_items.length;
            modal_state();
            render_cart_modal(cart_items);
        })
        .catch(err => {
            render_errors(err.message);
        });
}
//function to clear cart
function clear_cart() {
    //console.log(cart);
    cart.cart_items_ids = [];
    cart_items = [];
    load_pause('active');
    axios
        .patch(`https://daryaftyar.ir/storeV2/cart/${final_id}`, cart.cart_items_ids)
        //.patch(`https://daryaftyar.ir/storeV2/cart/341393410`, ids)
        .then((res) => {
            cart = res.data;
            load_pause('disactive');
            if (address_to_here.includes('cart/')) {
                const total_price_HTML = document.querySelector('.total-price .total-price-amount');
                const discounted_price_HTML = document.querySelector('.discounted-price');
                update_total(total_price_HTML, discounted_price_HTML);
            }
            footer_cart_wrapper_HTML.innerHTML = 0;
            modal_state();
            render_shopping_cart(cart_items);
        })
        .catch(err => {
            render_errors(err.message);
        });
}
// function to clear modal cart
function clear_modal_cart() {
    cart.cart_items_ids = [];
    cart_items = [];
    load_pause('active');
    axios
        .patch(`https://daryaftyar.ir/storeV2/cart/${final_id}`, cart.cart_items_ids)
        //.patch(`https://daryaftyar.ir/storeV2/cart/341393410`, ids)
        .then((res) => {
            cart = res.data;
            load_pause('disactive');
            if (address_to_here.includes('cart/')) {
                const total_price_HTML = document.querySelector('.total-price .total-price-amount');
                const discounted_price_HTML = document.querySelector('.discounted-price');
                update_total(total_price_HTML, discounted_price_HTML);
            }
            footer_cart_wrapper_HTML.innerHTML = 0;
            modal_state();
            render_cart_modal(cart_items);
        })
        .catch(err => {
            render_errors(err.message);
        });
}
// function for having the date
function setDate() {
    const date = new Date();
    const persian_date = date.toLocaleDateString('fa-IR');
    const date_arr = persian_date.split("/");
    return date_arr;
}
// function to find month 
function month_declare(num) {
    let month = "";
    switch (num) {
        case '۱':
            month = "فروردین";
            break;
        case '۲':
            month = "اردیبهشت";
            break;
        case '۳':
            month = "خرداد";
            break;
        case '۴':
            month = "تیر";
            break;
        case '۵':
            month = "مرداد";
            break;
        case '۶':
            month = "شهریور";
            break;
        case '۷':
            month = "مهر";
            break;
        case '۸':
            month = "آبان";
            break;
        case '۹':
            month = "آذر";
            break;
        case '۱۰':
            month = "دی";
            break;
        case '۱۱':
            month = "بهمن";
            break;
        case '۱۲':
            month = "اسفند";
            break;
    }
    return month;
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
                            ${split_in_three(user.amount)}
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
    const wallet_new_content = `
        <div class="wallet-wrapper-page">
            <div class="wallet-header">
                <div class="back">
                    <img src="./assets/images/back-forward-btn.png" alt="" class="back-img">
                </div>
            </div>
            <div class="wallet-page-title">
                کیف پول
            </div>
            <div class="main-content">
                <div class="wallet-title">
                    <span class="text">
                        اعتبار کیف پول
                    </span>
                    <span class="img-wrapper">
                        <img src="./assets/images/check-icon.png" alt="">
                    </span>
                </div>
                <div class="wallet-info">
                    <div class="wallet-amount">
                        <span class="price">
                            ${split_in_three(user.amount)}
                        </span>
                        تومان
                    </div>
                    <div class="wallet-days-left">
                        <span class="days">${user.days_left}</span>
                        روز مهلت استفاده
                    </div>
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
                        1 -با هربار جواب صحیح دادن به سوال دوستات در پرسشکده ربات ،
                        میتونی 500 تومان اعتبار جمع کنی !
                    </p>
                </div>
            </div>
        </div> 
    `;
    main_area.innerHTML = wallet_new_content;
    const wallet_wrapper = document.querySelector('.wallet-wrapper-page');
    render_now(wallet_wrapper);
    const back_btn = document.querySelector('.back');
    address_to_here = stop_repeatation_in_addres("wallet", address_to_here) ? address_to_here + "wallet/" : address_to_here;
    //address_to_here += "wallet/";
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
                    <div class="pages-details-wrapper">
                        نویسنده : 
                        <span class="publisher">
                            ${book.author}
                        </span>
                    </div>
                    <div class="pages-details-wrapper">
                        انتشارات :
                        <span class="pages-count">
                            ${book.publisher}
                        </span>
                    </div>
                    <div class="pages-details-wrapper">
                        تعداد صفحات :
                        <span class="pages-count">
                            ${book.pages_count}
                        </span>
                        صفحه
                    </div>
                    <div class="pages-details-wrapper">
                        پایه :
                        <span class="pages-count">
                            ${el_by_id(grades, book.book_year).name}
                        </span>
                    </div>
                    <div class="pages-details-wrapper">
                        رشته :
                        <span class="pages-count">
                            ${el_by_id(subjects, book.subject).name}
                        </span>
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
                        <span class="price ${(book.discounted_price !== book.price) ? "has-discount" : " "}">
                            <span class="normal-price">
                                ${split_in_three(book.price)}
                            </span> 
                            <span class="discounted-price">
                                ${split_in_three(book.discounted_price)}
                            </span>
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
    const single_book_content_new = `
        <div class="single-prod-page-wrapper" id="single-${book.id}">
            <div class="single-prod-header">
                <div class="single-prod-page-title">
                <br>
                    ${book.name}
                </div>
                <div class="back">
                    <img src="./assets/images/back-forward-btn.png" alt="" class="back-img">
                </div>
            </div>
            <div class="main-content">
                <div class="book-img-price-wrapper">
                    <img src="${book.img_url}" alt="${book.name}">
                    <div class="price-wrapper ${(book.discounted_price !== book.price) ? " has-discount" : " "}">
                            <span class="normal-price">
                                ${split_in_three(book.price)}
                                تومان
                            </span>
                            <span class="discounted-price">
                                ${split_in_three(book.discounted_price)}
                                تومان
                            </span>
                    </div>
                </div>
                <div class="details">
                    <div class="pages-details-wrapper">
                        نویسنده :
                        <span class="publisher">
                            ${book.author}
                        </span>
                    </div>
                    <div class="pages-details-wrapper">
                        انتشارات :
                        <span class="pages-count">
                            ${book.publisher}
                        </span>
                    </div>
                    <div class="pages-details-wrapper">
                        تعداد صفحات :
                        <span class="pages-count">
                            ${book.pages_count}
                        </span>
                        صفحه
                    </div>
                    <div class="pages-details-wrapper">
                        پایه :
                        <span class="pages-count">
                            ${el_by_id(grades, book.book_year).name}
                        </span>
                    </div>
                    <div class="pages-details-wrapper">
                        رشته :
                        <span class="pages-count">
                            ${el_by_id(subjects, book.subject).name}
                        </span>
                    </div>
                    <div class="full-details-wrapper">
                        <span class="title">
                        توضیحات :
                        </span>
                        <ul class="book-details-ul">
        
                        </ul>
                    </div>
                </div>
                <div class="add-to-cart-text ${el_by_id(cart_items, book.id).count_in_user_cart ? " " : "not-in-cart"}" id="single-id-${book.id}">
                    <span class="text q-0">
                        اضافه کردن به سبد خرید
                    </span>
                    <span class="text q-1">
                        این محصول در سبد خرید شما موجود است (تعداد :
                        <span class="quan-count">
                            ${el_by_id(cart_items, book.id).count_in_user_cart || 0}
                        </span>
                        )
                    </span>
                </div>
                <div class="single-prod-footer ${el_by_id(cart_items, book.id).count_in_user_cart ? " " : "quan-0"}">
                    <span class="more">
                        <img src="./assets/images/plus-white.png" class="m more-img" alt="">
                    </span><span class="quantity">
                        ${el_by_id(cart_items, book.id).count_in_user_cart || 0}
                    </span><span class="less">
                        <img src="./assets/images/minus-line-white.png" class="m less-img" alt="">
                    </span>
                </div>
            </div>
        </div>
    `;
    // have the books content as the main content
    modal_wrapper.innerHTML = single_book_content_new;
    activate_modal_single_book("active");
    // have the book ul as a wrapper for entring the details
    const details_DOM = document.querySelector('.book-details-ul');
    // reading each book details
    book.details.forEach(d => {
        const book_detail_content = `
            <li>
                ${d}
            </li>
        `;
        details_DOM.innerHTML += book_detail_content;
    });

    // * handling more and less btn like previuos parts
    const more_btn = document.querySelector('.more');
    more_btn.addEventListener('click', (e) => {
        const classes = [...e.target.classList];
        if (classes[classes.length - 1] === "more") {
            const quantity_wrapper = e.target.nextElementSibling;
            quantity_wrapper.innerHTML = parseInt(quantity_wrapper.innerHTML) + 1;

            const id = book.id;
            update_quantity('book', id, "+");
            validate_quan(book.id);
        }
        else if (classes[classes.length - 1] === "more-img") {
            const quantity_wrapper = e.target.parentElement.nextElementSibling;
            quantity_wrapper.innerHTML = parseInt(quantity_wrapper.innerHTML) + 1;

            const id = book.id;
            update_quantity('book', id, "+");
            validate_quan(book.id);
        }
    });
    const less_btn = document.querySelector('.less');
    less_btn.addEventListener('click', (e) => {
        const classes = [...e.target.classList];
        if (classes[classes.length - 1] === "less") {
            const quantity_wrapper = e.target.previousSibling;
            const id = book.id;
            update_quantity('cart', id, "-");
            if (parseInt(quantity_wrapper.innerHTML) === 0) {
                quantity_wrapper.innerHTML = 0;
            }
            else {
                quantity_wrapper.innerHTML = parseInt(quantity_wrapper.innerHTML) - 1;
                // changing the array quantity
            }
            validate_quan(book.id);
        }
        else if (classes[classes.length - 1] === "less-img") {
            const quantity_wrapper = e.target.parentElement.previousSibling;
            //const id_string = e.target.parentElement.parentElement.parentElement.id;
            const id = book.id;
            update_quantity('cart', id, "-");
            if (parseInt(quantity_wrapper.innerHTML) === 0) {
                quantity_wrapper.innerHTML = 0;
            }
            else {
                quantity_wrapper.innerHTML = parseInt(quantity_wrapper.innerHTML) - 1;
                // changing the array quantity
            }
            validate_quan(book.id);
        }
    });

    // * same as always having the back btn map the web app
    const back_btn = document.querySelector('.modal-pacle-holder .back');
    address_to_here = stop_repeatation_in_addres("single-book", address_to_here) ? address_to_here + "single-book/" : address_to_here;
    //address_to_here += "single-book/";
    back_btn.addEventListener('click', () => {
        // disactive modal
        activate_modal_single_book("disactive");
        address_to_here = address_to_here.replace(("single-book/"), "");
    });
}
// function to validate book in single page
function validate_quan(id) {
    let target = document.querySelector(`#single-id-${id}`);
    if (el_by_id(cart_items, id).count_in_user_cart) {
        target.classList.remove("not-in-cart");
        target.querySelector('.quan-count').innerHTML = el_by_id(cart_items, id).count_in_user_cart;
    }
    else {
        target.classList.add("not-in-cart");
    }
}
//function to render final stage of cart
function render_final_stage_cart(cart_items, discount, url) {
    // the sum for total price
    //console.log(cart);
    // calculate total price
    // cart_items.forEach(c => {
    //     total_price += c.count_in_user_cart * c.price;
    // });
    // calculating pay amount with user wallet and discount
    // const pay_amount = total_price - (user.amount + discount)
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
                        <!-- <div class="cart-notice">
                            <p>
                                <span class="notice">
                                    نکته مهم :
                                </span>
                                شما باید قبلا در ربات و از بخش اطلاعات پستی ، اطلاعات حقیقی خود را ثبت
                                کرده باشید تا ما بتونیم محصولات رو برای شما ارسال کنیم ؛ اگر این کار را نکرده باشید ، اجازه پرداخت
                                نخواهید داشت .
                            </p>
                        </div> -->
                        <div class="cart-items-details">
                            <div class="cart-total-price">
                                <span class="label">
                                    مجموع مبلغ سبد خرید شما :
                                </span>
                                <span class="total-price">
                                    <span class="price">
                                        ${split_in_three(cart.cart_summary.total_price_of_items)}
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
                                        ${split_in_three(cart.cart_summary.total_discount_of_items)}
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
                                        ${split_in_three(cart.cart_summary.credit_discount_final)}
                                    </span>
                                    تومان
                                </span>
                            </div>
                            <div class="cart-wallet">
                                <span class="label">
                                   هزینه پست : 
                                </span>
                                <span class="total-price">
                                    <span class="price">
                                        ${cart.cart_summary.post_cost === 0 ? "رایگان" : split_in_three(cart.cart_summary.post_cost)}
                                    </span>
                                    <span>
                                        ${cart.cart_summary.post_cost === 0 ? " " : "تومان"}
                                    </span>
                                    
                                </span>
                            </div>
                            <div class="cart-final-pay">
                                <span class="label">
                                    قابل پرداخت :
                                </span>
                                <span class="total-price">
                                    <span class="price">
                                        ${split_in_three(cart.cart_summary.final_price)}
                                    </span>
                                    تومان
                                </span>
                            </div>
                        </div>
                        <a href="${url}" class="pay-btn-wrapper" target="_blank">
                            <span class="pay-amount">
                                پرداخت
                                <span class="amount">
                                    ${split_in_three(cart.cart_summary.final_price)}
                                </span>
                                <span class="curency">
                                    تومان
                                </span>
                            </span>
                            <span class="pointer">
                                <i class="fa fa-caret-left"></i>
                            </span>
                        </a>
                    </div>
                </div>
    `;
    const final_cart_content = `
        <div class="cart-final-stage-page-wrapper">
            <div class="cart-header">
                <div class="back">
                    <img src="./assets/images/back-forward-btn.png" alt="" class="back-img">
                </div>
                <div class="cart-page-title">
                    سبد خرید
                </div>
            </div>
            <div class="main-content">
                <div class="cart-items-details">
                    <div class="cart-total-price">
                        <span class="label">
                            مجموع مبلغ سبد خرید شما :
                        </span>
                        <span class="total-price">
                            <span class="price">
                                ${split_in_three(cart.cart_summary.total_price_of_items)}
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
                                ${split_in_three(cart.cart_summary.total_discount_of_items)}
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
                                ${split_in_three(cart.cart_summary.credit_discount_final)}
                            </span>
                            تومان
                        </span>
                    </div>
                    <div class="cart-wallet">
                        <span class="label">
                            هزینه پست :
                        </span>
                        <span class="total-price">
                            <span class="price">
                                ${cart.cart_summary.post_cost === 0 ? "رایگان" : split_in_three(cart.cart_summary.post_cost)}
                            </span>
                            <span>
                                ${cart.cart_summary.post_cost === 0 ? " " : "تومان"}
                            </span>
        
                        </span>
                    </div>
                    <div class="cart-final-pay">
                        <span class="label">
                            قابل پرداخت :
                        </span>
                        <span class="total-price">
                            <span class="price">
                                ${split_in_three(cart.cart_summary.final_price)}
                            </span>
                            تومان
                        </span>
                    </div>
                </div>
            </div>
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
            <a href="${url}" class="pay-btn-wrapper" target="_blank">
                    پرداخت
            </a>
        </div>
    `;
    main_area.innerHTML = final_cart_content;

    const pay_btn = document.querySelector('.pay-btn-wrapper');
    pay_btn.addEventListener('click', () => {
        //console.log('i am funcking clicked');
        close_webapp();
    });
    // * same back btn logic 
    const back_btn = document.querySelector('.back');
    address_to_here = stop_repeatation_in_addres("finalStage", address_to_here) ? address_to_here + "finalStage/" : address_to_here;
    //address_to_here += "finalStage/";
    back_btn.addEventListener('click', () => {
        map_handler();
    });
    // the button that leads you back to the cart items review
    const view_btn = document.querySelector('.view-btn');
    view_btn.addEventListener("click", () => {
        map_handler();
    })
}
// function for redirecting the user to the required page
function map_handler() {
    disactive_modals();
    let address = address_to_here.split("/");
    let len = address.length - 2;
    //console.log(address_to_here, address);
    switch (address[len - 1]) {
        case "book":
            //if (filtered_book.length === 0) {
            if (filter_activated) {
                render_books(needed_books.slice(0, 30));
            }
            else {
                render_books(needed_books);
            }
            // }
            // else {
            //     render_books(filtered_book);
            // }
            address_to_here = address_to_here.replace((address[len] + "/"), "");
            //console.log(address_to_here[len])
            break;
        case "cart":
            render_shopping_cart(cart_items);
            address_to_here = address_to_here.replace((address[len] + "/"), "");
            break;
        case "userData":
            render_shopping_cart(cart_items);
            address_to_here = address_to_here.replace((address[len] + "/"), "");
            break;
        case "coinPage":
            render_coin();
            address_to_here = address_to_here.replace((address[len] + "/"), "");
            break;
        case "single-book":
            //if (filtered_book.length === 0) {
            if (filter_activated) {
                render_books(needed_books.slice(0, 30));
            }
            else {
                render_books(needed_books);
            }
            address_to_here = address_to_here.replace((address[len] + "/"), "");
            break;
        case "home":
            render_first_page()
            address_to_here = address_to_here.replace((address[len] + "/"), "");
            break;
    }
    //console.log(address_to_here);
    // if we are in book page
    /*
    ! the old mapping method
    if (address[len] === "book" && address[len - 1] === "home") {
        render_first_page();
        address_to_here = address_to_here.replace('book/', "");
    }
    // if we are in filters and book page
    else if (address[len] === "filter" && address[len - 1] === "book") {
        render_books(filtered_book);
        address_to_here.replace('filter/', "");
    }
    // if we are in cart page from home
    else if (address[len] === "cart" && address[len - 1] === "home") {
        render_first_page(cart_items);
        address_to_here = "home/";
    }
    // if we are in cart page from home
    else if ((address[len] === "cart" && address[len - 1] === "book") || (address[len] === "cart" && address[len - 1] === "single-book")) {
        if (filtered_book.length === 0) {
            render_books(needed_books);
        }
        else {
            render_books(filtered_book);
        }
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
        if (filtered_book.length === 0) {
            render_books(needed_books);
        }
        else {
            render_books(filtered_book);
        }
        address_to_here = "home/book/";
    }
    // if we were in single book page
    else if (address[len] === "finalStage" && address[len - 1] === "cart") {
        render_shopping_cart(cart_items);
        address_to_here = "home/cart/";
    }
    */
}
// coming soon
function render_coming_soon_page() {
    const coming_soon_content = `<p class="coming-soon">
    در حال ساختن این پارت می باشیم کمی صبور باشید ;)
    </p>`;
    main_area.innerHTML = coming_soon_content;
    const coming_soon = document.querySelector(".coming-soon");
    render_now(coming_soon)
}
// a function to prevent multiple repeat in address
function stop_repeatation_in_addres(word, my_string) {
    const arr = my_string.split('/');
    return !arr.includes(word);
}
//book clicked
function book_clicked(e) {
    let clicked_book = "";
    // check if the book contains class book
    if (e.target.id.includes("book-")) {
        const splited = e.target.id.split("-");
        // turn the id from html id to an integer
        const id = parseInt(splited[splited.length - 1]);
        // find the clicked book from books array
        clicked_book = books.find(book => {
            return book.id === id;
        });
        // render the single book 
        render_single_book(clicked_book);
    }
    else if (e.target.id.includes('search-')) {
        const splited = e.target.id.split("-");
        // turn the id from html id to an integer
        const id = parseInt(splited[splited.length - 1]);
        // find the clicked book from books array
        clicked_book = books.find(book => {
            return book.id === id;
        });
        // render the single book 
        render_single_book(clicked_book);
    }
}
// update quantity
function update_quantity(type, id, sign) {

    // the item which we want to have our chnages
    let item = [];

    // check the cart to find the item is already there so we could do 2 things
    /* 
        ?  the item from api has 2 important things cart items and cart item ids
        ? with these 2 items we need to know if they are included
        ? it has important effect on the rendring and api calls
    */
    if (!cart.cart_items_ids.includes(id)) {
        // if is not included go to all books to find it
        item = books.find(c => {
            return c.id === id;
        });
    }
    else {
        // if it is included search the cart items
        item = cart_items.find(c => {
            return c.id === id;
        });
    }
    if ((type === "cart") && (sign === "+")) {
        // increase count 
        item.count_in_user_cart += 1;
        // push the id for api calls
        cart.cart_items_ids.push(id);
    }
    else if ((type === "cart") && (sign === "-")) {
        // check the quantity first first
        if (item.count_in_user_cart === 1) {
            //delete the item with finding from the cart items and cart item ids
            item.count_in_user_cart -= 1;
            const index = cart_items.indexOf(item);
            cart_items.splice(index, 1);
            cart.cart_items_ids = cart.cart_items_ids.filter(ci => parseInt(ci) !== id);
            if (address_to_here.includes('single-book')) {
                document.querySelector(`#single-${id} .single-prod-footer`).classList.add("quan-0");
            }
            else if (!address_to_here.includes('cart')) {
                document.querySelector(`#book-${id} .btns-wrapper`).classList.add("quan-0");
            }
        }
        // otherwise just update the ids array
        else {
            item.count_in_user_cart -= 1;
            if (cart.cart_items_ids.includes(id)) {
                cart.cart_items_ids.splice(cart.cart_items_ids.indexOf(id), 1);
            }
        }

    }
    else if ((type === "book") && (sign === "+")) {
        // add the item if it hasn't been there before
        if (!cart.cart_items_ids.includes(id)) {
            // use the new proprty for rendering 
            cart_items.push({ ...item, count_in_user_cart: 1 });
            // update ids
            cart.cart_items_ids.push(id);
            open_cart_modal("active");
            let_the_cart = true;

            document.querySelector(`#book-${id} .btns-wrapper`).classList.remove("quan-0");
            if (address_to_here.includes('single-book')) {
                document.querySelector(`#single-${id} .single-prod-footer`).classList.remove("quan-0");
            }
        }
        // otherwise just update the ids for api calls
        else {
            cart.cart_items_ids.push(id);
        }
        item.count_in_user_cart += 1;
    }

    // * this is used to do not have bug for disabling the next step button
    let curent_place = address_to_here.split('/')[address_to_here.split("/").length - 2];
    if ((cart_items.length === 0) && (curent_place === "cart")) {
        document.querySelector('.checkout-btn').classList.add('disabled');
    }
    // update the quantity in the footer label
    footer_cart_wrapper_HTML.innerHTML = cart_items.length;

    // call the api for restoring the datas
    update_cart(cart.cart_items_ids);
}
//function to update total price
// ! filter beshe 4 ta
function update_total(el, d_el) {
    let sum = cart.cart_summary.total_price_of_items;
    let discounted_sum = cart.cart_summary.final_price;
    //const cart_empty_HTML = document.querySelector('.cart-is-empty');
    //const cart_main_content = document.querySelector('.cart-main-content');
    // cart_items.forEach(c => {
    //     sum += c.count_in_user_cart * c.price;
    // });
    // check if the cart if empty or not
    if (sum != 0) {
        // ready the styles for an empty cart
        //cart_empty_HTML.style.display = "none";
        el.innerHTML = split_in_three(sum);
        d_el.innerHTML = split_in_three(discounted_sum);
    }
    else {
        // revert the styles for the a filled cart
        el.innerHTML = split_in_three(sum);
        d_el.innerHTML = split_in_three(discounted_sum);
        //cart_main_content.innerHTML = '';
        //cart_main_content.appendChild(cart_empty_HTML);
        //cart_empty_HTML.style.display = "flex";
    }
    // update total price for use
    cart.cart_summary.total_price_of_items = sum;
    //console.log(cart);
}
// function for applying filters on books
function adjust_books(state) {
    // for declaring the filter is used
    filter_activated = true;
    // resets the filterd book every time
    filtered_book = [];
    // having datas for filters sepratedly
    let filterd_by_pubs = []
    let filterd_by_sub = []
    let filtered_by_year = [];
    let filtered_by_course = [];
    // changing all the clicked proprty for css reasons
    publishers.map(p => p.clicked = false);
    subjects.map(s => s.clicked = false);
    grades.map(s => s.clicked = false);
    courses.map(s => s.clicked = false);
    // find all books with seleceted publishers
    clicked_publishers_ids.forEach(cp => {
        filterd_by_pubs = filterd_by_pubs.concat(books.filter(b => b.publisher === el_by_id(publishers, cp).name));
        let cliked_pub = publishers.filter(p => p.id == cp);
        cliked_pub.map(t => t.clicked = true);
    });
    // find all books with selected subhject
    clicked_subjects.forEach(sub => {
        filterd_by_sub = filterd_by_sub.concat(books.filter(b => b.subject === el_by_id(subjects, sub).id));
        let clicked_sub = subjects.filter(s => s.id == sub);
        clicked_sub.map(t => t.clicked = true);
    });
    // find all grades with selected grades
    clicked_grades.forEach(sub => {
        filtered_by_year = filtered_by_year.concat(books.filter(b => b.book_year === el_by_id(grades, sub).id));
        let clicked_sub = grades.filter(s => s.id == sub);
        clicked_sub.map(t => t.clicked = true);
    });
    // find all books with selected course
    clicked_courses.forEach(course => {
        filtered_by_course = filtered_by_course.concat(books.filter(b => b.course === el_by_id(courses, course).id));
        let clicked_course = courses.filter(s => s.id == course);
        clicked_course.map(t => t.clicked = true);
    });
    // extract the ids of found books by each filter
    let ids_by_pub = [];
    filterd_by_pubs.forEach(b => ids_by_pub.push(b.id));
    let ids_by_sub = [];
    filterd_by_sub.forEach(b => ids_by_sub.push(b.id));
    let ids_by_year = [];
    filtered_by_year.forEach(b => ids_by_year.push(b.id));
    let ids_by_course = [];
    filtered_by_course.forEach(b => ids_by_course.push(b.id));
    //console.log(ids_by_course);

    // gathering final ids
    let final_ids = ids_by_pub.concat(ids_by_sub, ids_by_year, ids_by_course);
    //console.log(final_ids);
    //operating as and
    // if all 4 are selected the id should be repeated 3 times
    if (
        (
            (ids_by_pub.length !== 0)
            &&
            (ids_by_sub.length !== 0)
            &&
            (ids_by_year.length !== 0)
            &&
            (ids_by_course.length !== 0)
        )
    ) {
        const my_count = {};
        final_ids.map(id => toString(id));
        final_ids.forEach(element => {
            my_count[element] = (my_count[element] || 0) + 1;
        });
        let obj_id = [];
        for (const key in my_count) {
            if (my_count[key] === 4) {
                obj_id.push(key);
            }
        }
        obj_id = obj_id.map(id => parseInt(id));
        obj_id.forEach(id => {
            filtered_book = filtered_book.concat(books.filter(b => b.id === id));
        })
    }
    // if 3 fields are selected
    else if (
        (((ids_by_pub.length !== 0) && (ids_by_sub.length !== 0)) && (ids_by_year.length !== 0))
        ||
        (((ids_by_pub.length !== 0) && (ids_by_sub.length !== 0)) && (ids_by_course.length !== 0))
        ||
        (((ids_by_course.length !== 0) && (ids_by_sub.length !== 0)) && (ids_by_year.length !== 0))
        ||
        (((ids_by_pub.length !== 0) && (ids_by_course.length !== 0)) && (ids_by_year.length !== 0))
    ) {
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
    // if two of the fields are selected the id should be repeated 2 times
    else {
        if (
            ((ids_by_pub.length !== 0) && (ids_by_sub.length !== 0))
            ||
            ((ids_by_year.length !== 0) && (ids_by_pub.length !== 0))
            ||
            ((ids_by_year.length !== 0) && (ids_by_sub.length !== 0))
            ||
            ((ids_by_year.length !== 0) && (ids_by_course.length !== 0))
            ||
            ((ids_by_course.length !== 0) && (ids_by_sub.length !== 0))
            ||
            ((ids_by_pub.length !== 0) && (ids_by_course.length !== 0))
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
        // if only one is clicked we should render according to the one set of ids which all are unique
        else if (
            (ids_by_pub.length !== 0)
            ||
            (ids_by_sub.length !== 0)
            ||
            (ids_by_year.length !== 0)
            ||
            (ids_by_course.length !== 0)
        ) {
            final_ids.forEach(id => {
                filtered_book = filtered_book.concat(books.filter(b => b.id === id));
            });
        }
    }
    curent_page = 1;
    // if (filtered_book.length !== 0) {
    //     needed_books = [...filtered_book];
    //     //filter_activated = false;
    // }
    // if (filtered_book.length === 0) {
    //     needed_books = [...filtered_book];
    //     //filter_activated = false;
    // }
    needed_books = [...filtered_book];
    if (
        (clicked_publishers_ids.length === 0)
        && (clicked_subjects.length === 0)
        && (clicked_grades.length === 0)
        && (clicked_courses.length === 0)
    ) {
        needed_books = [...first_rendered_books];
        filter_activated = false;
    }
    //console.log(filtered_book);
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
// a function to send the datas back to the backend and get a response
function update_cart(ids) {
    load_pause('active');
    axios
        .patch(`https://daryaftyar.ir/storeV2/cart/${final_id}`, ids)
        //.patch(`https://daryaftyar.ir/storeV2/cart/341393410`, ids)
        .then((res) => {
            cart = res.data;
            load_pause('disactive');
            if (address_to_here.includes('cart-modal')) {
                //open_cart_modal("active");
                let_the_cart = false;
                const total_price_HTML = document.querySelector('.total-price .total-price-amount');
                const discounted_price_HTML = document.querySelector('.discounted-price');
                update_total(total_price_HTML, discounted_price_HTML);
            }
            else if (address_to_here.includes('cart/')) {
                const total_price_HTML = document.querySelector('.total-price .total-price-amount');
                const discounted_price_HTML = document.querySelector('.discounted-price');
                update_total(total_price_HTML, discounted_price_HTML);
            }
            if (address_to_here.includes('cart-modal') || address_to_here.includes('cart/')) {
                if (cart.cart_items_ids.length === 0) {
                    document.querySelector('.cart-items-wrapper').classList.remove('has-item');
                }
            }
            modal_state();
        })
        .catch(err => {
            render_errors(err.message);
        })
}
// a function to disable webapp untill the datas return from backend
function load_pause(state) {
    if (state === "active") {
        pause_wrapper.style.display = "flex";
    }
    else {
        pause_wrapper.style.display = "none";
    }
}
// close webapp 
function close_webapp() {
    setTimeout(() => {
        window.Telegram.WebApp.close();
    }, 1000)
}
// function to prepare modal for single books
function activate_modal_single_book(state) {
    if (state === "active") {
        modal_wrapper.classList.remove("cart-pop-up");
        modal_wrapper.classList.add("single-modal");
        modal_wrapper.style.zIndex = "190";
        modal_wrapper.style.top = "0";
    }
    else {
        document.querySelector('body').style.overflowY = "unset";
        modal_wrapper.classList.remove("cart-pop-up");
        modal_wrapper.classList.remove("single-modal");
        modal_wrapper.style.top = "-100vh";
        setTimeout(() => {
            modal_wrapper.style.zIndex = "-1";
            modal_wrapper.innerHTML = " ";
        }, 700)
    }
}
// search method opener
function search_books_opener() {
    if (!is_search_open) {
        const modal_for_search = document.createElement('div');
        modal_for_search.classList.add('search-modal');
        modal_for_search.innerHTML = `
            <div class="search-result">

            </div>
        `;
        document.querySelector('body').appendChild(modal_for_search);
        is_search_open = true;
        document.querySelector('body').style.overflowY = "hidden";
        setTimeout(() => {
            modal_for_search.style.top = "150px";
        }, 100);
        search_books();
    }
    else {
        is_search_open = false;
        document.querySelector('.search-modal').style.top = "-100vh";
        document.querySelector('body').style.overflowY = "unset";
        setTimeout(() => {
            document.querySelector('.search-modal').remove();
        }, 700);
        //document.querySelector('body').style.overflowY = "scroll";
    }
}
// function to search and fill the search modal
function search_books() {
    const search_result = document.querySelector('.search-result');
    const search_input = document.querySelector('.search-books');
    search_input.addEventListener("input", ({ target }) => {
        search_result.innerHTML = "نتایج یافت شده : <br />";
        let searched_books = [];
        if (target.value.length > 2) {
            books.forEach(book => {
                if (book.name.includes(target.value)) {
                    searched_books.push(book);
                }
            });
            searched_books.forEach(s => {
                const result = `
                    <div class="search-result-item" id="search-${s.id}">
                        <img src="${s.img_url}" id="search-img-${s.id}"/>
                        <div class="book-details">
                            <span id="search-txt-${s.id}">
                                ${s.name}
                            </span>
                            <span class="search-book-publisher">
                                ${s.publisher}
                            </span>
                            <span class="prices ${(s.discounted_price !== s.price) ? " has-discount" : " "}">
                                <span class="normal-price">
                                    ${split_in_three(s.price)}
                                </span>
                                <span class="discounted-price">
                                    ${split_in_three(s.discounted_price)}
                                </span>
                            </span>
                        </div>
                    </div>
                `;
                search_result.innerHTML += result;
            });
            const all_searched_items = document.querySelectorAll(".search-result-item")
            all_searched_items.forEach(si => {
                si.addEventListener("click", (e) => {
                    //console.log(e.target.id, is_filled);
                    //search_books_opener();
                    book_clicked(e);
                });
            })
        }
    });
}
// function to render paginations
function render_pagination(bookarr) {
    pagination_HTML.innerHTML +=
        `<span class="page-number previus-page" id="page-id-prev">
            <i class="fa fa-angle-left" id="page-icon-prev"> </i>
        </span>`;
    let book_len = Math.ceil(bookarr.length / 30);
    for (let i = 0; i < book_len; i++) {
        let page_num_content = `
        <span class="page-number ${curent_page === i + 1 ? "active-page" : " "}" id="page-id-${i}">
        ${i + 1}
        </span>
        `;
        pagination_HTML.innerHTML += page_num_content;
    }
    pagination_HTML.innerHTML +=
        `<span class="page-number next-page" id="page-id-next">
            <i class ="fa fa-angle-right" id="page-icon-next"> </i>
        </span>`;
    let all_page_numbers = [...document.querySelectorAll(".page-number")];
    all_page_numbers.forEach((pn) => {
        pn.addEventListener('click', ({ target }) => {
            let clicked_id = target.id.split("-")[2];
            clicked_page_activator(clicked_id, bookarr)
        });
    });
    document.querySelector('.page-count').style.display = "grid";
}
// function for active page result show
function clicked_page_activator(id, bookarr) {
    let books_len = Math.ceil(bookarr.length / 30);
    if ((id === "next") && (curent_page !== books_len)) {
        id = curent_page;
        curent_page += 1
    }
    else if ((id === "next") && (curent_page === books_len)) {
        id = books_len - 1;
    }
    else if ((id === "prev") && (curent_page !== 1)) {
        id = curent_page - 2;
        curent_page -= 1;
    }
    else if ((id === "prev") && (curent_page === 1)) {
        id = 0;
    }
    else {
        id = parseInt(id);
        curent_page = id + 1;
    }
    bookarr = bookarr.slice(id * 30, id * 30 + 30);
    render_books(bookarr);
}
// function to handle pagination in small amounts
function render_needed_pagination() {

}
// function for having modal box be open for cart as a popup
function open_cart_modal(state) {
    if (state === "active") {
        if (![...modal_wrapper.classList].includes("single-modal")) {
            modal_wrapper.classList.add("cart-pop-up");
            modal_wrapper.classList.remove("single-modal");
            modal_wrapper.style.zIndex = "999";
            modal_wrapper.style.top = "15vh";
            render_cart_modal(cart_items);
            document.querySelector('body').style.overflowY = "hidden";
        }
    }
    else {
        address_to_here = address_to_here.replace(("cart-modal/"), "");
        document.querySelector('body').style.overflowY = "unset";
        modal_wrapper.classList.remove("cart-pop-up");
        modal_wrapper.classList.remove("single-modal");
        modal_wrapper.style.top = "-100vh";
        setTimeout(() => {
            modal_wrapper.style.zIndex = "-1";
            modal_wrapper.innerHTML = " ";
        }, 700);
    }
}
function render_cart_modal(cart1) {
    address_to_here = stop_repeatation_in_addres("cart-modal", address_to_here) ? address_to_here + "cart-modal/" : address_to_here;
    //console.log(cart);
    const date = setDate();
    const shopping_cart_content = `
        <div class="cart-page-wrapper modal">
            <div class="cart-map-btns">
                <div class="clear-cart">
                    <img src="./assets/images/trash-icon-btn.png" class="clear-cart-img" alt="پاک کردن">
                </div>
                <div class="back">
                    <img src="./assets/images/back-forward-btn.png" class="back-btn-img" alt="بازگشت">
                </div>
            </div>
            <div class="page-title">
                سبد خرید
            </div>
            <div class="cart-items-wrapper ${cart1.length !== 0 ? " has-item" : " "}">
                <div class="cart-is-empty">
                    <img src="./assets/images/empty-cart-vector.png" alt="سبد خرید خالی است">
                    <div class="empty-text">
                        سبد خرید شما خالی است
                    </div>
                    <div class="return-home">
                        بازگشت به خانه
                    </div>
                </div>
                </div>
                <div class="cart-footer">
                    <div class="date">
                        <span class="year">
                            ${date[2]}
                        </span>
                        /
                        <span class="month">
                            ${month_declare(date[1])}
                        </span>
                        /
                        <span class="day">
                            ${date[0]}
                        </span>
                    </div>
                    <div class="total-price ${cart.cart_summary.total_discount_of_items === 0 ? " " : " has-discount"}">
                        <span class="title">
                            مجموع :
                        </span>
                        <div class="prices">
                            <span class="total-price-amount">
                                ${split_in_three(cart.cart_summary.total_price_of_items)}
                            </span>
                            <span class="discounted-price">
                                ${split_in_three(cart.cart_summary.final_price)}
                            </span>
                            <span class="toman">
                                تومان
                            </span>
                        </div>
                    </div>
                    <div class="checkout-btn sina">
                        ادامه فرآیند خرید
                    </div>
                </div>
            </div>
    `;
    //appending the main text to the dom
    modal_wrapper.innerHTML = shopping_cart_content;

    //activating next step btn
    const sina_btn = document.querySelector('.checkout-btn');
    // next_step_btn.addEventListener("click", (e) => {
    // })
    // click action for cart next step
    sina_btn.addEventListener('click', (e) => {
        open_cart_modal("disactive");
        address_to_here = address_to_here.replace(("cart-modal/"), "");
        if (cart1.length !== 0) {
            if (cart.cart_summary.pay_permission) {
                // fill the discount value from api
                let discount = cart.cart_summary.total_discount_of_items;
                // get the pay url for the final step btn
                load_pause('active');
                axios
                    .get(`https://daryaftyar.ir/storeV2/payrequest/${final_id}`)
                    //.get(`https://daryaftyar.ir/storeV2/payrequest/341393410`)
                    .then((res) => {
                        const url = res.data;
                        // render final stage cart with given parameters
                        render_final_stage_cart(cart_items, discount, url.url_to_pay);
                        load_pause("disactive");
                    })
                    .catch(err => {
                        // ? we need a better way to handle the errors :)
                        render_errors(err.message)
                    })
            }
            else {
                render_user_data_form();
            }
        }
    });

    // activating go to book page btn 
    // const back_to_shop_btn = document.querySelector('.go-to-book-page');
    // back_to_shop_btn.addEventListener("click", () => {
    //     // have the filter's results saved as an out come
    //     // if (filtered_book.length === 0) {
    //     //     render_books(needed_books);
    //     // }
    //     // else {
    //     //     render_books(filtered_book);
    //     // }
    //     map_handler();
    //     open_cart_modal("disactive")
    //     // if (filter_activated) {
    //     //     render_books(needed_books.slice(0, 30));
    //     // }
    //     // else {
    //     //     render_books(needed_books);
    //     // }
    //     // have the address updated
    //     //address_to_here += "books/";
    // });


    const cart_item_wrapper = document.querySelector('.cart-items-wrapper');
    // to get total price wrapper
    const total_price_HTML = document.querySelector('.total-price .total-price-amount');
    const discounted_price_HTML = document.querySelector('.discounted-price');
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
                        ${split_in_three(item.price)}
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
        const cart_content = `
            <div class="cart-item" id="cart-item-${item.id}">
                    <div class="img-wrapper">
                        <img src="${item.img_url}"
                            alt="${item.name}">
                    </div>
                    <div class="prod-details">
                        <div class="prod-name">
                            ${item.name}
                        </div>
                        <div class="prod-price">
                            ${split_in_three(item.price)}
                        </div>
                        <div class="prod-btn-action">
                            <div class="add-btn">
                                <img src="./assets/images/plus-icon-orange.png" class="m more" alt="">
                            </div><div class="quantity">
                                ${item.count_in_user_cart}
                            </div><div class="decrement-btn quan-1">
                                <img src="./assets/images/trash-icon-btn-black.png" class="trash less" alt="">
                                <img src="./assets/images/minus-icon.png" class="line less" alt="">
                            </div>
                        </div>
                    </div>
                    <div class="remove-btn">
                        <img src="./assets/images/delete-icon-orange.png" alt="" id="${item.id}">
                    </div>
                </div>
        `;
        // calculate total pirce with the items in cart
        //total_price_amount += item.count_in_user_cart * item.price;
        cart_item_wrapper.innerHTML += cart_content;
    });
    total_price_HTML.innerHTML = split_in_three(cart.cart_summary.total_price_of_items);


    // get all the items in the cart for making events in the more or less
    // get all remove btns in cart
    const all_remove_btns = [...document.querySelectorAll('.remove-btn')];
    all_remove_btns.forEach(r_btn => {
        r_btn.addEventListener('click', (e) => {
            let d_id = parseInt(e.target.id);
            //delete_item(d_id);
            delete_item_modal(d_id);
        });
    });
    // get all the items in the cart for making events in the more or less
    const all_cart_items = [...document.querySelectorAll('.cart-item')];
    all_cart_items.forEach(item => {
        // handling more btn in cart
        // * same as more and less in the book page
        const more_btn = item.querySelector('.add-btn');
        more_btn.addEventListener('click', (e) => {
            const classes = [...e.target.classList];
            if (classes[classes.length - 1] === "add-btn") {
                const quantity_wrapper = e.target.nextElementSibling;
                quantity_wrapper.innerHTML = parseInt(quantity_wrapper.innerHTML) + 1;
                console.log(e)
                // changing the array quantity
                const id_string = e.target.parentElement.parentElement.parentElement.id;
                const id = parseInt(id_string.split("-")[2]);
                update_quantity('cart', id, "+");
                update_total(total_price_HTML, discounted_price_HTML);
            }
            else if (classes[classes.length - 1] === "more") {
                const quantity_wrapper = e.target.parentElement.nextElementSibling;
                quantity_wrapper.innerHTML = parseInt(quantity_wrapper.innerHTML) + 1;
                // changing the array quantity
                const id_string = e.target.parentElement.parentElement.parentElement.parentElement.id;
                const id = parseInt(id_string.split("-")[2]);
                update_quantity('cart', id, "+");
                update_total(total_price_HTML, discounted_price_HTML);
            }
        });
        // decreament items in cart
        const less_btn = item.querySelector('.decrement-btn');
        less_btn.addEventListener('click', (e) => {
            const classes = [...e.target.classList];
            if (classes[classes.length - 1] === "decrement-btn") {
                const quantity_wrapper = e.target.previousSibling;
                const id_string = e.target.parentElement.parentElement.parentElement.id;
                const id = parseInt(id_string.split("-")[2]);
                update_quantity('cart', id, "-");
                if (parseInt(quantity_wrapper.innerHTML) === 1) {
                    // remove the item from cart after quantity becomes 0
                    e.target.parentElement.parentElement.parentElement.remove();
                }
                else {
                    quantity_wrapper.innerHTML = parseInt(quantity_wrapper.innerHTML) - 1;
                    // changing the array quantity
                }
                update_total(total_price_HTML, discounted_price_HTML);
            }
            else if (classes[classes.length - 1] === "less") {
                const quantity_wrapper = e.target.parentElement.previousSibling;
                const id_string = e.target.parentElement.parentElement.parentElement.parentElement.id;
                const id = parseInt(id_string.split("-")[2]);
                update_quantity('cart', id, "-");
                if (parseInt(quantity_wrapper.innerHTML) === 1) {
                    e.target.parentElement.parentElement.parentElement.parentElement.remove();
                }
                else {
                    quantity_wrapper.innerHTML = parseInt(quantity_wrapper.innerHTML) - 1;
                    // changing the array quantity
                }
                update_total(total_price_HTML, discounted_price_HTML);
            }
        });

    });

    // updating curent place for map_handler method
    /* 
        ?  cause the cart item is accessible from all part of web app it needs to be stopped after 
        ? one add in the address to here so I used the stop repatation function
    */
    //stop_repeatation_in_addres("cart", address_to_here) ? address_to_here += "cart/" : address_to_here = address_to_here;

    // activating the back button
    const back_btn = document.querySelector('.modal .back');
    back_btn.addEventListener('click', () => {
        open_cart_modal("disactive");
        // map_handler();
        address_to_here = address_to_here.replace(("cart-modal/"), "");
    });
    const clear_cart_btn = document.querySelector('.clear-cart');
    clear_cart_btn.addEventListener('click', () => {
        clear_modal_cart();
    });
}
// a function to disactive all modals 
function disactive_modals() {
    //open_cart_modal('disactive');
    activate_modal_single_book('disactive');
}
// function to open filter by modal
function open_filter_by(state) {
    if (state === "active") {
        modal_wrapper.classList.add('filter-by-modal');
        modal_wrapper.style.transform = "scale(1)";
        modal_wrapper.style.zIndex = "999";
        render_filter_by();
    }
    else {
        modal_wrapper.classList.remove('filter-by-modal');
    }
}
// funciton to render filter by
function render_filter_by() {
    const static_contents = `
    <div class="wrapper-sort-by">
            <div class="sort-by-wrapper">
                <div class="sort sorted-by-none ${sorted_by === "هیچ کدام" ? " " : "disabled"}">
                    هیچکدام
                </div>
                <div class="sort sorted-by-leastPrice ${sorted_by === "ارزان ترین" ? " " : "disabled"}">
                    ارزان ترین
                </div>
                <div class="sort sorted-by-mostprice ${sorted_by === "گران ترین" ? " " : "disabled"}">
                    گران ترین
                </div>
                <div class="sort sorted-by-popularity ${sorted_by === "محبوب ترین" ? " " : "disabled"}">
                    محبوب ترین
                </div>
            </div>
            <span span class="save_and_return_btn srt" >
                ذخیره و بازگشت
            </span >
    </div>
    `;
    modal_wrapper.innerHTML = static_contents;
    // map method modifications
    address_to_here = stop_repeatation_in_addres("sort", address_to_here) ? address_to_here + "sort/" : address_to_here;
    // activating back btn
    // back_btn = document.querySelector('.back');
    // back_btn.addEventListener('click', () => {
    //     if (!is_search_open) {
    //         map_handler();
    //     }
    //     else {
    //         search_books_opener();
    //     }
    // });

    // use the search btn to open search
    // search_btn = document.querySelector('.search-icon');
    // search_btn.addEventListener('click', () => {
    //     search_books_opener();
    // });

    // activating sort by
    const sort_by_items = [...document.querySelectorAll('.sort')];
    sort_by_items.forEach((si) => {
        si.addEventListener("click", ({ target }) => {
            switch (target.classList[1]) {
                case "sorted-by-none":
                    sorted_by = "هیچ کدام";
                    break;
                case "sorted-by-mostprice":
                    sorted_by = "گران ترین";
                    break;
                case "sorted-by-leastPrice":
                    sorted_by = "ارزان ترین";
                    break;
                case "sorted-by-popularity":
                    sorted_by = "محبوب ترین";
                    break;
            }
            active_sort();
        })
    });
    // save and return btn
    document.querySelector('.wrapper-sort-by .save_and_return_btn').addEventListener("click", () => {
        open_filter_by("disactive");
        map_handler();
    });
    // sort_by_btn = document.querySelector('.filter-opener');
    // sort_by_btn.addEventListener("click", () => {
    //     map_handler();
    // });
}
// function for having only 1 item active in sort by
function active_sort() {
    // const order_label = document.querySelector(".ordered-by");
    // order_label.innerHTML = sorted_by;
    [...document.querySelectorAll(".sort")].forEach((item) => {
        item.classList.add("disabled");
    });
    let order_by_status;
    switch (sorted_by) {
        case "هیچ کدام":
            document.querySelector(".sorted-by-none").classList.remove("disabled");
            order_by_status = "none";
            break;
        case "گران ترین":
            document.querySelector(".sorted-by-mostprice").classList.remove("disabled");
            order_by_status = "-price";
            break;
        case "ارزان ترین":
            document.querySelector(".sorted-by-leastPrice").classList.remove("disabled");
            order_by_status = "price"
            break;
        case "محبوب ترین":
            document.querySelector(".sorted-by-popularity").classList.remove("disabled");
            order_by_status = "-buys_count"
            break;
    }
    order_book(order_by_status);
}
// function for requesting the ordered by books
function order_book(status) {
    load_pause("active");
    if (status === "none") {
        axios
            .get("https://daryaftyar.ir/storeV2/books")
            .then((res) => {
                books = res.data;
                needed_books = books.slice(0, 30);
                load_pause("disactive");
            })
            .catch((err) => render_errors(err.message));
    }
    else {
        axios
            .get(`https://daryaftyar.ir/storeV2/sortbooks/${status}`)
            .then((res) => {
                books = res.data.books;
                needed_books = books.slice(0, 30);
                load_pause("disactive");
            })
            .catch((err) => render_errors(err.message))
    }
}
// function to render errors
function render_errors(error) {
    error_modal.innerHTML = `
        متاسفانه ارور زیر رخ داده است :
        <span class="err-message">
        ${error}
        </span>
    `;
    error_modal.style.visibility = "visible";
    error_modal.style.transform = "scale(1)";
    setTimeout(() => {
        error_modal.style.visibility = "hidden";
        error_modal.style.transform = "scale(0)";
    }, 3000);
}
// function for modal state updates
function modal_state() {
    // cart.cart_details.forEach(ci => {
    //     let changed_book = document.querySelector(`#book-${ci.id}`);
    //     if (changed_book !== null) {
    //         if(cart.cart_items_ids.includes)
    //     }
    // });
    if (address_to_here.includes("cart-modal") || address_to_here.includes("single-book")) {
        let all_rendered_books = [...document.querySelectorAll('.book')]
        all_rendered_books.forEach(b => {
            let id = parseInt(b.id.split("-")[1]);
            if (!cart.cart_items_ids.includes(id)) {
                b.classList.remove("quan-0");
            }
            else {
                b.classList.add("quan-0");
            }
        });
    }
}
// a function to seprate numbers bt 3 digits
function split_in_three(number) {
    let reversed_num = String(number).split("").reverse().join("");
    let splited_number = "";
    for (let i = 0; i < reversed_num.length; i++) {
        if (i % 3 === 0 && i !== 0) {
            splited_number += ",";
        }
        splited_number += reversed_num[i];
    }
    return splited_number.split("").reverse().join("");
}
// function for scale and fixed position problem
function render_width(el) {
    setTimeout(() => {
        el.style.opacity = "1";
    }, 100);
}
// ! form functions
const illigal_chars = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "!",
    "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+",
    "[", "]", "{", "}", "|", " \ ", "/", "?", ".", ",", "۱", "۲", "۳",
    "۴", "۵", "۶", "۷", "۸", "۹", "۰", ":"];

function render_user_data_form() {
    clearPage();
    address_to_here = stop_repeatation_in_addres("userData", address_to_here) ? address_to_here + "userData/" : address_to_here;
    const user_data_content = `
    <div class="user-data-page">
        <div class="header">
            <div class="back">
                <img src="./assets/images/back-forward-btn.png" class="back-img" alt="">
            </div>
            <div class="page-title">
                تکمیل اطلاعات شخصی
            </div>
            <div class="text">
                برای ادامه دادن فرایند خرید لطفا اطلاعات زیر را کامل کنید.
            </div>
        </div>
        <div class="inputs-wrapper">
            <div class="input-wrapper">
                <div class="label-and-input">
                    <img src="./assets/images/user-data-icon.png" alt="">
                    <input name="user-name" type="text" id="user-name" placeholder="نام و نام خانوداگی" class="user-data-inp"/>
                </div>
                <div class="error-loader err-name">
                    ارور پیش آمده
                </div>
            </div>
            <div class="input-wrapper">
                <div class="label-and-input">
                    <img src="./assets/images/phone-data-icon.png" alt="">
                    <input name="user-phone" type="number" id="user-phone" placeholder="شماره منزل" class="user-data-inp"/>
                </div>
                <div class="error-loader err-phone">
                    ارور پیش آمده
                </div>
            </div>
            <div class="input-wrapper">
                <div class="label-and-input">
                    <img src="./assets/images/post-data-icon.png" alt="">
                    <input name="user-postal-code" type="number" id="user-postal-code" placeholder="کدپستی" class="user-data-inp"/>
                </div>
                <div class="error-loader err-post">
                    ارور پیش آمده
                </div>
            </div>
            <div class="input-wrapper">
                <div class="label-and-input">
                    <img src="./assets/images/address-data-icon.png" alt="">
                    <textarea name="user-address" id="user-address" cols="30" rows="5" placeholder="آدرس" class="user-data-inp"></textarea>
                </div>
                <div class="error-loader err-address">
                    ارور پیش آمده
                </div>
            </div>
        </div>
        <div class="btns-wrapper">
            <button class="submit-user-data">
                ثبت اطلاعات
            </button>
        </div>
    </div>
                        `;
    main_area.innerHTML = user_data_content;

    const error_modal = document.querySelector(".error-modal");

    const name_input = document.querySelector("#user-name");

    const phone_input = document.querySelector("#user-phone");

    const postal_code_input = document.querySelector("#user-postal-code");

    const address_input = document.querySelector("#user-address");

    const submit_btn = document.querySelector(".submit-user-data");

    name_input.addEventListener("input", ({ target }) => {
        validate_name_input(target);
    });
    phone_input.addEventListener("input", ({ target }) => {
        validate_phone_input(target);
    });
    postal_code_input.addEventListener("input", ({ target }) => {
        validate_post_input(target);
    });
    address_input.addEventListener("input", ({ target }) => {
        validate_address_input(target);
    });
    submit_btn.addEventListener("click", () => {
        update_user();
    });
    let check_data = false;

    if (data_user.real_name) {
        name_input.value = data_user.real_name;
    }
    else {
        check_data = true;
    }

    if (data_user.real_home_number) {
        phone_input.value = data_user.real_home_number;
    }
    else {
        check_data = true;
    }

    if (data_user.real_postal_code) {
        postal_code_input.value = data_user.real_postal_code;
    }
    else {
        check_data = true;
    }

    if (data_user.real_address) {
        address_input.value = data_user.real_address;
    }
    else {
        check_data = true;
    }

    if (check_data) {
        submit_btn.disabled = true;
        submit_btn.classList.add("dis");
    }
    const back_btn = document.querySelector('.back');
    back_btn.addEventListener("click", () => {
        map_handler();
    });
    const user_data_wrapper = document.querySelector('.user-data-page');
    render_now(user_data_wrapper);
}
function check_situtation() {
    const submit_btn = document.querySelector(".submit-user-data");
    const errored_item = document.querySelector('.has-error');
    const all_inputs = [...document.querySelectorAll(".user-data-inp")];
    let action = true;
    all_inputs.forEach(input => {
        if (!input.value) {
            submit_btn.classList.add("dis")
            submit_btn.disabled = true;
            action = false;
        }
    });
    if (action) {
        if (errored_item !== null) {
            submit_btn.classList.add("dis")
            submit_btn.disabled = true;
        }
        else {
            submit_btn.classList.remove("dis")
            submit_btn.disabled = false;
        }
    }

}
function validate_name_input(target) {
    let content = target.value;
    let invalid_char = false;
    illigal_chars.forEach(char => {
        if (content.includes(char)) {
            invalid_char = true;
        }
    })
    if (content.length > 50) {
        render_name_error("len", "active", target);
    }
    else if (content.length < 3) {
        render_name_error("short-len", "active", target);
    }
    else if (invalid_char) {
        render_name_error("num", "active", target);
    }
    else {
        render_name_error("len", "disactive", target);
        data_user.real_name = content;
    }
    check_situtation();
}
function validate_phone_input(target) {
    let content = target.value;
    if (content.length > 15) {
        render_phone_error("len", "active", target);
    }
    else if (content.length < 10) {
        render_phone_error("short-len", "active", target);
    }
    else {
        render_phone_error("len", "disactive", target);
        data_user.real_home_number = content;
    }
    check_situtation();
}
function validate_post_input(target) {
    let content = target.value;
    if (content.length !== 10) {
        render_post_error("len", "active", target);
    }
    else {
        render_post_error("len", "disactive", target);
        data_user.real_postal_code = content;
    }
    check_situtation();
}
function validate_address_input(target) {
    let content = target.value;
    if (content.length > 250) {
        render_address_error("len", "active", target);
    }
    else if (content.length === 0) {
        render_address_error("zero", "active", target);
    }
    else {
        render_address_error("len", "disactive", target);
        data_user.real_address = content;
    }
    check_situtation();
}
function render_name_error(kind, state, target) {
    let error_for_name = document.querySelector(".err-name");
    if ((kind === "len") && (state === "active")) {
        target.classList.add('has-error');
        error_for_name.style.opacity = "1";
        error_for_name.style.height = "40px";
        error_for_name.innerHTML = "طول مجاز برای این فیلد حداکثر ۵۰ کاراکتر است";
    }
    else if ((kind === "short-len") && (state === "active")) {
        target.classList.add('has-error');
        error_for_name.style.opacity = "1";
        error_for_name.style.height = "40px";
        error_for_name.innerHTML = "طول مجاز برای این فیلد حداقل ۳ کاراکتر است";
    }
    else if ((kind === "num") && (state === "active")) {
        target.classList.add('has-error');
        error_for_name.style.opacity = "1";
        error_for_name.style.height = "40px";
        error_for_name.innerHTML = "کاراکتر غیر مجاز";
    }
    else if (state === "disactive") {
        target.classList.remove('has-error');
        error_for_name.style.opacity = "0";
        error_for_name.style.height = "0px";
        error_for_name.innerHTML = " ";
        //check_situtation()
    }

}
function render_phone_error(kind, state, target) {
    let error_for_phone = document.querySelector(".err-phone");
    if ((kind === "len") && (state === "active")) {
        target.classList.add('has-error');
        error_for_phone.style.opacity = "1";
        error_for_phone.style.height = "40px";
        error_for_phone.innerHTML = "طول مجاز برای این فیلد حداکثر ۱۵ کاراکتر است";
    }
    else if ((kind === "short-len") && (state === "active")) {
        target.classList.add('has-error');
        error_for_phone.style.opacity = "1";
        error_for_phone.style.height = "40px";
        error_for_phone.innerHTML = "طول مجاز برای این فیلد حداقل ۱۰ کاراکتر است";
    }
    else if (state === "disactive") {
        target.classList.remove('has-error');
        error_for_phone.style.opacity = "0";
        error_for_phone.style.height = "0px";
        error_for_phone.innerHTML = " ";
        //check_situtation()
    }

}
function render_post_error(kind, state, target) {
    let error_for_post = document.querySelector(".err-post");
    if ((kind === "len") && (state === "active")) {
        target.classList.add('has-error');
        error_for_post.style.opacity = "1";
        error_for_post.style.height = "40px";
        error_for_post.innerHTML = "طول مجاز برای این فیلد ۱۰ کاراکتر است";
    }
    else if (state === "disactive") {
        target.classList.remove('has-error');
        error_for_post.style.opacity = "0";
        error_for_post.style.height = "0px";
        error_for_post.innerHTML = " ";
        //check_situtation()
    }

}
function render_address_error(kind, state, target) {
    let error_for_address = document.querySelector(".err-address");
    if ((kind === "len") && (state === "active")) {
        target.classList.add('has-error');
        error_for_address.style.opacity = "1";
        error_for_address.style.height = "80px";
        error_for_address.innerHTML = "طول مجاز برای این فیلد حداکثر ۲۵۰ کاراکتر است";
    }
    else if ((kind === "zero") && (state === "active")) {
        console.log(cart)
        target.classList.add('has-error');
        error_for_address.style.opacity = "1";
        error_for_address.style.height = "80px";
        error_for_address.innerHTML = "این فیلد نمی تواند خالی باشد";
    }
    else if (state === "disactive") {
        target.classList.remove('has-error');
        error_for_address.style.opacity = "0";
        error_for_address.style.height = "0px";
        error_for_address.innerHTML = " ";
        //check_situtation()
    }
}
function update_user() {
    load_pause("active");
    axios
        .patch(`https://daryaftyar.ir/storeV2/user_real_data/${final_id}`, data_user)
        .then((res) => {
            data_user = res.data;
            console.log(data_user)
            axios
                .get(`https://daryaftyar.ir/storeV2/payrequest/${final_id}`)
                //.get(`https://daryaftyar.ir/storeV2/payrequest/341393410`)
                .then((res) => {
                    const url = res.data;
                    //console.log(url)
                    // render final stage cart with given parameters
                    render_final_stage_cart(cart_items, cart.cart_summary.total_discount_of_items, url.url_to_pay);
                    load_pause("disactive");
                })
                .catch(err => {
                    // ? we need a better way to handle the errors :)
                    render_errors(err.message)
                })
        })
        .catch((err) => {
            render_errors(err.message);
            //console.log(err);
        });
}
// function for coins render
function render_coin() {
    clearPage();
    address_to_here = stop_repeatation_in_addres("coinPage", address_to_here) ? address_to_here + "coinPage/" : address_to_here;
    const coin_page_content = `
        <div class="coin-page-wrapper">
            <div class="header">
                <div class="page-title">
                    افزایش سکه‌ها
                </div>
                <div class="back">
                    <img src="./assets/images/back-forward-btn.png" class="back-img" alt="back image">
                </div>
            </div>
            <div class="coin-image-wrapper">
                <img src="./assets/images/coin-page-image.png" class="coin image" alt="">
            </div>
            <div class="expalin-text">
                توضیحات
            </div>
            <div class="ways-to-add-coin-wrapper">
                <div class="title">
                    راه های افزایش اعتبار کیف پول
                </div>
                <div class="text">

                </div>
            </div>
            <div class="coin-count-wrapper">
                <div class="coin-count-title">
                    تعداد سکه های حسابت
                </div>
                <div class="coin-count">
                    ${user.coin}
                </div>
            </div>
            <div class="add-more-coin">
            افزایش سکه‌ها
            </div>
        </div>
    `;
    main_area.innerHTML = coin_page_content;

    const add_more_coin = document.querySelector('.add-more-coin');
    add_more_coin.addEventListener("click", () => {
        render_buy_coin();
    });

    const back_btn = document.querySelector(".back");
    back_btn.addEventListener("click", () => {
        map_handler();
    });
    const coin_page = document.querySelector('.coin-page-wrapper');
    render_now(coin_page);
}
// function to render buy more coin 
function render_buy_coin() {
    clearPage();
    address_to_here = stop_repeatation_in_addres("buyCoinPage", address_to_here) ? address_to_here + "buyCoinPage/" : address_to_here;
    const page_content = `
        <div class="buy-coin-page-wrapper">
            <div class="header">
                <div class="page-title">
                خرید سکه
                </div>
                <div class="back">
                    <img src="./assets/images/back-forward-btn.png" class="back-img" alt="back image">
                </div>
            </div>
            <div class="coin-choose-wrapper">
                <div class="options-wrapper">
                    <div class="option option-1">
                        <span class="status active">

                        </span>
                        <span class="text">
                            ۵۰ سکه -
                             ${split_in_three("۵۰۰۰")}
                             تومان 
                             (ارزانترین)
                        </span>
                    </div>
                    <div class="option option-2">
                        <span class="status">
                    
                        </span>
                        <span class="text">
                            ۱۵۰سکه -
                            ${split_in_three("۹۰۰۰")}
                            تومان 
                            (محبوب‌ترین)
                        </span>
                    </div>
                    <div class="option option-3">
                        <span class="status">
                    
                        </span>
                        <span class="text">
                        ۵۰۰سکه -
                         ${split_in_three("۱۹۰۰۰")}
                            تومان
                          (به صرفه‌ترین)
                        </span>
                    </div>
                </div>
                <div class="image-wrapper">
                    <img src="./assets/images/coin-more.jpeg" loading="lazy" alt="">
                </div>
            </div>
            <div class="coin-footer">
                <a href="https://daryaftyar.ir/storeV2/buy_coin/id:<str:id>-amount:50" class="buy-coin-btn" target="_blank">
                    خرید سکه
                </a>
            </div>
        </div>
    `;
    main_area.innerHTML = page_content;
    const back_btn = document.querySelector(".back");
    back_btn.addEventListener("click", () => {
        map_handler();
    });

    const buy_coin = document.querySelector('.buy-coin-btn');
    buy_coin.addEventListener("click", () => {
        close_webapp();
    });

    const all_coin_choices = [...document.querySelectorAll(".option")];
    all_coin_choices.forEach(choice => {
        choice.addEventListener("click", (e) => {
            active_coin(choice, e.target, all_coin_choices);
        });
    });
    const buy_coin_page = document.querySelector('.buy-coin-page-wrapper');
    render_now(buy_coin_page);

    buy_coin_func(50);
}
// function for validating active choice of coin amount
function active_coin(el, event, arr) {
    arr.forEach(item => {
        item.querySelector(".status").classList.remove("active");
    })
    el.querySelector(".status").classList.add("active");
    chosen_coin_amount = parseInt([...el.classList][1].split("-")[1]);

    let url = "#";
    switch (chosen_coin_amount) {
        case 1:
            buy_coin_func(50);
            break;
        case 2:
            buy_coin_func(150);
            break;
        case 3:
            buy_coin_func(500);
            break;
    }
}
function buy_coin_func(amount) {
    let url = "#";
    const buy_coin = document.querySelector(".buy-coin-btn");
    load_pause("active");
    axios
        .get(`https://daryaftyar.ir/storeV2/buy_coin/id:${final_id}-amount:${amount}`)
        .then(res => {
            url = res.data.url_to_pay;
            load_pause("disactive");
            buy_coin.setAttribute("href", url);
        })
        .catch(err => render_errors(err.message))
}
function calculate_discount(num, dis_num) {
    const discount = ((num - dis_num) / num) * 100;
    return Math.ceil(discount);
}