import { useCallback, useEffect } from "react";
import SettingsIcon from "@mui/icons-material/Settings";
import {
  useAccount,
  useConnectUI,
  useDisconnect,
  useIsConnected,
  useWallet,
} from "@fuels/react";
import ConnectAccountBtn from "../ui/StyledConnectAccountBtn";
import ConnectedAccountBtn from "../ui/StyledConnectedAccountBtn";
import useFormatAddress from "../../../hooks/useFormatAddress";

//START WITH SETTING CONNECTED WALLET IN APP COMPONENT

function ConnectWalletBtn() {
  const { isConnected } = useIsConnected();
  const { connect, isConnecting } = useConnectUI();
  const { account } = useAccount();
  const { disconnect, isPending: disconnectLoading } = useDisconnect();
  const { wallet } = useWallet();

  const formattedAddress = useFormatAddress(account);

  const handleConnect = useCallback(() => {
    if (!isConnected) {
      connect();
    }
  }, [isConnected, connect]);

  const handleDisconnect = useCallback(() => {
    disconnect();
  }, [disconnect]);

  const handleClick = useCallback(() => {
    if (!isConnected) {
      handleConnect();
    }
  }, [isConnected, handleConnect]);

  //THINK ABOUT THAT
  // useEffect(() => {
  //   if (!wallet && !isConnecting && !isConnected) {
  //     connect();
  //     console.log("Connecting to wallet...");
  //   }
  // }, [connect, isConnected, isConnecting, wallet]);

  return (
    <>
      <div>
        {!wallet ? (
          <ConnectAccountBtn sx={{}} onClick={handleClick}>
            {isConnecting ? "Connecting" : "Connect"}
          </ConnectAccountBtn>
        ) : (
          <div className="">
            <ConnectedAccountBtn endIcon={<SettingsIcon />}>
              <span className="text-ellipsis overflow-auto tracking-[-0.7px]">
                {formattedAddress}
              </span>
            </ConnectedAccountBtn>
            {/* <ConnectedAccountBtn onClick={handleDisconnect}>
              DIS
            </ConnectedAccountBtn> */}
          </div>
        )}
      </div>
    </>
  );
}

export default ConnectWalletBtn;

{
  /* <Button onClick={handleDisconnect}>DIS</Button>
          </div> */
}
