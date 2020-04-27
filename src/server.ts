import { Application } from './apps/api/infrastructure/http/Application';
import config from './config';

try {
  new Application()
    .start()
    .then(() => console.info(`The application was started in port: ${config.get('port')} ! Stop it using Ctrl + C'`));
} catch (e) {
  console.log(e);
  process.exit(1);
}

process.on('uncaughtException', err => {
  console.log('unhandledRejection', err);
  process.exit(1);
});

process.on('unhandledRejection', err => {
  console.log('unhandledRejection', err);
  process.exit(1);
});
