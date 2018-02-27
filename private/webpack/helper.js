const fs = require('fs');
const path = require('path');

const MAX_CONTRACTS_PER_NAME = 6;

module.exports.getContracts = (cwd, networkName) => {
  const deploymentFile = path.resolve(cwd, `../seedom-solidity/deployment/${networkName}.json`);
  const deploymentData = fs.readFileSync(deploymentFile);
  const deployment = JSON.parse(deploymentData);

  const contracts = {};
  const outputs = {};
  for (const contractName in deployment.releases) {
    contracts[contractName] = [];
    const releases = deployment.releases[contractName].slice(0, MAX_CONTRACTS_PER_NAME);
    for (const release of releases) {
      let output;
      // grab and cache outputs
      if (release.hash in outputs) {
        output = outputs[release.hash];
      } else {
        const outputFile = path.resolve(cwd, `../seedom-solidity/output/${release.hash}.json`);
        const outputData = fs.readFileSync(outputFile);
        output = JSON.parse(outputData);
        outputs[release.hash] = output;
      }
      contracts[contractName].push({
        address: release.address,
        abi: output.abi
      });
    }
  }

  return contracts;
};
