import { useState } from "react";
import { useAccessAdmin } from "../../hooks/useAccessAdmin";
import AdminNavbar from "../../components/AdminNavbar";
import AdminGames from "../../components/AdminGames";
import AdminUsers from "../../components/AdminUsers";
import AdminSales from "../../components/AdminSales";

export default function Dashboard() {
  const [active, setActive] = useState({
    games: true,
    users: false,
    sales: false
  });
  function activeGames() {
    setActive({
      ...active,
      games: true,
      users: false,
      sales: false
    });
  }
  function activeUsers() {
    setActive({
      ...active,
      games: false,
      users: true,
      sales: false
    });
  }
  function activeSales() {
    setActive({
      ...active,
      games: false,
      users: false,
      sales: true
    });
  }
  useAccessAdmin();
  return (
    <>
      <AdminNavbar active={active} onGames={activeGames} onUsers={activeUsers} onSales={activeSales} />
      {
        active.games ? <AdminGames /> : null
      }
      {
        active.users ? <AdminUsers /> : null
      }
      {
        active.sales ? <AdminSales /> : null
      }
    </>
  );
}