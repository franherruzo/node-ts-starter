import convict from 'convict';

const config = convict({
  env: {
    doc: 'The application environment.',
    format: ['production', 'development', 'test'],
    default: 'development',
    env: 'NODE_ENV'
  },
  port: {
    doc: 'The port to bind.',
    format: 'port',
    env: 'API_PORT',
    default: 3000
  }
});

config.loadFile([__dirname + '/default.json', __dirname + '/' + config.get('env') + '.json']);
config.validate({ allowed: 'strict' });

export default config;
