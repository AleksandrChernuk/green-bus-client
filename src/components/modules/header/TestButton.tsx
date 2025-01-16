'use client'



import { Button } from '@/components/ui/button';
 import React, { useState } from 'react'
import { useTranslation } from 'react-i18next';

export default function TestButton() {
  const [count, setCount] = useState(0)
    const { t } = useTranslation();


  const handleClick = () => {
    setCount(p=>(p+1))
  }

  return <Button onClick={handleClick} variant={"default"} size={'lg'}>{`${t("button")}${count}`}</Button>;
}
