## General dependencies
- NodeJS v8.6.0+

## Seedom dependencies
- seedom-assets
- seedom-crypter
- seedom-badger
- seedom-solidity

# Start dev server
- start seedom-badger
- `npm run dev`

# Prepare distribution
- `npm run dist`

# Start prod build
- prepare distribution
- `docker build -t seedom-test .`
- `docker run -p 80:80 seedom-test:latest`
