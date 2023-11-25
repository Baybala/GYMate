import { useEffect, useState } from 'react'
import './SignInUp.css'

const SignInUP = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  })

  const [signinOrUP, setSigninOrUP] = useState('Sign Up')

  const toggleUPandIN = () => {
    signinOrUP === 'Sign Up'
      ? setSigninOrUP('Sign In')
      : setSigninOrUP('Sign Up')
  }

  return (
    <div className="singInUP">
      <div className="signInUp-container">
        <form className="singInUp-form">
          <label htmlFor="email">Email</label>
          <input placeholder="example@example.com" id="email" />
          <label htmlFor="password">Password</label>
          <input placeholder="Password" id="password" />
          <button className="signInUpButton">{signinOrUP}</button>
        </form>
        <h4>
          Already have account?{' '}
          <span
            style={{ color: 'red', cursor: 'pointer' }}
            onClick={toggleUPandIN}
          >
            {signinOrUP === 'Sign In' ? 'Sign Up' : 'Sign In'}
          </span>
        </h4>
        <h6>
          ( Make <span style={{ color: 'red' }}>new Accout</span> or go to{' '}
          <span style={{ color: 'red' }}>Sign In</span> Page for Test Account )
        </h6>
      </div>
    </div>
  )
}

export default SignInUP
