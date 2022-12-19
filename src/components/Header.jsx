import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div>
      <Link to="/">
        <h2>Home</h2>
      </Link>
      <Link to="/today">
        <h2>Today</h2>
      </Link>
      <Link to="/week">
        <h2>Week</h2>
      </Link>
    </div>
  );
}
