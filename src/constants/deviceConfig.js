import React from 'react';
export const ProjectZero = {
  services: [
    {
      uuid: 'F0001110-0451-4000-B000-000000000000',
      description: 'LED Controll Service',
      Characteristics: [
        {uuid: 'F0001111-0451-4000-B000-000000000000', description: 'LED 1'},
        {uuid: 'F0001112-0451-4000-B000-000000000000', description: 'LED 2'},
      ],
    },
  ],
};

export const BLEConfig = {
  servicesUUID:"0000181a-0000-1000-8000-00805f9b34fb",
  charUUID1:"00002a6e-0000-1000-8000-00805f9b34fb",
  charUUID2:"00002a6f-0000-1000-8000-00805f9b34fb",
}
