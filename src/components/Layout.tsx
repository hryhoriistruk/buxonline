import { Helmet } from "react-helmet";

interface LayoutProps {
  children: React.ReactNode;
  title?: string;
  description?: string;
  canonical?: string;
}

const Layout: React.FC<LayoutProps> = ({ children, title, description, canonical }) => {
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
