import { useCallback } from "react";

import {
  useAccount,
  useConnectUI,
  useDisconnect,
  useIsConnected,
  useWallet,
} from "@fuels/react";

function ConnectWalletBtn() {
  const { isConnected } = useIsConnected();
  const { connect, isConnecting } = useConnectUI();
  const { account } = useAccount();

  const handleConnection = useCallback(() => {
    if (!isConnected) {
      connect();
    }
  }, [isConnected, connect]);

  const handleClick = useCallback(() => {
    if (!isConnected) {
      handleConnection();
    }
  }, [isConnected, handleConnection]);

  const { wallet } = useWallet();

  return (
    <>
      <div className="bg-blue-50 text-white">
        {wallet ? (
          <p className="text-white">{String(wallet.address)}</p>
        ) : (
          <button onClick={handleClick}>Connect</button>
        )}
      </div>
    </>
  );
}

export default ConnectWalletBtn;
