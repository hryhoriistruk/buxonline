import { Helmet } from "react-helmet";

const Layout = ({ children, title, description, canonical }) => {
  return (
    <>
      <Helmet>
        {title && <title>{title}</title>}
        {description && <meta name="description" content={description} />}
        {canonical && (
          <link rel="canonical" href={`https://buxonline.org${canonical}`} />
        )}
      </Helmet>
      {children}
    </>
  );
};

export default Layout;
