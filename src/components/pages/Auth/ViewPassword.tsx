'use client';

import { Eye, EyeOff } from 'lucide-react';

interface ViewPasswordProps {
  isViewPassword: boolean;
  setIsViewPassword: () => void;
}

const ViewPassword = ({ isViewPassword, setIsViewPassword }: ViewPasswordProps) => {
  return (
    <div className='absolute cursor-pointer right-4 top-3' onClick={setIsViewPassword}>
      {isViewPassword ? <Eye /> : <EyeOff />}
    </div>
  );
};

export default ViewPassword;
