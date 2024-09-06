
import { useEffect, useState } from 'react';

import MainLayout from '../layout/MainLayout';
import SidebarContainer from './SidebarContainer';
import { Sidebar } from '../components/sidebar';
import MainContext from "../Context";
import PagesContainer from './PagesContainer';

import { DrawerActionButton } from '../components/drawer';
import SwipeableViews from 'react-swipeable-views';
import { About, Comments, ContaceMe, Home, Movies, Resume } from "../pages";
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { Page } from '../components/pages';


function AppContainer() {
  const [pageNumber, setPageNumber] = useState(0);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [mode, setMode] = useState();
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme : dark)');
  const handlePageNumber = (event, newPage) => {



    setPageNumber(newPage);
  }
  useEffect(() => {
    setMode(prefersDarkMode ? "dark" : "light");
  }, [])

  const theme = useTheme();

  const isSmUp = useMediaQuery(theme.breakpoints.up("md"));

  useEffect(() => {
    if (isSmUp) {
      setDrawerOpen(false)
    }
  }, [isSmUp]);

  const handlePageChange = (index) => {
    setPageNumber(index);
  }

  const handleThemeChange = () => {
    setMode(prevMode => prevMode === "light" ? "dark" : "light");
  }






  return (
    <MainContext.Provider value={{ pageNumber, drawerOpen, handleThemeChange, handlePageNumber, setDrawerOpen }}>
      <MainLayout mode={mode}>
        <SidebarContainer>
          <Sidebar />
        </SidebarContainer>
        <DrawerActionButton />

        <PagesContainer>
          <SwipeableViews

            index={pageNumber}
            onChangeIndex={handlePageChange}
          >
            <Page pageNumber={pageNumber} index={0}>

              <Home helmetTitle={"دنزل واشینگتن | صفحه اصلی"} />
            </Page>
            <Page pageNumber={pageNumber} index={1}>
              <About helmetTitle={"دنزل واشینگتن | درباره من"} />
            </Page>
            <Page pageNumber={pageNumber} index={2}>
              <Resume helmetTitle={"دنزل واشینگتن | رزومه من"} />
            </Page>
            <Page pageNumber={pageNumber} index={3}>
              <Movies helmetTitle={"دنزل واشینگتن | فیلم ها"} />
            </Page>
            <Page pageNumber={pageNumber} index={4}>
              <Comments helmetTitle={"دنزل واشینگتن | نظرات کارشناسان"} />
            </Page>
            <Page pageNumber={pageNumber} index={5}>
              <ContaceMe helmetTitle={"دنزل واشینگتن | ارتباط با من"} />
            </Page>
          </SwipeableViews>

        </PagesContainer>
      </MainLayout>
    </MainContext.Provider>





  );
}

export default AppContainer;
