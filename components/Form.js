import React, { useState } from 'react';
import Head from 'next/head';
import Navbar from './Navbar';
import axios from 'axios';
const Form = () => {
  const GETFORM_FORM_ENDPOINT =
    'https://getform.io/f/686e681c-b5fb-4329-a3e5-d378ac7f335d';
  const [formStatus, setFormStatus] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const [query, setQuery] = useState({
    name: '',
    email: '',
    phone: '',
  });
  // const handleFileChange = () => (e) => {
  //   setQuery((prevState) => ({
  //     ...prevState,
  //     files: e.target.files[0],
  //   }));
  // };
  const handleChange = () => (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setQuery((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Sending');
    const formData = new FormData();
    Object.entries(query).forEach(([key, value]) => {
      formData.append(key, value);
    });

    setLoading(true);

    axios
      .post(GETFORM_FORM_ENDPOINT, formData, {
        headers: {
          Accept: 'application/json',
          Accept: 'application/json, text/plain, */*',
        },
      })
      .then(function (response) {
        setLoading(false);
        setFormStatus(true);
        setQuery({
          name: '',
          email: '',
          phone: '',
        });
        console.log(response);
      })
      .catch(function (error) {
        setLoading(false);
        console.log(error);
      });
  };
  return (
    <form method="POST" id="ajaxForm" onSubmit={handleSubmit}>
      <div className="max-w-xl mx-auto md:max-w-4xl">
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
          {/* 1 */}
          <div className="grid grid-cols-1 gap-6">
            <label className="block">
              <span className="text-gray-700">Full name</span>
              <input
                name="name"
                type="text"
                className="form-input mt-1 block w-full py-4 px-2"
                placeholder="John"
                value={query.name}
                onChange={handleChange()}
                required
              />
            </label>

            <label className="block">
              <span className="text-gray-700">Email</span>
              <input
                name="email"
                className="form-input mt-1 block w-full py-4 px-2"
                type="email"
                placeholder="example@me.com"
                value={query.email}
                onChange={handleChange()}
                required
              />
            </label>
          </div>
          {/*  */}
          <div className="grid grid-cols-1 gap-6">
            <label className="block">
              <span className="text-gray-700">Phone</span>
              <input
                name="phone"
                type="text"
                className="form-input mt-1 block w-full py-4 px-2"
                placeholder="xxxx xxx xxxx"
                value={query.phone}
                onChange={handleChange()}
                required
              />
            </label>
          </div>
        </div>
        {formStatus ? (
          <div className="text-green-600 my-2">
            Thank you for signing up! ❤️
          </div>
        ) : (
          ''
        )}
        <div className="mt-6">
          {/* <input
              type={loading ? 'loadind...' : 'submit'}
              className="px-10 py-4 rounded-md cursor-pointer bg-blue-600 text-white font-semibold "
            /> */}
          <button className="px-10 py-4 rounded-md cursor-pointer bg-blue-600 text-white font-semibold ">
            <span className="text-xl text-center font-bold text-white">
              {loading ? <small>Loading...</small> : 'Submit'}
            </span>
          </button>
        </div>
      </div>
    </form>
  );
};

export default Form;
