'use client';
import Image from 'next/image';
import React, { useState } from 'react';
import MaxWidthContainer from '../ui/container';
import Link from 'next/link';

const NavComp: React.FC = () => {
	const [isMenuOpen, setMenuOpen] = useState(false);

	const toggleMenu = () => {
		setMenuOpen(!isMenuOpen);
	};

	const closeMenu = () => {
		setMenuOpen(false);
	};

	return (
		<nav className='bg-primary w-full fixed z-50'>
			<MaxWidthContainer className='py-0 flex justify-between items-center'>
				<div className='py-6'>
					<Image
						src='/fi-white.webp'
						alt='Logo'
						className='h-8'
						width={100}
						height={100}
					/>
				</div>
				<div className='hidden md:flex space-x-4 gap-3'>
					<Link
						href='/#'
						className='text-secondary py-6'
					>{`Home`}</Link>
					<Link
						href='/#'
						className='text-secondary py-6'
					>{`About Us`}</Link>
					<div className='group pt-6'>
						<Link
							href='/#'
							className='text-secondary py-6'
						>{`Product And Services`}</Link>
						<div className='hidden absolute group-hover:block bg-primary pt-8 p-2 space-y-4'>
							<h2 className='text-secondary font-bold'>{`ISCE Card For Student`}</h2>
							<Link
								href='/#'
								className='text-secondary text-sm'
							>{`Connect for Student`}</Link>
							<h2 className='text-secondary font-bold '>{`Connect for Business`}</h2>
							<div className='flex flex-col gap-2'>
								<Link
									href='/#'
									className='text-secondary text-sm'
								>{`Digital Card for Business`}</Link>
								<Link
									href='/#'
									className='text-secondary text-sm'
								>{`Connect your Business`}</Link>
							</div>
						</div>
					</div>
					<Link
						href='/#'
						className='text-secondary py-6'
					>{`Store`}</Link>
					<Link
						href='/#'
						className='text-secondary py-6'
					>{`Academy`}</Link>
					<Link
						href='/#'
						className='text-secondary py-6'
					>{`Contact Us`}</Link>
					<Link
						href='/#'
						className='text-secondary py-6'
					>{`Team`}</Link>
					<Link
						href='/#'
						className='text-secondary py-6'
					>{`Blog`}</Link>
				</div>
				<div className='md:hidden'>
					<button
						onClick={toggleMenu}
						className='text-secondary py-6'
					>
						☰
					</button>
					{isMenuOpen && (
						<div className=' fixed  top-0 left-0 w-screen h-screen flex flex-col justify-center items-center bg-primary p-4 space-y-4'>
							<Image
								src='/assts/close.svg'
								width={20}
								height={20}
								alt='close'
								className='absolute top-4 right-4 w-[28px] h-[28px]  object-contain cursor-pointer'
								onClick={toggleMenu}
							/>
							<div>
								<ul className='list-none  flex flex-col mt-6 gap-6 items-center'>
									<li>
										<Link
											href='/#'
											className='text-secondary'
											onClick={closeMenu}
										>{`Home`}</Link>
									</li>
									<li>
										{' '}
										<Link
											href='/#'
											className='text-secondary'
											onClick={closeMenu}
										>{`About Us`}</Link>
									</li>
									<li>
										{' '}
										<Link
											href='/#'
											className='text-secondary'
											onClick={closeMenu}
										>{`Products And Services`}</Link>
									</li>
									<li>
										{' '}
										<Link
											href='/#'
											className='text-secondary'
											onClick={closeMenu}
										>{`Store`}</Link>
									</li>
									<li>
										{' '}
										<Link
											href='/#'
											className='text-secondary'
											onClick={closeMenu}
										>{`Academy`}</Link>
									</li>
									<li>
										{' '}
										<Link
											href='/#'
											className='text-secondary'
											onClick={closeMenu}
										>{`Contact Us`}</Link>
									</li>
									<li>
										{' '}
										<Link
											href='/#'
											className='text-secondary'
											onClick={closeMenu}
										>{`Team`}</Link>
									</li>
									<li>
										<Link
											href='/#'
											className='text-secondary'
											onClick={closeMenu}
										>{`Blog`}</Link>
									</li>
								</ul>
							</div>
						</div>
					)}
				</div>
			</MaxWidthContainer>
		</nav>
	);
};

export default NavComp;
