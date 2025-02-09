import { FaUser, FaLock } from "react-icons/fa";
import './styles.css'
import { Link } from 'react-router-dom';
import { InputBox } from '../../components/InputBox';


export const LoginForm = () => {
  return (
    <div className='wrapper'>
      <form>
        <h1>Login</h1>
        <InputBox type='text' placeholder='Username' icon={FaUser}/>
        <InputBox type='password' placeholder='Password' icon={FaLock}/>

        <div className="remember-forgot">
          <label><input type="checkbox" /> Remember me</label>
          <a href="#">Forgot password?</a>
        </div>

        <button type="submit">Login</button>
        <div className="register-link">
          <p>Don't have an account? <Link to="/register">Register</Link></p>
        </div>
      </form>
    </div>
  )
}
