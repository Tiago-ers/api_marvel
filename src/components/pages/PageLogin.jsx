import React from 'react';
import './PageLogin.css';

function PageLogin() {
  return (
    <div>
      <form className='formLogin' method='post'>
        <div className='imgcontainer'>
          <img src='img_avatar2.png' alt='Avatar' className='avatar' />
        </div>

        <div className='container-form'>
          <label for='uname'>
            <b>Nome</b>
          </label>
          <input
            type='text'
            placeholder='Enter Username'
            name='uname'
            required
          />

          <label for='psw'>
            <b>Senha</b>
          </label>
          <input
            type='password'
            placeholder='Enter Password'
            name='psw'
            required
          />

          <button type='submit'>Login</button>
        </div>
      </form>
    </div>
  );
}

export default PageLogin;
