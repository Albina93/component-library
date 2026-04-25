import "./App.css";
import { AlertBox } from "./components/AlertBox/AlertBox";
import { UserProfileCard } from "./components/UserProfileCard/UserProfileCard";

const user = {
  id: "1",
  name: "John Doe",
  email: "john.doe@example.com",
  role: "Software Engineer",
  avatarUrl: "http://bit.ly/4vN82zv",
};

function App() {
  return (
    <div className="app">
      <h1 className="title">My Component Library</h1>
      <AlertBox
        type="success"
        message="Your profile has been updated successfully!"
        onClose={() => alert("Alert closed")}
      />
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
    </div>
  );
}

export default App;
