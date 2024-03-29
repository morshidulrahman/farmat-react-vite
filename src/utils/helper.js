export const setBackgroundImage = (url, style) => ({
  backgroundImage: `url(${url})`,
  backgroundPosition: "center",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  ...style,
});

export function UID() {
  var dt = new Date().getTime();
  var uuid = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(
    /[xy]/g,
    function (c) {
      var r = (dt + Math.random() * 16) % 16 | 0;
      dt = Math.floor(dt / 16);
      return (c == "x" ? r : (r & 0x3) | 0x8).toString(16);
    }
  );
  return uuid;
}

// Time ago

export const timeAgo = (date) => {
  const seconds = Math.floor((new Date() - new Date(date)) / 1000);
  let interval = Math.floor(seconds / 31536000);
  if (interval > 1) {
    return interval + " Years";
  }
  interval = Math.floor(seconds / 2592000);
  if (interval > 1) {
    return interval + " Months";
  }
  interval = Math.floor(seconds / 86400);
  if (interval > 1) {
    return interval + " Days";
  }
  interval = Math.floor(seconds / 3600);
  if (interval > 1) {
    return interval + " Hours";
  }
  interval = Math.floor(seconds / 60);
  if (interval > 1) {
    return interval + " Minutes";
  }
  return Math.floor(seconds) + " seconds";
};

export const getPage = () => {
  if (typeof window === "undefined") return null;
  const { host } = window.location;
  let isDev = host.includes("localhost");
  let splitHost = host.split(".");

  if ((!isDev && splitHost.length === 3) || (isDev && splitHost.length === 2)) {
    let page = splitHost[0];
    if (page === "www") {
      return null;
    }

    return page;
  }
};

// Get page server
export const getPageServer = (host) => {
  let isDev = host.includes("localhost");
  let splitHost = host.split(".");

  if ((!isDev && splitHost.length === 3) || (isDev && splitHost.length === 2)) {
    let page = splitHost[0];
    if (page === "www") {
      return null;
    }

    return page;
  }
};
