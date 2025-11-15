import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router";

const HomePage = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h1>Welcome to SnapGram!</h1>
    </div>
  );
};

export default HomePage;
