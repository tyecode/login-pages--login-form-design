const toSignin=document.querySelector(".to-signin"),toSignup=document.querySelector(".to-signup"),signinForm=document.querySelector(".form__signin"),signupForm=document.querySelector(".form__signup");toSignin.addEventListener("click",(()=>{signupForm.classList.remove("fade-in"),signupForm.classList.add("fade-out"),signinForm.classList.remove("fade-out"),signinForm.classList.add("fade-in"),setTimeout((()=>{signinForm.classList.remove("hide"),signupForm.classList.add("hide")}),700)})),toSignup.addEventListener("click",(()=>{signinForm.classList.remove("fade-in"),signinForm.classList.add("fade-out"),signupForm.classList.remove("fade-out"),signupForm.classList.add("fade-in"),setTimeout((()=>{signupForm.classList.remove("hide"),signinForm.classList.add("hide")}),700)}));
//# sourceMappingURL=main.js.map