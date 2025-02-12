import React, {FC, useMemo} from 'react';
import {Redirect, useParams} from 'react-router-dom';

import {DashboardLayout, DocsMenuItems, PageTitle} from 'components';
import {ROUTES} from 'constants/routes';
import {PageData, PageDataObject} from 'types/page-data';

import StyleGuideCss from './StyleGuideCss';
import StyleGuideReact from './StyleGuideReact';

const defaultPageData: PageData = {
  content: <Redirect to={`${ROUTES.styleGuide}/react`} />,
  name: '',
};

const pageData: PageDataObject = {
  css: {
    content: <StyleGuideCss />,
    name: 'CSS / SASS',
  },
  react: {
    content: <StyleGuideReact />,
    name: 'React / JSX',
  },
};

const getPageData = (chapter: string): PageData => {
  return pageData[chapter] || defaultPageData;
};

const StyleGuide: FC = () => {
  const {chapter} = useParams<{chapter: string}>();
  const {content, name} = useMemo(() => getPageData(chapter), [chapter]);

  return (
    <DashboardLayout menuItems={<DocsMenuItems />} pageName={name} sectionName="Style Guide">
      <PageTitle ogDescription={`${name} Style Guide`} title={`${name} Style Guide`} />
      {content}
    </DashboardLayout>
  );
};

export default StyleGuide;
