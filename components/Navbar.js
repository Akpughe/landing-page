import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/dist/client/router';

const Navbar = () => {
  const router = useRouter();
  return (
    <div className="flex items-center h-32">
      <div
        className="flex items-center justify-between m-auto sm:px-0 px-5 sm:w-3/6 w-full"
        // style={{ width: '720px' }}
      >
        {/* 1 */}
        <div className="">
          <Link href="/">
            <a className="font-semibold text-gray-900">Davak</a>
          </Link>
        </div>
        {/* 2 */}
        <div>
          {router.pathname === '/' ? (
            <Link href="/apply">
              <a className="rounded-md border-blue-700 border-2 font-bold px-5 py-3">
                Apply Now
              </a>
            </Link>
          ) : (
            <Link href="/">
              <a className="font-light px-5 py-3">
                Home
              </a>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
