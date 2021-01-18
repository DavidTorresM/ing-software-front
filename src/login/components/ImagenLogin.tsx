import { Image } from 'antd';

import logoPolimeet from '../assets/images/logo.png';

const ImagenLogin = () => {
  return (
    <div className="ImagenLogin">
      <Image preview={ false } src={ logoPolimeet } width={ "80%" } />
    </div>
  );
};

export default ImagenLogin;
