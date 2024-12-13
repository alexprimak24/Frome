import { useSnackbar, VariantType } from "notistack";

export const useUserAlert = () => {
  const { enqueueSnackbar } = useSnackbar();
  const showUserAlert = ({
    variant,
    message,
  }: {
    variant: VariantType;
    message: string | React.ReactNode;
  }) => {
    enqueueSnackbar(message, {
      anchorOrigin: {
        horizontal: "right",
        vertical: "bottom",
      },
      style: {
        // background: variant === "info" ? "#B8FBCF" : "#00F58C",
        // color: "#000",
        color: variant === "success" ? "white" : "black",
        backgroundColor:
          variant === "success" ? "#4CA6AD" : "rgba(0, 40, 200, 1)",
        border: variant === "success" ? "white" : "1px solid #0028C8",
      },
    });
  };

  return showUserAlert;
};
