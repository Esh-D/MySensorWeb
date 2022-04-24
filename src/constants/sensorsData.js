/* 
This file contain the initial sensor,suggestion and location data for new users
along with formatting functions for date/time 
*/

import React from 'react';
import {COLORS, FONTS, SIZES} from '.';

//shorten month names in string
export const monthNames = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
];

//Format date string
export const formatDateYear = (inpDate) => {
  return (
    monthNames[inpDate.getMonth()] +
    ' ' +
    inpDate.getDate() +
    ', ' +
    inpDate.getFullYear()
  );
};
export const formatDateHour = (inpDate) => {
  return (
    monthNames[inpDate.getMonth()] +
    ' ' +
    inpDate.getDate() +
    ' @' +
    inpDate.getHours() +
    ':' +
    ('0' + inpDate.getMinutes()).slice(-2)
  );
};
export const formatDayOnly = (inpDate) => {
  return monthNames[inpDate.getMonth()] + '/' + inpDate.getDate();
};
export const formatHourOnly = (inpDate) => {
  return (
    '@' + inpDate.getHours() + ':' + ('0' + inpDate.getMinutes()).slice(-2)
  );
};

const tempDate = [2021, 6, 7, 7, 0, 0];

export const defaultSensor = [
  {
    id: 1,
    name: 'Temperature',
    icon: 'thermometer-half',
    color: COLORS.blue,
    details: {
      average: '15°C',
      high: {value: '21°C', time: '2:15pm', icon: 'thermometer-three-quarters'},
      low: {value: '10°C', time: '1:15am', icon: 'thermometer-quarter'},
    },
    readings: {
      unit: '°C',
      readings: [
        {id: '1', value: 10, time: '1:15am', date: 'Feb 15 2022'},
        {id: '2', value: 13, time: '1:30am', date: 'Feb 15 2022'},
        {id: '3', value: 16, time: '1:45am', date: 'Feb 15 2022'},
        {id: '4', value: 19, time: '2:00am', date: 'Feb 15 2022'},
        {id: '5', value: 21, time: '2:15am', date: 'Feb 15 2022'},
        {id: '6', value: 18, time: '2:30am', date: 'Feb 15 2022'},
        {id: '7', value: 14, time: '2:45am', date: 'Feb 15 2022'},
      ],
      data: [10, 13, 16, 19, 21, 18, 14],
      round: true,
    },
    curDate: tempDate,
    policy: {
      upperbound: '',
      lowerbound: '',
      upbMsg: '',
      lobMsg: '',
    }
  },
  {
    id: 2,
    name: 'Air Quality',
    icon: 'wind',
    color: COLORS.darkgreen,
    details: {
      average: '44/500',
      high: {
        value: '56/500',
        time: '2:30pm',
        icon: 'fan',
      },
      low: {
        value: '31/500',
        time: '2:45am',
        icon: 'fan',
      },
    },
    readings: {
      unit: '/500',
      readings: [
        {id: '1', value: 40, time: '1:15am', date: 'Feb 15 2022'},
        {id: '2', value: 42, time: '1:30am', date: 'Feb 15 2022'},
        {id: '3', value: 50, time: '1:45am', date: 'Feb 15 2022'},
        {id: '4', value: 52, time: '2:00am', date: 'Feb 15 2022'},
        {id: '5', value: 56, time: '2:15am', date: 'Feb 15 2022'},
        {id: '6', value: 31, time: '2:30am', date: 'Feb 15 2022'},
        {id: '7', value: 40, time: '2:45am', date: 'Feb 15 2022'},
      ],
      data: [40, 42, 50, 52, 56, 31, 40],
      round: true,
    },
    curDate: tempDate,
    policy: {
      upperbound: '',
      lowerbound: '',
      upbMsg: '',
      lobMsg: '',
    }
  },
  {
    id: 3,
    name: 'Barometric Pressure',
    icon: 'weight-hanging',
    color: COLORS.yellow,
    details: {
      average: '1atm',
      high: {value: '1.2atm', time: '2:00am', icon: 'balance-scale-right'},
      low: {value: '0.9atm', time: '1:15am', icon: 'balance-scale-left'},
    },
    readings: {
      unit: 'atm',
      readings: [
        {id: '1', value: 0.9, time: '1:15am', date: 'Feb 15 2022'},
        {id: '2', value: 1.0, time: '1:30am', date: 'Feb 15 2022'},
        {id: '3', value: 1.1, time: '1:45am', date: 'Feb 15 2022'},
        {id: '4', value: 1.2, time: '2:00am', date: 'Feb 15 2022'},
        {id: '5', value: 1.0, time: '2:15am', date: 'Feb 15 2022'},
        {id: '6', value: 1.0, time: '2:30am', date: 'Feb 15 2022'},
        {id: '7', value: 0.9, time: '2:45am', date: 'Feb 15 2022'},
      ],
      data: [0.9, 1.0, 1.1, 1.2, 1.0, 1.0, 0.9],
      round: false,
    },
    curDate: tempDate,
    policy: {
      upperbound: '',
      lowerbound: '',
      upbMsg: '',
      lobMsg: '',
    }
  },
  {
    id: 4,
    name: 'Humidity',
    icon: 'hotjar',
    color: COLORS.peach,
    details: {
      average: 'Decent',
      high: {value: 'Sticky', time: '2:30pm', icon: 'fire-alt'},
      low: {value: 'Decent', time: '12:45am', icon: 'fire'},
    },
    readings: {
      unit: '%',
      readings: [
        {id: '1', value: 35, time: '1:15am', date: 'Feb 15 2022'},
        {id: '2', value: 31, time: '1:30am', date: 'Feb 15 2022'},
        {id: '3', value: 40, time: '1:45am', date: 'Feb 15 2022'},
        {id: '4', value: 41, time: '2:00am', date: 'Feb 15 2022'},
        {id: '5', value: 37, time: '2:15am', date: 'Feb 15 2022'},
        {id: '6', value: 49, time: '2:30am', date: 'Feb 15 2022'},
        {id: '7', value: 47, time: '2:45am', date: 'Feb 15 2022'},
      ],
      data: [35, 31, 40, 41, 37, 49, 47],
      round: true,
    },
    curDate: tempDate,
    policy: {
      upperbound: '',
      lowerbound: '',
      upbMsg: '',
      lobMsg: '',
    }
  },
  /*{
    id: 5,
    name: 'Lightning',
    icon: 'bolt',
    color: COLORS.lightBlue,
    //details: {
    //  average: 'Decent',
    //  high: {value: 'Sticky', time: '2:30am', icon: 'fire-alt'},
    //  low: {value: 'Decent', time: '12:45am', icon: 'fire'},
    //},
    readings: {
      unit: 'strikes',
      readings: [
        {id: '1', location: "Waterloo Regional Municipality, Ontario, Canada", time: '1:15am', date: "Feb 21 2022"},
        {id: '2', location: "Wellington County, Ontario, Canada", time: '7:30am', date: "Feb 21 2022"},
        {id: '3', location: "Regional Municipality of Peel, Ontario, Canada", time: '10:45am', date: "Feb 22 2022"},
        {id: '4', location: "Waterloo Regional Municipality, Ontario, Canada", time: '11:00am', date: "Feb 23 2022"},
        {id: '5', location: "Waterloo Regional Municipality, Ontario, Canada", time: '11:01am', date: "Feb 23 2022"},
        {id: '6', location: "Waterloo Regional Municipality, Ontario, Canada", time: '11:05am', date: "Feb 23 2022"},
        {id: '7', location: "Toronto, Ontario, Canada", time: '5:08am', date: "Feb 25 2022"},
      ],
      // data: [10, 25, 16, 20, 5, 13, 30],
      round: true,
    },
    curDate: tempDate,
  },*/
];

export const defaultSuggestion = [
  {
    id: 1,
    icon: 'seedling',
    name: 'House Plants For You',
    color: COLORS.darkgreen,
    relReading: ['Temperature', 'Humidity'],
    img: '',
    sugItems: [
      {
        id: '1',
        title: 'Recommendation condition',
        description: 'Recommended when temperature exceed 30 Celsius degree.',
        img:
          'https://hips.hearstapps.com/amv-prod-gp.s3.amazonaws.com/gearpatrol/wp-content/uploads/2019/01/10-Best-Indoor-Plants-Gear-Patrol-lead-full.jpg',
      },
      {
        id: '2',
        title: 'Type of recommedation',
        description:
          'Cactus is recommended when temperatre condition is humid.',
        img: 'https://via.placeholder.com/150',
      },
      {
        id: '3',
        title: 'Note',
        description:
          'There are other types of plants that can be suggested according to the environment.',
        img: 'https://via.placeholder.com/150',
      },
    ],
    description: 'See which plants are perfect for your environment.',
  },
  {
    id: 2,
    icon: 'burn',
    name: 'Food Plants For You',
    color: COLORS.purple,
    relReading: ['Air Quality', 'Humidity'],
    img: '',
    sugItems: [
      {
        id: '1',
        title: 'Recommendation condition',
        description: 'Recommended when humidity exceed 5H.',
        img: 'https://via.placeholder.com/150',
      },
      {
        id: '2',
        title: 'Type of recommedation',
        description:
          'Humidifier usage can significantly improve surrounding humidity',
        img: 'https://via.placeholder.com/150',
      },
      {
        id: '3',
        title: 'Note',
        description:
          'Get rid of sticky uncomfortable humidity in your environment.',
        img: 'https://via.placeholder.com/150',
      },
    ],
    description:
      'Get rid of sticky uncomfortable humidity in your environment.',
  },
  {
    id: 3,
    icon: 'fan',
    name: 'Improve Air Quality',
    color: COLORS.blue,
    relReading: ['Air Quality', 'Barometric Pressure'],
    img: '',
    sugItems: [
      {
        id: '1',
        title: 'Recommendation condition',
        description: 'Recommended when Air Quality exceed 44/500.',
        img: 'https://via.placeholder.com/150',
      },
      {
        id: '2',
        title: 'Type of recommedation',
        description: 'Air quality can be improved by planting more trees',
        img: 'https://via.placeholder.com/150',
      },
      {
        id: '3',
        title: 'Note',
        description:
          'Air quality can affect your health, see what you can do to improve it.',
        img: 'https://via.placeholder.com/150',
      },
    ],
    description:
      'Air quality can affect your health, see what you can do to improve it.',
  },
];

export const defaultLocation = [
  {
    id: 0,
    location: 'Waterloo Regional Municipality, Ontario, Canada',
    markers: [
      {
        id: 1,
        lat: 43.4667,
        lng: -80.5167,
        temp: '30°C',
        airQuality: '44/500',
        humidity: '5H',
        hasLightning: false,
      },
      {
        id: 2,
        lat: 43.42,
        lng: -80.561,
        temp: '27°C',
        airQuality: '49/500',
        humidity: '6H',
        hasLightning: false,
      },
    ],
    avgTemp: '28.5°C',
    avgAirQuality: '46.5/500',
    avgHumidity: '5.5H',
    lat: 43.4667,
    lng: -80.5167,
  },
];

export const defaultSensor2 = [
  {
    id: 1,
    name: 'Temperature',
    icon: 'thermometer-half',
    color: COLORS.blue,
    details: {
      average: '16°C',
      high: {value: '25°C', time: '2:15pm', icon: 'thermometer-three-quarters'},
      low: {value: '1°C', time: '1:15am', icon: 'thermometer-quarter'},
    },
    readings: {
      unit: '°C',
      readings: [
        {id: '1', value: 6, time: '1:15am', date: 'Feb 15 2022'},
        {id: '2', value: 15, time: '1:30am', date: 'Feb 15 2022'},
        {id: '3', value: 14, time: '1:45am', date: 'Feb 15 2022'},
        {id: '4', value: 10, time: '2:00am', date: 'Feb 15 2022'},
        {id: '5', value: 21, time: '2:15am', date: 'Feb 15 2022'},
        {id: '6', value: 17, time: '2:30am', date: 'Feb 15 2022'},
        {id: '7', value: 14, time: '2:45am', date: 'Feb 15 2022'},
      ],
      data: [6, 15, 14, 10, 21, 17, 14],
      round: true,
    },
    curDate: tempDate,
    policy: {
      upperbound: '',
      lowerbound: '',
      upbMsg: '',
      lobMsg: '',
    }
  },
  {
    id: 2,
    name: 'Air Quality',
    icon: 'wind',
    color: COLORS.darkgreen,
    details: {
      average: '44/500',
      high: {
        value: '56/500',
        time: '2:30pm',
        icon: 'fan',
      },
      low: {
        value: '31/500',
        time: '2:45am',
        icon: 'fan',
      },
    },
    readings: {
      unit: '/500',
      readings: [
        {id: '1', value: 47, time: '1:15am', date: 'Feb 15 2022'},
        {id: '2', value: 44, time: '1:30am', date: 'Feb 15 2022'},
        {id: '3', value: 55, time: '1:45am', date: 'Feb 15 2022'},
        {id: '4', value: 41, time: '2:00am', date: 'Feb 15 2022'},
        {id: '5', value: 56, time: '2:15am', date: 'Feb 15 2022'},
        {id: '6', value: 31, time: '2:30am', date: 'Feb 15 2022'},
        {id: '7', value: 40, time: '2:45am', date: 'Feb 15 2022'},
      ],
      data: [47, 44, 55, 41, 56, 31, 40],
      round: true,
    },
    curDate: tempDate,
    policy: {
      upperbound: '',
      lowerbound: '',
      upbMsg: '',
      lobMsg: '',
    }
  },
  {
    id: 3,
    name: 'Barometric Pressure',
    icon: 'weight-hanging',
    color: COLORS.yellow,
    details: {
      average: '1atm',
      high: {value: '1.2atm', time: '2:00am', icon: 'balance-scale-right'},
      low: {value: '0.9atm', time: '1:15am', icon: 'balance-scale-left'},
    },
    readings: {
      unit: 'atm',
      readings: [
        {id: '1', value: 1.4, time: '1:15am', date: 'Feb 15 2022'},
        {id: '2', value: 0.7, time: '1:30am', date: 'Feb 15 2022'},
        {id: '3', value: 1.5, time: '1:45am', date: 'Feb 15 2022'},
        {id: '4', value: 1.1, time: '2:00am', date: 'Feb 15 2022'},
        {id: '5', value: 1.0, time: '2:15am', date: 'Feb 15 2022'},
        {id: '6', value: 1.0, time: '2:30am', date: 'Feb 15 2022'},
        {id: '7', value: 0.9, time: '2:45am', date: 'Feb 15 2022'},
      ],
      data: [1.4, 0.7, 1.5, 1.1, 1.0, 1.0, 0.9],
      round: false,
    },
    curDate: tempDate,
    policy: {
      upperbound: '',
      lowerbound: '',
      upbMsg: '',
      lobMsg: '',
    }
  },
  {
    id: 4,
    name: 'Humidity',
    icon: 'hotjar',
    color: COLORS.peach,
    details: {
      average: 'Decent',
      high: {value: 'Sticky', time: '2:30am', icon: 'fire-alt'},
      low: {value: 'Decent', time: '12:45am', icon: 'fire'},
    },
    readings: {
      unit: '%',
      readings: [
        {id: '1', value: 43, time: '1:15am', date: 'Feb 15 2022'},
        {id: '2', value: 42, time: '1:30am', date: 'Feb 15 2022'},
        {id: '3', value: 38, time: '1:45am', date: 'Feb 15 2022'},
        {id: '4', value: 39, time: '2:00am', date: 'Feb 15 2022'},
        {id: '5', value: 43, time: '2:15am', date: 'Feb 15 2022'},
        {id: '6', value: 45, time: '2:30am', date: 'Feb 15 2022'},
        {id: '7', value: 44, time: '2:45am', date: 'Feb 15 2022'},
      ],
      data: [43, 42, 38, 39, 43, 45, 44],
      round: true,
    },
    curDate: tempDate,
    policy: {
      upperbound: '',
      lowerbound: '',
      upbMsg: '',
      lobMsg: '',
    }
  },
  {
    id: 5,
    name: 'Lightning',
    icon: 'bolt',
    color: COLORS.lightBlue,
    //details: {
    //  average: 'Decent',
    //  high: {value: 'Sticky', time: '2:30am', icon: 'fire-alt'},
    //  low: {value: 'Decent', time: '12:45am', icon: 'fire'},
    //},
    readings: {
      unit: 'strikes',
      readings: [
        {id: '1', location: "Toronto, Ontario, Canada", time: '1:00am', date: "Feb 21 2022"},
        {id: '2', location: "Toronto, Ontario, Canada", time: '1:05am', date: "Feb 21 2022"},
        {id: '3', location: "Regional Municipality of Peel, Ontario, Canada", time: '9:30am', date: "Feb 22 2022"},
        {id: '4', location: "Waterloo Regional Municipality, Ontario, Canada", time: '2:00am', date: "Feb 23 2022"},
        {id: '5', location: "Regional Municipality of York, Ontario, Canada", time: '11:03pm', date: "Feb 23 2022"},
        {id: '6', location: "Waterloo Regional Municipality, Ontario, Canada", time: '3:30pm', date: "Feb 25 2022"},
        {id: '7', location: "Toronto, Ontario, Canada", time: '3:31pm', date: "Feb 25 2022"},
      ],
      // data: [10, 25, 16, 20, 5, 13, 30],
      // round: true,
    },
    curDate: tempDate,
  },
];

export const dummyDevices = [
  {
    name: 'Device 1',
    id: 1,
    color: '#3027d9',
    sensors: defaultSensor,
  },
  {
    name: 'Device 2',
    id: 2,
    color: '#41bbe0',
    sensors: defaultSensor2,
  },
  // {
  //   name: 'Device 3',
  //   id: 3,
  //   color: '#41e041',
  //   sensors: defaultSensor,
  // },
  // {
  //   name: 'really really really long name',
  //   id: 4,
  //   color: '#dee041',
  //   sensors: defaultSensor,
  // },
  // {
  //   name: 'sn',
  //   id: 5,
  //   color: '#ff9736',
  //   sensors: defaultSensor,
  // },
];