export async function loginUser(email, password) {
  if (!email.endsWith("@muj.manipal.edu")) {
    throw new Error("Invalid email");
  }

  return {
    name: email.split("@")[0].toUpperCase(),
    email,
    role: "STUDENT",
    regNo: "2427030358",
    section: "E"
  };
}
