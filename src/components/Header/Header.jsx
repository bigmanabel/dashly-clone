import AppsAndServicesDropdown from "./AppsAndServicesDropdown";
import LanguagesDropdown from "./LanguagesDropdown";
import Search from "./Search";
import ThemeDropdown from "./ThemeDropdown";
import UserDropdown from "./UserDropdown";
import NotificationsButton from "./NotificationsButton";
import SettingsButton from "./SettingsButton";
import VerticalSeparator from '../UI/VerticalSeparator';

const Header = () => {
  return (
    <header className="py-[30px] px-[45px] sm:px-[15px] sm:py-[30px] flex items-center mb-[15px] w-full bg-[#F8FAFB] sm:justify-end">
      <div className="w-1/2 sm:hidden">
        <Search />
      </div>
      <div className="flex items-center w-1/2 justify-end">
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
