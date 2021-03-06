var browser = browser || chrome || msBrowser;
browser.runtime.onInstalled.addListener(async ({ reason, temporary, }) => {
    if (temporary) return; // skip during development
    switch (reason) {
      case "install": {
        const url = browser.runtime.getURL("popup/installed.html");
        await browser.tabs.create({ url, });
        // or: await browser.windows.create({ url, type: "popup", height: 600, width: 600, });
      } break;
      // see below
    }
  });