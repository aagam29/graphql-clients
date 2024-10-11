import { React, useState } from 'react';
import { HYGRAPH_URL, HYGRAPH_PERMANENTAUTH_TOKEN, GRAPHQL_QUERY } from '../lib/constants';
import { UserDetail } from '../components/UserDetail';
import axios from 'axios';

export default function Fetch() {
  const [email, setEmail] = useState('');
  const [userDetails, setUserDetails] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const getUserDetailByAxiosAPICall = async () => {
    try {
      if (!email) {
        return;
      }
      setIsLoading(true);
      const headers = {
        'content-type': 'application/json',
        'Authorization': `Bearer ${HYGRAPH_PERMANENTAUTH_TOKEN}`
      };
      const requestBody = {
        query: GRAPHQL_QUERY,
        variables: { email }
      };
      const options = {
        method: 'POST',
        url: HYGRAPH_URL,
        headers,
        data: requestBody
      };
      const response = await axios(options);
      console.log('RESPONSE FROM AXIOS REQUEST', response.data);
      setUserDetails(response?.data?.data?.nextUser ?? {});
    }
    catch (err) {
      console.log('ERROR DURING AXIOS REQUEST', err);
    }
    finally {
      setIsLoading(false);
    }
  };

  return (
    <div className='flex w-full h-3/4'>
      <div className='flex flex-col justify-evenly rounded-lg shadow-xl w-1/2 p-4 m-4 bg-gray-900'>
        <h2 className="text-center text-white font-medium text-2xl mb-4 self-start ">
          AXIOS CALL
        </h2>
        <input
          className="border-2 outline-none p-2 rounded-md"
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => { setEmail(e.target.value); }}
        />
        <button
          className="
          flex justify-center
          p-2 rounded-md
        bg-gray-800  text-white hover:bg-gray-700 w-1/2 self-center"
          onClick={() => getUserDetailByAxiosAPICall()}
        >
          {
            isLoading ?
              <div className="mr-2 w-5 h-5 border-l-2 rounded-full animate-spin" /> : null
          }
          <span>
            AXIOS
          </span>
        </button>
      </div>
      <UserDetail user={userDetails} />
    </div>
  );
}