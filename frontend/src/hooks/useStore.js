import { useContext } from "react";
import { StoreContext } from "../context/StoreContext";

export function useStore() {
  const context = useContext(StoreContext);
  if (context === undefined)
    throw new Error("StoreContext was used outside the QuizProvider");

  return context;
}
