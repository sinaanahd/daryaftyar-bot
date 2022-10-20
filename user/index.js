
const error_modal = document.querySelector(".error-modal");

//const us_id = window.Telegram.WebApp.initData;
// spiliting data to find the id of the user
//const final_id = us_id.split("%22")[2].split("3A")[1].split("%")[0];
const final_id = "341393410";
let user = [];
document.addEventListener("DOMContentLoaded", () => {
    axios
        .get(`https://daryaftyar.ir/storeV2/user_real_data/${final_id}`)
        .then((res) => {
            user = res.data;
            console.log(user);
        })
        .catch((err) => render_errors(err.message));
});

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