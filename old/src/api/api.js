import { config } from './config';
//import localforage from 'localforage';

//window.localforage = localforage;


// const getAll = async () => {
//   const items = await localforage.getItem('items');
//   if (!items) await localforage.setItem('items', []);
//   return items || [];
// };

export default {
  // Before: callback city!
  /*fetch('/users.json')
  .then(response => response.json())
  .then(json => {
    console.log(json);
  })
  .catch(e => { console.log('error!'); })*/

  // After: no more callbacks!
  async getRides() {
    const request = config.requests.rides;
    const uri = `${config.url}${request.path}?token=${config.token}`;
    try {
      const rides = await fetch(uri);
      console.log(rides);
      //TODO: check if json manipulation is needed
      const json = await rides.json();
      console.log(json);
      return json;
    }
    catch (e) {
      console.log('Error!', e);
    }
  },

  /*fetch("/url-to-post",{
    method: "POST",
    //what ever data you want to post with key value pair        
    body: "name=manas&age=20",
    headers: {
        "Content-Type": "application/x-www-form-urlencoded"
    }).then( (response) => { 
    //do something awesome that makes the world a better place
});*/

  async getTicket(rideId, pin) {
    const request = config.requests.tickets;
    const uri = `${config.url}${request.path}`;
    const query = `?pin=${pin}&ride_id=${rideId}&token=${config.token}`;
    try {
      const ticket = await fetch(uri,
        {
          method: "POST",   
          body: query
        }
      );
      console.log(ticket);
      //TODO: check if json manipulation is needed
      const json = await ticket.json();
      console.log(json);
      return json;
    }
    catch (e) {
      console.log('Error!', e);
    }
  }

  /*async add(item) {
    const items = await getAll();
    const newItem = { ...item, id: Date.now() };
    localforage.setItem('items', [...items, newItem]);
    return newItem;
  },

  async getAll() {
    return await getAll();
  },

  async delete({ id }) {
    const items = await getAll();
    localforage.setItem('items', items.filter(item => item.id !== id));
  },

  async update(updatedItem) {
    const items = await getAll();
    localforage.setItem(
      'items',
      items.map(item => {
        if (item.id === updatedItem.id) return { ...item, ...updatedItem };
        return item;
      }),
    );
  },

  async markAllAsUnpacked() {
    const items = await getAll();
    localforage.setItem(
      'items',
      items.map(item => ({ ...item, packed: false })),
    );
  },

  async deleteUnpackedItems() {
    const items = await getAll();
    localforage.setItem('items', items.filter(({ packed }) => packed))
  },*/
};
