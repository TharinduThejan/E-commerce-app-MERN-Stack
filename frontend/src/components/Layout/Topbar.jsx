import { TbBrandMeta } from "react-icons/tb";
const Topbar = () => {
  return (
    <div className="bg-primary text-white">
      <div className="container flex items-center justify-between px-4 py-2 mx-auto">
        <div className="items-center hidden space-x-4 md:flex ">
          <a href="#" className="hover:text-gray-300">
            <TbBrandMeta className="w-5 h-5" />
          </a>
          <a href="#" className="hover:text-gray-300">
            <TbBrandMeta className="w-5 h-5" />
          </a>
          <a href="#" className="hover:text-gray-300">
            <TbBrandMeta className="w-5 h-5" />
          </a>
        </div>
        <div className="flex-grow text-sm text-center">
          <span> We ship worldwide - Fast and reliable shipping </span>
        </div>
        <div className="hidden text-sm md:block">
          <a href="tel:+941234567" className="hover:text-gray-300">
            077 1234567
          </a>
        </div>
      </div>
    </div>
  );
};
export default Topbar;
