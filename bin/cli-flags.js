'use strict';

module.exports = {
  host: {
    name: 'host',
    type: String,
    configs: [
      {
        type: 'string',
      },
    ],
    description: 'The hostname/ip address the server will bind to.',
  },
  port: {
    name: 'port',
    type: Number,
    configs: [
      {
        type: 'number',
      },
    ],
    description: 'The port server will listen to.',
  },
  static: {
    name: 'static',
    type: [String, Boolean],
    configs: [
      {
        type: 'string',
      },
      {
        type: 'boolean',
      },
    ],
    description: 'A directory to serve static content from.',
    multiple: true,
    negative: true,
  },
  'live-reload': {
    name: 'live-reload',
    type: Boolean,
    configs: [
      {
        type: 'boolean',
      },
    ],
    description: 'Enables live reloading on changing files.',
    negatedDescription: 'Disables live reloading on changing files.',
    negative: true,
  },
  https: {
    name: 'https',
    type: Boolean,
    configs: [
      {
        type: 'boolean',
      },
    ],
    description: 'Use HTTPS protocol.',
    negatedDescription: 'Do not use HTTPS protocol.',
    negative: true,
  },
  http2: {
    name: 'http2',
    type: Boolean,
    configs: [
      {
        type: 'boolean',
      },
    ],
    description: 'Use HTTP/2, must be used with HTTPS.',
    negatedDescription: 'Do not use HTTP/2.',
    negative: true,
  },
  bonjour: {
    name: 'bonjour',
    type: Boolean,
    configs: [
      {
        type: 'boolean',
      },
    ],
    description: 'Broadcasts the server via ZeroConf networking on start.',
    negatedDescription:
      'Do not broadcast the server via ZeroConf networking on start.',
    negative: true,
  },
  'client-progress': {
    name: 'client-progress',
    type: Boolean,
    configs: [
      {
        type: 'boolean',
      },
    ],
    description: 'Print compilation progress in percentage in the browser.',
    negatedDescription:
      'Do not print compilation progress in percentage in the browser.',
    negative: true,
    processor(opts) {
      opts.client = opts.client || {};
      opts.client.progress = opts.clientProgress;
      delete opts.clientProgress;
    },
  },
  'client-overlay': {
    name: 'client-overlay',
    type: Boolean,
    configs: [
      {
        type: 'boolean',
      },
    ],
    description:
      'Show a full-screen overlay in the browser when there are compiler errors or warnings.',
    negatedDescription:
      'Do not show a full-screen overlay in the browser when there are compiler errors or warnings.',
    negative: true,
    processor(opts) {
      opts.client = opts.client || {};
      opts.client.overlay = opts.clientOverlay;
      delete opts.clientOverlay;
    },
  },
  'setup-exit-signals': {
    name: 'setup-exit-signals',
    type: Boolean,
    configs: [
      {
        type: 'boolean',
      },
    ],
    description: 'Close and exit the process on SIGINT and SIGTERM.',
    negatedDescription:
      'Do not close and exit the process on SIGNIT and SIGTERM.',
    negative: true,
  },
  // TODO remove in the next major release in favor `--open-target`
  open: {
    name: 'open',
    type: [Boolean, String],
    multiple: true,
    configs: [
      {
        type: 'boolean',
      },
      {
        type: 'string',
      },
    ],
    description: 'Open the default browser.',
    negatedDescription: 'Do not open the default browser.',
    negative: true,
  },
  'open-app': {
    name: 'open-app',
    type: String,
    configs: [
      {
        type: 'string',
      },
    ],
    description: 'Open specified browser.',
    processor(opts) {
      opts.open = opts.open || {};
      opts.open.app = opts.openApp.split(' ');
      delete opts.openApp;
    },
  },
  'open-target': {
    name: 'open-target',
    type: String,
    configs: [
      {
        type: 'boolean',
      },
      {
        type: 'string',
      },
    ],
    description: 'Open specified route in browser.',
    processor(opts) {
      opts.open = opts.open || {};
      opts.open.target = opts.openTarget;
      delete opts.openTarget;
    },
    negatedDescription: 'Do not open specified route in browser.',
    multiple: true,
    negative: true,
  },
  'client-logging': {
    name: 'client-logging',
    type: String,
    configs: [
      {
        type: 'string',
      },
    ],
    description:
      'Log level in the browser (none, error, warn, info, log, verbose).',
    processor(opts) {
      opts.client = opts.client || {};
      opts.client.logging = opts.clientLogging;
      delete opts.clientLogging;
    },
  },
  'history-api-fallback': {
    name: 'history-api-fallback',
    type: Boolean,
    configs: [
      {
        type: 'boolean',
      },
    ],
    description: 'Fallback to /index.html for Single Page Applications.',
    negatedDescription:
      'Do not fallback to /index.html for Single Page Applications.',
    negative: true,
  },
  compress: {
    name: 'compress',
    type: Boolean,
    configs: [
      {
        type: 'boolean',
      },
    ],
    description: 'Enable gzip compression.',
    negatedDescription: 'Disable gzip compression.',
    negative: true,
  },
  public: {
    name: 'public',
    type: String,
    configs: [
      {
        type: 'string',
      },
    ],
    description: 'The public hostname/ip address of the server.',
  },
  firewall: {
    name: 'firewall',
    type: [Boolean, String],
    configs: [
      {
        type: 'boolean',
      },
      {
        type: 'string',
      },
    ],
    description:
      'Enable firewall or set hosts that are allowed to access the dev server.',
    negatedDescription: 'Disable firewall.',
    multiple: true,
    negative: true,
  },
  'watch-files': {
    name: 'watch-files',
    type: String,
    configs: [
      {
        type: 'string',
      },
    ],
    description: 'Watch static files for file changes.',
    multiple: true,
  },
};
