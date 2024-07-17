import { NavLink } from "react-router-dom";

export default function HeaderComp() {
    return (
        <>
            <p>
                <a href="/">Home</a> | 
                <a href="/about">About</a> | 
                <a href="/about/contact">Contact</a> | 
                <a href="/project">Project</a>
            </p>

            <p>
                <NavLink to="/">Home</NavLink> | 
                <NavLink to="/about">About</NavLink> | 
                <NavLink to="/about/contact">Contact</NavLink> | 
                <NavLink to="/project">Project</NavLink>
            </p>
        </>
    )
}