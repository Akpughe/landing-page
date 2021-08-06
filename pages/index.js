import Head from 'next/head';
import Link from 'next/link';
import Navbar from '../components/Navbar';
import { SiXcode, SiFreecodecamp } from 'react-icons/si';
import { AiFillCode } from 'react-icons/ai';
import { MdAttachMoney } from 'react-icons/md';
import Input from '../components/Input';

export default function Home() {
  return (
    <div className="h-screen">
      <Head>
        <title>David Bootcamp</title>
        <meta name="description" content="Become a web developer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <div className="mt-6 p-16 text-center">
        <div className="flex justify-center">
          <AiFillCode size="70" />
        </div>
        <h1 className="font-bold text-6xl tracking-wide leading-relaxed">
          Learn how to <span className="text-blue-700">code</span>{' '}
        </h1>
        <p>Design and Create Websites and Web applications</p>
      </div>
      <div className="flex justify-center">
        <Link href="/apply">
        <a
          className="bg-blue-700 text-white font-semibold text-xl py-4 px-7 rounded-md "
          href=""
        >
          Apply Now
        </a>
        </Link>
      </div>
      {/*  */}
      <div
        className="flex justify-center pt-[100px] pb-20"
        style={{ paddingTop: '100px' }}
      >
        <div
          className="bg-[#FAFAFA] sm:w-1/2 w-full sm:rounded-3xl rounded-none sm:p-16 p-10"
          style={{ backgroundColor: '#FAFAFA' }}
        >
          <div className="">
            <h3 className="font-bold text-2xl tracking-wide leading-relaxed">
              Become a Web Developer
            </h3>
            <p className="tracking-wide">
              Take advantage of the high paying job opportunities by learning to
              code.
            </p>
          </div>
          <ul className="mt-8">
            <li className="flex justify-start items-center mt-6">
              {/* icon */}
              <div className="mr-4">
                <SiXcode size="44px" />
              </div>
              {/* info */}
              <div className="flex flex-col">
                <span className="text-lg font-light text-gray-800 tracking-wide">
                  Change your career
                </span>
                <small>Become a full-time or freelance developer</small>
              </div>
            </li>
            <li className="flex justify-start items-center mt-6">
              {/* icon */}
              <div className="mr-4">
                <SiFreecodecamp size="44px" />
              </div>
              {/* info */}
              <div className="flex flex-col">
                <span className="text-lg font-light text-gray-800 tracking-wide">
                  Get better opportunities
                </span>
                <small>Increase chances of getting a better job</small>
              </div>
            </li>
            <li className="flex justify-start items-center mt-6">
              {/* icon */}
              <div className="mr-4">
                <MdAttachMoney size="44px" />
              </div>
              {/* info */}
              <div className="flex flex-col">
                <span className="text-lg font-light text-gray-800 tracking-wide">
                  Increase your earnings
                </span>
                <small>Get paid higher for your skills</small>
              </div>
            </li>
            <li className="flex justify-start items-center mt-6">
              {/* icon */}
              <div></div>
              {/* info */}
              <div>
                {/* <span className="text-lg font-light text-gray-800 tracking-wide">
                  Increase your earnings
                </span> */}
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div
        className="flex justify-center pt-[50px] pb-20 w-full"
        style={{ paddingTop: '50px' }}
      >
        <div
          className="flex flex-col sm:items-start items-center bg-[#FAFAFA] sm:w-1/2 w-full sm:rounded-3xl rounded-none sm:p-16 p-10"
          style={{ backgroundColor: '#FAFAFA' }}
        >
          <h1 className="text-2xl mb-2">Get updates! </h1>
          <span className="mb-2">Sign up for better opportunities</span>
         
          <Input/>
        </div>
      </div>
    </div>
  );
}
