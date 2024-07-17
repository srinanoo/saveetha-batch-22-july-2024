import { NavLink } from "react-router-dom";

export default function AboutPage() {
    return (
        <>
            <h1>About Page</h1>

            <NavLink to="/about/ceo">CEO</NavLink>
        </>
    )
}