import React, { useState } from 'react';
import { useRouter } from 'next/dist/client/router';
import axios from 'axios';

const Input = () => {
  const GETFORM_FORM_ENDPOINT =
    'https://getform.io/f/686e681c-b5fb-4329-a3e5-d378ac7f335d';
  const [formStatus, setFormStatus] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const [query, setQuery] = useState({
    email: '',
  });

  const handleChange = () => (e) => {
    setError(false);
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
          email: '',
        });
       
        console.log(response);
      })
      .catch(function (error) {
        setError(true);
        setLoading(false);

        console.log(error);
      });
  };

  return (
    <>
      <form
        className="flex sm:flex-row flex-col mt-8"
        action=""
        method="POST"
        id="ajaxForm"
        onSubmit={handleSubmit}
      >
        <div className=" sm:w-96 w-80 mr-2 ">
          <input
            className="email-input w-full h-16 py-[6px] px-[17px] border-2 rounded-lg p-3 focus:outline-none sm:text-left text-center "
            // style={{ fontFamily: 'Mulish' }}
            name="email"
            type="email"
            placeholder="Your email"
            value={query.email}
            onChange={handleChange()}
            required
          />

          {error && (
            <div>
              &nbsp;
              <small className="text-red-600">
                an error occurred, please try again!
              </small>
            </div>
          )}
          {formStatus ? (
            <div className="text-green-600 my-2">Thank you!</div>
          ) : (
            ''
          )}
        </div>
        <div className="flex sm:w-40 w-80 sm:pt-0 pt-5">
          <button className="w-full bg-blue-600 sm:h-16 h-14 py-[10px] px-[20px] rounded-lg focus:outline-none ">
            <span className="text-xl text-center font-bold text-white">
              {loading ? <small>Loading...</small> : 'Sign Up'}
            </span>
          </button>
        </div>
      </form>
    </>
  );
};

export default Input;
