const toSignin = document.querySelector('.to-signin');
const toSignup = document.querySelector('.to-signup');
const signinForm = document.querySelector('.form__signin');
const signupForm = document.querySelector('.form__signup');

toSignin.addEventListener('click', () => {
    signupForm.classList.remove('fade-in');
    signupForm.classList.add('fade-out');
    signinForm.classList.remove('fade-out');
    signinForm.classList.add('fade-in');

    setTimeout(() => {
        signinForm.classList.remove('hide');
        signupForm.classList.add('hide');
    }, 700)
})

toSignup.addEventListener('click', () => {
    signinForm.classList.remove('fade-in');
    signinForm.classList.add('fade-out');
    signupForm.classList.remove('fade-out');
    signupForm.classList.add('fade-in');

    setTimeout(() => {
        signupForm.classList.remove('hide');
        signinForm.classList.add('hide');
    }, 700)
})

setTimeout(()=>
   document.querySelector("meta[name=viewport]").setAttribute("content", "height=" + screen.height*0.9 + "px, width=device-width, initial-scale=1.0")
, 300);