import './Signup.css'



const Signup = ({ signup_request }) => {

    return (
        <>
            <div className="card">
                <form onSubmit={signup_request} className='my-form'>
                    <div className="login-welcome-row">
                        <h1>Create your account &#x1F44F;</h1>
                    </div>
                    <div className="socials-row">
                        <a href='#' title='Use Google'>
                            <img src='images/google.webp' alt='google' />
                            Sign up with Google
                        </a>
                        <a href='#' title='Use Apple'>
                            <img src='./assets/apple.jpg' alt='apple' />
                            Sign up with Apple
                        </a>
                    </div>
                    <div className="divider">
                        <span className="divider-line"></span>
                        Or
                        <span className="divider-line"></span>
                    </div>


                    <div className="text-field">
                        <label htmlFor='email'>Email:
                            <input type='email' id='email_signup' name='email' autoComplete='off' placeholder='Your email' required />
                        </label>
                    </div>

                    <div className="text-field">
                        <label htmlFor='password'>Password:
                            <input type='password' id='password_signup' name='password' placeholder='Your password' title='Minimum 6 characters at least 1 Alphabet and 1 Numeber'
                                pattern='^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$' required />
                        </label>
                    </div>

                    <div className="text-field">
                        <label htmlFor='confirm-password'>Repeat Password:
                            <input type='password' id='confirm-password_signup' name='password' placeholder='Repeat password' title='Minimum 6 characters at least 1 Alphabet and 1 Numeber'
                                pattern='^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$' required />
                        </label>
                    </div>

                    <button className="my-form__button" type='submit'>
                        Sign up
                    </button>
                    <div className="my-form__actions">
                        <div className="my-form__row">
                            <span>Did you forget your password?</span>
                            <a href='#' title='Reset Password'>
                                Reset Password
                            </a>
                        </div>
                        <div className="my-form__signup">
                            <a href='#' title='Login'>
                                Login
                            </a>
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}

export default Signup