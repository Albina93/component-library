import "./App.css";
import { AlertBox } from "./components/AlertBox/AlertBox";
import { UserProfileCard } from "./components/UserProfileCard/UserProfileCard";
import { ProductDisplay } from "./components/ProductDiplay/ProductDisplay";
import { useState } from "react";
const user = {
  id: "1",
  name: "John Doe",
  email: "john.doe@example.com",
  role: "Software Engineer",
  avatarUrl: "http://bit.ly/4vN82zv",
};
const product = {
  id: "1",
  name: "Wireless Headphones",
  price: 199.99,
  description: "High-quality wireless headphones with noise cancellation.",
  imageUrl: "https://bit.ly/4cKCzVF",
  inStock: true,
};

function App() {
  const [showAlert, setShowAlert] = useState(false);
  return (
    <div className="p-4">
      <h1 className="title">My Component Library</h1>
      {showAlert && (
        <AlertBox
          type="success"
          message="Product added to cart...!"
          onClose={() => setShowAlert(false)}
        />
      )}

      <AlertBox type="info" message="Welcome to the component library" />
      <AlertBox type="warning" message="This is warning alert!" />
      <AlertBox type="error" message="Something went wrong!" />
      <div>
        <UserProfileCard
          user={user}
          showEmail={true}
          showRole={true}
          onEdit={(userId) => alert(`Editing user ${userId}`)}
        >
          <div className="text-sm text-gray-500">Last login: 2 hours ago</div>
        </UserProfileCard>
      </div>
      <div>
        <ProductDisplay
          product={product}
          showDescription={true}
          showStockStatus={true}
          onAddToCart={() => setShowAlert(true)}
        >
          <div className="text-sm text-gray-500">Free shipping available</div>
        </ProductDisplay>
      </div>
    </div>
  );
}

export default App;
