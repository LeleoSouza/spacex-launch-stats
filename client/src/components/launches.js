import React from 'react';
import { gql, useQuery } from '@apollo/client';

const LAUNCHES_QUERY = gql`
  query LaunchesQuery {
    launches {
      flight_number
      mission_name
      launch_year
      launch_date_local
      launch_success
    }
  }
`;
export const Launches = () => {
  const { loading, error, data } = useQuery(LAUNCHES_QUERY);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  console.log('Launches', data);
  return (
    <div>
      <h1 className='display-4 my-3'>Launches</h1>
    </div>
  );
};
