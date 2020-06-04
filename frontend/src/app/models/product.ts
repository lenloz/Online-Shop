export class Product {
  _id: String;
  name: String;
  description: String;
  price: number;
  imageUrl: String;

  constructor(_id: String, name: String, description: String = '', price: number = 0, imageUrl: String = 'https://ih1.redbubble.net/image.449121551.2876/st,small,507x507-pad,600x600,f8f8f8.u3.jpg') {
    this._id = _id;
    this.name = name;
    this.description = description;
    this.price = price;
    this.imageUrl = imageUrl;
  }
}
