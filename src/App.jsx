import './App.css'
import './components/Signup.css'
import Signup from './components/Signup'
import Signin from './components/Signin'

function App() {


  let jsonSignup = {
    email: '',
    password: ''
  };

  let jsonSignin = {
    email: '',
    password: ''
  };

  const signup_request = (event) => {
    console.log("inside function")
    event.preventDefault();
    let email = event.target[0].value;
    let password = event.target[1].value;
    let re_password = event.target[2].value;


    // jsonSignup is object convert to json
    jsonSignup.email = email;
    jsonSignup.password = password;
    console.log(jsonSignup);
  }

  const signin_request = (event) => {
    console.log("inside function")
    event.preventDefault();
    let email_signin = event.target[0].value;
    let password_signin = event.target[1].value;


    // jsonSignin is object convert to json
    jsonSignin.email = email_signin;
    jsonSignin.password = password_signin;
    console.log(jsonSignin);
  }






  return (
    <>
      <div className="main">
        <div className="sign-up">
          <Signup signup_request={signup_request}></Signup>
        </div>


        <div className="img">
          <Signin signin_request={signin_request}></Signin>
        </div>
      </div>

    </>
  )
}

export default App
