var captchaOnloadCallback = function() {
    // We only have one captcha object on this website, so no
    // need to store the captcha object
    grecaptcha.render(document.getElementById('killbot'), {
        'sitekey' : '6LdHp9AUAAAAAAe1AhKIdKWmucBZ3lwfgy4Ts4m9',
        'theme' : 'light'
    });
};