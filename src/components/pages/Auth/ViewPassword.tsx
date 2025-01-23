'use client';

import { Eye, EyeOff } from 'lucide-react';

interface ViewPasswordProps {
  isViewPassword: boolean;
  setIsViewPassword: () => void;
}

const ViewPassword = ({ isViewPassword, setIsViewPassword }: ViewPasswordProps) => {
  return (
    <div
      className='absolute inset-y-0 flex items-center cursor-pointer right-4'
      onClick={setIsViewPassword}
    >
      {isViewPassword ? <Eye size={24} /> : <EyeOff size={24} />}
    </div>
  );
};

export default ViewPassword;
