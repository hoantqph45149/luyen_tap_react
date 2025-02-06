import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  Transition,
} from "@headlessui/react";
import { Fragment } from "react";

const ProfileDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Menu
      as="div"
      className="relative"
      onClick={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <MenuButton className="flex items-center space-x-2 focus:outline-none">
        <img className="w-10 h-10 rounded-full" src="" alt="User Avatar" />
        <div className="hidden xl:block text-left">
          <p className="text-sm font-medium text-gray-900">Admin</p>
          <p className="text-xs text-gray-500">Founder</p>
        </div>
      </MenuButton>

      <Transition
        show={isOpen} // Mở menu khi hover
        enter="transition ease-out duration-100"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <div>
          <MenuItems className="absolute left-0 mt-2 w-56 bg-white shadow-lg rounded-lg border border-gray-200">
            <div className="p-2">
              <p className="text-sm text-gray-600 px-3">Welcome Admin</p>
              <hr className="my-2 border-gray-200" />
              <MenuItem>
                {({ active }) => (
                  <Link
                    to="/profile"
                    className={`block px-4 py-2 text-sm ${
                      active ? "bg-gray-100 text-gray-900" : "text-gray-700"
                    }`}
                  >
                    Profile
                  </Link>
                )}
              </MenuItem>
              <MenuItem>
                {({ active }) => (
                  <Link
                    to="/apps-chat"
                    className={`block px-4 py-2 text-sm ${
                      active ? "bg-gray-100 text-gray-900" : "text-gray-700"
                    }`}
                  >
                    Messages
                  </Link>
                )}
              </MenuItem>
              <MenuItem>
                {({ active }) => (
                  <Link
                    to="/pages-faqs"
                    className={`block px-4 py-2 text-sm ${
                      active ? "bg-gray-100 text-gray-900" : "text-gray-700"
                    }`}
                  >
                    Help
                  </Link>
                )}
              </MenuItem>
              <hr className="my-2 border-gray-200" />
              <MenuItem>
                {({ active }) => (
                  <Link
                    to="/pages-profile"
                    className={`block px-4 py-2 text-sm ${
                      active ? "bg-gray-100 text-gray-900" : "text-gray-700"
                    }`}
                  >
                    Balance: <b>$5971.67</b>
                  </Link>
                )}
              </MenuItem>
            </div>
          </MenuItems>
        </div>
      </Transition>
    </Menu>
  );
};

export default ProfileDropdown;
