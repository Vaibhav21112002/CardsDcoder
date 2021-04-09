import React, { Component } from 'react';

class Navbar extends Component {
    render() { 
        return (
            <div className="nav">
                <header className="text-gray-400 bg-gray-900 body-font">
                    <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                        <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
                        <a className="mr-5 hover:text-white">First Link</a>
                        <a className="mr-5 hover:text-white">Second Link</a>
                        <a className="mr-5 hover:text-white">Third Link</a>
                        <a className="mr-5 hover:text-white">Fourth Link</a>
                        </nav>
                    </div>
                </header>

            </div>
        );
    }
}
 
export default Navbar;