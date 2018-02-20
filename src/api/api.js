import { config } from './config';

export default {
  async getRides() {
    const ridesDebugMode = false;
    const request = config.requests.rides;
    const uri = `${config.url}${request.path}?token=${config.token}`;
    try {
      const rides = await fetch(uri);
      const ridesJson = await rides.json();

      if (ridesDebugMode) {
        const fakeRides = [];
        for (let i = 0 ; i < 17 ; i++) {
          fakeRides.push({
            "id": 15,
            "zone": {
              "id": 4,
              "name": 'Macaque Mountain',
              "color": '#facf5a'
            },
            "name": 'Avalanche! Gaaaaa',
            "remaining_tickets": 24,
            "return_time": '2018-02-20T18:55:00.000+02:00'
          });
        }
        return fakeRides;
      }

      const availableRidesJson = ridesJson.filter(ride => ride.remaining_tickets > 0 && ride.return_time);

      return availableRidesJson;
    }
    catch (e) {
      console.log('Error!', e); //TODO: implement client side error handler
    }
  },

  async getTicket(rideId, updatedPin) {
    const ticketDebugMode = false;
    const request = config.requests.tickets;
    const uri = `${config.url}${request.path}`;
    const query = `pin=${updatedPin}&ride_id=${rideId}&token=${config.token}`;

    try {
      const ticket = await fetch(uri,
        {
          body: query,
          headers: {
            "Accept": "application/json",
            "Content-Type": "application/x-www-form-urlencoded"
          },
          method: "POST"
        }
      );

      const ticketJson = await ticket.json();

      if (ticketDebugMode) {
        return {
          "id": 303,
          "ride": {
            "id": 6,
            "zone": {
              "id": 2,
              "name": "Gibbon Island",
              "color": "#e76f68"
            },
            "name": "Full Moon Coaster",
            "remaining_tickets": 29,
            "return_time": "2018-02-19T18:57:37.954Z"
          },
          "access_code": "224d-4aec-8f77",
          "return_time": "2018-02-19T18:57:37.954Z"
        };

      }
      return ticketJson;
    }
    catch (e) {
      console.log('Error!', e); //TODO: implement client side error handler
    }
  }
};
