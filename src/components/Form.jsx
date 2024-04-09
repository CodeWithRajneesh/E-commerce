import { useState } from 'react';
// import { useHistory } from 'react-router-dom';

const Form = () => {
  // const history = useHistory();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    cpassword: ''
  });

  const onChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form validation logic here if needed
    // For example, check if passwords match

    // Once validated, you can redirect or perform further actions
    // history.push('/User'); // Redirect to dashboard after successful signup
  };

  return (
    <div className="max-w-md mx-auto">
      <form onSubmit={handleSubmit} className="mt-8 space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
          <input type="text" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" id="name" name="name" placeholder="Name" value={formData.name} onChange={onChange} aria-describedby="Help" />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email address</label>
          <input type="email" name="email" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" id="email" placeholder="Enter email" value={formData.email} onChange={onChange} aria-describedby="emailHelp" />
          <div id="emailHelp" className="mt-1 text-sm text-gray-500">We never share your email with anyone else.</div>
        </div>
        <div>
          <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
          <input type="password" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" id="password" name="password" placeholder="Password" value={formData.password} onChange={onChange} minLength={5} required />
        </div>
        <div>
          <label htmlFor="cpassword" className="block text-sm font-medium text-gray-700">Confirm Password</label>
          <input type="password" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" id="cpassword" name="cpassword" placeholder="Confirm password" value={formData.cpassword} onChange={onChange} minLength={5} required />
        </div>
        <div className="text-center text-gray-500">
          <button type="submit" className="mt-4 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Signup</button>
        </div>
      </form>
    </div>
  );
};

export default Form;
