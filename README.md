## General Dependencies
- NodeJS v8.6.0+

## Seedom Dependencies
- seedom-assets
- seedom-badger
- seedom-solidity

# Start Dev Server
- start seedom-badger
- `npm run dev`

# Prepare Distribution
- `npm run dist`

# Start Prod Build
- prepare distribution
- `docker build -t seedom-test .`
- `docker run -p 80:80 seedom-test:latest`
- 
