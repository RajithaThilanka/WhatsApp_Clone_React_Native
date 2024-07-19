import Colors from "@/constants/Colors";

export interface CallItemProps {
  name: string;
  callType: "incoming" | "outgoing" | "missed";
  time: string;
  avatar: string;
  currentTheme: typeof Colors.light;
}
