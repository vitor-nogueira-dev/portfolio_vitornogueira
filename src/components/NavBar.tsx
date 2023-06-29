import { Disclosure } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

import Image from 'next/image';

const navigation = [
    { name: 'Inicio', href: '#inicio', current: true },
    { name: 'Sobre', href: '#sobre', current: false },
    { name: 'Projetos', href: '#projetos', current: false },
    { name: 'Skills', href: '#skills', current: false },
    { name: 'Contato', href: '#contato', current: false },
];

function classNames(...classes: string[]): string {
    return classes.filter(Boolean).join(' ');
}

const Navbar: React.FC = () => (
    <Disclosure as="nav" className="bg-gray-800 fixed w-full z-50 md:items-center">
        {({ open }) => (
            <>
                <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                    <div className="relative flex h-16 items-center justify-between">
                        <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                            {/* Mobile menu button */}
                            <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                                <span className="sr-only">Open main menu</span>
                                {open ? (
                                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                                ) : (
                                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                                )}
                            </Disclosure.Button>
                        </div>
                        <div className="flex flex-1 sm:items-stretch sm:justify-between justify-center lg:justify-between md:justify-between lg:items-center md:items-center">
                            <div className="flex flex-shrink-0 items-center">
                                <Image
                                    className="block h-16 w-auto lg:hidden"
                                    src="/vn1.png"
                                    alt="Your Company"
                                    width={200}
                                    height={200}
                                />
                                <Image
                                    className="hidden h-16 w-auto lg:block"
                                    src="/vn1.png"
                                    alt="Your Company"
                                    width={200}
                                    height={200}
                                />
                            </div>
                            <div className="hidden sm:ml-6 sm:flex sm:items-center">
                                <div className="flex space-x-4">
                                    {navigation.map((item) => (
                                        <a
                                            key={item.name}
                                            href={item.href}
                                            className={classNames(
                                                item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                                                'rounded-md px-3 py-2 text-sm font-medium',
                                            )}
                                            aria-current={item.current ? 'page' : undefined}
                                        >
                                            {item.name}
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <Disclosure.Panel className="sm:hidden">
                    <div className="space-y-1 px-2 pb-3 pt-2">
                        {navigation.map((item) => (
                            <Disclosure.Button
                                key={item.name}
                                as="a"
                                href={item.href}
                                className={classNames(
                                    item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                                    'block rounded-md px-3 py-2 text-base font-medium',
                                )}
                                aria-current={item.current ? 'page' : undefined}
                            >
                                {item.name}
                            </Disclosure.Button>
                        ))}
                    </div>
                </Disclosure.Panel>
            </>
        )}
    </Disclosure>
);

export default Navbar;
