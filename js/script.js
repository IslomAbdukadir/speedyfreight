// burger menu

function sendRequest(nameSelector,experienceSelector,emailSelector, phoneSelector) {
    let name = document.querySelector(nameSelector).value;
    let experience = document.querySelector(experienceSelector).value;
    let email = document.querySelector(emailSelector).value;
    let phone = document.querySelector(phoneSelector).value;
    let requestText = encodeURI(`<b>Заявка</b>\nName: ${name}\nExpirence: ${experience}\nEmail: ${email}\nPhone: ${phone}`)
    fetch(`https://api.telegram.org/bot6845851859:AAEnvJxZm_ytyAzJIPDd5Y9VpvlqD0cbmNI/sendMessage?text=${requestText}&chat_id=-4264174768&parse_mode=HTML`)
}

document.querySelector('.form-btn').addEventListener('click', (value) => {
    value.preventDefault()
    sendRequest(`.header-form input[name="name"]`, `.header-form input[name="experience"]`, `.header-form input[name="email"]`, `.header-form input[name="phone"]`)
})