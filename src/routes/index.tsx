import { Outlet } from "solid-app-router";

export default function IndexLayout() {
  return (
    <>
      <header>
        <a href="/">Home</a>
        <a href="/about">About</a>
      </header>
      <Outlet />
    </>
  );
}
