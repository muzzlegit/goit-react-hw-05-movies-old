import {  NavLink, Outlet } from "react-router-dom";
import { NavigationList, NavigationItem, NavigationText } from './Navigation.styled';

export default function Navigation() {
    return (
        <>
            <nav>
                <NavigationList>
                    <NavigationItem>
                        <NavLink 
                            to="/"
                            style={({ isActive }) => ({
                                boxShadow:  isActive ? 'rgba(233, 83, 218, 1) 0px 1px 8px' : 'none',
                            })}
                        >
                            <NavigationText>Home</NavigationText>
                        </NavLink>  
                    </NavigationItem>
                    <NavigationItem>
                        <NavLink 
                        to="/movies"
                            style={({ isActive }) => ({
                                boxShadow:  isActive ? 'rgba(233, 83, 218, 1) 0px 1px 8px' : 'none',
                             })}
                        >
                            <NavigationText>Movies</NavigationText>
                        </NavLink>                       
                    </NavigationItem>
                </NavigationList>
            </nav>
            <Outlet/>
        </>

    )
}