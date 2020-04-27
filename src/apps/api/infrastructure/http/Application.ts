import { ExpressServer } from './ExpressServer';
import { Server } from 'http';
import config from '../../../../config';

export class Application {
  private server: ExpressServer;

  async start(): Promise<Server> {
    const port = config.get('port');
    this.server = new ExpressServer(port);
    return this.server.listen();
  }
  async stop(): Promise<void> {
    if (this.server) this.server.stop();
  }

  get httpServer(): Server {
    if (this.server) {
      return this.server.getHTTPServer();
    }
  }
}
