export const usePreload = () => {
  return useState("preload", () => ({
    isActive: true,
    hasPlayed: false,
  }));
};
