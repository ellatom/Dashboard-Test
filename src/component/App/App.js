import React from "react";
import "./app.css";
import Sidebar from "../Sidebar/Sidebar";
import Content from "../Content/Content";
import Topbar from "../Topbar/Topbar";
import {  ThemeProvider } from 'theme-provider';
import { createMuiTheme } from '@material-ui/core/styles';

export default function App() {
  const theme = createMuiTheme({
    palette: {
        type: 'dark',
      },
  });
  return (
    <ThemeProvider theme={theme}>
    <div className="App">
      <Sidebar />
      <div className= 'topbar_content_container'>
        <Topbar/>
        <Content />
      </div>
    </div>

    </ThemeProvider>
  );
}
