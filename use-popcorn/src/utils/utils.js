export function debounce(func, delay) {
  let functionCalled;
  return function (...args) {
    if (functionCalled) {
      clearTimeout(functionCalled);
    }
    functionCalled = setTimeout(() => {
      func(...args);
    }, delay);
  };
}
