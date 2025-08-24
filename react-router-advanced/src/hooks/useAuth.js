import { useState } from "react";

// Very basic simulated auth hook
export function useAuth() {

  const [isAuthenticated] = useState(false); // change to true to simulate logged in
  return { isAuthenticated };
}
