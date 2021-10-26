import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import VenueList from './VenueList';
import Sidebar from './Sidebar';
import LoadingSpinner from './LoadingSpinner';
import { setVenues } from '../../redux/actions/venueActions';

export default function VenueResultsDisplay() {
  const [pubApiResponse, setPubApiResponse] = useState(false);
  const apiSearchParam = useSelector((state) => state.venueQueries);
  const dispatch = useDispatch();

  const cusine = {
    pub: { key: '10670', name: 'Pub' },
    bar: { key: '10640', name: 'Bar' },
  };
  const options = {
    method: 'GET',
    url: 'https://travel-advisor.p.rapidapi.com/restaurants/list-by-latlng',
    params: {
      latitude: '51.5072',
      longitude: '0.1276',
      limit: '30',
      currency: 'GBP',
      combined_food: `${cusine.pub.key}, ${cusine.bar.key}`,
      distance: '6',
      open_now: 'false',
      lunit: 'km',
      lang: 'en_US',
    },
    headers: {
      'x-rapidapi-host': 'travel-advisor.p.rapidapi.com',
      'x-rapidapi-key': '4bafd5e1eemsh66357a52315bcbbp1d5bdcjsnb1b8df1932af',
    },
  };

  useEffect(() => {
    axios.request(options).then((response) => {
      const filteredResponse = response.data.data.filter((venue) => {
        if (venue.location_id === '186338') {
          return false;
        }
        return true;
      });
      dispatch(setVenues(filteredResponse));
      setPubApiResponse(filteredResponse);
    }).catch((error) => {
      console.error(error);
    });
  }, []);

  return (
    <div className="d-flex">
      <Sidebar />
      { pubApiResponse
        ? <VenueList pubApiResponse={pubApiResponse} />
        : <LoadingSpinner />}
    </div>
  );
}
