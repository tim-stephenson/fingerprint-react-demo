import { useEffect, useState } from "react";

// @ts-ignore
import imprint from "imprintjs/dist/imprint";

export default function ImprintJs() {
  const [result, setResult] = useState<number | undefined>();

  useEffect(() => {
    var browserTests = [
      "audio",
      "availableScreenResolution",
      "canvas",
      "colorDepth",
      "cookies",
      "cpuClass",
      "deviceDpi",
      "doNotTrack",
      "indexedDb",
      "installedFonts",
      "language",
      // "localIp",
      "localStorage",
      "pixelRatio",
      "platform",
      "plugins",
      "processorCores",
      "screenResolution",
      "sessionStorage",
      "timezoneOffset",
      "touchSupport",
      "userAgent",
      "webGl",
    ];

    imprint.test(browserTests).then(function (val : any) {
      setResult(val);
    });
  }, []);

  return <div>{result}</div>;
}
