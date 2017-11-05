import React from "react";
import { Toolbar, Actionbar, Button, ButtonGroup } from "react-photonkit";

class Header extends React.Component {
    render() {
        /*
        Action bar:
            <Actionbar>
            <ButtonGroup>
            <Button glyph="home" />
            <Button glyph="github" />
            </ButtonGroup>
            </Actionbar>
        */
        return (
            <Toolbar title="epp">
            </Toolbar>
        );
    }
}

export default Header;
