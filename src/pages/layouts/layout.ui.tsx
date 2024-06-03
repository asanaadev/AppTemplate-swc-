import { NavLink, Outlet } from 'react-router-dom';
import { pathKeys } from '~shared/lib/react-router';

export function GuestLayout() {
  return (
    <>
      <GuestNavigation />
      <Outlet />
      <Footer />
    </>
  );
}

export function NakedLayout() {
  return <Outlet />;
}

function GuestNavigation() {
  return (
    <nav className="">
      <div className="">
        <NavLink className="" to={pathKeys.home()}>
          Home
        </NavLink>

        <ul className="">
          <li className="">
            <NavLink className="" to={pathKeys.home()}>
              Home
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

function Footer() {
  return (
    <footer className="absolute mt-3 py-1 bottom-0 w-full">
      <h1>Footer</h1>
    </footer>
  );
}
