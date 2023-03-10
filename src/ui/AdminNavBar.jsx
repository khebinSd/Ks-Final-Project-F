import React, { useEffect, useRef, useState } from "react";
import { Menubar } from "primereact/menubar";
import { InputText } from "primereact/inputtext";
import { useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Avatar } from "primereact/avatar";
import { Menu } from "primereact/menu";
import kamaleon from "../assets/user.jpeg";
import { setCurrentUser } from "../store/user/userSlice";


export const AdminNavBar = () => {
  const location = useLocation();
  const [canSearch, setCanSearch] = useState(true);
  const dispatch = useDispatch();
  const menu = useRef(null);

  useEffect(() => {
    if (
      location.pathname === "/search-teams" ||
      location.pathname === "/search-players"
    ) {
      setCanSearch(true);
    } else {
      setCanSearch(false);
    }
  }, [location]);


  const onSearch = (e) => {

  };

  const itemsLog = [
    {
      label: "Cerrar Sesión",
      command: () => {
        dispatch(setCurrentUser(null));
        localStorage.removeItem("cart")
        localStorage.removeItem("currentUser");
      },
    },
  ];

  const items = [
  ];

  const start = (
    <>
      <img
        alt="logo"
        src="https://www.dondominio.com/assets/images/products/domains/shop.png"
        onError={(e) =>
          (e.target.src =
            "https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png")
        }
        height="40"
        width="auto"
        className="mr-2"
      ></img>
    </>
  );
  const end = (
    <div className="something">
      {canSearch ? (
        <InputText
          onChange={onSearch}
          className="search-input"
          placeholder="Buscar"
          type="text"
        />
      ) : (
        <></>
      )}
      <Menu model={itemsLog} popup ref={menu} id="popup_menu" />
      <Avatar
        onClick={(event) => menu.current.toggle(event)}
        image={kamaleon}
        className="user-avatar"
        size="large"
        shape="circle"
      />
    </div>
  );

  return (
    <div>
      <div /* className="card" */>
        <Menubar
          style={{
            backgroundColor: "#14B8A6",
            marginBottom:"50px",
            color: "#AAAAAA",
            fontSize: "15px",
            fontWeight: "bold",
            gap:"50px"

          }}
          model={items}
          start={start}
          end={end}
        />
      </div>
    </div>
  );
};
