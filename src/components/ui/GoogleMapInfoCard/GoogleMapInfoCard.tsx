import Image from 'next/image';

export const GoogleMapInfoCard: React.FC = () => {
  return (
    <div>
      <Image
        src="https://median.kiev.ua/im/news/5ea190091c46d-1.jpg"
        alt="dfdf"
        width="100"
        height="100"
      />
      <h3>Моя мітка</h3>
      <p>Додайте тут ваш вміст</p>
    </div>
  );
};
