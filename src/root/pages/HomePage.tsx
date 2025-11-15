import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router";

const HomePage = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h1>Welcome to SnapGram!</h1>
      <Button onClick={() => navigate("/auth/sign-in")}>sign in</Button>
      <Button onClick={() => navigate("/auth/sign-up")}>sign up</Button>
    </div>
  );
};

export default HomePage;
