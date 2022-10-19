try {
    document.cookie = 'cookie2=value2; SameSite=None; Secure';
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
            id: 0,
            clicked: false,
            name: "فارغ التحصیل"
        }
    ];
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
    // making publisher array 
    // an array to have all publishers stored in a place
    let publishers = [];
    //books according to users data
    let needed_books = [];
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
    //pause html
    const pause_wrapper = document.querySelector('.pause');
    //a place holder for loading the modals
    const modal_wrapper = document.querySelector('.modal-pacle-holder');
    // the error wrapper place 
    const error_modal = document.querySelector(".error-modal");
    // variable to know where where you lastly
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
    // a consatant for the search icon
    let search_btn = [];
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
    // pay btn html
    let pay_btn_wrapper = [];
    //global error for test
    let global_err = "I am empty for now";
    // all filters is filled once (bad idea !)
    let is_filled_pub = false;
    let is_filled_sub = false;
    let is_filled_year = false;
    // filter is activated
    let filter_activated = false;
    // search item is open
    let is_search_open = false;
    // page count
    let curent_page = 1;
    // html documnet for pagination
    let pagination_HTML = [];
    // sorted by status
    let sorted_by = "هیچکدام";
    // the array of the first books un touched
    let first_rendered_books = [];
    // ! events
    // * ids with telegram object
    // filling the user via telegram object
    const us_id = window.Telegram.WebApp.initData;
    // spiliting data to find the id of the user
    const final_id = us_id.split("%22")[2].split("3A")[1].split("%")[0];
    //const final_id = "341393410";

    // ! loading complete method
    //documnet load to render first page
    document.addEventListener("DOMContentLoaded", () => {
        //RENDER LOADING till the main pages be loaded
        render_loading();
        // getting the user from api
        axios
            .get("https://daryaftyar.ir/storeV2/books30")
            .then((res) => {
                // filling the main books varibale
                needed_books = res.data;
                first_rendered_books = res.data;
                //needed_books = books.slice(0, 30);
            })
            .catch((err) => render_errors(err.message));
        axios
            .get("https://daryaftyar.ir/storeV2/books")
            .then((res) => {
                // filling the main books varibale
                books = res.data;
                render_first_page();
                // filling books according to the users data
                //needed_books = books.filter(b => ((b.subject === user.subject) && (b.book_year === user.year)));
                //needed_books = books.slice(0, 30);
                //console.log(books.length);
                //needed_books = books;
                //render_books(needed_books);\
                //console.log(books.filter(b => b.id === 201411));
            })
            .catch((err) => render_errors(err.message));
        axios
            .get(`https://daryaftyar.ir/storeV2/user/${final_id}`)
            //.get(`https://daryaftyar.ir/storeV2/user/341393410`)
            .then((res) => {
                //console.log("user :", res.data);
                // filling user via the main data from api
                user = res.data;
                //render_first_page();
                // render app first page
                // activating filters for the books page filter
                //clicked_grades.push(user.year);
                //clicked_subjects.push(user.subject);
                // making the first filter btn active
                //el_by_id(grades, clicked_grades[0]).clicked = true;
                //el_by_id(subjects, clicked_subjects[0]).clicked = true;
            })
            .catch((err) => render_errors(err.message));
        // getting books 
        // getting users cart items (with the id we have)
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
            })
            .catch((err) => render_errors(err.message));
        axios
            .get("https://daryaftyar.ir/storeV2/pubs")
            .then((res) => {
                // filling the publishers and adding the clicked attr to their objects
                res.data.forEach(p => {
                    publishers.push({ ...p, clicked: false });
                    //clicked_publishers_ids.push(p.id)
                });
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
        render_first_page();
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
            const total_price_HTML = document.querySelector('.price');
            update_total(total_price_HTML);
        }
    });
    //render checkout page via menu btn
    footer_btn_checkout.addEventListener('click', () => {
        // page is not ready so we have to render coming soon page
        disactive_modals();
        render_coming_soon_page();
    });

    // ! functions

    // function which clears the main area 
    function clearPage() {
        main_area.innerHTML = " ";
    }

    // render first page
    function render_first_page() {
        // using the address variable for having the map method
        address_to_here = "home/";
        //clearing the area for first page
        clearPage();
        // making first page html content
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
                            به فروشگاه دریافت یار خوش آمدید!
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
        // appending content of first page to the main area
        main_area.innerHTML = firstPageHTML;

        // fill the amount btn
        increase_amount = document.querySelector('.increase-wallet-wrapper');
        // adding event listener to increase btn
        increase_amount.addEventListener('click', () => {
            render_wallet(user);
        });


        // fill the books btn
        books_btn = document.querySelector('.book-class-btns.books');
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

        // fill the classes btn
        classes_btn = document.querySelector('.book-class-btns.classes');
        // adding event listener to classes btn
        classes_btn.addEventListener('click', () => {
            // some function 
            render_coming_soon_page();
        });
    }

    //render book page
    function render_books(books1) {
        disactive_modals();
        //map address
        address_to_here = stop_repeatation_in_addres("book", address_to_here) ? address_to_here + "book/" : address_to_here;
        //address_to_here += "book/";
        // creating static contents of the book page
        const static_contents = `
     <div class="books-wrapper">
            <div class="books-header">
                <div class="back">
                    <i class="fa fa-caret-right"></i>
                </div>
                <div class="books-page-title">
                    کتاب ها
                </div>
                <div class="search-icon">
                    <i class="fa fa-search"></i>
                </div>
            </div>
            <div class="book-order">
                <div class="order-by-wrapper">
                    مرتب سازی بر اساس :
                    <span class="ordered-by">
                        ${sorted_by}
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
                            ${(clicked_publishers_ids.length === 0) ? "( همه )" : (clicked_publishers_ids.length === publishers.length) ? "( همه )" : " ( " + clicked_publishers_ids.length + " ) "}    
                        </span>
                    </span>
                    <span class="filters fil-2">
                        رشته 
                        <span class="sub-filter">
                            ${(clicked_subjects.length === 0) ? "( همه )" : (clicked_subjects.length === subjects.length) ? "( همه )" : " ( " + clicked_subjects.length + " ) "}    
                        </span>
                    </span>
                    <span class="filters fil-3">
                        پایه
                        <span class="sub-filter">
                            ${(clicked_grades.length === 0) ? "( همه )" : (clicked_grades.length === grades.length) ? "( همه )" : " ( " + clicked_grades.length + " ) "}    
                        </span>
                    </span>
                </div>
            <div class="main-content">
                
                <div class="books">
                   
                </div>
            </div>
            <div class="page-count">
            </div>
        </div>
    `;
        // appending the static contents
        main_area.innerHTML = static_contents;

        // filling the books wrapper html
        books_wrapper = document.querySelector('.books');
        // having the books page main content html
        books_main_content = document.querySelector('.main-content')

        // fill the pagination 
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
            clear_stage(books_main_content);
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
            clear_stage(books_main_content);
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
            clear_stage(books_main_content);
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

        //activating sort by btn
        sort_by_btn = document.querySelector('.filter-opener');
        sort_by_btn.addEventListener('click', () => {
            // this part is disactivated so ...
            render_filter_by();
        });
        // check if the books are empty or not ( because of an error or th filters )
        if (books1.length !== 0) {
            // read each book and render it to the app
            books1.forEach((book) => {
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
                                <span class="dynamic-price ${(book.discounted_price !== book.price) ? "has-discount" : " "}">
                                    <span class="normal-price">
                                    ${book.price}
                                    </span>
                                    <span class="disocounted-price">
                                    ${book.discounted_price}
                                    </span>
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
            // storing all books for being clicked and other actions
            const books_HTML = [...document.querySelectorAll('.book-item')];
            // adding event listener for all books and identify every book to be clicked and rendered
            books_HTML.forEach(item => {
                item.addEventListener('click', (e) => {
                    //calling the book clicked method for identifying which book is clicked for single book render method
                    book_clicked(e);
                });
                // handling more btn in book page
                const add_book_btn = item.querySelector('.add-book');
                add_book_btn.addEventListener('click', (e) => {
                    //reading the clicked class
                    const classes = [...e.target.classList];
                    // if the span is clicked
                    if (classes[classes.length - 1] === "add-book") {
                        // reading quantity wrapper from HTML DOM
                        const quantity_wrapper = e.target.nextElementSibling;
                        // increase the amount of the html node 
                        quantity_wrapper.innerHTML = parseInt(quantity_wrapper.innerHTML) + 1;

                        // changing the array quantity

                        //finding the book id via wrapper element's id
                        const id_string = e.target.parentElement.parentElement.id;
                        //turn it into a number for use of id
                        const id = parseInt(id_string.split("-")[1]);
                        // calling the function for updating the quality
                        update_quantity('book', id, "+");
                        //update_total(total_price_HTML);
                    }
                    // if you have clicked on the i tag instead of span
                    else if (classes[classes.length - 1] === "fa-plus") {
                        // finding the quantity wrapper on the DOM
                        const quantity_wrapper = e.target.parentElement.nextElementSibling;
                        // increasing the quantity on the HTML Live view 
                        quantity_wrapper.innerHTML = parseInt(quantity_wrapper.innerHTML) + 1;

                        // changing the array quantity

                        // finding the modified book id from html 
                        const id_string = e.target.parentElement.parentElement.parentElement.id;
                        //turn it to a number
                        const id = parseInt(id_string.split("-")[1]);
                        // call the update quantity for the modifications
                        update_quantity('book', id, "+");
                        //update_total(total_price_HTML);
                    }
                });
                // decreament items in book page
                const less_btn = item.querySelector('.decrment-book');
                less_btn.addEventListener('click', (e) => {
                    // geting all the class for checking
                    const classes = [...e.target.classList];
                    // if you clicked on the span tag
                    if (classes[classes.length - 1] === "decrment-book") {
                        // find quantity wrapper on the HTML
                        const quantity_wrapper = e.target.previousSibling;
                        //find id via wrappers id
                        const id_string = e.target.parentElement.parentElement.id;
                        // turn id to a number and delete the prefix
                        const id = parseInt(id_string.split("-")[1]);
                        // call the update method fot modifications
                        update_quantity('cart', id, "-");
                        // if items quantity is 0 this condition prevents the number to be a negative value
                        if (parseInt(quantity_wrapper.innerHTML) === 0) {
                            // make the item stays on zero not a negative number
                            quantity_wrapper.innerHTML = 0;
                        }
                        else {
                            quantity_wrapper.innerHTML = parseInt(quantity_wrapper.innerHTML) - 1;
                            // changing the array quantity
                        }
                        //update_total(total_price_HTML);
                    }
                    // if you have clicked on the i tag instead of span tag
                    else if (classes[classes.length - 1] === "fa-minus") {
                        // find quantity wrapper on the HTML
                        const quantity_wrapper = e.target.parentElement.previousSibling;
                        //find id via wrappers id
                        const id_string = e.target.parentElement.parentElement.parentElement.id;
                        // turn id to a number and delete the prefix
                        const id = parseInt(id_string.split("-")[1]);
                        // call the update method fot modifications
                        update_quantity('cart', id, "-");
                        // if items quantity is 0 this condition prevents the number to be a negative value
                        if (parseInt(quantity_wrapper.innerHTML) === 0) {
                            // make the item stays on zero not a negative number
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

    }

    // render publisher filter 
    function publisher_filter(publishers) {
        // render and read each publisher
        // check the clicked status
        publishers.forEach((publisher) => {
            const publisher_HTML = `
            <span class="publisher-item ${!publisher.clicked ? "disabled" : " "}" id="publisher-${publisher.id}">
                ${publisher.name}
            </span>
        `;
            // add the html content to the dom 
            books_main_content.innerHTML += publisher_HTML;
        });
        // create a button to adjust the changes and returns to the books page
        const save_and_return_btn_content = `
            <span class="save_and_return_btn">
            ذخیره و بازگشت
            </span>
        `;
        // add the btn content to the bottom of the publishers
        books_main_content.innerHTML += save_and_return_btn_content;
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
        // activating save and return button 
        document.querySelector('.save_and_return_btn').addEventListener("click", () => {
            map_handler();
        });
    }

    // render book year filter 
    function grade_filter(grades) {
        // * actions are the same as publishers filter

        grades.forEach((grade) => {
            const grade_HTML = `
            <span class="book-year-item ${!grade.clicked ? "disabled" : " "}" id="bookyear-${grade.id}">
                ${grade.name}
            </span>
        `;
            books_main_content.innerHTML += grade_HTML;
        });
        const save_and_return_btn_content = `
            <span class="save_and_return_btn">
            ذخیره و بازگشت
            </span>
        `;
        books_main_content.innerHTML += save_and_return_btn_content;
        grades_DOM = [...document.querySelectorAll('.book-year-item')];
        grades_DOM.forEach(el => {
            el.addEventListener('click', (e) => {
                clicked_grades_identifier(e);
            });
        });
        address_to_here = stop_repeatation_in_addres("filter", address_to_here) ? address_to_here + "filter/" : address_to_here;
        //address_to_here += "filter/";
        document.querySelector('.save_and_return_btn').addEventListener("click", () => {
            map_handler();
        });
    }

    // render subjects filter 
    function subject_filter(subjects) {
        // * actions are the same as publishers filter

        subjects.forEach((subject) => {
            const subject_HTML = `
            <span class="subject-item ${!subject.clicked ? "disabled" : " "}" id="subject-${subject.id}">
                ${subject.name}
            </span>
        `;
            books_main_content.innerHTML += subject_HTML;
        });
        const save_and_return_btn_content = `
            <span class="save_and_return_btn">
            ذخیره و بازگشت
            </span>
        `;
        books_main_content.innerHTML += save_and_return_btn_content;
        subjects_DOM = [...document.querySelectorAll('.subject-item')];
        subjects_DOM.forEach(el => {
            el.addEventListener('click', (e) => {
                clicked_subjects_identifier(e);
            });
        });
        address_to_here = stop_repeatation_in_addres("filter", address_to_here) ? address_to_here + "filter/" : address_to_here;
        //address_to_here += "filter/";
        document.querySelector('.save_and_return_btn').addEventListener("click", () => {
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
        document.querySelector('.fil-1 .sub-filter').innerHTML = `( ${clicked_publishers_ids.length} )`;
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
        document.querySelector('.fil-2 .sub-filter').innerHTML = `( ${clicked_subjects.length} )`;
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
        document.querySelector('.fil-3 .sub-filter').innerHTML = `( ${clicked_grades.length} )`;
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
                    <div class="total-price">
                        <span class="price">
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

        //appending the main text to the dom
        main_area.innerHTML = shopping_cart_HTML;

        //activating next step btn
        const next_step_btn = document.querySelector('.cart-next-step');
        // click action for cart next step
        next_step_btn.addEventListener('click', () => {
            // render final stage with cart items and dicount amount
            // check if the cart isn't empty ro render final stage cart
            if (cart1.length !== 0) {
                // fill the discount value from api
                let discount = cart.cart_summary.total_discount_of_items;
                // get the pay url for the final step btn
                axios
                    .get(`https://daryaftyar.ir/storeV2/payrequest/${final_id}`)
                    //.get(`https://daryaftyar.ir/storeV2/payrequest/341393410`)
                    .then((res) => {
                        const url = res.data;
                        // render final stage cart with given parameters
                        render_final_stage_cart(cart_items, discount, url.url_to_pay);
                    })
                    .catch(err => {
                        // ? we need a better way to handle the errors :)
                        render_errors(err.message)
                    })
            }
        });

        // activating go to book page btn 
        const back_to_shop_btn = document.querySelector('.go-to-book-page');
        back_to_shop_btn.addEventListener("click", () => {
            // have the filter's results saved as an out come
            // if (filtered_book.length === 0) {
            //     render_books(needed_books);
            // }
            // else {
            //     render_books(filtered_book);
            // }
            //map_handler();
            if (filter_activated) {
                render_books(needed_books.slice(0, 30));
            }
            else {
                render_books(needed_books);
            }
            // have the address updated
            //address_to_here += "books/";
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
            // calculate total pirce with the items in cart
            total_price_amount += item.count_in_user_cart * item.price;
            cart_item_wrapper.innerHTML += cart_item_content;
        });
        total_price_HTML.innerHTML = total_price_amount;


        // get all the items in the cart for making events in the more or less
        const all_cart_items = [...document.querySelectorAll('.cart-item')];
        all_cart_items.forEach(item => {
            // handling more btn in cart
            // * same as more and less in the book page
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
                        // remove the item from cart after quantity becomes 0
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
        /* 
            ?  cause the cart item is accessible from all part of web app it needs to be stopped after 
            ? one add in the address to here so I used the stop repatation function
        */
        //stop_repeatation_in_addres("cart", address_to_here) ? address_to_here += "cart/" : address_to_here = address_to_here;

        // activating the back button
        const back_btn = document.querySelector('.back');
        back_btn.addEventListener('click', () => {
            map_handler();
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
        address_to_here = stop_repeatation_in_addres("wallet", address_to_here) ? address_to_here + "wallet/" : address_to_here;
        //address_to_here += "wallet/";
        back_btn.addEventListener('click', () => {
            map_handler();
        });

    }
    // function to render single book page
    // ? maybe it better to have this function as a modal instead of a complete page ( bea cause of action after a back btn )
    // ! reconsider maybe needed here
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
                                ${book.price}
                            </span> 
                            <span class="discounted-price">
                                ${book.discounted_price}
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
        // have the books content as the main content
        modal_wrapper.innerHTML = single_book_content;
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
            }
            else if (classes[classes.length - 1] === "fa-plus") {
                const quantity_wrapper = e.target.parentElement.nextElementSibling;
                quantity_wrapper.innerHTML = parseInt(quantity_wrapper.innerHTML) + 1;

                const id = book.id;
                update_quantity('book', id, "+");
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
            }
            else if (classes[classes.length - 1] === "fa-minus") {
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
            }
        });

        // * same as always having the back btn map the web app
        const back_btn = document.querySelector('.modal-pacle-holder .back');
        address_to_here = stop_repeatation_in_addres("single-book", address_to_here) ? address_to_here + "single-book/" : address_to_here;
        //address_to_here += "single-book/";
        back_btn.addEventListener('click', () => {
            // disactive modal
            activate_modal_single_book("disactive");
            map_handler();
        });
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
                                        ${cart.cart_summary.total_price_of_items}
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
                                        ${cart.cart_summary.total_discount_of_items}
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
                                        ${cart.cart_summary.credit_discount_final}
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
                                        ${cart.cart_summary.post_cost === 0 ? "رایگان" : cart.cart_summary.post_cost}
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
                                        ${cart.cart_summary.final_price}
                                    </span>
                                    تومان
                                </span>
                            </div>
                        </div>
                        <a href="${url}" class="pay-btn-wrapper" target="_blank">
                            <span class="pay-amount">
                                پرداخت
                                <span class="amount">
                                    ${cart.cart_summary.final_price}
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
        main_area.innerHTML = final_cart_stage_content;

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
    // function to render sort by filter 
    // TODO : render by filter function 
    function render_sort_by_filter() {
        const sort_by_filter_content = `

    `;

        books_main_content.innerHTML += " ";
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
            case "single-book":
                //if (filtered_book.length === 0) {
                if (filter_activated) {
                    render_books(needed_books.slice(0, 30));
                }
                else {
                    render_books(needed_books);
                }
                //render_books(needed_books);
                //}
                //else {
                //  render_books(filtered_book);
                //}
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
            document.querySelector('.cart-next-step').classList.add('disabled');
        }
        // update the quantity in the footer label
        footer_cart_wrapper_HTML.innerHTML = cart_items.length;

        // call the api for restoring the datas
        update_cart(cart.cart_items_ids);
    }
    //function to update total price
    // ! filter beshe 4 ta
    function update_total(el) {
        let sum = 0;
        const cart_empty_HTML = document.querySelector('.cart-is-empty');
        const cart_main_content = document.querySelector('.cart-main-content');
        cart_items.forEach(c => {
            sum += c.count_in_user_cart * c.price;
        });
        // check if the cart if empty or not
        if (sum != 0) {
            // ready the styles for an empty cart
            cart_empty_HTML.style.display = "none";
            el.innerHTML = sum;
        }
        else {
            // revert the styles for the a filled cart
            el.innerHTML = sum;
            cart_main_content.innerHTML = '';
            cart_main_content.appendChild(cart_empty_HTML);
            cart_empty_HTML.style.display = "flex";
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
        // changing all the clicked proprty for css reasons
        publishers.map(p => p.clicked = false);
        subjects.map(s => s.clicked = false);
        grades.map(s => s.clicked = false);
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
        // extract the ids of found books by each filter
        let ids_by_pub = [];
        filterd_by_pubs.forEach(b => ids_by_pub.push(b.id));
        let ids_by_sub = [];
        filterd_by_sub.forEach(b => ids_by_sub.push(b.id));
        let ids_by_year = [];
        filtered_by_year.forEach(b => ids_by_year.push(b.id));

        // gathering final ids
        let final_ids = ids_by_pub.concat(ids_by_sub, ids_by_year);
        //operating as and
        // if all 3 are selected the id should be repeated 3 times
        if ((((ids_by_pub.length !== 0) && (ids_by_sub.length !== 0)) && (ids_by_year.length !== 0))) {
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
            else if ((ids_by_pub.length !== 0) || (ids_by_sub.length !== 0) || (ids_by_year.length !== 0)) {
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
        if ((clicked_publishers_ids.length === 0)
            && (clicked_subjects.length === 0)
            && (clicked_grades.length === 0)
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
                //console.log(cart);
            })
            .catch(err => {
                //global_err = err;
                //console.log(err)
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
            modal_wrapper.style.zIndex = "999";
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
            <input type="text" class="search-books" placeholder="جستجو ..."/>
            <div class="search-result">

            </div>
        `;
            document.querySelector('body').appendChild(modal_for_search);
            is_search_open = true;
            document.querySelector('body').style.overflowY = "hidden";
            setTimeout(() => {
                modal_for_search.style.top = "100px";
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
                        <span id="search-txt-${s.id}">
                            ${s.name}
                        </span>
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
    function render_cart_modal(cart1) {
        address_to_here = stop_repeatation_in_addres("cart-modal", address_to_here) ? address_to_here + "cart-modal/" : address_to_here;
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
            <div class="cart-next-step ${cart1.length === 0 ? "disabled" : " "}">
                <span class="label">
                    مرحله بعد
                </span>
                <i class="fa fa-caret-left"></i>
            </div>
        </div>
    `;
        modal_wrapper.innerHTML = shopping_cart_HTML;
        //activating next step btn
        const next_step_btn = document.querySelector('.cart-next-step');
        // click action for cart next step
        next_step_btn.addEventListener('click', () => {
            // render final stage with cart items and dicount amount
            // check if the cart isn't empty ro render final stage cart
            if (cart1.length !== 0) {
                // fill the discount value from api
                let discount = cart.cart_summary.total_discount_of_items;
                // get the pay url for the final step btn
                open_cart_modal("disactive");
                load_pause("active");
                axios
                    .get(`https://daryaftyar.ir/storeV2/payrequest/${final_id}`)
                    //.get(`https://daryaftyar.ir/storeV2/payrequest/341393410`)
                    .then((res) => {
                        const url = res.data;
                        // render final stage cart with given parameters
                        render_final_stage_cart(cart_items, discount, url.url_to_pay);
                        load_pause('disactive');
                    })
                    .catch(err => {
                        // ? we need a better way to handle the errors :)
                        render_errors(err.message)
                    })
            }
        });

        // activating go to book page btn 
        const back_to_shop_btn = document.querySelector('.go-to-book-page');
        back_to_shop_btn.addEventListener("click", () => {
            // have the filter's results saved as an out come
            // if (filtered_book.length === 0) {
            //     render_books(needed_books);
            // }
            // else {
            //     render_books(filtered_book);
            // }
            map_handler();
            open_cart_modal("disactive")
            // if (filter_activated) {
            //     render_books(needed_books.slice(0, 30));
            // }
            // else {
            //     render_books(needed_books);
            // }
            // have the address updated
            //address_to_here += "books/";
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
            // calculate total pirce with the items in cart
            total_price_amount += item.count_in_user_cart * item.price;
            cart_item_wrapper.innerHTML += cart_item_content;
        });
        total_price_HTML.innerHTML = total_price_amount;


        // get all the items in the cart for making events in the more or less
        const all_cart_items = [...document.querySelectorAll('.cart-item')];
        all_cart_items.forEach(item => {
            // handling more btn in cart
            // * same as more and less in the book page
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
                        // remove the item from cart after quantity becomes 0
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
        /* 
            ?  cause the cart item is accessible from all part of web app it needs to be stopped after 
            ? one add in the address to here so I used the stop repatation function
        */
        //stop_repeatation_in_addres("cart", address_to_here) ? address_to_here += "cart/" : address_to_here = address_to_here;

        // activating the back button
        const back_btn = document.querySelector('.cart-wrapper .back');
        back_btn.addEventListener('click', () => {
            open_cart_modal("disactive");
        });
    }
    // a function to disactive all modals 
    function disactive_modals() {
        open_cart_modal('disactive');
        activate_modal_single_book('disactive');
    }
    // funciton to render filter by
    function render_filter_by() {
        const static_contents = `
        <div class="books-wrapper">
            <div class="books-header">
                <div class="back">
                    <i class="fa fa-caret-right"></i>
                </div>
                <div class="books-page-title">
                    کتاب ها
                </div>
                <div class="search-icon">
                    <i class="fa fa-search"></i>
                </div>
            </div>
            <div class="book-order">
                <div class="order-by-wrapper">
                    مرتب سازی بر اساس :
                    <span class="ordered-by">
                        ${sorted_by}
                    </span>
                </div>
                <div class="filter-opener">
                    <i class="fa fa-caret-left"></i>
                </div>
            </div>
            <div class="sort-by-wrapper">
                <div class="sort sorted-by-leastPrice ${sorted_by === "ارزانترین" ? " " : "disabled"}">
                    ارزانترین
                </div>
                <div class="sort sorted-by-mostprice ${sorted_by === "گرانترین" ? " " : "disabled"}">
                    گرانترین
                </div>
                <div class="sort sorted-by-alphabet ${sorted_by === "الفبایی" ? " " : "disabled"}">
                    الفبایی
                </div>
                <div class="sort sorted-by-newest ${sorted_by === "جدیدترین" ? " " : "disabled"}">
                    جدیدترین
                </div>
            </div>
            <span span class="save_and_return_btn srt" >
                ذخیره و بازگشت
            </span >
        </div>
    `;
        main_area.innerHTML = static_contents;
        // map method modifications
        address_to_here = stop_repeatation_in_addres("sort", address_to_here) ? address_to_here + "sort/" : address_to_here;
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
        });

        // activating sort by
        const sort_by_items = [...document.querySelectorAll('.sort')];
        sort_by_items.forEach((si) => {
            si.addEventListener("click", ({ target }) => {
                switch (target.classList[1]) {
                    case "sorted-by-mostprice":
                        sorted_by = "گرانترین";
                        break;
                    case "sorted-by-leastPrice":
                        sorted_by = "ارزانترین";
                        break;
                    case "sorted-by-alphabet":
                        sorted_by = "الفبایی";
                        break;
                    case "sorted-by-newest":
                        sorted_by = "جدیدترین";
                        break;
                }
                active_sort();
            })
        });
        // save and return btn
        document.querySelector('.save_and_return_btn').addEventListener("click", () => {
            map_handler();
        });
        sort_by_btn = document.querySelector('.filter-opener');
        sort_by_btn.addEventListener("click", () => {
            map_handler();
        });
    }
    // function for having only 1 item active in sort by
    function active_sort() {
        const order_label = document.querySelector(".ordered-by");
        order_label.innerHTML = sorted_by;
        [...document.querySelectorAll(".sort")].forEach((item) => {
            item.classList.add("disabled");
        })
        switch (sorted_by) {
            case "گرانترین":
                document.querySelector(".sorted-by-mostprice").classList.remove("disabled");
                break;
            case "ارزانترین":
                document.querySelector(".sorted-by-leastPrice").classList.remove("disabled");
                break;
            case "الفبایی":
                document.querySelector(".sorted-by-alphabet").classList.remove("disabled");
                break;
            case "جدیدترین":
                document.querySelector(".sorted-by-newest").classList.remove("disabled");
                break;
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
    // etc

}
catch (err) {
    render_errors(err);
}