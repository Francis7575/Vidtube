import { categories } from "../utils/constants"
import { SidebarProps } from "../types/types"

const Sidebar = ({ selectedCategory, setSelectedCategory }: SidebarProps) => {

	const handleButtonClick = (name: string) => {
		setSelectedCategory(name);
	};

	return (
		<aside className="mt-[5rem] lg:mt-[5.5rem]">
			<div className="flex items-center md:flex-col md:items-start md:overflow-y-auto 
                md:pb-[2rem] gap-4 overflow-x-auto px-4 md:px-0 md:pl-4 md:pr-7 md:h-full">
				{categories.map((category, index) => (
					<button onClick={() => handleButtonClick(category.name)}
						className={`flex flex-col items-center md:flex-row md:justify-start w-full px-4 py-2 md:px-6 md:py-3 md:gap-2 rounded-[.4rem]
                        ${category.name === selectedCategory ? 'bg-red' : 'bg-transparent'}`}
						key={index}
					>
						<span>
							<category.icon style={{ color: category.name === selectedCategory ? 'white' : 'black' }} />
						</span>
						<span className={`${category.name === selectedCategory ? 'text-white' : 'text-black'}`}>
							{category.name}
						</span>
					</button>
				))}
			</div>
		</aside>
	)
}

export default Sidebar