import React from 'react';
import Head from 'next/head';
import Navbar from '../components/Navbar';

const apply = () => {
  return (
    <div className="h-screen">
      <Head>
        <title>Apply Here | Davak Bootcamp</title>
        <meta name="description" content="Become a web developer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <div
        className="flex justify-center pt-[100px] pb-20"
        style={{ paddingTop: '100px' }}
      >
        <div
          className="bg-[#FAFAFA] w-[720px] sm:rounded-3xl rounded-none p-16"
          style={{ backgroundColor: '#FAFAFA', width: '720px' }}
        >
          <div className="">
            <h1 className="font-bold text-2xl tracking-wide leading-relaxed">
              Join the bootcamp!
            </h1>
            <form action="">
              <div className="max-w-xl mx-auto md:max-w-4xl">
                <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
                  {/* 1 */}
                  <div className="grid grid-cols-1 gap-6">
                    <label className="block">
                      <span className="text-gray-700">Full name</span>
                      <input
                        name="firstname"
                        type="text"
                        className="form-input mt-1 block w-full py-4 px-2"
                        placeholder="John"
                      />
                    </label>

                    <label className="block">
                      <span className="text-gray-700">Email</span>
                      <input
                        name="email"
                        className="form-input mt-1 block w-full py-4 px-2"
                        type="email"
                        placeholder="example@me.com"
                      />
                    </label>
                  </div>
                  {/*  */}
                  <div className="grid grid-cols-1 gap-6">
                    <label className="block">
                      <span className="text-gray-700">Phone</span>
                      <input
                        name="firstname"
                        type="text"
                        className="form-input mt-1 block w-full py-4 px-2"
                        placeholder="xxxx xxx xxxx"
                      />
                    </label>

                    {/* <label className="block">
                      <span className="text-gray-700">Phone</span>
                      <input
                        name="phone"
                        className="form-input mt-1 block w-full py-4 px-2"
                        type="text"
                        placeholder="xxxx xxx xxxx"
                      />
                    </label> */}
                  </div>
                </div>
                <div className="mt-6">
                  <input type="submit" className="px-10 py-4 rounded-md cursor-pointer bg-blue-600 text-white font-semibold " />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default apply;
