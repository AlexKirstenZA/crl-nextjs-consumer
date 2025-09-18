# CRL Next.js technical exercise

An example Next.js application that consumes data from a Drupal JSON API backend.

## Prerequisites

Before running this project locally, ensure you have the following installed:

- **Node.js**: Version 20 or higher
- **npm**: Package manager

This app consumes data from a Drupal JSON API backend, which needs to be configured
and running locally, before this app is started.

Please see the [Drupal backend repo](https://github.com/AlexKirstenZA/crl-drupal-json-api) for
more details.

## Setup

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd crl-nextjs-consumer
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

### Optional - if you need to customise the Drupal API url:

3. Set up environment variables:
   ```bash
   cp .env.example .env
   ```

   Edit the `.env` file and configure:
   ```
   DRUPAL_API_URL=http://crl-drupal-json-api.ddev.site
   ```

## Available Commands

### Development
```bash
npm run dev
```
The application will be available at [http://localhost:3000](http://localhost:3000)

### Building
```bash
npm run build

npm run start
```

### Code Quality
```bash
npm run lint

npm run check-types
```

### Testing
```bash
npm run test
```

## TODO:

Outstanding features that haven't been included:

- Further test coverage
- API endpoint to revalidate content via path (when Drupal content is updated)
- Caching strategy
- Further split SearchForm component into reusable form elements (input, button etc.)
- Ensure to use HTTPS when requesting Drupal API (currently avoids complications with local certificates)
