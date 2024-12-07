import {ReactNode} from "react";
import {FuelProvider} from "@fuels/react";
import {CHAIN_IDS, Network, Provider} from "fuels";
import {
  BakoSafeConnector,
  createConfig as createFuelConfig,
  FueletWalletConnector,
  FuelWalletConnector,
  SolanaConnector,
  WalletConnectConnector
} from "@fuels/connectors";
import {createConfig, http, injected} from "@wagmi/core";
import {mainnet} from "@wagmi/core/chains";
import {walletConnect} from "@wagmi/connectors";
// import {NetworkUrl} from "@/src/utils/constants";

const NetworkUrl = "https://mainnet.fuel.network/v1/graphql";
type ExternalConnectorConfig = Partial<{ chainId: number, fuelProvider: Promise<Provider> }>;
type Props = {
  children: ReactNode;
};
const networks: Array<Network> = [
  {
    chainId: CHAIN_IDS.fuel.mainnet,
    url: NetworkUrl,
  }
];

// Creates a protection for SRR
const FUEL_CONFIG = createFuelConfig(() => {
  const WalletConnectProjectId = '0693d19ae8f2b62dab6f7c393654c0b4';
  const wagmiConfig = createConfig({
    syncConnectedChain: false,
    chains: [mainnet],
    transports: {
      [mainnet.id]: http(),
    },
    connectors: [
      injected({shimDisconnect: false}),
      walletConnect({
        projectId: WalletConnectProjectId,
        metadata: {
          name: "From",
          description: "Trach your assets in Minutes",
          url: "https://reown.com/appkit",
          icons: ["https://connectors.fuel.network/logo_white.png"],
        },
      }),
    ],
  });

  const fuelProvider = Provider.create(NetworkUrl);

  const externalConnectorConfig: ExternalConnectorConfig = {
    chainId: CHAIN_IDS.fuel.mainnet,
    fuelProvider,
  };

  const fueletWalletConnector = new FueletWalletConnector();
  const fuelWalletConnector = new FuelWalletConnector();
  const bakoSafeConnector = new BakoSafeConnector();
  const walletConnectConnector = new WalletConnectConnector({
    projectId: WalletConnectProjectId,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    wagmiConfig: wagmiConfig as any,
    ...externalConnectorConfig
  });
  const solanaConnector = new SolanaConnector({
    projectId: WalletConnectProjectId,
    ...externalConnectorConfig
  });

  return {
    connectors: [
      fueletWalletConnector,
      walletConnectConnector,
      solanaConnector,
      fuelWalletConnector,
      bakoSafeConnector
    ]
  }
});

const FuelProviderWrapper = ({children}: Props) => {
  return (
    <FuelProvider
      networks={networks}
      fuelConfig={FUEL_CONFIG}
      uiConfig={{suggestBridge: false}}
      theme="dark"
    >
      {children}
    </FuelProvider>
  );
};

export default FuelProviderWrapper;