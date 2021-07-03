import Auth from "./auth.js";
import { Errors, makeRequest } from "./authHelpers.js";

makeRequest("login", "POST", {
  password: "user1",
  email: "user1@email.com",
});
