import Polar from '../assets/polar.jpg';

const mainAsset = () => {
    let polarImage = document.getElementById('polarAsset');
    let image = document.createElement("img");
    image.alt = 'polar bear';
    image.src = Polar;
    polarImage.appendChild(image);
};

export default mainAsset;