import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Search } from "lucide-react";

const navLinks = [
	{ path: "/", label: "Home" },
	{ path: "/about", label: "About" },
	{ path: "/products", label: "Products" },
	{ path: "/contact", label: "Contact" },
	{ path: "/login", label: "Login" },
	{ path: "/register", label: "Register" }
];

const Nav = () => {
	const [search, setSearch] = useState("");

	const filteredLinks = navLinks.filter(link =>
		link.label.toLowerCase().includes(search.toLowerCase())
	);

	return (
		<nav className="bg-green-600 text-white px-4 py-3 flex flex-col md:flex-row md:justify-between md:items-center gap-2 md:gap-0">
			<div className="flex items-center gap-2">
				<img
					src="https://images.theconversation.com/files/256057/original/file-20190129-108364-17hlc1x.jpg?ixlib=rb-4.1.0&q=45&auto=format&w=926&fit=clip"
					alt="Medicine Icon"
					className="h-10 w-10 rounded"
				/>
				<span className="font-bold text-xl">Medicine Project</span>
			</div>
			<div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-6 mt-2 md:mt-0">
				<div className="relative">
					<input
						type="text"
						placeholder="Search menu..."
						value={search}
						onChange={e => setSearch(e.target.value)}
						className="pl-10 pr-4 py-2 rounded-full text-black border border-green-300 shadow focus:outline-none focus:ring-2 focus:ring-green-400 transition-all duration-200 w-48 md:w-56"
					/>
					<Search className="absolute left-3 top-2.5 text-green-600 w-5 h-5" />
				</div>
				<ul className="flex gap-4 items-center">
					{filteredLinks.map(link => (
						<li key={link.path}>
							<Link
								to={link.path}
								className="hover:underline px-3 py-1 rounded transition-colors duration-150 hover:bg-green-700"
							>
								{link.label}
							</Link>
						</li>
					))}
				</ul>
			</div>
		</nav>
	);
};

export default Nav;
