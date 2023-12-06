export function isBrowser(): boolean {
  // Check if the environment is Node.js
  if (typeof process === 'object' && typeof require === 'function') {
    return false;
  }

  // Check if the environment is a
  // Service worker
  // if (importScripts && typeof importScripts === 'function') {
  //   return false;
  // }

  // Check if the environment is a Browser
  if (typeof window === 'object') {
    return true;
  }

  return false;
}

export function darkenHexColor(
  hexColor: string,
  darknessPercentage: number
): string {
  // Convert hex color to RGB
  const red = parseInt(hexColor.substring(1, 3), 16);
  const green = parseInt(hexColor.substring(3, 5), 16);
  const blue = parseInt(hexColor.substring(5, 7), 16);

  // Calculate darkened RGB values
  const darkenedRed = Math.floor(red * (1 - darknessPercentage));
  const darkenedGreen = Math.floor(green * (1 - darknessPercentage));
  const darkenedBlue = Math.floor(blue * (1 - darknessPercentage));

  // Convert darkened RGB values to hex
  const darkenedHexRed = darkenedRed.toString(16).padStart(2, '0');
  const darkenedHexGreen = darkenedGreen.toString(16).padStart(2, '0');
  const darkenedHexBlue = darkenedBlue.toString(16).padStart(2, '0');

  // Combine darkened hex components
  const darkenedHexColor =
    '#' + darkenedHexRed + darkenedHexGreen + darkenedHexBlue;

  return darkenedHexColor;
}
