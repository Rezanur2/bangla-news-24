import React from 'react';

const Footer = () => {
    return (
        <footer>
            <div className="border-t border-neutral-200 bg-white mt-12">
                <div className='mx-auto max-w-5xl px-4 py-6 text-sm text-neutral-500 flex flex-col sm:flex-row justify-between gap-2'>
                    <span>© 2026 BanglaBulletin</span>
                    <span>Source: BBC Bangla</span>
                </div>
            </div>
        </footer>
    );
};

export default Footer;