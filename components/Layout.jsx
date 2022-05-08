import React from 'react';
import { APP_ROUTES } from '../lib/constants';
import Link from 'next/link';
export default function Layout({ children }) {
  return (
    <div className='flex flex-col h-screen'>
      <header className="flex shadow-lg p-4 bg-gray-900 text-white">
        <Link href={APP_ROUTES.AXIOS}>
          <a className="mr-5" > Axios </a>
        </Link>
        <Link href={APP_ROUTES.FETCH}>
          <a className="mr-5"> Fetch </a>
        </Link>
        <Link href={APP_ROUTES.GRAPHQL_REQUEST}>
          <a className="mr-5"> GraphQL Request </a>
        </Link>
        <Link href={APP_ROUTES.APOLLO_CLIENT}>
          <a className="mr-5"> Apollo Client </a>
        </Link>
      </header>
      <div className='flex-1 p-16 flex justify-center items-center'> 
        {children}
      </div>
    </div>
  );
}
