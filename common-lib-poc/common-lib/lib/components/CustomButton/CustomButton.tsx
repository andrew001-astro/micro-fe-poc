import Button, { BaseButtonProps } from "antd/es/button/button";

const variantConfig: {
  [key: string]: {
    bgColor: string;
    txtColor: string;
  };
} = {
  primary: { bgColor: "#067a58", txtColor: "#ffffff" },
  secondary: { bgColor: "#4e5251", txtColor: "#ffffff" },
  default: { bgColor: "#e1e8e6", txtColor: "#000000" },
};

type CustomButtonProps = BaseButtonProps & {
  label?: string;
  customType?: "primary" | "default" | "secondary";
};

export default function CustomButton({
  children,
  styles,
  customType = "primary",
  label = "Custom Button",
}: CustomButtonProps) {
  return (
    <Button
      style={{
        ...(styles as React.CSSProperties),
        backgroundColor: variantConfig[customType].bgColor,
        color: variantConfig[customType].txtColor,
      }}
    >
      {label ?? children}
    </Button>
  );
}
