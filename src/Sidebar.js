import React from "react";
import "./Sidebar.css";
import { Chat, DonutLarge, MoreVert, SearchOutlined } from "@material-ui/icons";
import { Avatar, IconButton } from "@material-ui/core";
import SidebarChat from "./SidebarChat";
function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar_header">
        <Avatar src="https://lh3.googleusercontent.com/AHkNnZu4yKszAR6zIH6xgFJwXPKoBvxjk5xmHrJJ0CHCyFGNg6pKzj-Rz9SlvYI7V6W5ILufr86BSmpDEm8WxGx3inNHWEZ9NHwyxdW2btxungwKC5ZrjOCrlswubbY2bLShnZttgg=w1236-h825-no" />
        <div className="sidebar_headerRight">
          <IconButton>
            <DonutLarge />
          </IconButton>

          <IconButton>
            <Chat />
          </IconButton>

          <IconButton>
            <MoreVert />
          </IconButton>
        </div>
      </div>
      <div className="sidebar_search">
        <div className="sidebar_searchContainer">
          <SearchOutlined />
          <input placeholder="Search or start new Chat" type="text" />
        </div>
      </div>
      <div className="sidebar_chats">
        <SidebarChat />
        <SidebarChat />
      </div>
    </div>
  );
}

export default Sidebar;
