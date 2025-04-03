import App from './app';
import IndexController from "./controllers/index.controller";
import ItemController from './controllers/item.controller';
import DataController from './controllers/data.controller';

const app: App = new App([
   new ItemController(),
   new DataController(),
   new IndexController()
]);

app.listen();