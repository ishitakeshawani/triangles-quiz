import React from 'react';
import { ReactComponent as Poster } from './../poster.svg';

const PageSection = () => {
    return (
        <div className="page">
            <div className="page-col">
            <h2>Welcome to Fun with <span>Triangles</span></h2>
            <p>
                Here you can find angles of triangle,Area of triangle. <br></br>
                Hypotenuse of Traingle and quiz for triangles <br></br>
                Are you excited for it?Share it with others..
            </p>
            </div>
            <Poster className="top-right-i" height="60%" width="60%" />
           
            
        </div>
    );
}



export default PageSection;