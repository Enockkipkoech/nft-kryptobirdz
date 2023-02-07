require('@nomiclabs/hardhat-waffle');
require('dotenv').config();

const projectId = 'b9a173bf617b449280bba7ab5317cfca';

module.exports = {
	defaultNetwork: 'hardhat',
	networks: {
		hardhat: {
			chainId: 1337, //config standard
		},
		mumbai: {
			url: `https://polygon-mumbai.infura.io/v3/${projectId}`,
			accounts: [process.env.POLYGON_PRIVATE_KEY],
		},
		mainnet: {
			url: `https://mainnet.infura.io/v3/${projectId}`,
			accounts: [process.env.POLYGON_PRIVATE_KEY],
		},
		rinkeby: {
			url: 'https://rinkeby.infura.io/v3/0986efb27c5342e8932b7dc01e25a4cf',
			accounts: [process.env.RINKEBY_PRIVATE_KEY],
		},
	},
	solidity: {
		version: '0.8.4',
		settings: {
			optimizer: {
				enabled: true,
				runs: 200,
			},
		},
	},
};
