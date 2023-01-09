import React from 'react';
import styled from 'styled-components';
class Sidebar extends React.Component {
    state = {
        visible: true,
    };

    handleLogoutClick = () => {
        this.setState({ visible: false });
    }

    render() {
        return (
            <SidebarContainer>
                <div className={`sidebar ${this.state.visible ? 'visible' : 'hidden'}`}>
                    <div className="sidebar-menu container">
                        <a href="/dashboard/reservas">Crear reservas</a>
                        <a href="/dashboard/menu">Actualizar Menus</a>
                        <a href="https://www.google.com">Actualizar mis datos</a>
                    </div>
                    <div className="sidebar-logout">
                        <button onClick={this.handleLogoutClick}>Salir</button>
                    </div>
                </div>
            </SidebarContainer>
        );
    }
}

export default Sidebar;

const SidebarContainer = styled.nav`
.sidebar {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  width: 200px;
  background-color: #333;
  color: #fff;
}

.sidebar-menu {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 0;
}

.sidebar-menu a {
  display: block;
  padding: 10px;
  color: #fff;
  text-decoration: none;
}

.sidebar-menu a:hover {
  background-color: #444;
}

.sidebar-logout {
  position: absolute;
  bottom: 20px;
  left: 20px;
}

.sidebar-logout button {
  background-color: transparent;
  border: none;
  color: #fff;
  cursor: pointer;
}

/* Estilos para el dashboard principal */
.dashboard-main {
  margin-left: 200px;
  padding: 20px;
}

.dashboard-main table {
  border-collapse: collapse;
  width: 100%;
}

.dashboard-main td,
.dashboard-main th {
  border: 1px solid #ccc;
  padding: 10px;
}

.dashboard-main th {
  text-align: left;
}

/* Estilos para ocultar el sidebar */
.sidebar.hidden {
  left: -200px;
}
`