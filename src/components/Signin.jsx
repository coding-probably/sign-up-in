import './Signin.css'

const Signin = ({ signin_request }) => {
    return (
        <>
            <div className="card">
                <form onSubmit={signin_request} className='my-form'>
                    <div className="login-welcome-row">
                        <h1>Login to you Account &#x1F44F;</h1>
                    </div>
                    <div className="socials-row">
                        <a href='#' title='Use Google'>
                            <img src='images/google.webp' alt='google' />
                            Login with Google
                        </a>
                        <a href='#' title='Use Apple'>
                            <img src='./assets/apple.jpg' alt='apple' />
                            Login with Apple
                        </a>
                    </div>
                    <div className="divider">
                        <span className="divider-line"></span>
                        Or
                        <span className="divider-line"></span>
                    </div>


                    <div className="text-field">
                        <label htmlFor='email'>Email:
                            <input type='email' id='email_signin' name='email' autoComplete='off' placeholder='Your email' required />
                        </label>
                    </div>

                    <div className="text-field">
                        <label htmlFor='password'>Password:
                            <input type='password' id='password_signin' name='password' placeholder='Your password' title='Minimum 6 characters at least 1 Alphabet and 1 Numeber'
                                pattern='^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$' required />
                        </label>
                    </div>

                    <button className="my-form__button" type='submit'>
                        Login
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
                                Register
                            </a>
                        </div>
                    </div>
                </form>
            </div>



        </>
    )
}

export default Signin