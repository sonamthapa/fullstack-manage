import { ChangeEvent, FormEvent, useState } from 'react';
import { v4 } from 'uuid';
import Header from '../(component)/Header';

type CreateProductModalProps = {
  isOpen: boolean;
  onClose: () => void;
  onCreate: (formData: ProductFormData) => void;
};

type ProductFormData = {
  name: string;
  price: number;
  stockQuantity: number;
  rating: number;
};

const CreateProductModal = ({
  isOpen,
  onClose,
  onCreate,
}: CreateProductModalProps) => {
  const [formData, setFormData] = useState({
    productId: v4(),
    name: '',
    price: 0,
    stockQuantity: 0,
    rating: 0,
  });

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onCreate(formData);
    onClose();
  };

  if (!isOpen) return null;

  const labelCssStyle = 'block text-sm font-semibold text-gray-700';
  const inputCssStyle =
    'block w-full mb-2 p-2 border-gray-500 border-2 rounded-md';

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]:
        name === 'price' || name === 'stockQuantity' || name === 'rating'
          ? parseFloat(value)
          : value,
    });
  };
  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full z-20">
      <div className="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white ">
        <Header name="Create New Product" />
        <form onSubmit={handleSubmit} className="mt-5">
          <label htmlFor="productName" className={labelCssStyle}>
            Product Name
          </label>
          <input
            type="text"
            name="name"
            placeholder="Name"
            onChange={handleChange}
            value={formData.name}
            className={inputCssStyle}
            required
          />
          <label htmlFor="productPrice" className={labelCssStyle}>
            Price
          </label>
          <input
            type="number"
            name="price"
            placeholder="Price"
            onChange={handleChange}
            value={formData.price}
            className={inputCssStyle}
            required
          />
          <label htmlFor="stockQuantity" className={labelCssStyle}>
            Stock Quantity
          </label>
          <input
            type="number"
            name="stockQuantity"
            placeholder="StockQuantity"
            onChange={handleChange}
            value={formData.stockQuantity}
            className={inputCssStyle}
            required
          />
          <label htmlFor="rating" className={labelCssStyle}>
            Rating
          </label>
          <input
            type="number"
            name="rating"
            placeholder="Rating"
            onChange={handleChange}
            value={formData.rating}
            className={inputCssStyle}
            required
          />
          <button
            type="submit"
            className=" mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg:blue-700"
          >
            Create
          </button>
          <button
            onClick={onClose}
            type="button"
            className="ml-2 px-4 py-2 bg-gray-500 text-white rounded hover:bg:gray-700"
          >
            Cancel
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateProductModal;
