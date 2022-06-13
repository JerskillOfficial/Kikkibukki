function throttle(callback: Function, interval: number) {

  let enableCall = true;

  return (...args: any) =>  {
    if (!enableCall) return;

    enableCall = false;
    callback.apply(this, args);

    setTimeout(() => (enableCall = true), interval);
  };

}

export { throttle };
