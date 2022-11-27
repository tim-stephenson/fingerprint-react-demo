import { Link } from "react-router-dom";

export default function HomePage(){

    return (
      <>
        <div>
          <Link to="fingerprintjs"> fingerprintjs </Link>{" "}
        </div>
        <div>
          <Link to="clientjs"> clientjs </Link>{" "}
        </div>
        <div>
          <Link to="imprintjs"> imprintjs </Link>{" "}
        </div>
      </>
    );
}