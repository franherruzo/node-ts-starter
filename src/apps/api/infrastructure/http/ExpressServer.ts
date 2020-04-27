import express, { Express } from 'express';
import { Server } from 'http';
import bodyParser from 'body-parser';
import helmet from 'helmet';
import compress from 'compression';
import { router } from '../../routes';

export class ExpressServer {
  private express: Express;
  private httpServer: Server;
  private port: number;

  constructor(port: number) {
    this.port = port;
    this.express = express();
    this.express.use(bodyParser.json());
    this.express.use(compress());
    this.express.use(helmet());
    this.express.use('/api', router);
  }

  async listen(): Promise<Server> {
    return new Promise(resolve => {
      this.httpServer = this.express.listen(this.port, () => {
        resolve();
      });
    });
  }

  public stop(): void {
    if (this.httpServer) this.httpServer.close();
  }

  public getHTTPServer(): Server {
    return this.httpServer;
  }
}
