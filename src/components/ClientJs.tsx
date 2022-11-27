import { useEffect, useState } from "react";
import { ClientJS } from "clientjs";

export default function ClientJs() {
  const [result, setResult] = useState<number | undefined>();

  useEffect( () => {
    const client = new ClientJS();
    setResult(client.getFingerprint())
  }, []);

  return <div>{result}</div>;
}




