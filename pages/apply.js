import React from 'react';
import Head from 'next/head';
import Navbar from '../components/Navbar';
import axios from 'axios';
import Form from '../components/Form';

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
            <Form/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default apply;
