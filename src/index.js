import _ from 'lodash';
import './css/style.css';
import Pic from 'file-loader?name=img/[name].[ext]!./img/pic.jpg';

function component() {
  var element = document.createElement('div');
  var yunliang = new Image();
  yunliang.src = Pic;
  // Lodash, currently included via a script, is required for this line to work
  element.innerHTML = _.join(['Hello', '臧之雅'], ' ');
  element.classList.add('hello');
  element.appendChild(yunliang);

  return element;
}

document.body.appendChild(component());