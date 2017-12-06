import server, { app } from './config/server';
import routes from './config/routes';

server(8080);
routes(app);
