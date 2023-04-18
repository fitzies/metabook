const shortenAddress = (address: string) => {
  return (
    address.substring(0, 4) + "..." + address.substring(address.length - 4)
  );
};

const calcTimeDiff = (datetime: string) => {
  const inputDate = new Date(datetime);
  const currentDate = new Date();
  const timeDiffInMilliseconds = currentDate.getTime() - inputDate.getTime();
  const timeDiffInMinutes = timeDiffInMilliseconds / (1000 * 60); // convert to minutes
  return `${Math.floor(timeDiffInMinutes)}m`;
};

export { shortenAddress, calcTimeDiff };
