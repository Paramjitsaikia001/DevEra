import React, { useState } from 'react';

const Registration = () => {
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [role, setRole] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }
    // Handle form submission here
    setError('');
    // Submit the form data to your server or API
    console.log(e)
  };

  return (
    <section className='flex justify-center items-center lg:w-[80%] w-[100%] h-[100vh]'>
      <div className="registration-container flex flex-col bg-blue-500 justify-center items-center w-[20%] p-6 rounded-lg">
        <div className="registration-header mb-4">
          <h2 className="text-white text-2xl font-bold">DEV-ERA</h2>
        </div>
        <div className="registration-form w-full">
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <input
              type="text"
              name="userName"
              id="user-name"
              placeholder="Name"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              className="p-2 border border-gray-300 rounded"
            />
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="p-2 border border-gray-300 rounded"
            />
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="p-2 border border-gray-300 rounded"
            />
            <input
              type="password"
              name="confirmPassword"
              id="confirm-password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="p-2 border border-gray-300 rounded"
            />
            {error && <p className="text-red-500">{error}</p>}
            <select
              name="role"
              id="role"
              value={role}
              onChange={(e) => setRole(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded"
            >
              <option value="">-- Choose a Role --</option>
              <option value="Student">Student</option>
              <option value="Developer">Developer</option>
              <option value="Educator">Educator</option>
            </select>
            <button type="submit" className="bg-black text-white p-2 rounded">
              Register
            </button>
          </form>
        </div>
        <div className="if-register mt-4">
          <p className="text-white">Already registered? <span className='underline cursor-pointer'>Click here</span></p>
        </div>
      </div>
    </section>
  );
};

export default Registration;
