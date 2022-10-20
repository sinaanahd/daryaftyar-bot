
// ? variables

const us_id = window.Telegram.WebApp.initData;
// spiliting data to find the id of the user
const final_id = us_id.split("%22")[2].split("3A")[1].split("%")[0];
//const final_id = "341393410";
const illigal_chars = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "!",
    "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+",
    "[", "]", "{", "}", "|", " \ ", "/", "?", ".", ",", "۱", "۲", "۳",
    "۴", "۵", "۶", "۷", "۸", "۹", "۰", ":"];
const error_modal = document.querySelector(".error-modal");

const name_input = document.querySelector("#user-name");

const phone_input = document.querySelector("#user-phone");

const postal_code_input = document.querySelector("#user-postal-code");

const address_input = document.querySelector("#user-address");

const submit_btn = document.querySelector(".submit-user-data");

//pause html
const pause_wrapper = document.querySelector('.pause');

let user = [];

let error_for_name = document.querySelector(".err-name");

let error_for_phone = document.querySelector(".err-phone");

let error_for_post = document.querySelector(".err-post");

let error_for_address = document.querySelector(".err-address");


// ? events 

document.addEventListener("DOMContentLoaded", () => {
    submit_btn.disabled = true;
    submit_btn.classList.add("dis");
    load_pause("active");
    axios
        .get(`https://daryaftyar.ir/storeV2/user_real_data/${final_id}`)
        .then((res) => {
            user = res.data;
            load_pause("disactive");
        })
        .catch((err) => render_errors(err.message));
});
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

// ? functions 

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
    else if (invalid_char) {
        render_name_error("num", "active", target);
    }
    else {
        render_name_error("len", "disactive", target);
        user.real_name = content;
    }

}
function validate_phone_input(target) {
    let content = target.value;
    if (content.length > 15) {
        render_phone_error("len", "active", target);
    }
    else {
        render_phone_error("len", "disactive", target);
        user.real_home_number = content;
    }
}
function validate_post_input(target) {
    let content = target.value;
    if (content.length > 10) {
        render_post_error("len", "active", target);
    }
    else {
        render_post_error("len", "disactive", target);
        user.real_postal_code = content;
    }
}
function validate_address_input(target) {
    let content = target.value;
    if (content.length > 250) {
        render_address_error("len", "active", target);
    }
    else {
        render_address_error("len", "disactive", target);
        user.real_address = content;
    }
}
function render_name_error(kind, state, target) {
    if ((kind === "len") && (state === "active")) {
        target.classList.add('has-error');
        error_for_name.style.opacity = "1";
        error_for_name.style.height = "40px";
        error_for_name.innerHTML = "طول مجاز برای این فیلد حداکثر ۵۰ کاراکتر است";
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
        check_situtation()
    }

}
function render_phone_error(kind, state, target) {
    if ((kind === "len") && (state === "active")) {
        target.classList.add('has-error');
        error_for_phone.style.opacity = "1";
        error_for_phone.style.height = "40px";
        error_for_phone.innerHTML = "طول مجاز برای این فیلد حداکثر ۱۵ کاراکتر است";
    }
    else if (state === "disactive") {
        target.classList.remove('has-error');
        error_for_phone.style.opacity = "0";
        error_for_phone.style.height = "0px";
        error_for_phone.innerHTML = " ";
        check_situtation()
    }

}
function render_post_error(kind, state, target) {
    if ((kind === "len") && (state === "active")) {
        target.classList.add('has-error');
        error_for_post.style.opacity = "1";
        error_for_post.style.height = "40px";
        error_for_post.innerHTML = "طول مجاز برای این فیلد حداکثر ۱۰ کاراکتر است";
    }
    else if (state === "disactive") {
        target.classList.remove('has-error');
        error_for_post.style.opacity = "0";
        error_for_post.style.height = "0px";
        error_for_post.innerHTML = " ";
        check_situtation()
    }

}
function render_address_error(kind, state, target) {
    if ((kind === "len") && (state === "active")) {
        target.classList.add('has-error');
        error_for_address.style.opacity = "1";
        error_for_address.style.height = "80px";
        error_for_address.innerHTML = "طول مجاز برای این فیلد حداکثر ۲۵۰ کاراکتر است";
    }
    else if (state === "disactive") {
        target.classList.remove('has-error');
        error_for_address.style.opacity = "0";
        error_for_address.style.height = "0px";
        error_for_address.innerHTML = " ";
        check_situtation()
    }
}

function check_situtation() {
    const errored_item = document.querySelector('.has-error');
    if (errored_item !== null) {
        submit_btn.classList.add("dis")
        submit_btn.disabled = true;
    }
    else {
        submit_btn.classList.remove("dis")
        submit_btn.disabled = false;
    }
}


function update_user() {
    load_pause("active");
    axios
        .patch(`https://daryaftyar.ir/storeV2/user_real_data/${final_id}`, user)
        .then((res) => {
            user = res.data;
            load_pause("disactive");
        })
        .catch((err) => {
            render_errors(err.message);
            //console.log(err);
        });
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

function load_pause(state) {
    if (state === "active") {
        pause_wrapper.style.display = "flex";
    }
    else {
        pause_wrapper.style.display = "none";
    }
}