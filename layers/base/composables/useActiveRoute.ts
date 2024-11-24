export function useActiveRoute() {
  const route = useRoute();

  const isActive = (to: string) => {
    const currentPath = route.path.replace(/\/$/, ""); // Normalize to remove trailing slash
    const targetPath = to.replace(/\/$/, ""); // Normalize to remove trailing slash
    return currentPath === targetPath;
  };

  return { isActive };
}
