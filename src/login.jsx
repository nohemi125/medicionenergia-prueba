import React, { useState } from 'react';
import './slideNavbar.css'; // Asegúrate de importar el archivo CSS

const SlideNavbar = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div className="main">
      <input
        type="checkbox"
        id="chk"
        aria-hidden="true"
        checked={isChecked}
        onChange={handleCheckboxChange}
      />
      
      {/* Formulario de Sign Up */}
      <div className="signup">
        <form>
          <label htmlFor="chk" aria-hidden="true">
            Sign up
          </label>
          <input type="text" name="txt" placeholder="User name" required />
          <input type="email" name="email" placeholder="Email" required />
          <input type="number" name="broj" placeholder="BrojTelefona" required />
          <input type="password" name="pswd" placeholder="Password" required />
          <button type="submit">Sign up</button>
        </form>
      </div>

      {/* Formulario de Login */}
      <div className="login">
        <form>
          <label htmlFor="chk" aria-hidden="true">
            Login
          </label>
          <input type="email" name="email" placeholder="Email" required />
          <input type="password" name="pswd" placeholder="Password" required />
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};

export default SlideNavbar;
