// App.tsx
import  { useState, useRef } from 'react';
import InputComp from './Comp/LoginForm/InputComp.tsx';

const App = () => {
  const [formData, setFormData] = useState({ username: '', password: '' });
  const usernameRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (event: any) => {
    event.preventDefault();
    if (!(formData.username && formData.password)) {
      alert('Please fill in all fields');
      return;
    }
    alert(`Welcome ${formData.username}! You are logged in`);
  };

  const handleInputChange = (event: any) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div className="input-form"> 
      <h1>Login Form</h1>
      <form onSubmit={handleSubmit}>
        <InputComp
          type="text"
          id="username"
          label="Username"
          name="username"
          value={formData.username}
          onChange={handleInputChange}
          inputRef={usernameRef}
        />
        <InputComp
          type="password"
          id="password"
          label="Password"
          name="password"
          value={formData.password}.
          onChange={handleInputChange}
          inputRef={passwordRef}
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default App;
