// Import the necessary modules and hooks
import { useRouter } from 'next/navigation';
import { useSelector } from 'react-redux';
import { RootState } from 'redux/store';

const Auth = ({ children }) => {
  const { token } = useSelector((state: RootState) => state.admin);
  const router = useRouter();

  if (!token) {
    router.push('/login');
  } else {
    return children;
  }
};

export default Auth;
