import React, {ReactNode} from 'react';
import clsx from 'clsx';

import {BreadcrumbMenu, Container, PageTitle} from 'components';
import {SFC} from 'types/generic';
import './DashboardLayout.scss';

export interface DashboardLayoutProps {
  children?: ReactNode;
  menuItems: ReactNode;
  pageName: string;
  sectionName: string;
}

const DashboardLayout: SFC<DashboardLayoutProps> = ({children, className, menuItems, pageName, sectionName}) => {
  return (
    <>
      <PageTitle title={`${sectionName}`} />
      <Container className={clsx('DashboardLayout', className)}>
        <BreadcrumbMenu
          className="DashboardLayout__BreadcrumbMenu"
          menuItems={menuItems}
          pageName={pageName}
          sectionName={sectionName}
        />
        <div className="DashboardLayout__left-menu" data-testid="DashboardLayout__left-menu_test">
          {menuItems}
        </div>
        <div className="DashboardLayout__main-content" data-testid="DashboardLayout__main-content_test">
          {children}
        </div>
      </Container>
    </>
  );
};

export default DashboardLayout;
