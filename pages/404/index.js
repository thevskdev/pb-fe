import React from 'react';
import dynamic from 'next/dynamic';

const ErrorPageView = dynamic(
    () => import('@views/404ErrorPageView/404ErrorPageView'),
    { ssr: false },
);

const ErrorPage = ({
    appProps = {},
    cookies = null,
    route = '',
}) => (
    <>
      <ErrorPageView />
    </>
);

export default ErrorPage;
