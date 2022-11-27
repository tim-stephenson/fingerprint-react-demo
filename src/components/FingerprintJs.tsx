import { GetResult, load } from "@fingerprintjs/fingerprintjs";
import { useCallback, useEffect, useState } from "react";

export default function FingerprintJs() {
  const [results, setResults] = useState<GetResult | undefined>();

  const assignResults = useCallback(async () => {
    const fp = await load();
    const result = await fp.get();
    setResults(result);
  }, [setResults]);

  useEffect(() => {
    assignResults();
  }, [assignResults]);

  return (
      <pre>{JSON.stringify(results, undefined, 4)}</pre>
  );
}
