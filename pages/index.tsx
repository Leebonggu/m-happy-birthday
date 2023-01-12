import { useState } from 'react';
import Button from '../components/Button';
import Cake from '../components/Cake';
import Card from '../components/Card';
import Go from '../components/Go';

export default function Home() {
  const [gift, setGift] = useState(false);
  const handleGift = () => {
    setGift(true);
  };
  return <Go />;
}
