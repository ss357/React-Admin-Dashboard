import { Link } from "react-router-dom";
import "./Menu.scss";
const Menu = () => {
  return (
    <div className="menu">
      <div className="item">
        <span className="title">MAIN</span>
        <Link to="/"  className="listItem">
          <img src="/home.svg" alt="" />
          <span className="listItemTitle">Home</span>
        </Link>
        <Link to="/" className="listItem">
          <img src="/profile.svg" alt="" />
          <span className="listItemTitle">Profile</span>
        </Link>
      </div>
      <div className="item">
        <span className="title">LISTS</span>
        <Link to="/" className="listItem">
          <img src="/user.svg" alt="" />
          <span className="listItemTitle">Users</span>
        </Link>
        <Link to="/" className="listItem">
          <img src="/product.svg" alt="" />
          <span className="listItemTitle">Products</span>
        </Link>
        <Link to="/" className="listItem">
          <img src="/order.svg" alt="" />
          <span className="listItemTitle">Orders</span>
        </Link>
        <Link to="/" className="listItem">
          <img src="/post2.svg" alt="" />
          <span className="listItemTitle">Posts</span>
        </Link>
      </div> 
      <div className="item">
        <span className="title">GENERAL</span>
        <Link to="/"  className="listItem">
          <img src="/element.svg" alt="" />
          <span className="listItemTitle">Elements</span>
        </Link>
        <Link to="/" className="listItem">
          <img src="/note.svg" alt="" />
          <span className="listItemTitle">Notes</span>
        </Link>
        <Link to="/" className="listItem">
          <img src="/form.svg" alt="" />
          <span className="listItemTitle">Forms</span>
        </Link>
        <Link to="/" className="listItem">
          <img src="/calendar.svg" alt="" />
          <span className="listItemTitle">Calender</span>
        </Link>
      </div>
      <div className="item">
        <span className="title">MAINTANANCE</span>
        <Link to="/"  className="listItem">
          <img src="/setting.svg" alt="" />
          <span className="listItemTitle">Setttings</span>
        </Link>
        <Link to="/" className="listItem">
          <img src="/backup.svg" alt="" />
          <span className="listItemTitle">Backups</span>
        </Link>
      </div>

      <div className="item">
        <span className="title">ANALYTICS</span>
        <Link to="/"  className="listItem">
          <img src="/chart.svg" alt="" />
          <span className="listItemTitle">Charts</span>
        </Link>
        <Link to="/" className="listItem">
          <img src="/backup.svg" alt="" />
          <span className="listItemTitle">Logs</span>
        </Link>
      </div>
      
    </div>
  );
};

export default Menu;
