//Components Imports
import { iconGithub } from "../icons";
import SearchBar from "./components/SearchBar";

const icons = {
	github: iconGithub
}

const ContainerSearch = () => {
  return <section className="bg-gray-900 h-screen sm:flex items-center justify-center">
		<icons.github className="w-1/12 min-w-[96px] text-white mx-auto pt-24 sm:mx-4 sm:p-0"/>
		<SearchBar/>
	</section>;
};

export default ContainerSearch;
