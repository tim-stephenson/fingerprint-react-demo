import { GetResult, load } from "@fingerprintjs/fingerprintjs";
import { useCallback, useEffect, useState } from "react";

export default function FingerprintJs() {
  const [results, setResults] = useState<GetResult | undefined>();
  const [results2, setResults2] = useState<GetResult | undefined>();

  const f = useCallback(async () => {
    const fp = await load();
    const result = await fp.get();
    setResults2(result);
  }, [setResults2] );

  useEffect( () => {
    load()
      .then((fp) => fp.get())
      .then((result) => {
        setResults(result);
      });
    f();
  }, [f]);

  return (
    <div>
      <div>{JSON.stringify(results)}</div>
      <div>{JSON.stringify(results2)}</div>
    </div>
  );
}




