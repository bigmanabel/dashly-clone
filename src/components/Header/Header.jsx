import VerticalSeparator from "../UI/VerticalSeparator";
import AppsAndServicesDropdown from "./AppsAndServicesDropdown";
import LanguagesDropdown from "./LanguagesDropdown";
import Search from "./Search";
import ThemeDropdown from "./ThemeDropdown";
import UserDropdown from "./UserDropdown";
import NotificationsButton from "./NotificationsButton";
import SettingsButton from "./SettingsButton";

const Header = () => {
  return (
    <header className="py-[30px] px-[45px] flex items-center justify-between mb-[15px] w-full bg-[#F8FAFB]">
      <Search />
      <div className="flex items-center space-x-4">
        <ThemeDropdown />
        <VerticalSeparator />
        <LanguagesDropdown />
        <VerticalSeparator />
        <NotificationsButton />
        <AppsAndServicesDropdown />
        <SettingsButton />
        <VerticalSeparator />
        <UserDropdown />
      </div>
    </header>
  );
};

export default Header;
