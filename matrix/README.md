# Import behavior matrix

See [Import behavior matrix table](./table.md)

## Generating

### Getting started from scratch

```
npm ci --ignore-scripts
npm start
```

### Scripts

```
npm run <name>
```

- `build` - Runs all bundlers. Only needs to run whenever changes in `./cases/` are introduced
- `run-all` - Runs all tests and produces JSON files in `./results/`
- `run-node` - Runs only node tests - useful for switching node versions and rerunning
- `run-endo` - Runs only endo tests - useful when switching endo versions
- `generate` - Collects `./results/*` and generates the table.md file
- `update-endo` - installs latest endo packages used in tests
- bun is not included in `build` by default and has to be used with `npm run build:bun` after it's been installed on the machine.

## Bundler Configurations

Rollup and webpack have their configuration files. Parcel could only be configured in package.json (in cases) - nothing else should be added to that package.json
