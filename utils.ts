
export function Throttle(func: Function, delay: number)
{
  let prev = 0;
  return (...args: any) => {
    let now = new Date().getTime();
    if (now - prev > delay) {
      prev = now;
      return func(...args);
    }
  }
}

export function Debounce(func: Function, delay: number)
{
  let timer: NodeJS.Timeout;
  return (...args: any) => {
    clearTimeout(timer);
    timer = setTimeout(() => { func.apply(this, args); }, delay);
  };
}

