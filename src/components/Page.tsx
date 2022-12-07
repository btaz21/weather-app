import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
  bgImage: string;
}

const Page = ({ children, bgImage }: Props): JSX.Element => {
  const bgStyles = {
    backgroundImage: `url(${bgImage})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
  };
  return (
    <div
      className="vh-100 d-flex align-items-center justify-content-between flex-column"
      style={bgStyles}
    >
      {children}
    </div>
  );
};

export default Page;
