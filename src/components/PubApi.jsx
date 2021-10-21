import React, { useEffect } from 'react';
import axios from 'axios';

export default function pubApi() {
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
      console.log(response.data);
    }).catch((error) => {
      console.error(error);
    });
  }, []);
  return (
    <div />
  );
}
