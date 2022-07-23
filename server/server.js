import pogo from 'https://deno.land/x/pogo/main.ts';
import {data} from './fakeData.js'

const PORT =4000;
const server = pogo.server({ port : PORT });

server.router.get('/', () => {
    return data;
});

server.start();
console.log('server on pror: ',PORT)