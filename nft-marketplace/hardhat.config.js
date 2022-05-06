require("@nomiclabs/hardhat-waffle");

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.8.4",
  networks: {
    hardhat: {
      chainId:1337
    },
    ropsten: {
      url:'https://ropsten.infura.io/v3/9ae20454f63149f6a2b06c542522eaa4',
      accounts: ['cc4e270d0a7390dd0e679cd09348403137d4d662f923946fb14df99558446527']
    },
    mainnet: {

    }
  }
};
