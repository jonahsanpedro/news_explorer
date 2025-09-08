import { testUsers } from "./constants";

const simulateLogin = (email, password) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const user = testUsers.find(
        (u) => u.email === email && u.password === password
      );
      if (user) {
        resolve({ user });
      } else {
        reject("Invalid email or password");
      }
    }, 1000); // Simulate network delay
  });
};

const simulateRegistration = (email, password, username) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (testUsers.some((u) => u.email === email)) {
        reject("This email is not available");
      } else {
        const newUser = { email, password, username };
        testUsers.push(newUser);
        resolve({ user: newUser });
      }
    }, 1000); // Simulate network delay
  });
};

const simulateTokenCheck = (token) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (token === "fake-jwt-token-12345") {
        resolve({
          valid: true,
          user: {
            name: "John Doe",
            email: "john@example.com",
            username: "johndoe",
          },
        });
      } else {
        reject({ message: "Invalid token" });
      }
    }, 500);
  });
};

export { simulateLogin, simulateRegistration, simulateTokenCheck };
