import { useCallback } from "react";
import {
  useAccount,
  useConnectUI,
  useDisconnect,
  useIsConnected,
  useWallet,
} from "@fuels/react";
import ConnectAccountBtn from "../ui/StyledConnectAccountBtn";
import useFormatAddress from "../../../hooks/useFormatAddress";
import { Dropdown } from "@mui/base/Dropdown";
import { Menu } from "@mui/base/Menu";
import StyledMenuButton from "../ui/StyledMenuButton";
import StyledMenuItem from "../ui/StyledMenuItem";
import StyledListbox from "../ui/StyledListBox";
import SettingsIcon from "@mui/icons-material/Settings";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import ContentCopyOutlinedIcon from "@mui/icons-material/ContentCopyOutlined";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import { useUserAlert } from "../../../utils/shared";

//START WITH SETTING CONNECTED WALLET IN APP COMPONENT

function ConnectWalletBtn() {
  const { isConnected } = useIsConnected();
  const { connect, isConnecting } = useConnectUI();
  const { account } = useAccount();
  const { disconnect } = useDisconnect();
  const { wallet } = useWallet();
  const showUserAlert = useUserAlert();

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

  const handleCopyAddressToClipboard = (address: string) => {
    navigator.clipboard
      .writeText(address)
      .then(() => {
        //Show dialog to notify user that address is copied
        showUserAlert({
          variant: "success",
          message: "Address copied to clipboard!",
        });
        // setTimeout(() => {
        //   setIsCopied(false);
        // }, 2000);
      })
      .catch((err) => {
        console.error("Failed to copy address: ", err);
      });
  };
  //THINK ABOUT THAT
  // useEffect(() => {
  //   if (!wallet && !isConnecting && !isConnected) {
  //     connect();
  //     console.log("Connecting to wallet...");
  //   }
  // }, [connect, isConnected, isConnecting, wallet]);

  const createHandleMenuClick = (menuItem: string) => {
    return () => {
      console.log(`Clicked on ${menuItem}`);
    };
  };

  return (
    <>
      <div>
        {!wallet ? (
          <ConnectAccountBtn sx={{}} onClick={handleClick}>
            {isConnecting ? "Connecting" : "Connect"}
          </ConnectAccountBtn>
        ) : (
          <div className="">
            <Dropdown>
              <StyledMenuButton className="group">
                <div className="flex items-center justify-center gap-[15px]">
                  <span className="text-ellipsis overflow-auto tracking-[-0.7px]">
                    {formattedAddress}
                  </span>
                  <SettingsIcon className="group-hover:rotate-45 transition-transform duration-1000 ease-in-out transform" />
                </div>
              </StyledMenuButton>
              <Menu slots={{ listbox: StyledListbox }}>
                <StyledMenuItem onClick={createHandleMenuClick("Profile")}>
                  <div className="flex items-center justify-start gap-[8px]">
                    <AccountCircleOutlinedIcon
                      sx={{ width: "15px", height: "15px" }}
                    />
                    {/* TODO */}
                    <span>MyAccount</span>
                  </div>
                </StyledMenuItem>
                <StyledMenuItem
                  onClick={() => handleCopyAddressToClipboard(account!)}
                >
                  <div className="flex items-center justify-start gap-[8px]">
                    <ContentCopyOutlinedIcon
                      sx={{ width: "15px", height: "15px" }}
                    />
                    <span>Copy address</span>
                  </div>
                </StyledMenuItem>
                <StyledMenuItem
                  hoverColor={"#E75A7C"}
                  onClick={handleDisconnect}
                  className="group"
                >
                  <div className="flex items-center justify-start gap-[8px]">
                    <ExitToAppIcon
                      sx={{
                        width: "15px",
                        height: "15px",
                      }}
                      className=" text-defaultred group-hover:text-white group-focus:text-white transition-colors duration-200"
                    />
                    <span className="self-start text-defaultred group-hover:text-white group-focus:text-white transition-colors duration-200">
                      Disconnect
                    </span>
                  </div>
                </StyledMenuItem>
              </Menu>
            </Dropdown>
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
