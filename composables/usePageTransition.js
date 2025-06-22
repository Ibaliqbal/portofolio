export const usePageTransition = () => {
  return useState("preload", () => ({
    isDone: true,
  }));
};
