import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";

const ProfileDropdownClient = () => {
  const [isProfileDropdown, setIsProfileDropdown] = useState(false);
  const toggleProfileDropdown = () => {
    setIsProfileDropdown(!isProfileDropdown);
  };

  return (
    <Dropdown
      isOpen={false}
      toggle={toggleProfileDropdown}
      className="relative w-64"
    >
      <DropdownToggle
        tag="button"
        type="button"
        className="flex items-center w-full text-left px-4 py-2 focus:outline-none"
      >
        <img
          className="w-10 h-10 rounded-full"
          src="https://picsum.photos/200/200"
          alt="Header Avatar"
        />
        <div className="ml-3">
          <span className="block text-sm font-medium">Welcome Admin</span>
        </div>
      </DropdownToggle>
      <DropdownMenu className="w-full bg-white border rounded-lg shadow-lg z-50">
        <DropdownItem
          tag={Link}
          to="/profile"
          className="px-4 py-2 text-sm hover:bg-gray-100 flex items-center"
        >
          <i className="mdi mdi-account-circle text-gray-500 mr-2"></i> Profile
        </DropdownItem>
        <DropdownItem
          tag={Link}
          to="/apps-chat"
          className="px-4 py-2 text-sm hover:bg-gray-100 flex items-center"
        >
          <i className="mdi mdi-message-text-outline text-gray-500 mr-2"></i>{" "}
          Messages
        </DropdownItem>
        <DropdownItem
          tag={Link}
          to="#"
          className="px-4 py-2 text-sm hover:bg-gray-100 flex items-center"
        >
          <i className="mdi mdi-calendar-check-outline text-gray-500 mr-2"></i>{" "}
          Taskboard
        </DropdownItem>
        <DropdownItem
          tag={Link}
          to="/pages-faqs"
          className="px-4 py-2 text-sm hover:bg-gray-100 flex items-center"
        >
          <i className="mdi mdi-lifebuoy text-gray-500 mr-2"></i> Help
        </DropdownItem>
        <div className="border-t my-2"></div>
        <DropdownItem
          tag={Link}
          to="/pages-profile"
          className="px-4 py-2 text-sm hover:bg-gray-100 flex items-center"
        >
          <i className="mdi mdi-wallet text-gray-500 mr-2"></i> Balance:{" "}
          <b className="ml-auto">$5971.67</b>
        </DropdownItem>
        <DropdownItem
          tag={Link}
          to="/pages-profile-settings"
          className="px-4 py-2 text-sm hover:bg-gray-100 flex items-center"
        >
          <i className="mdi mdi-cog-outline text-gray-500 mr-2"></i> Settings
          <span className="ml-auto text-xs bg-green-100 text-green-700 px-2 py-1 rounded">
            New
          </span>
        </DropdownItem>
        <DropdownItem
          tag={Link}
          to="/auth-lockscreen-basic"
          className="px-4 py-2 text-sm hover:bg-gray-100 flex items-center"
        >
          <i className="mdi mdi-lock text-gray-500 mr-2"></i> Lock screen
        </DropdownItem>
        <DropdownItem
          tag={Link}
          to="/logout"
          className="px-4 py-2 text-sm hover:bg-gray-100 flex items-center"
        >
          <i className="mdi mdi-logout text-gray-500 mr-2"></i> Logout
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
};

export default ProfileDropdownClient;
