//temp 

const user = {
    name: 'سینا اناهید',
    amount: 4000,
    days_left: 17,
}

// variables

const main_area = document.querySelector('.main-area');
const footer_btn_checkout = document.querySelector('.footer-menu.it-1');
const footer_btn_home = document.querySelector('.footer-menu.it-2');
const footer_btn_cart = document.querySelector('.footer-menu.it-3');
let increase_amount = [];
let books_btn = [];
let classes_btn = [];
// classes

// events
document.addEventListener("DOMContentLoaded", () => {
    render_first_page();
})
footer_btn_home.addEventListener('click', () => {
    clearPage();
    render_first_page();

})

// functions
function clearPage() {
    main_area.innerHTML = " ";
}

// render first page
function render_first_page() {
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
        alert();
    });


    // fill the books btn
    books_btn = document.querySelector('.book-class-btns.books');
    // adding event listener to books btn
    books_btn.addEventListener('click', () => {
        // some function 
        alert();
    });

    // fill the books btn
    classes_btn = document.querySelector('.book-class-btns.classes');
    // adding event listener to classes btn
    classes_btn.addEventListener('click', () => {
        // some function 
        alert();
    });
}

function render_loading() {
    const loading_HTML = `
    <div class="loading">
        <i class="fa fa-spinner"></i>
    </div>
    `;
    main_area.innerHTML = loading_HTML;
}

// etc